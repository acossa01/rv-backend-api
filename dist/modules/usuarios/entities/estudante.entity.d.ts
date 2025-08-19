import { UserEntity } from './user.entity';
import { MedicoEntity } from './medico.entity';
export declare class EstudanteEntity extends UserEntity {
    matricula: string;
    instituicaoEnsino: string;
    curso: string;
    periodo: number;
    anoIngresso: number;
    previsaoConclusao?: Date;
    areasInteresse?: string[];
    notaMedia: number;
    horasEstudoCompletadas: number;
    simulacoesRealizadas: number;
    casosClinicosEstudados: number;
    nivelVR: string;
    orientador?: MedicoEntity;
    orientadorId?: string;
    ultimaSimulacao?: Date;
    ultimoCasoClinico?: Date;
}
