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
exports.ConteudoEducacionalResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const conteudo_educacional_entity_1 = require("./entities/conteudo-educacional.entity");
const conteudo_educacional_enum_1 = require("../../enums/conteudo-educacional.enum");
const auth_decorator_1 = require("../../decorators/auth.decorator");
const role_enum_1 = require("../../enums/role.enum");
const jwt_guard_1 = require("../../guards/jwt.guard");
let ConteudoEducacionalResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity), (0, common_1.UseGuards)(jwt_guard_1.JwtGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _obterConteudosPermitidos_decorators;
    let _obterConteudoPorId_decorators;
    let _buscarPorTipo_decorators;
    let _buscarPorNivel_decorators;
    let _obterConteudosGerais_decorators;
    let _obterConteudosAprendizadoClinico_decorators;
    let _obterConteudosCirurgia_decorators;
    let _criarConteudo_decorators;
    let _atualizarConteudo_decorators;
    let _avaliarConteudo_decorators;
    var ConteudoEducacionalResolver = _classThis = class {
        constructor(conteudoService) {
            this.conteudoService = (__runInitializers(this, _instanceExtraInitializers), conteudoService);
        }
        /**
         * Query: Obter todos os conteúdos permitidos para o usuário
         */
        async obterConteudosPermitidos(user) {
            return this.conteudoService.obterConteudosPermitidos(user.role);
        }
        /**
         * Query: Obter conteúdo específico por ID
         */
        async obterConteudoPorId(id, user) {
            return this.conteudoService.obterConteudoPorId(id, user.role);
        }
        /**
         * Query: Buscar conteúdos por tipo
         */
        async buscarPorTipo(tipo, user) {
            return this.conteudoService.buscarPorTipo(tipo, user.role);
        }
        /**
         * Query: Buscar conteúdos por nível de dificuldade
         */
        async buscarPorNivel(nivel, user) {
            return this.conteudoService.buscarPorNivel(nivel, user.role);
        }
        /**
         * Query: Conteúdos gerais (para usuários comuns)
         */
        async obterConteudosGerais(user) {
            return this.conteudoService.buscarPorTipo(conteudo_educacional_enum_1.TipoConteudo.GERAL, user.role);
        }
        /**
         * Query: Conteúdos de aprendizado clínico (para estudantes e médicos)
         */
        async obterConteudosAprendizadoClinico(user) {
            return this.conteudoService.buscarPorTipo(conteudo_educacional_enum_1.TipoConteudo.APRENDIZADO_CLINICO, user.role);
        }
        /**
         * Query: Conteúdos de cirurgia (apenas médicos)
         */
        async obterConteudosCirurgia(user) {
            return this.conteudoService.buscarPorTipo(conteudo_educacional_enum_1.TipoConteudo.CIRURGIA, user.role);
        }
        /**
         * Mutation: Criar novo conteúdo (apenas médicos)
         */
        async criarConteudo(dados, user) {
            const payload = { ...dados };
            if (typeof payload.dadosEspecificos === 'string') {
                try {
                    payload.dadosEspecificos = JSON.parse(payload.dadosEspecificos);
                }
                catch { }
            }
            return this.conteudoService.criarConteudo(payload, user.userID, user.role);
        }
        /**
         * Mutation: Atualizar conteúdo existente (apenas autor)
         */
        async atualizarConteudo(id, dados, user) {
            const payload = { ...dados };
            if (typeof payload.dadosEspecificos === 'string') {
                try {
                    payload.dadosEspecificos = JSON.parse(payload.dadosEspecificos);
                }
                catch { }
            }
            return this.conteudoService.atualizarConteudo(id, payload, user.userID, user.role);
        }
        /**
         * Mutation: Avaliar conteúdo
         */
        async avaliarConteudo(id, nota, user) {
            if (nota < 1 || nota > 5) {
                throw new Error('A nota deve estar entre 1 e 5');
            }
            return this.conteudoService.avaliarConteudo(id, nota, user.role);
        }
    };
    __setFunctionName(_classThis, "ConteudoEducacionalResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _obterConteudosPermitidos_decorators = [(0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
                name: 'meuConteudoEducacional',
                description: 'Lista todos os conteúdos educacionais disponíveis para o usuário logado'
            }), (0, auth_decorator_1.Auth)()];
        _obterConteudoPorId_decorators = [(0, graphql_1.Query)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity, {
                name: 'conteudoEducacionalPorId',
                description: 'Obtém um conteúdo específico por ID, verificando permissões'
            }), (0, auth_decorator_1.Auth)()];
        _buscarPorTipo_decorators = [(0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
                name: 'conteudosPorTipo',
                description: 'Lista conteúdos filtrados por tipo específico'
            }), (0, auth_decorator_1.Auth)()];
        _buscarPorNivel_decorators = [(0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
                name: 'conteudosPorNivel',
                description: 'Lista conteúdos filtrados por nível de dificuldade'
            }), (0, auth_decorator_1.Auth)()];
        _obterConteudosGerais_decorators = [(0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
                name: 'conteudosGeraisParaUsuarios',
                description: 'Lista específica de conteúdos gerais para usuários comuns'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.USUARIO_COMUM, role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO)];
        _obterConteudosAprendizadoClinico_decorators = [(0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
                name: 'conteudosAprendizadoClinico',
                description: 'Lista conteúdos de aprendizado clínico (estudantes e médicos apenas)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO)];
        _obterConteudosCirurgia_decorators = [(0, graphql_1.Query)(() => [conteudo_educacional_entity_1.ConteudoEducacionalEntity], {
                name: 'conteudosCirurgia',
                description: 'Lista conteúdos de cirurgia (apenas médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        _criarConteudo_decorators = [(0, graphql_1.Mutation)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity, {
                name: 'criarConteudoEducacional',
                description: 'Cria um novo conteúdo educacional (apenas médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        _atualizarConteudo_decorators = [(0, graphql_1.Mutation)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity, {
                name: 'atualizarConteudoEducacional',
                description: 'Atualiza conteúdo existente (apenas o autor médico)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        _avaliarConteudo_decorators = [(0, graphql_1.Mutation)(() => conteudo_educacional_entity_1.ConteudoEducacionalEntity, {
                name: 'avaliarConteudo',
                description: 'Avaliar um conteúdo educacional (nota de 1 a 5)'
            }), (0, auth_decorator_1.Auth)()];
        __esDecorate(_classThis, null, _obterConteudosPermitidos_decorators, { kind: "method", name: "obterConteudosPermitidos", static: false, private: false, access: { has: obj => "obterConteudosPermitidos" in obj, get: obj => obj.obterConteudosPermitidos }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterConteudoPorId_decorators, { kind: "method", name: "obterConteudoPorId", static: false, private: false, access: { has: obj => "obterConteudoPorId" in obj, get: obj => obj.obterConteudoPorId }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _buscarPorTipo_decorators, { kind: "method", name: "buscarPorTipo", static: false, private: false, access: { has: obj => "buscarPorTipo" in obj, get: obj => obj.buscarPorTipo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _buscarPorNivel_decorators, { kind: "method", name: "buscarPorNivel", static: false, private: false, access: { has: obj => "buscarPorNivel" in obj, get: obj => obj.buscarPorNivel }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterConteudosGerais_decorators, { kind: "method", name: "obterConteudosGerais", static: false, private: false, access: { has: obj => "obterConteudosGerais" in obj, get: obj => obj.obterConteudosGerais }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterConteudosAprendizadoClinico_decorators, { kind: "method", name: "obterConteudosAprendizadoClinico", static: false, private: false, access: { has: obj => "obterConteudosAprendizadoClinico" in obj, get: obj => obj.obterConteudosAprendizadoClinico }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterConteudosCirurgia_decorators, { kind: "method", name: "obterConteudosCirurgia", static: false, private: false, access: { has: obj => "obterConteudosCirurgia" in obj, get: obj => obj.obterConteudosCirurgia }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _criarConteudo_decorators, { kind: "method", name: "criarConteudo", static: false, private: false, access: { has: obj => "criarConteudo" in obj, get: obj => obj.criarConteudo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _atualizarConteudo_decorators, { kind: "method", name: "atualizarConteudo", static: false, private: false, access: { has: obj => "atualizarConteudo" in obj, get: obj => obj.atualizarConteudo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _avaliarConteudo_decorators, { kind: "method", name: "avaliarConteudo", static: false, private: false, access: { has: obj => "avaliarConteudo" in obj, get: obj => obj.avaliarConteudo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ConteudoEducacionalResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ConteudoEducacionalResolver = _classThis;
})();
exports.ConteudoEducacionalResolver = ConteudoEducacionalResolver;
