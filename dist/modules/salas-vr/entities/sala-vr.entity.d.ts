import { TipoSala, StatusSala } from 'src/enums/tipo-sala.enum';
import { SessaoVREntity } from './sessao-vr.entity';
export declare class SalaVREntity {
    id: string;
    nome: string;
    descricao?: string;
    tipoSala: TipoSala;
    statusSala: StatusSala;
    capacidadeMaxima: number;
    permiteMultiusuarios: boolean;
    requerOrientador: boolean;
    ambienteVR?: string;
    equipamentosDisponiveis?: string[];
    ferramentasVR?: string[];
    rolesPermitidos: string[];
    permiteInstrucaoIndividual: boolean;
    funcionaIndependente: boolean;
    totalSessoes: number;
    totalHorasUso: number;
    sessoes?: SessaoVREntity[];
    dataCriacao: Date;
    dataAtualizacao: Date;
    ultimaManutencao?: Date;
}
