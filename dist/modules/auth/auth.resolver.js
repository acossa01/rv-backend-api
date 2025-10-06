"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("src/guards/gql-auth.guard");
const auth_decorator_1 = require("src/decorators/auth.decorator");
const auth_type_1 = require("./auth.type");
let AuthResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _login_decorators;
    let _registrar_decorators;
    let _renovarToken_decorators;
    let _solicitarRecuperacaoSenha_decorators;
    let _redefinirSenha_decorators;
    let _obterMeuPerfil_decorators;
    let _verificarToken_decorators;
    let _logout_decorators;
    var AuthResolver = _classThis = class {
        constructor(authService, usuariosService, blacklist) {
            this.authService = (__runInitializers(this, _instanceExtraInitializers), authService);
            this.usuariosService = usuariosService;
            this.blacklist = blacklist;
        }
        /**
         * Mutation: Login unificado para todos os tipos de usuários
         */
        async login(input, usuario) {
            return this.authService.login(usuario);
        }
        /**
         * Mutation: Registro de novo usuário
         */
        async registrar(input) {
            return this.authService.registrar(input, input.tipoUsuario);
        }
        /**
         * Mutation: Renovar token de acesso
         */
        async renovarToken(input) {
            return this.authService.renovarToken(input.refreshToken);
        }
        /**
         * Mutation: Solicitar recuperação de senha
         */
        async solicitarRecuperacaoSenha(input) {
            const resultado = await this.authService.solicitarRecuperacaoSenha(input.email);
            return resultado.message;
        }
        /**
         * Mutation: Redefinir senha usando token de recuperação
         */
        async redefinirSenha(input) {
            const resultado = await this.authService.redefinirSenha(input.token, input.novaSenha);
            return resultado.message;
        }
        /**
         * Query: Obter perfil do usuário logado
         */
        async obterMeuPerfil(usuario) {
            return this.usuariosService.obterPerfilCompleto(usuario.userID);
        }
        /**
         * Query: Verificar se token ainda é válido
         */
        async verificarToken(usuario) {
            // Se chegou até aqui, o token é válido
            return true;
        }
        /**
         * Mutation: Logout (invalidar token)
         */
        async logout(usuario, ctx) {
            const authHeader = ctx.req.headers['authorization'] || '';
            const token = authHeader.split(' ')[1];
            if (token) {
                await this.authService.logout(token);
            }
            return true;
        }
    };
    __setFunctionName(_classThis, "AuthResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _login_decorators = [(0, graphql_1.Mutation)(() => auth_type_1.LoginResponse, {
                description: 'Login unificado para usuários comum, estudantes e médicos'
            }), (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard)];
        _registrar_decorators = [(0, graphql_1.Mutation)(() => auth_type_1.LoginResponse, {
                description: 'Registrar novo usuário no sistema'
            })];
        _renovarToken_decorators = [(0, graphql_1.Mutation)(() => auth_type_1.LoginResponse, {
                description: 'Renovar token de acesso usando refresh token'
            })];
        _solicitarRecuperacaoSenha_decorators = [(0, graphql_1.Mutation)(() => String, {
                description: 'Solicitar recuperação de senha via email'
            })];
        _redefinirSenha_decorators = [(0, graphql_1.Mutation)(() => String, {
                description: 'Redefinir senha usando token de recuperação'
            })];
        _obterMeuPerfil_decorators = [(0, graphql_1.Query)(() => String, {
                name: 'meuPerfil',
                description: 'Obter perfil completo do usuário logado'
            }), (0, auth_decorator_1.Auth)()];
        _verificarToken_decorators = [(0, graphql_1.Query)(() => Boolean, {
                name: 'tokenValido',
                description: 'Verificar se o token de autenticação ainda é válido'
            }), (0, auth_decorator_1.Auth)()];
        _logout_decorators = [(0, graphql_1.Mutation)(() => Boolean, {
                description: 'Fazer logout do sistema'
            }), (0, auth_decorator_1.Auth)()];
        __esDecorate(_classThis, null, _login_decorators, { kind: "method", name: "login", static: false, private: false, access: { has: obj => "login" in obj, get: obj => obj.login }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _registrar_decorators, { kind: "method", name: "registrar", static: false, private: false, access: { has: obj => "registrar" in obj, get: obj => obj.registrar }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _renovarToken_decorators, { kind: "method", name: "renovarToken", static: false, private: false, access: { has: obj => "renovarToken" in obj, get: obj => obj.renovarToken }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _solicitarRecuperacaoSenha_decorators, { kind: "method", name: "solicitarRecuperacaoSenha", static: false, private: false, access: { has: obj => "solicitarRecuperacaoSenha" in obj, get: obj => obj.solicitarRecuperacaoSenha }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _redefinirSenha_decorators, { kind: "method", name: "redefinirSenha", static: false, private: false, access: { has: obj => "redefinirSenha" in obj, get: obj => obj.redefinirSenha }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterMeuPerfil_decorators, { kind: "method", name: "obterMeuPerfil", static: false, private: false, access: { has: obj => "obterMeuPerfil" in obj, get: obj => obj.obterMeuPerfil }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _verificarToken_decorators, { kind: "method", name: "verificarToken", static: false, private: false, access: { has: obj => "verificarToken" in obj, get: obj => obj.verificarToken }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _logout_decorators, { kind: "method", name: "logout", static: false, private: false, access: { has: obj => "logout" in obj, get: obj => obj.logout }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthResolver = _classThis;
})();
exports.AuthResolver = AuthResolver;
