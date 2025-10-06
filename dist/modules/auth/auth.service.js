"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = __importDefault(require("config"));
let AuthService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AuthService = _classThis = class {
        constructor(jwtService, usuariosService, emailService, blacklist) {
            this.jwtService = jwtService;
            this.usuariosService = usuariosService;
            this.emailService = emailService;
            this.blacklist = blacklist;
        }
        /**
         * Validar credenciais unificadas para todos os tipos de usuários
         */
        async validarUsuario(email, senha) {
            const usuario = await this.usuariosService.validarCredenciais(email, senha);
            if (!usuario) {
                return null;
            }
            // Remover dados sensíveis antes de retornar
            const { senha: _, ...resultado } = usuario;
            return resultado;
        }
        /**
         * Gerar tokens de acesso e refresh
         */
        async login(usuario) {
            const payload = {
                email: usuario.email,
                sub: usuario.id,
                role: usuario.tipoUsuario,
                nomeCompleto: usuario.nomeCompleto,
            };
            const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
            const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
            return {
                access_token: accessToken,
                refresh_token: refreshToken,
                user: {
                    id: usuario.id,
                    email: usuario.email,
                    nomeCompleto: usuario.nomeCompleto,
                    tipoUsuario: usuario.tipoUsuario,
                    status: usuario.status,
                },
                ...payload,
            };
        }
        /**
         * Renovar token de acesso usando refresh token
         */
        async renovarToken(refreshToken) {
            try {
                const payload = this.jwtService.verify(refreshToken);
                // Buscar usuário atualizado
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
        /**
         * Registrar novo usuário baseado no tipo
         */
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
        /**
         * Recuperação de senha via email
         */
        async solicitarRecuperacaoSenha(email) {
            const usuario = await this.usuariosService.findByEmail(email);
            if (!usuario) {
                // Retornar sucesso mesmo se o usuário não existir por segurança
                return { message: 'Se o email existir, você receberá instruções de recuperação' };
            }
            // Gerar token temporário para recuperação
            const tokenRecuperacao = this.jwtService.sign({ email: usuario.email, sub: usuario.id, tipo: 'recuperacao' }, { expiresIn: '30m' });
            // Enviar email real
            const link = `${config_1.default.get('app.frontendBaseUrl')}/redefinir-senha?token=${tokenRecuperacao}`;
            await this.emailService.sendMail(usuario.email, 'Recuperação de Senha - VR Oftalmologia', `<p>Olá ${usuario.nomeCompleto},</p><p>Acesse o link abaixo para redefinir sua senha. O link é válido por 30 minutos.</p><p><a href="${link}">${link}</a></p>`);
            console.log(`Token de recuperação para ${email}: ${tokenRecuperacao}`);
            return { message: 'Se o email existir, você receberá instruções de recuperação' };
        }
        /**
         * Redefinir senha usando token de recuperação
         */
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
                // TODO: Implementar atualização de senha no serviço de usuários
                // await this.usuariosService.atualizarSenha(usuario.id, novaSenha);
                return { message: 'Senha redefinida com sucesso' };
            }
            catch (error) {
                throw new Error('Token de recuperação inválido ou expirado');
            }
        }
        async logout(token) {
            // token é o access token atual
            const payload = this.jwtService.decode(token);
            const exp = new Date(payload.exp * 1000);
            await this.blacklist.add(token, exp);
        }
    };
    __setFunctionName(_classThis, "AuthService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthService = _classThis;
})();
exports.AuthService = AuthService;
