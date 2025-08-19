import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import { UserEntity } from '../usuarios/entities/user.entity';
import { EmailService } from '../email/email.service';
import { BlacklistService } from '../blacklist/blacklist.service';
import config from 'config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usuariosService: UsuariosService,
    private emailService: EmailService,
    private blacklist: BlacklistService,
  ) {}

  /**
   * Validar credenciais unificadas para todos os tipos de usuários
   */
  async validarUsuario(email: string, senha: string): Promise<any> {
    const usuario = await this.usuariosService.validarCredenciais(email, senha);
    
    if (!usuario) {
      return null;
    }

    // Remover dados sensíveis antes de retornar
    const { senha: _, ...resultado } = usuario;
    return resultado;
  }

  /**
   * Gerar tokens de acesso e refresh
   */
  async login(usuario: UserEntity): Promise<any> {
    const payload = {
      email: usuario.email,
      sub: usuario.id,
      role: usuario.tipoUsuario,
      nomeCompleto: usuario.nomeCompleto,
    };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: {
        id: usuario.id,
        email: usuario.email,
        nomeCompleto: usuario.nomeCompleto,
        tipoUsuario: usuario.tipoUsuario,
        status: usuario.status,
      },
      ...payload,
    };
  }

  /**
   * Renovar token de acesso usando refresh token
   */
  async renovarToken(refreshToken: string): Promise<any> {
    try {
      const payload = this.jwtService.verify(refreshToken);
      
      // Buscar usuário atualizado
      const usuario = await this.usuariosService.findById(payload.sub);
      
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }

      return this.login(usuario);
    } catch (error) {
      throw new Error('Refresh token inválido');
    }
  }

  /**
   * Registrar novo usuário baseado no tipo
   */
  async registrar(dadosRegistro: any, tipoUsuario: string): Promise<any> {
    let novoUsuario: UserEntity;

    switch (tipoUsuario) {
      case 'USUARIO_COMUM':
        novoUsuario = await this.usuariosService.criarUsuarioComum(dadosRegistro);
        break;
      
      case 'MEDICO':
        novoUsuario = await this.usuariosService.criarMedico(dadosRegistro);
        break;
      
      case 'ESTUDANTE':
        novoUsuario = await this.usuariosService.criarEstudante(dadosRegistro);
        break;
      
      default:
        throw new Error('Tipo de usuário inválido');
    }

    return this.login(novoUsuario);
  }

  /**
   * Recuperação de senha via email
   */
  async solicitarRecuperacaoSenha(email: string): Promise<{ message: string }> {
    const usuario = await this.usuariosService.findByEmail(email);
    
    if (!usuario) {
      // Retornar sucesso mesmo se o usuário não existir por segurança
      return { message: 'Se o email existir, você receberá instruções de recuperação' };
    }

    // Gerar token temporário para recuperação
    const tokenRecuperacao = this.jwtService.sign(
      { email: usuario.email, sub: usuario.id, tipo: 'recuperacao' },
      { expiresIn: '30m' }
    );

    // Enviar email real
    const link = `${config.get<string>('app.frontendBaseUrl')}/redefinir-senha?token=${tokenRecuperacao}`;
    await this.emailService.sendMail(
      usuario.email,
      'Recuperação de Senha - VR Oftalmologia',
      `<p>Olá ${usuario.nomeCompleto},</p><p>Acesse o link abaixo para redefinir sua senha. O link é válido por 30 minutos.</p><p><a href="${link}">${link}</a></p>`
    );

    console.log(`Token de recuperação para ${email}: ${tokenRecuperacao}`);

    return { message: 'Se o email existir, você receberá instruções de recuperação' };
  }

  /**
   * Redefinir senha usando token de recuperação
   */
  async redefinirSenha(token: string, novaSenha: string): Promise<{ message: string }> {
    try {
      const payload = this.jwtService.verify(token);
      
      if (payload.tipo !== 'recuperacao') {
        throw new Error('Token inválido');
      }

      const usuario = await this.usuariosService.findById(payload.sub);
      
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }

      // TODO: Implementar atualização de senha no serviço de usuários
      // await this.usuariosService.atualizarSenha(usuario.id, novaSenha);

      return { message: 'Senha redefinida com sucesso' };
    } catch (error) {
      throw new Error('Token de recuperação inválido ou expirado');
    }
  }

  async logout(token: string): Promise<void> {
    // token é o access token atual
    const payload: any = this.jwtService.decode(token);
    const exp = new Date(payload.exp * 1000);
    await this.blacklist.add(token, exp);
  }
}
