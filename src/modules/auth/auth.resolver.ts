import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { Auth } from 'src/decorators/auth.decorator';
import { AuthService } from './auth.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { BlacklistService } from '../blacklist/blacklist.service';
import { 
  LoginInput, 
  LoginResponse, 
  RegistroInput, 
  RefreshTokenInput,
  RecuperacaoSenhaInput,
  RedefinirSenhaInput,
} from './auth.type';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService,
    private blacklist: BlacklistService,
  ) {}

  /**
   * Mutation: Login unificado para todos os tipos de usuários
   */
  @Mutation(() => LoginResponse, {
    description: 'Login unificado para usuários comum, estudantes e médicos'
  })
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('input') input: LoginInput,
    @CurrentUser() usuario: any
  ): Promise<LoginResponse> {
    return this.authService.login(usuario);
  }

  /**
   * Mutation: Registro de novo usuário
   */
  @Mutation(() => LoginResponse, {
    description: 'Registrar novo usuário no sistema'
  })
  async registrar(
    @Args('input') input: RegistroInput
  ): Promise<LoginResponse> {
    return this.authService.registrar(input, input.tipoUsuario);
  }

  /**
   * Mutation: Renovar token de acesso
   */
  @Mutation(() => LoginResponse, {
    description: 'Renovar token de acesso usando refresh token'
  })
  async renovarToken(
    @Args('input') input: RefreshTokenInput
  ): Promise<LoginResponse> {
    return this.authService.renovarToken(input.refreshToken);
  }

  /**
   * Mutation: Solicitar recuperação de senha
   */
  @Mutation(() => String, {
    description: 'Solicitar recuperação de senha via email'
  })
  async solicitarRecuperacaoSenha(
    @Args('input') input: RecuperacaoSenhaInput
  ): Promise<string> {
    const resultado = await this.authService.solicitarRecuperacaoSenha(input.email);
    return resultado.message;
  }

  /**
   * Mutation: Redefinir senha usando token de recuperação
   */
  @Mutation(() => String, {
    description: 'Redefinir senha usando token de recuperação'
  })
  async redefinirSenha(
    @Args('input') input: RedefinirSenhaInput
  ): Promise<string> {
    const resultado = await this.authService.redefinirSenha(input.token, input.novaSenha);
    return resultado.message;
  }

  /**
   * Query: Obter perfil do usuário logado
   */
  @Query(() => String, { // TODO: Criar tipo específico de retorno
    name: 'meuPerfil',
    description: 'Obter perfil completo do usuário logado'
  })
  @Auth()
  async obterMeuPerfil(@CurrentUser() usuario: any): Promise<any> {
    return this.usuariosService.obterPerfilCompleto(usuario.userID);
  }

  /**
   * Query: Verificar se token ainda é válido
   */
  @Query(() => Boolean, {
    name: 'tokenValido',
    description: 'Verificar se o token de autenticação ainda é válido'
  })
  @Auth()
  async verificarToken(@CurrentUser() usuario: any): Promise<boolean> {
    // Se chegou até aqui, o token é válido
    return true;
  }

  /**
   * Mutation: Logout (invalidar token)
   */
  @Mutation(() => Boolean, {
    description: 'Fazer logout do sistema'
  })
  @Auth()
  async logout(@CurrentUser() usuario: any, @Context() ctx: any): Promise<boolean> {
    const authHeader = ctx.req.headers['authorization'] || '';
    const token = authHeader.split(' ')[1];
    if (token) {
      await this.authService.logout(token);
    }
    return true;
  }
}
