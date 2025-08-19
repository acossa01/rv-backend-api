import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UserEntity } from './entities/user.entity';
import { UsuarioComumEntity } from './entities/usuario-comum.entity';
import { MedicoEntity } from './entities/medico.entity';
import { EstudanteEntity } from './entities/estudante.entity';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { Roles } from 'src/enums/role.enum';
import { JwtGuard } from 'src/guards/jwt.guard';

@Resolver(() => UserEntity)
@UseGuards(JwtGuard)
export class UsuariosResolver {
  constructor(
    private readonly usuariosService: UsuariosService,
  ) {}

  /**
   * Query: Obter perfil completo do usuário logado
   */
  @Query(() => UserEntity, {
    name: 'meuPerfilCompleto',
    description: 'Obtém o perfil completo do usuário logado com dados específicos do tipo'
  })
  @Auth()
  async obterMeuPerfilCompleto(@CurrentUser() user: any): Promise<UserEntity> {
    return this.usuariosService.obterPerfilCompleto(user.userID);
  }

  /**
   * Query: Buscar usuário por ID (apenas médicos podem buscar outros usuários)
   */
  @Query(() => UserEntity, {
    name: 'usuarioPorId',
    description: 'Buscar usuário por ID (apenas médicos)'
  })
  @Auth(Roles.MEDICO)
  async buscarUsuarioPorId(
    @Args('id', { type: () => ID }) id: string
  ): Promise<UserEntity> {
    return this.usuariosService.obterPerfilCompleto(id);
  }

  /**
   * Query: Listar usuários por tipo (apenas médicos)
   */
  @Query(() => [UserEntity], {
    name: 'usuariosPorTipo',
    description: 'Listar usuários filtrados por tipo (apenas médicos)'
  })
  @Auth(Roles.MEDICO)
  async listarUsuariosPorTipo(
    @Args('tipo', { type: () => Roles }) tipo: Roles
  ): Promise<UserEntity[]> {
    return this.usuariosService.listarUsuariosPorTipo(tipo);
  }

  /**
   * Query: Listar médicos orientadores (estudantes e médicos)
   */
  @Query(() => [MedicoEntity], {
    name: 'medicosOrientadores',
    description: 'Lista médicos disponíveis para orientação de estudantes'
  })
  @Auth(Roles.ESTUDANTE, Roles.MEDICO)
  async listarMedicosOrientadores(): Promise<MedicoEntity[]> {
    return this.usuariosService.buscarMedicosOrientadores();
  }

  /**
   * Query: Listar todos os usuários comuns (apenas médicos)
   */
  @Query(() => [UsuarioComumEntity], {
    name: 'usuariosComuns',
    description: 'Lista todos os usuários comuns (apenas médicos)'
  })
  @Auth(Roles.MEDICO)
  async listarUsuariosComuns(): Promise<UsuarioComumEntity[]> {
    return this.usuariosService.listarUsuariosPorTipo(Roles.USUARIO_COMUM) as Promise<UsuarioComumEntity[]>;
  }

  /**
   * Query: Listar estudantes (apenas médicos)
   */
  @Query(() => [EstudanteEntity], {
    name: 'estudantes',
    description: 'Lista todos os estudantes (apenas médicos)'
  })
  @Auth(Roles.MEDICO)
  async listarEstudantes(): Promise<EstudanteEntity[]> {
    return this.usuariosService.listarUsuariosPorTipo(Roles.ESTUDANTE) as Promise<EstudanteEntity[]>;
  }

  /**
   * Query: Listar médicos (apenas médicos)
   */
  @Query(() => [MedicoEntity], {
    name: 'medicos',
    description: 'Lista todos os médicos (apenas médicos)'
  })
  @Auth(Roles.MEDICO)
  async listarMedicos(): Promise<MedicoEntity[]> {
    return this.usuariosService.listarUsuariosPorTipo(Roles.MEDICO) as Promise<MedicoEntity[]>;
  }
} 