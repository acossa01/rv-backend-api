import { AuthService } from './auth.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { BlacklistService } from '../blacklist/blacklist.service';
import { LoginInput, LoginResponse, RegistroInput, RefreshTokenInput, RecuperacaoSenhaInput, RedefinirSenhaInput } from './auth.type';
export declare class AuthResolver {
    private authService;
    private usuariosService;
    private blacklist;
    constructor(authService: AuthService, usuariosService: UsuariosService, blacklist: BlacklistService);
    login(input: LoginInput, usuario: any): Promise<LoginResponse>;
    registrar(input: RegistroInput): Promise<LoginResponse>;
    renovarToken(input: RefreshTokenInput): Promise<LoginResponse>;
    solicitarRecuperacaoSenha(input: RecuperacaoSenhaInput): Promise<string>;
    redefinirSenha(input: RedefinirSenhaInput): Promise<string>;
    obterMeuPerfil(usuario: any): Promise<any>;
    verificarToken(usuario: any): Promise<boolean>;
    logout(usuario: any, ctx: any): Promise<boolean>;
}
