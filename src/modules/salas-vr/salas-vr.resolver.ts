import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { SalasVRService } from './salas-vr.service';
import { SalaVREntity } from './entities/sala-vr.entity';
import { SessaoVREntity } from './entities/sessao-vr.entity';
import { TipoSala } from 'src/enums/tipo-sala.enum';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { Roles } from 'src/enums/role.enum';
import { JwtGuard } from 'src/guards/jwt.guard';
import { CriarSessaoVRInput, CriarSalaVRInput } from './dto/salas-vr.input';

@Resolver(() => SalaVREntity)
@UseGuards(JwtGuard)
export class SalasVRResolver {
  constructor(
    private readonly salasVRService: SalasVRService,
  ) {}

  /**
   * Query: Listar todas as salas disponíveis para o usuário
   */
  @Query(() => [SalaVREntity], {
    name: 'salasVRDisponiveis',
    description: 'Lista todas as salas VR disponíveis para o usuário logado'
  })
  @Auth()
  async obterSalasDisponiveis(@CurrentUser() user: any): Promise<SalaVREntity[]> {
    return this.salasVRService.obterSalasDisponiveis(user.role);
  }

  /**
   * Query: Listar salas por tipo específico
   */
  @Query(() => [SalaVREntity], {
    name: 'salasPorTipo',
    description: 'Lista salas VR filtradas por tipo específico'
  })
  @Auth()
  async obterSalasPorTipo(
    @Args('tipo', { type: () => TipoSala }) tipo: TipoSala,
    @CurrentUser() user: any
  ): Promise<SalaVREntity[]> {
    return this.salasVRService.obterSalasPorTipo(tipo, user.role);
  }

  /**
   * Query: Salas comuns (acessíveis a todos)
   */
  @Query(() => [SalaVREntity], {
    name: 'salasComuns',
    description: 'Lista salas comuns acessíveis a todos os usuários'
  })
  @Auth(Roles.USUARIO_COMUM, Roles.ESTUDANTE, Roles.MEDICO)
  async obterSalasComuns(@CurrentUser() user: any): Promise<SalaVREntity[]> {
    return this.salasVRService.obterSalasPorTipo(TipoSala.COMUM, user.role);
  }

  /**
   * Query: Salas técnicas (estudantes e médicos)
   */
  @Query(() => [SalaVREntity], {
    name: 'salasTecnicas',
    description: 'Lista salas técnicas (acesso para estudantes e médicos)'
  })
  @Auth(Roles.ESTUDANTE, Roles.MEDICO)
  async obterSalasTecnicas(@CurrentUser() user: any): Promise<SalaVREntity[]> {
    return this.salasVRService.obterSalasPorTipo(TipoSala.TECNICA, user.role);
  }

  /**
   * Query: Salas de cirurgia (apenas médicos)
   */
  @Query(() => [SalaVREntity], {
    name: 'salasCirurgia',
    description: 'Lista salas de cirurgia (acesso apenas para médicos)'
  })
  @Auth(Roles.MEDICO)
  async obterSalasCirurgia(@CurrentUser() user: any): Promise<SalaVREntity[]> {
    return this.salasVRService.obterSalasPorTipo(TipoSala.CIRURGIA, user.role);
  }

  /**
   * Query: Sessões VR ativas
   */
  @Query(() => [SessaoVREntity], {
    name: 'sessoesVRAtivas',
    description: 'Lista sessões de VR que estão em andamento'
  })
  @Auth()
  async obterSessoesAtivas(@CurrentUser() user: any): Promise<SessaoVREntity[]> {
    return this.salasVRService.obterSessoesAtivas(user.role);
  }

  /**
   * Mutation: Criar nova sessão VR
   */
  @Mutation(() => SessaoVREntity, {
    name: 'criarSessaoVR',
    description: 'Cria uma nova sessão de realidade virtual'
  })
  @Auth()
  async criarSessao(
    @Args('dados') dados: CriarSessaoVRInput,
    @CurrentUser() user: any
  ): Promise<SessaoVREntity> {
    return this.salasVRService.criarSessao(dados as any, user.userID, user.role);
  }

  /**
   * Mutation: Participar de sessão existente
   */
  @Mutation(() => SessaoVREntity, {
    name: 'participarSessaoVR',
    description: 'Participar de uma sessão VR existente'
  })
  @Auth()
  async participarSessao(
    @Args('sessaoId', { type: () => ID }) sessaoId: string,
    @CurrentUser() user: any
  ): Promise<SessaoVREntity> {
    return this.salasVRService.participarSessao(sessaoId, user.userID, user.role);
  }

  /**
   * Mutation: Finalizar sessão VR
   */
  @Mutation(() => SessaoVREntity, {
    name: 'finalizarSessaoVR',
    description: 'Finaliza uma sessão VR (apenas criador ou orientador)'
  })
  @Auth()
  async finalizarSessao(
    @Args('sessaoId', { type: () => ID }) sessaoId: string,
    @CurrentUser() user: any
  ): Promise<SessaoVREntity> {
    return this.salasVRService.finalizarSessao(sessaoId, user.userID, user.role);
  }

  /**
   * Mutation: Criar nova sala VR (apenas médicos)
   */
  @Mutation(() => SalaVREntity, {
    name: 'criarSalaVR',
    description: 'Cria uma nova sala de realidade virtual (apenas médicos)'
  })
  @Auth(Roles.MEDICO)
  async criarSala(
    @Args('dados') dados: CriarSalaVRInput,
    @CurrentUser() user: any
  ): Promise<SalaVREntity> {
    return this.salasVRService.criarSala(dados as any, user.role);
  }
}

@Resolver(() => SessaoVREntity)
export class SessoesVRResolver {
  // Resolver específico para sessões se necessário
} 