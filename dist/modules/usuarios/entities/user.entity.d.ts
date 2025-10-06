import { Roles } from '../../../enums/role.enum';
import { Status } from '../../../enums/status.entities';
export declare class UserEntity {
    id: string;
    nomeCompleto: string;
    email: string;
    senha: string;
    tipoUsuario: Roles;
    status: Status;
    dataCriacao: Date;
    dataAtualizacao: Date;
    telefone?: string;
    celular?: string;
    dataUltimoAcesso?: Date;
}
