"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const email_service_1 = require("../email/email.service");
const blacklist_service_1 = require("../blacklist/blacklist.service");
const config_1 = __importDefault(require("config"));
let AuthService = class AuthService {
    constructor(jwtService, usuariosService, emailService, blacklist) {
        this.jwtService = jwtService;
        this.usuariosService = usuariosService;
        this.emailService = emailService;
        this.blacklist = blacklist;
    }
    async validarUsuario(email, senha) {
        const usuario = await this.usuariosService.validarCredenciais(email, senha);
        if (!usuario) {
            return null;
        }
        const { senha: _ } = usuario, resultado = __rest(usuario, ["senha"]);
        return resultado;
    }
    async login(usuario) {
        const payload = {
            email: usuario.email,
            sub: usuario.id,
            role: usuario.tipoUsuario,
            nomeCompleto: usuario.nomeCompleto,
        };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
        const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
        return Object.assign({ access_token: accessToken, refresh_token: refreshToken, user: {
                id: usuario.id,
                email: usuario.email,
                nomeCompleto: usuario.nomeCompleto,
                tipoUsuario: usuario.tipoUsuario,
                status: usuario.status,
            } }, payload);
    }
    async renovarToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken);
            const usuario = await this.usuariosService.findById(payload.sub);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            return this.login(usuario);
        }
        catch (error) {
            throw new Error('Refresh token inválido');
        }
    }
    async registrar(dadosRegistro, tipoUsuario) {
        let novoUsuario;
        switch (tipoUsuario) {
            case 'USUARIO_COMUM':
                novoUsuario = await this.usuariosService.criarUsuarioComum(dadosRegistro);
                break;
            case 'MEDICO':
                novoUsuario = await this.usuariosService.criarMedico(dadosRegistro);
                break;
            case 'ESTUDANTE':
                novoUsuario = await this.usuariosService.criarEstudante(dadosRegistro);
                break;
            default:
                throw new Error('Tipo de usuário inválido');
        }
        return this.login(novoUsuario);
    }
    async solicitarRecuperacaoSenha(email) {
        const usuario = await this.usuariosService.findByEmail(email);
        if (!usuario) {
            return { message: 'Se o email existir, você receberá instruções de recuperação' };
        }
        const tokenRecuperacao = this.jwtService.sign({ email: usuario.email, sub: usuario.id, tipo: 'recuperacao' }, { expiresIn: '30m' });
        const link = `${config_1.default.get('app.frontendBaseUrl')}/redefinir-senha?token=${tokenRecuperacao}`;
        await this.emailService.sendMail(usuario.email, 'Recuperação de Senha - VR Oftalmologia', `<p>Olá ${usuario.nomeCompleto},</p><p>Acesse o link abaixo para redefinir sua senha. O link é válido por 30 minutos.</p><p><a href="${link}">${link}</a></p>`);
        console.log(`Token de recuperação para ${email}: ${tokenRecuperacao}`);
        return { message: 'Se o email existir, você receberá instruções de recuperação' };
    }
    async redefinirSenha(token, novaSenha) {
        try {
            const payload = this.jwtService.verify(token);
            if (payload.tipo !== 'recuperacao') {
                throw new Error('Token inválido');
            }
            const usuario = await this.usuariosService.findById(payload.sub);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            return { message: 'Senha redefinida com sucesso' };
        }
        catch (error) {
            throw new Error('Token de recuperação inválido ou expirado');
        }
    }
    async logout(token) {
        const payload = this.jwtService.decode(token);
        const exp = new Date(payload.exp * 1000);
        await this.blacklist.add(token, exp);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        usuarios_service_1.UsuariosService,
        email_service_1.EmailService,
        blacklist_service_1.BlacklistService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map