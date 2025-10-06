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
exports.SessoesVRResolver = exports.SalasVRResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const sala_vr_entity_1 = require("./entities/sala-vr.entity");
const sessao_vr_entity_1 = require("./entities/sessao-vr.entity");
const tipo_sala_enum_1 = require("../../enums/tipo-sala.enum");
const auth_decorator_1 = require("../../decorators/auth.decorator");
const role_enum_1 = require("../../enums/role.enum");
const jwt_guard_1 = require("../../guards/jwt.guard");
let SalasVRResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)(() => sala_vr_entity_1.SalaVREntity), (0, common_1.UseGuards)(jwt_guard_1.JwtGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _obterSalasDisponiveis_decorators;
    let _obterSalasPorTipo_decorators;
    let _obterSalasComuns_decorators;
    let _obterSalasTecnicas_decorators;
    let _obterSalasCirurgia_decorators;
    let _obterSessoesAtivas_decorators;
    let _criarSessao_decorators;
    let _participarSessao_decorators;
    let _finalizarSessao_decorators;
    let _criarSala_decorators;
    var SalasVRResolver = _classThis = class {
        constructor(salasVRService) {
            this.salasVRService = (__runInitializers(this, _instanceExtraInitializers), salasVRService);
        }
        /**
         * Query: Listar todas as salas disponíveis para o usuário
         */
        async obterSalasDisponiveis(user) {
            return this.salasVRService.obterSalasDisponiveis(user.role);
        }
        /**
         * Query: Listar salas por tipo específico
         */
        async obterSalasPorTipo(tipo, user) {
            return this.salasVRService.obterSalasPorTipo(tipo, user.role);
        }
        /**
         * Query: Salas comuns (acessíveis a todos)
         */
        async obterSalasComuns(user) {
            return this.salasVRService.obterSalasPorTipo(tipo_sala_enum_1.TipoSala.COMUM, user.role);
        }
        /**
         * Query: Salas técnicas (estudantes e médicos)
         */
        async obterSalasTecnicas(user) {
            return this.salasVRService.obterSalasPorTipo(tipo_sala_enum_1.TipoSala.TECNICA, user.role);
        }
        /**
         * Query: Salas de cirurgia (apenas médicos)
         */
        async obterSalasCirurgia(user) {
            return this.salasVRService.obterSalasPorTipo(tipo_sala_enum_1.TipoSala.CIRURGIA, user.role);
        }
        /**
         * Query: Sessões VR ativas
         */
        async obterSessoesAtivas(user) {
            return this.salasVRService.obterSessoesAtivas(user.role);
        }
        /**
         * Mutation: Criar nova sessão VR
         */
        async criarSessao(dados, user) {
            return this.salasVRService.criarSessao(dados, user.userID, user.role);
        }
        /**
         * Mutation: Participar de sessão existente
         */
        async participarSessao(sessaoId, user) {
            return this.salasVRService.participarSessao(sessaoId, user.userID, user.role);
        }
        /**
         * Mutation: Finalizar sessão VR
         */
        async finalizarSessao(sessaoId, user) {
            return this.salasVRService.finalizarSessao(sessaoId, user.userID, user.role);
        }
        /**
         * Mutation: Criar nova sala VR (apenas médicos)
         */
        async criarSala(dados, user) {
            return this.salasVRService.criarSala(dados, user.role);
        }
    };
    __setFunctionName(_classThis, "SalasVRResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _obterSalasDisponiveis_decorators = [(0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
                name: 'salasVRDisponiveis',
                description: 'Lista todas as salas VR disponíveis para o usuário logado'
            }), (0, auth_decorator_1.Auth)()];
        _obterSalasPorTipo_decorators = [(0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
                name: 'salasPorTipo',
                description: 'Lista salas VR filtradas por tipo específico'
            }), (0, auth_decorator_1.Auth)()];
        _obterSalasComuns_decorators = [(0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
                name: 'salasComuns',
                description: 'Lista salas comuns acessíveis a todos os usuários'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.USUARIO_COMUM, role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO)];
        _obterSalasTecnicas_decorators = [(0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
                name: 'salasTecnicas',
                description: 'Lista salas técnicas (acesso para estudantes e médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO)];
        _obterSalasCirurgia_decorators = [(0, graphql_1.Query)(() => [sala_vr_entity_1.SalaVREntity], {
                name: 'salasCirurgia',
                description: 'Lista salas de cirurgia (acesso apenas para médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        _obterSessoesAtivas_decorators = [(0, graphql_1.Query)(() => [sessao_vr_entity_1.SessaoVREntity], {
                name: 'sessoesVRAtivas',
                description: 'Lista sessões de VR que estão em andamento'
            }), (0, auth_decorator_1.Auth)()];
        _criarSessao_decorators = [(0, graphql_1.Mutation)(() => sessao_vr_entity_1.SessaoVREntity, {
                name: 'criarSessaoVR',
                description: 'Cria uma nova sessão de realidade virtual'
            }), (0, auth_decorator_1.Auth)()];
        _participarSessao_decorators = [(0, graphql_1.Mutation)(() => sessao_vr_entity_1.SessaoVREntity, {
                name: 'participarSessaoVR',
                description: 'Participar de uma sessão VR existente'
            }), (0, auth_decorator_1.Auth)()];
        _finalizarSessao_decorators = [(0, graphql_1.Mutation)(() => sessao_vr_entity_1.SessaoVREntity, {
                name: 'finalizarSessaoVR',
                description: 'Finaliza uma sessão VR (apenas criador ou orientador)'
            }), (0, auth_decorator_1.Auth)()];
        _criarSala_decorators = [(0, graphql_1.Mutation)(() => sala_vr_entity_1.SalaVREntity, {
                name: 'criarSalaVR',
                description: 'Cria uma nova sala de realidade virtual (apenas médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        __esDecorate(_classThis, null, _obterSalasDisponiveis_decorators, { kind: "method", name: "obterSalasDisponiveis", static: false, private: false, access: { has: obj => "obterSalasDisponiveis" in obj, get: obj => obj.obterSalasDisponiveis }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterSalasPorTipo_decorators, { kind: "method", name: "obterSalasPorTipo", static: false, private: false, access: { has: obj => "obterSalasPorTipo" in obj, get: obj => obj.obterSalasPorTipo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterSalasComuns_decorators, { kind: "method", name: "obterSalasComuns", static: false, private: false, access: { has: obj => "obterSalasComuns" in obj, get: obj => obj.obterSalasComuns }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterSalasTecnicas_decorators, { kind: "method", name: "obterSalasTecnicas", static: false, private: false, access: { has: obj => "obterSalasTecnicas" in obj, get: obj => obj.obterSalasTecnicas }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterSalasCirurgia_decorators, { kind: "method", name: "obterSalasCirurgia", static: false, private: false, access: { has: obj => "obterSalasCirurgia" in obj, get: obj => obj.obterSalasCirurgia }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _obterSessoesAtivas_decorators, { kind: "method", name: "obterSessoesAtivas", static: false, private: false, access: { has: obj => "obterSessoesAtivas" in obj, get: obj => obj.obterSessoesAtivas }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _criarSessao_decorators, { kind: "method", name: "criarSessao", static: false, private: false, access: { has: obj => "criarSessao" in obj, get: obj => obj.criarSessao }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _participarSessao_decorators, { kind: "method", name: "participarSessao", static: false, private: false, access: { has: obj => "participarSessao" in obj, get: obj => obj.participarSessao }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _finalizarSessao_decorators, { kind: "method", name: "finalizarSessao", static: false, private: false, access: { has: obj => "finalizarSessao" in obj, get: obj => obj.finalizarSessao }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _criarSala_decorators, { kind: "method", name: "criarSala", static: false, private: false, access: { has: obj => "criarSala" in obj, get: obj => obj.criarSala }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SalasVRResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SalasVRResolver = _classThis;
})();
exports.SalasVRResolver = SalasVRResolver;
let SessoesVRResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)(() => sessao_vr_entity_1.SessaoVREntity)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SessoesVRResolver = _classThis = class {
    };
    __setFunctionName(_classThis, "SessoesVRResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SessoesVRResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SessoesVRResolver = _classThis;
})();
exports.SessoesVRResolver = SessoesVRResolver;
