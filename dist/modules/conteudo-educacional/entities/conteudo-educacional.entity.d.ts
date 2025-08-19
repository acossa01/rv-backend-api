import { TipoConteudo } from 'src/enums/conteudo-educacional.enum';
import { Status } from 'src/enums/status.entities';
import { MedicoEntity } from 'src/modules/usuarios/entities/medico.entity';
export declare class ConteudoEducacionalEntity {
    id: string;
    titulo: string;
    descricao: string;
    tipoConteudo: TipoConteudo;
    conteudoDetalhado?: string;
    urlModeloVR?: string;
    urlTextura?: string;
    tagsVR?: string[];
    nivelDificuldade: string;
    duracaoEstimadaMinutos: number;
    dadosEspecificos?: any;
    versao: string;
    status: Status;
    totalVisualizacoes: number;
    avaliacaoMedia: number;
    totalAvaliacoes: number;
    autorMedico?: MedicoEntity;
    autorMedicoId?: string;
    dataCriacao: Date;
    dataAtualizacao: Date;
    dataPublicacao?: Date;
}
