import { UserEntity } from './user.entity';
import { EstudanteEntity } from './estudante.entity';
export declare class MedicoEntity extends UserEntity {
    crm: string;
    ufCrm?: string;
    especialidades: string[];
    anosExperiencia: number;
    instituicao?: string;
    biografia?: string;
    enderecoConsultorio?: string;
    cidadeConsultorio?: string;
    ufConsultorio?: string;
    podeCriarConteudo: boolean;
    ehProfessor: boolean;
    totalConteudosCriados: number;
    totalEstudantesOrientados: number;
    estudantesOrientados?: EstudanteEntity[];
}
