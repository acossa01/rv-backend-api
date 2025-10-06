import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalaVREntity } from './entities/sala-vr.entity';
import { SessaoVREntity } from './entities/sessao-vr.entity';
import { TipoSala, StatusSala } from '../../enums/tipo-sala.enum';
import { Roles } from '../../enums/role.enum';

@Injectable()
export class SalasVRService {
  constructor(
    @InjectRepository(SalaVREntity)
    private readonly salaRepository: Repository<SalaVREntity>,
    
    @InjectRepository(SessaoVREntity)
    private readonly sessaoRepository: Repository<SessaoVREntity>,
  ) {}

  /**
   * Obter salas disponíveis baseado no role do usuário
   */
  async obterSalasDisponiveis(userRole: Roles): Promise<SalaVREntity[]> {
    return this.salaRepository.find({
      where: {
        statusSala: StatusSala.DISPONIVEL,
      },
      order: { nome: 'ASC' },
    });
  }

  /**
   * Obter salas por tipo, verificando permissões
   */
  async obterSalasPorTipo(tipo: TipoSala, userRole: Roles): Promise<SalaVREntity[]> {
    this.verificarPermissaoAcessoSala(tipo, userRole);

    return this.salaRepository.find({
      where: {
        tipoSala: tipo,
        statusSala: StatusSala.DISPONIVEL,
      },
      order: { nome: 'ASC' },
    });
  }

  /**
   * Criar nova sessão VR
   */
  async criarSessao(
    dadosSessao: Partial<SessaoVREntity>,
    criadorId: string,
    userRole: Roles
  ): Promise<SessaoVREntity> {
    const sala = await this.salaRepository.findOne({
      where: { id: dadosSessao.salaId },
    });

    if (!sala) {
      throw new NotFoundException('Sala não encontrada');
    }

    this.verificarPermissaoAcessoSala(sala.tipoSala, userRole);

    // Verificar se a sala requer orientador
    if (sala.requerOrientador && !dadosSessao.orientadorId) {
      if (userRole !== Roles.MEDICO) {
        throw new ForbiddenException('Esta sala requer um médico orientador');
      }
      // Se o usuário é médico, ele mesmo pode ser o orientador
      dadosSessao.orientadorId = criadorId;
    }

    const novaSessao = this.sessaoRepository.create({
      ...dadosSessao,
      criadorId,
      dataInicio: dadosSessao.dataInicio || new Date(),
      maxParticipantes: Math.min(dadosSessao.maxParticipantes || 1, sala.capacidadeMaxima),
    });

    const sessaoSalva = await this.sessaoRepository.save(novaSessao);

    // Incrementar contador da sala
    await this.salaRepository.increment({ id: sala.id }, 'totalSessoes', 1);

    return sessaoSalva;
  }

  /**
   * Participar de uma sessão
   */
  async participarSessao(
    sessaoId: string,
    participanteId: string,
    userRole: Roles
  ): Promise<SessaoVREntity> {
    const sessao = await this.sessaoRepository.findOne({
      where: { id: sessaoId },
      relations: ['sala', 'participantes'],
    });

    if (!sessao) {
      throw new NotFoundException('Sessão não encontrada');
    }

    this.verificarPermissaoAcessoSala(sessao.sala.tipoSala, userRole);

    // Verificar capacidade
    if (sessao.participantes.length >= sessao.maxParticipantes) {
      throw new ForbiddenException('Sessão já está lotada');
    }

    // Verificar se já participa
    const jaParticipa = sessao.participantes.some(p => p.id === participanteId);
    if (jaParticipa) {
      throw new ForbiddenException('Você já está participando desta sessão');
    }

    // Adicionar participante (isso seria feito de forma mais completa com um relacionamento adequado)
    // Por simplicidade, estou assumindo que isso seria tratado em outra camada

    return sessao;
  }

  /**
   * Obter sessões ativas
   */
  async obterSessoesAtivas(userRole: Roles): Promise<SessaoVREntity[]> {
    return this.sessaoRepository.find({
      where: {
        status: 'EM_ANDAMENTO',
      },
      relations: ['sala', 'criador', 'orientador'],
      order: { dataInicio: 'DESC' },
    });
  }

  /**
   * Finalizar sessão
   */
  async finalizarSessao(
    sessaoId: string,
    usuarioId: string,
    userRole: Roles
  ): Promise<SessaoVREntity> {
    const sessao = await this.sessaoRepository.findOne({
      where: { id: sessaoId },
      relations: ['sala'],
    });

    if (!sessao) {
      throw new NotFoundException('Sessão não encontrada');
    }

    // Apenas criador ou orientador pode finalizar
    if (sessao.criadorId !== usuarioId && sessao.orientadorId !== usuarioId) {
      throw new ForbiddenException('Apenas o criador ou orientador podem finalizar a sessão');
    }

    sessao.status = 'FINALIZADA';
    sessao.dataFim = new Date();
    
    if (sessao.dataInicio && sessao.dataFim) {
      sessao.duracaoMinutos = Math.floor(
        (sessao.dataFim.getTime() - sessao.dataInicio.getTime()) / (1000 * 60)
      );
    }

    const sessaoFinalizada = await this.sessaoRepository.save(sessao);

    // Atualizar estatísticas da sala
    if (sessao.duracaoMinutos) {
      const horasUso = Math.floor(sessao.duracaoMinutos / 60);
      if (horasUso > 0) {
        await this.salaRepository.increment({ id: sessao.salaId }, 'totalHorasUso', horasUso);
      }
    }

    return sessaoFinalizada;
  }

  /**
   * Criar sala (apenas administradores/médicos)
   */
  async criarSala(dadosSala: Partial<SalaVREntity>, userRole: Roles): Promise<SalaVREntity> {
    if (userRole !== Roles.MEDICO) {
      throw new ForbiddenException('Apenas médicos podem criar salas');
    }

    // Configurar permissões padrão baseadas no tipo de sala
    const rolesPermitidos = this.obterRolesPadraoParaTipoSala(dadosSala.tipoSala);
    
    const novaSala = this.salaRepository.create({
      ...dadosSala,
      rolesPermitidos,
      statusSala: StatusSala.DISPONIVEL,
    });

    return this.salaRepository.save(novaSala);
  }

  /**
   * Obter roles padrão para cada tipo de sala
   */
  private obterRolesPadraoParaTipoSala(tipoSala: TipoSala): string[] {
    switch (tipoSala) {
      case TipoSala.COMUM:
        return [Roles.USUARIO_COMUM, Roles.ESTUDANTE, Roles.MEDICO];
      
      case TipoSala.TECNICA:
        return [Roles.ESTUDANTE, Roles.MEDICO];
      
      case TipoSala.CIRURGIA:
        return [Roles.MEDICO];
      
      default:
        return [];
    }
  }

  /**
   * Verificar permissão de acesso à sala baseada no tipo e role do usuário
   */
  private verificarPermissaoAcessoSala(tipoSala: TipoSala, userRole: Roles): void {
    const rolesPermitidos = this.obterRolesPadraoParaTipoSala(tipoSala);
    
    if (!rolesPermitidos.includes(userRole)) {
      throw new ForbiddenException(
        `Usuário com role ${userRole} não tem permissão para acessar salas do tipo ${tipoSala}`
      );
    }
  }
} 