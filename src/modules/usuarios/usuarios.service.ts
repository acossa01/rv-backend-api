import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UsuarioComumEntity } from './entities/usuario-comum.entity';
import { MedicoEntity } from './entities/medico.entity';
import { EstudanteEntity } from './entities/estudante.entity';
import { Roles } from '../../enums/role.enum';
import { Status } from '../../enums/status.entities';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    
    @InjectRepository(UsuarioComumEntity)
    private readonly usuarioComumRepository: Repository<UsuarioComumEntity>,
    
    @InjectRepository(MedicoEntity)
    private readonly medicoRepository: Repository<MedicoEntity>,
    
    @InjectRepository(EstudanteEntity)
    private readonly estudanteRepository: Repository<EstudanteEntity>,
  ) {}

  /**
   * Encontrar usuário por email para autenticação
   */
  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: { email, status: Status.ACTIVE },
    });
  }

  /**
   * Encontrar usuário por ID
   */
  async findById(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: { id, status: Status.ACTIVE },
    });
  }

  /**
   * Criar usuário comum
   */
  async criarUsuarioComum(dados: Partial<UsuarioComumEntity>): Promise<UsuarioComumEntity> {
    // Verificar se email já existe
    const existeEmail = await this.userRepository.findOne({
      where: { email: dados.email },
    });

    if (existeEmail) {
      throw new ConflictException('Email já está em uso');
    }

    // Hash da senha
    const senhaHash = await bcrypt.hash(dados.senha, 10);

    const novoUsuario = this.usuarioComumRepository.create({
      ...dados,
      senha: senhaHash,
      tipoUsuario: Roles.USUARIO_COMUM,
      status: Status.ACTIVE,
    });

    return this.usuarioComumRepository.save(novoUsuario);
  }

  /**
   * Criar médico
   */
  async criarMedico(dados: Partial<MedicoEntity>): Promise<MedicoEntity> {
    // Verificar se email já existe
    const existeEmail = await this.userRepository.findOne({
      where: { email: dados.email },
    });

    if (existeEmail) {
      throw new ConflictException('Email já está em uso');
    }

    // Verificar se CRM já existe
    const existeCRM = await this.medicoRepository.findOne({
      where: { crm: dados.crm },
    });

    if (existeCRM) {
      throw new ConflictException('CRM já está cadastrado');
    }

    // Hash da senha
    const senhaHash = await bcrypt.hash(dados.senha, 10);

    const novoMedico = this.medicoRepository.create({
      ...dados,
      senha: senhaHash,
      tipoUsuario: Roles.MEDICO,
      status: Status.ACTIVE,
    });

    return this.medicoRepository.save(novoMedico);
  }

  /**
   * Criar estudante
   */
  async criarEstudante(dados: Partial<EstudanteEntity>): Promise<EstudanteEntity> {
    // Verificar se email já existe
    const existeEmail = await this.userRepository.findOne({
      where: { email: dados.email },
    });

    if (existeEmail) {
      throw new ConflictException('Email já está em uso');
    }

    // Verificar se matrícula já existe
    const existeMatricula = await this.estudanteRepository.findOne({
      where: { matricula: dados.matricula },
    });

    if (existeMatricula) {
      throw new ConflictException('Matrícula já está cadastrada');
    }

    // Hash da senha
    const senhaHash = await bcrypt.hash(dados.senha, 10);

    const novoEstudante = this.estudanteRepository.create({
      ...dados,
      senha: senhaHash,
      tipoUsuario: Roles.ESTUDANTE,
      status: Status.ACTIVE,
    });

    return this.estudanteRepository.save(novoEstudante);
  }

  /**
   * Validar credenciais do usuário
   */
  async validarCredenciais(email: string, senha: string): Promise<UserEntity | null> {
    const usuario = await this.findByEmail(email);
    
    if (!usuario) {
      return null;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    
    if (!senhaValida) {
      return null;
    }

    // Atualizar último acesso
    await this.atualizarUltimoAcesso(usuario.id);

    // Retornar usuário sem a senha
    const { senha: _, ...usuarioSemSenha } = usuario;
    return usuarioSemSenha as UserEntity;
  }

  /**
   * Obter perfil completo do usuário baseado no tipo
   */
  async obterPerfilCompleto(userId: string): Promise<UserEntity> {
    const usuario = await this.findById(userId);
    
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    let perfilCompleto: UserEntity;

    switch (usuario.tipoUsuario) {
      case Roles.USUARIO_COMUM:
        perfilCompleto = await this.usuarioComumRepository.findOne({
          where: { id: userId },
        });
        break;
      
      case Roles.MEDICO:
        perfilCompleto = await this.medicoRepository.findOne({
          where: { id: userId },
          relations: ['estudantesOrientados'],
        });
        break;
      
      case Roles.ESTUDANTE:
        perfilCompleto = await this.estudanteRepository.findOne({
          where: { id: userId },
          relations: ['orientador'],
        });
        break;
      
      default:
        perfilCompleto = usuario;
    }

    if (!perfilCompleto) {
      throw new NotFoundException('Perfil não encontrado');
    }

    return perfilCompleto;
  }

  /**
   * Atualizar último acesso
   */
  async atualizarUltimoAcesso(userId: string): Promise<void> {
    await this.userRepository.update(userId, {
      dataUltimoAcesso: new Date(),
    });
  }

  /**
   * Alterar status do usuário
   */
  async alterarStatusUsuario(userId: string, novoStatus: Status): Promise<UserEntity> {
    const usuario = await this.findById(userId);
    
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.userRepository.update(userId, { status: novoStatus });
    
    return this.findById(userId);
  }

  /**
   * Listar usuários por tipo
   */
  async listarUsuariosPorTipo(tipo: Roles): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: { tipoUsuario: tipo, status: Status.ACTIVE },
      order: { nomeCompleto: 'ASC' },
    });
  }

  /**
   * Buscar médicos para orientação
   */
  async buscarMedicosOrientadores(): Promise<MedicoEntity[]> {
    return this.medicoRepository.find({
      where: { 
        status: Status.ACTIVE,
        ehProfessor: true,
      },
      order: { nomeCompleto: 'ASC' },
    });
  }
} 