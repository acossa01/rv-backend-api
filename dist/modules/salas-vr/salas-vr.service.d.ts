import { Repository } from 'typeorm';
import { SalaVREntity } from './entities/sala-vr.entity';
import { SessaoVREntity } from './entities/sessao-vr.entity';
import { TipoSala } from '../../enums/tipo-sala.enum';
import { Roles } from '../../enums/role.enum';
export declare class SalasVRService {
    private readonly salaRepository;
    private readonly sessaoRepository;
    constructor(salaRepository: Repository<SalaVREntity>, sessaoRepository: Repository<SessaoVREntity>);
    obterSalasDisponiveis(userRole: Roles): Promise<SalaVREntity[]>;
    obterSalasPorTipo(tipo: TipoSala, userRole: Roles): Promise<SalaVREntity[]>;
    criarSessao(dadosSessao: Partial<SessaoVREntity>, criadorId: string, userRole: Roles): Promise<SessaoVREntity>;
    participarSessao(sessaoId: string, participanteId: string, userRole: Roles): Promise<SessaoVREntity>;
    obterSessoesAtivas(userRole: Roles): Promise<SessaoVREntity[]>;
    finalizarSessao(sessaoId: string, usuarioId: string, userRole: Roles): Promise<SessaoVREntity>;
    criarSala(dadosSala: Partial<SalaVREntity>, userRole: Roles): Promise<SalaVREntity>;
    private obterRolesPadraoParaTipoSala;
    private verificarPermissaoAcessoSala;
}
