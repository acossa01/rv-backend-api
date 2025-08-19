import { Roles } from 'src/enums/role.enum';
import { Status } from 'src/enums/status.entities';
export declare class UsuarioResponse {
    id: string;
    email: string;
    nomeCompleto: string;
    tipoUsuario: Roles;
    status: Status;
}
export declare class LoginResponse {
    access_token: string;
    refresh_token: string;
    user: UsuarioResponse;
    email: string;
    sub: string;
    role: Roles;
    nomeCompleto: string;
}
export declare class LoginInput {
    email: string;
    senha: string;
}
export declare class RegistroInput {
    nomeCompleto: string;
    email: string;
    senha: string;
    tipoUsuario: Roles;
    telefone?: string;
    celular?: string;
    crm?: string;
    ufCrm?: string;
    especialidades?: string[];
    instituicao?: string;
    matricula?: string;
    instituicaoEnsino?: string;
    curso?: string;
    periodo?: number;
    endereco?: string;
    cidade?: string;
    uf?: string;
    cep?: string;
}
export declare class RefreshTokenInput {
    refreshToken: string;
}
export declare class RecuperacaoSenhaInput {
    email: string;
}
export declare class RedefinirSenhaInput {
    token: string;
    novaSenha: string;
}
export declare class Token {
    access_token: string;
    username: string;
    sub: string;
    role: Roles;
}
