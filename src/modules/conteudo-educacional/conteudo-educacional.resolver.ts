import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ConteudoEducacionalService } from './conteudo-educacional.service';
import { ConteudoEducacionalEntity } from './entities/conteudo-educacional.entity';
import { TipoConteudo } from '../../enums/conteudo-educacional.enum';
import { Auth } from '../../decorators/auth.decorator';
import { CurrentUser } from '../../decorators/currentUser.decorator';
import { Roles } from '../../enums/role.enum';
import { JwtGuard } from '../../guards/jwt.guard';
import { ConteudoEducacionalInput, AtualizarConteudoEducacionalInput } from './dto/conteudo-educacional.input';

@Resolver(() => ConteudoEducacionalEntity)
@UseGuards(JwtGuard)
export class ConteudoEducacionalResolver {
  constructor(
    private readonly conteudoService: ConteudoEducacionalService,
  ) {}

  /**
   * Query: Obter todos os conteúdos permitidos para o usuário
   */
  @Query(() => [ConteudoEducacionalEntity], {
    name: 'meuConteudoEducacional',
    description: 'Lista todos os conteúdos educacionais disponíveis para o usuário logado'
  })
  @Auth()
  async obterConteudosPermitidos(@CurrentUser() user: any): Promise<ConteudoEducacionalEntity[]> {
    return this.conteudoService.obterConteudosPermitidos(user.role);
  }

  /**
   * Query: Obter conteúdo específico por ID
   */
  @Query(() => ConteudoEducacionalEntity, {
    name: 'conteudoEducacionalPorId',
    description: 'Obtém um conteúdo específico por ID, verificando permissões'
  })
  @Auth()
  async obterConteudoPorId(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() user: any
  ): Promise<ConteudoEducacionalEntity> {
    return this.conteudoService.obterConteudoPorId(id, user.role);
  }

  /**
   * Query: Buscar conteúdos por tipo
   */
  @Query(() => [ConteudoEducacionalEntity], {
    name: 'conteudosPorTipo',
    description: 'Lista conteúdos filtrados por tipo específico'
  })
  @Auth()
  async buscarPorTipo(
    @Args('tipo', { type: () => TipoConteudo }) tipo: TipoConteudo,
    @CurrentUser() user: any
  ): Promise<ConteudoEducacionalEntity[]> {
    return this.conteudoService.buscarPorTipo(tipo, user.role);
  }

  /**
   * Query: Buscar conteúdos por nível de dificuldade
   */
  @Query(() => [ConteudoEducacionalEntity], {
    name: 'conteudosPorNivel',
    description: 'Lista conteúdos filtrados por nível de dificuldade'
  })
  @Auth()
  async buscarPorNivel(
    @Args('nivel', { type: () => String }) nivel: string,
    @CurrentUser() user: any
  ): Promise<ConteudoEducacionalEntity[]> {
    return this.conteudoService.buscarPorNivel(nivel, user.role);
  }

  /**
   * Query: Conteúdos gerais (para usuários comuns)
   */
  @Query(() => [ConteudoEducacionalEntity], {
    name: 'conteudosGeraisParaUsuarios',
    description: 'Lista específica de conteúdos gerais para usuários comuns'
  })
  @Auth(Roles.USUARIO_COMUM, Roles.ESTUDANTE, Roles.MEDICO)
  async obterConteudosGerais(@CurrentUser() user: any): Promise<ConteudoEducacionalEntity[]> {
    return this.conteudoService.buscarPorTipo(TipoConteudo.GERAL, user.role);
  }

  /**
   * Query: Conteúdos de aprendizado clínico (para estudantes e médicos)
   */
  @Query(() => [ConteudoEducacionalEntity], {
    name: 'conteudosAprendizadoClinico',
    description: 'Lista conteúdos de aprendizado clínico (estudantes e médicos apenas)'
  })
  @Auth(Roles.ESTUDANTE, Roles.MEDICO)
  async obterConteudosAprendizadoClinico(@CurrentUser() user: any): Promise<ConteudoEducacionalEntity[]> {
    return this.conteudoService.buscarPorTipo(TipoConteudo.APRENDIZADO_CLINICO, user.role);
  }

  /**
   * Query: Conteúdos de cirurgia (apenas médicos)
   */
  @Query(() => [ConteudoEducacionalEntity], {
    name: 'conteudosCirurgia',
    description: 'Lista conteúdos de cirurgia (apenas médicos)'
  })
  @Auth(Roles.MEDICO)
  async obterConteudosCirurgia(@CurrentUser() user: any): Promise<ConteudoEducacionalEntity[]> {
    return this.conteudoService.buscarPorTipo(TipoConteudo.CIRURGIA, user.role);
  }

  /**
   * Mutation: Criar novo conteúdo (apenas médicos)
   */
  @Mutation(() => ConteudoEducacionalEntity, {
    name: 'criarConteudoEducacional',
    description: 'Cria um novo conteúdo educacional (apenas médicos)'
  })
  @Auth(Roles.MEDICO)
  async criarConteudo(
    @Args('dados') dados: ConteudoEducacionalInput,
    @CurrentUser() user: any
  ): Promise<ConteudoEducacionalEntity> {
    const payload: any = { ...dados };
    if (typeof payload.dadosEspecificos === 'string') {
      try {
        payload.dadosEspecificos = JSON.parse(payload.dadosEspecificos);
      } catch {}
    }
    return this.conteudoService.criarConteudo(payload, user.userID, user.role);
  }

  /**
   * Mutation: Atualizar conteúdo existente (apenas autor)
   */
  @Mutation(() => ConteudoEducacionalEntity, {
    name: 'atualizarConteudoEducacional',
    description: 'Atualiza conteúdo existente (apenas o autor médico)'
  })
  @Auth(Roles.MEDICO)
  async atualizarConteudo(
    @Args('id', { type: () => ID }) id: string,
    @Args('dados') dados: AtualizarConteudoEducacionalInput,
    @CurrentUser() user: any
  ): Promise<ConteudoEducacionalEntity> {
    const payload: any = { ...dados };
    if (typeof payload.dadosEspecificos === 'string') {
      try {
        payload.dadosEspecificos = JSON.parse(payload.dadosEspecificos);
      } catch {}
    }
    return this.conteudoService.atualizarConteudo(id, payload, user.userID, user.role);
  }

  /**
   * Mutation: Avaliar conteúdo
   */
  @Mutation(() => ConteudoEducacionalEntity, {
    name: 'avaliarConteudo',
    description: 'Avaliar um conteúdo educacional (nota de 1 a 5)'
  })
  @Auth()
  async avaliarConteudo(
    @Args('id', { type: () => ID }) id: string,
    @Args('nota', { type: () => Number }) nota: number,
    @CurrentUser() user: any
  ): Promise<ConteudoEducacionalEntity> {
    if (nota < 1 || nota > 5) {
      throw new Error('A nota deve estar entre 1 e 5');
    }
    return this.conteudoService.avaliarConteudo(id, nota, user.role);
  }
} 