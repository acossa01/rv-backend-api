import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import { UserEntity } from '../usuarios/entities/user.entity';
import { EmailService } from '../email/email.service';
import { BlacklistService } from '../blacklist/blacklist.service';
export declare class AuthService {
    private jwtService;
    private usuariosService;
    private emailService;
    private blacklist;
    constructor(jwtService: JwtService, usuariosService: UsuariosService, emailService: EmailService, blacklist: BlacklistService);
    validarUsuario(email: string, senha: string): Promise<any>;
    login(usuario: UserEntity): Promise<any>;
    renovarToken(refreshToken: string): Promise<any>;
    registrar(dadosRegistro: any, tipoUsuario: string): Promise<any>;
    solicitarRecuperacaoSenha(email: string): Promise<{
        message: string;
    }>;
    redefinirSenha(token: string, novaSenha: string): Promise<{
        message: string;
    }>;
    logout(token: string): Promise<void>;
}
