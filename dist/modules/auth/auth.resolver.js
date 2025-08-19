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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../../guards/gql-auth.guard");
const currentUser_decorator_1 = require("../../decorators/currentUser.decorator");
const auth_decorator_1 = require("../../decorators/auth.decorator");
const auth_service_1 = require("./auth.service");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const blacklist_service_1 = require("../blacklist/blacklist.service");
const auth_type_1 = require("./auth.type");
let AuthResolver = class AuthResolver {
    constructor(authService, usuariosService, blacklist) {
        this.authService = authService;
        this.usuariosService = usuariosService;
        this.blacklist = blacklist;
    }
    async login(input, usuario) {
        return this.authService.login(usuario);
    }
    async registrar(input) {
        return this.authService.registrar(input, input.tipoUsuario);
    }
    async renovarToken(input) {
        return this.authService.renovarToken(input.refreshToken);
    }
    async solicitarRecuperacaoSenha(input) {
        const resultado = await this.authService.solicitarRecuperacaoSenha(input.email);
        return resultado.message;
    }
    async redefinirSenha(input) {
        const resultado = await this.authService.redefinirSenha(input.token, input.novaSenha);
        return resultado.message;
    }
    async obterMeuPerfil(usuario) {
        return this.usuariosService.obterPerfilCompleto(usuario.userID);
    }
    async verificarToken(usuario) {
        return true;
    }
    async logout(usuario, ctx) {
        const authHeader = ctx.req.headers['authorization'] || '';
        const token = authHeader.split(' ')[1];
        if (token) {
            await this.authService.logout(token);
        }
        return true;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => auth_type_1.LoginResponse, {
        description: 'Login unificado para usuários comum, estudantes e médicos'
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_type_1.LoginInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_type_1.LoginResponse, {
        description: 'Registrar novo usuário no sistema'
    }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_type_1.RegistroInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "registrar", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_type_1.LoginResponse, {
        description: 'Renovar token de acesso usando refresh token'
    }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_type_1.RefreshTokenInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "renovarToken", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        description: 'Solicitar recuperação de senha via email'
    }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_type_1.RecuperacaoSenhaInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "solicitarRecuperacaoSenha", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        description: 'Redefinir senha usando token de recuperação'
    }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_type_1.RedefinirSenhaInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "redefinirSenha", null);
__decorate([
    (0, graphql_1.Query)(() => String, {
        name: 'meuPerfil',
        description: 'Obter perfil completo do usuário logado'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "obterMeuPerfil", null);
__decorate([
    (0, graphql_1.Query)(() => Boolean, {
        name: 'tokenValido',
        description: 'Verificar se o token de autenticação ainda é válido'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "verificarToken", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Fazer logout do sistema'
    }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "logout", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        usuarios_service_1.UsuariosService,
        blacklist_service_1.BlacklistService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map