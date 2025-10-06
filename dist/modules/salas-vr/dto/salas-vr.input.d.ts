import { TipoSala } from '../../../enums/tipo-sala.enum';
export declare class CriarSessaoVRInput {
    salaId: string;
    orientadorId?: string;
    maxParticipantes?: number;
    dataInicio?: Date;
}
export declare class CriarSalaVRInput {
    nome: string;
    tipoSala: TipoSala;
    capacidadeMaxima: number;
    rolesPermitidos?: string[];
    descricao?: string;
}
