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
exports.UsuariosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const usuario_comum_entity_1 = require("./entities/usuario-comum.entity");
const medico_entity_1 = require("./entities/medico.entity");
const estudante_entity_1 = require("./entities/estudante.entity");
const auth_decorator_1 = require("../../decorators/auth.decorator");
const role_enum_1 = require("../../enums/role.enum");
const jwt_guard_1 = require("../../guards/jwt.guard");
let UsuariosResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)(() => user_entity_1.UserEntity), (0, common_1.UseGuards)(jwt_guard_1.JwtGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _obterMeuPerfilCompleto_decorators;
    let _buscarUsuarioPorId_decorators;
    let _listarUsuariosPorTipo_decorators;
    let _listarMedicosOrientadores_decorators;
    let _listarUsuariosComuns_decorators;
    let _listarEstudantes_decorators;
    let _listarMedicos_decorators;
    var UsuariosResolver = _classThis = class {
        constructor(usuariosService) {
            this.usuariosService = (__runInitializers(this, _instanceExtraInitializers), usuariosService);
        }
        /**
         * Query: Obter perfil completo do usuário logado
         */
        async obterMeuPerfilCompleto(user) {
            return this.usuariosService.obterPerfilCompleto(user.userID);
        }
        /**
         * Query: Buscar usuário por ID (apenas médicos podem buscar outros usuários)
         */
        async buscarUsuarioPorId(id) {
            return this.usuariosService.obterPerfilCompleto(id);
        }
        /**
         * Query: Listar usuários por tipo (apenas médicos)
         */
        async listarUsuariosPorTipo(tipo) {
            return this.usuariosService.listarUsuariosPorTipo(tipo);
        }
        /**
         * Query: Listar médicos orientadores (estudantes e médicos)
         */
        async listarMedicosOrientadores() {
            return this.usuariosService.buscarMedicosOrientadores();
        }
        /**
         * Query: Listar todos os usuários comuns (apenas médicos)
         */
        async listarUsuariosComuns() {
            return this.usuariosService.listarUsuariosPorTipo(role_enum_1.Roles.USUARIO_COMUM);
        }
        /**
         * Query: Listar estudantes (apenas médicos)
         */
        async listarEstudantes() {
            return this.usuariosService.listarUsuariosPorTipo(role_enum_1.Roles.ESTUDANTE);
        }
        /**
         * Query: Listar médicos (apenas médicos)
         */
        async listarMedicos() {
            return this.usuariosService.listarUsuariosPorTipo(role_enum_1.Roles.MEDICO);
        }
    };
    __setFunctionName(_classThis, "UsuariosResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _obterMeuPerfilCompleto_decorators = [(0, graphql_1.Query)(() => user_entity_1.UserEntity, {
                name: 'meuPerfilCompleto',
                description: 'Obtém o perfil completo do usuário logado com dados específicos do tipo'
            }), (0, auth_decorator_1.Auth)()];
        _buscarUsuarioPorId_decorators = [(0, graphql_1.Query)(() => user_entity_1.UserEntity, {
                name: 'usuarioPorId',
                description: 'Buscar usuário por ID (apenas médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        _listarUsuariosPorTipo_decorators = [(0, graphql_1.Query)(() => [user_entity_1.UserEntity], {
                name: 'usuariosPorTipo',
                description: 'Listar usuários filtrados por tipo (apenas médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        _listarMedicosOrientadores_decorators = [(0, graphql_1.Query)(() => [medico_entity_1.MedicoEntity], {
                name: 'medicosOrientadores',
                description: 'Lista médicos disponíveis para orientação de estudantes'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.ESTUDANTE, role_enum_1.Roles.MEDICO)];
        _listarUsuariosComuns_decorators = [(0, graphql_1.Query)(() => [usuario_comum_entity_1.UsuarioComumEntity], {
                name: 'usuariosComuns',
                description: 'Lista todos os usuários comuns (apenas médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        _listarEstudantes_decorators = [(0, graphql_1.Query)(() => [estudante_entity_1.EstudanteEntity], {
                name: 'estudantes',
                description: 'Lista todos os estudantes (apenas médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        _listarMedicos_decorators = [(0, graphql_1.Query)(() => [medico_entity_1.MedicoEntity], {
                name: 'medicos',
                description: 'Lista todos os médicos (apenas médicos)'
            }), (0, auth_decorator_1.Auth)(role_enum_1.Roles.MEDICO)];
        __esDecorate(_classThis, null, _obterMeuPerfilCompleto_decorators, { kind: "method", name: "obterMeuPerfilCompleto", static: false, private: false, access: { has: obj => "obterMeuPerfilCompleto" in obj, get: obj => obj.obterMeuPerfilCompleto }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _buscarUsuarioPorId_decorators, { kind: "method", name: "buscarUsuarioPorId", static: false, private: false, access: { has: obj => "buscarUsuarioPorId" in obj, get: obj => obj.buscarUsuarioPorId }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listarUsuariosPorTipo_decorators, { kind: "method", name: "listarUsuariosPorTipo", static: false, private: false, access: { has: obj => "listarUsuariosPorTipo" in obj, get: obj => obj.listarUsuariosPorTipo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listarMedicosOrientadores_decorators, { kind: "method", name: "listarMedicosOrientadores", static: false, private: false, access: { has: obj => "listarMedicosOrientadores" in obj, get: obj => obj.listarMedicosOrientadores }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listarUsuariosComuns_decorators, { kind: "method", name: "listarUsuariosComuns", static: false, private: false, access: { has: obj => "listarUsuariosComuns" in obj, get: obj => obj.listarUsuariosComuns }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listarEstudantes_decorators, { kind: "method", name: "listarEstudantes", static: false, private: false, access: { has: obj => "listarEstudantes" in obj, get: obj => obj.listarEstudantes }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listarMedicos_decorators, { kind: "method", name: "listarMedicos", static: false, private: false, access: { has: obj => "listarMedicos" in obj, get: obj => obj.listarMedicos }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsuariosResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsuariosResolver = _classThis;
})();
exports.UsuariosResolver = UsuariosResolver;
