import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConteudoEducacionalEntity } from './entities/conteudo-educacional.entity';
import { TipoConteudo } from '../../enums/conteudo-educacional.enum';
import { Roles } from 'src/enums/role.enum';
import { Status } from 'src/enums/status.entities';

@Injectable()
export class ConteudoEducacionalService {
  constructor(
    @InjectRepository(ConteudoEducacionalEntity)
    private readonly conteudoRepository: Repository<ConteudoEducacionalEntity>,
  ) {}

  /**
   * Obter conteúdos permitidos baseado no role do usuário
   */
  async obterConteudosPermitidos(userRole: Roles): Promise<ConteudoEducacionalEntity[]> {
    const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);
    
    return this.conteudoRepository.find({
      where: {
        tipoConteudo: tiposPermitidos.length === 1 ? tiposPermitidos[0] : undefined,
        status: Status.ACTIVE,
      },
      relations: ['autorMedico'],
      order: { dataCriacao: 'DESC' },
    });
  }

  /**
   * Obter conteúdo específico por ID, verificando permissões
   */
  async obterConteudoPorId(id: string, userRole: Roles): Promise<ConteudoEducacionalEntity> {
    const conteudo = await this.conteudoRepository.findOne({
      where: { id, status: Status.ACTIVE },
      relations: ['autorMedico'],
    });

    if (!conteudo) {
      throw new NotFoundException('Conteúdo não encontrado');
    }

    this.verificarPermissaoAcesso(conteudo.tipoConteudo, userRole);

    // Incrementar visualizações
    await this.incrementarVisualizacao(id);

    return conteudo;
  }

  /**
   * Buscar conteúdos por tipo específico
   */
  async buscarPorTipo(tipo: TipoConteudo, userRole: Roles): Promise<ConteudoEducacionalEntity[]> {
    this.verificarPermissaoAcesso(tipo, userRole);

    return this.conteudoRepository.find({
      where: {
        tipoConteudo: tipo,
        status: Status.ACTIVE,
      },
      relations: ['autorMedico'],
      order: { avaliacaoMedia: 'DESC', totalVisualizacoes: 'DESC' },
    });
  }

  /**
   * Buscar conteúdos por nível de dificuldade
   */
  async buscarPorNivel(nivel: string, userRole: Roles): Promise<ConteudoEducacionalEntity[]> {
    const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);

    return this.conteudoRepository.find({
      where: {
        nivelDificuldade: nivel,
        status: Status.ACTIVE,
        tipoConteudo: tiposPermitidos.length === 1 ? tiposPermitidos[0] : undefined,
      },
      relations: ['autorMedico'],
      order: { avaliacaoMedia: 'DESC' },
    });
  }

  /**
   * Criar novo conteúdo (apenas médicos)
   */
  async criarConteudo(
    dadosConteudo: Partial<ConteudoEducacionalEntity>,
    autorId: string,
    userRole: Roles
  ): Promise<ConteudoEducacionalEntity> {
    if (userRole !== Roles.MEDICO) {
      throw new ForbiddenException('Apenas médicos podem criar conteúdo');
    }

    const novoConteudo = this.conteudoRepository.create({
      ...dadosConteudo,
      autorMedicoId: autorId,
      dataPublicacao: new Date(),
    });

    return this.conteudoRepository.save(novoConteudo);
  }

  /**
   * Atualizar conteúdo existente
   */
  async atualizarConteudo(
    id: string,
    dadosAtualizacao: Partial<ConteudoEducacionalEntity>,
    userId: string,
    userRole: Roles
  ): Promise<ConteudoEducacionalEntity> {
    if (userRole !== Roles.MEDICO) {
      throw new ForbiddenException('Apenas médicos podem atualizar conteúdo');
    }

    const conteudo = await this.conteudoRepository.findOne({
      where: { id },
      relations: ['autorMedico'],
    });

    if (!conteudo) {
      throw new NotFoundException('Conteúdo não encontrado');
    }

    // Verificar se o médico é o autor do conteúdo
    if (conteudo.autorMedicoId !== userId) {
      throw new ForbiddenException('Você só pode atualizar seus próprios conteúdos');
    }

    Object.assign(conteudo, dadosAtualizacao);
    return this.conteudoRepository.save(conteudo);
  }

  /**
   * Avaliar conteúdo
   */
  async avaliarConteudo(id: string, nota: number, userRole: Roles): Promise<ConteudoEducacionalEntity> {
    const conteudo = await this.obterConteudoPorId(id, userRole);

    // Calcular nova média
    const totalAvaliacoes = conteudo.totalAvaliacoes + 1;
    const novaMedia = ((conteudo.avaliacaoMedia * conteudo.totalAvaliacoes) + nota) / totalAvaliacoes;

    conteudo.avaliacaoMedia = Number(novaMedia.toFixed(2));
    conteudo.totalAvaliacoes = totalAvaliacoes;

    return this.conteudoRepository.save(conteudo);
  }

  /**
   * Incrementar contador de visualizações
   */
  private async incrementarVisualizacao(id: string): Promise<void> {
    await this.conteudoRepository.increment({ id }, 'totalVisualizacoes', 1);
  }

  /**
   * Obter tipos de conteúdo permitidos por role
   */
  private obterTiposPermitidosPorRole(role: Roles): TipoConteudo[] {
    switch (role) {
      case Roles.USUARIO_COMUM:
        return [TipoConteudo.GERAL];
      
      case Roles.ESTUDANTE:
        return [TipoConteudo.GERAL, TipoConteudo.APRENDIZADO_CLINICO];
      
      case Roles.MEDICO:
        return [TipoConteudo.GERAL, TipoConteudo.APRENDIZADO_CLINICO, TipoConteudo.CIRURGIA];
      
      default:
        return [];
    }
  }

  /**
   * Verificar se o usuário tem permissão para acessar um tipo de conteúdo
   */
  private verificarPermissaoAcesso(tipoConteudo: TipoConteudo, userRole: Roles): void {
    const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);
    
    if (!tiposPermitidos.includes(tipoConteudo)) {
      throw new ForbiddenException(
        `Usuário com role ${userRole} não tem permissão para acessar conteúdo do tipo ${tipoConteudo}`
      );
    }
  }
} 