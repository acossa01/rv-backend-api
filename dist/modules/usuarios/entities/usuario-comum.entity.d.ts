import { UserEntity } from './user.entity';
export declare class UsuarioComumEntity extends UserEntity {
    historicoMedico?: string;
    alergias?: string[];
    medicamentosUso?: string[];
    endereco?: string;
    cidade?: string;
    uf?: string;
    cep?: string;
    totalConteudosVisualizados: number;
    ultimoConteudoVisualizado?: Date;
}
