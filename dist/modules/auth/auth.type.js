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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.RedefinirSenhaInput = exports.RecuperacaoSenhaInput = exports.RefreshTokenInput = exports.RegistroInput = exports.LoginInput = exports.LoginResponse = exports.UsuarioResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const role_enum_1 = require("../../enums/role.enum");
const status_entities_1 = require("../../enums/status.entities");
let UsuarioResponse = (() => {
    let _classDecorators = [(0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _nomeCompleto_decorators;
    let _nomeCompleto_initializers = [];
    let _nomeCompleto_extraInitializers = [];
    let _tipoUsuario_decorators;
    let _tipoUsuario_initializers = [];
    let _tipoUsuario_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    var UsuarioResponse = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.email = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.nomeCompleto = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _nomeCompleto_initializers, void 0));
            this.tipoUsuario = (__runInitializers(this, _nomeCompleto_extraInitializers), __runInitializers(this, _tipoUsuario_initializers, void 0));
            this.status = (__runInitializers(this, _tipoUsuario_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            __runInitializers(this, _status_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "UsuarioResponse");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, graphql_1.Field)(() => String)];
        _email_decorators = [(0, graphql_1.Field)(() => String)];
        _nomeCompleto_decorators = [(0, graphql_1.Field)(() => String)];
        _tipoUsuario_decorators = [(0, graphql_1.Field)(() => role_enum_1.Roles)];
        _status_decorators = [(0, graphql_1.Field)(() => status_entities_1.Status)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _nomeCompleto_decorators, { kind: "field", name: "nomeCompleto", static: false, private: false, access: { has: obj => "nomeCompleto" in obj, get: obj => obj.nomeCompleto, set: (obj, value) => { obj.nomeCompleto = value; } }, metadata: _metadata }, _nomeCompleto_initializers, _nomeCompleto_extraInitializers);
        __esDecorate(null, null, _tipoUsuario_decorators, { kind: "field", name: "tipoUsuario", static: false, private: false, access: { has: obj => "tipoUsuario" in obj, get: obj => obj.tipoUsuario, set: (obj, value) => { obj.tipoUsuario = value; } }, metadata: _metadata }, _tipoUsuario_initializers, _tipoUsuario_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsuarioResponse = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsuarioResponse = _classThis;
})();
exports.UsuarioResponse = UsuarioResponse;
let LoginResponse = (() => {
    let _classDecorators = [(0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _access_token_decorators;
    let _access_token_initializers = [];
    let _access_token_extraInitializers = [];
    let _refresh_token_decorators;
    let _refresh_token_initializers = [];
    let _refresh_token_extraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _user_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _sub_decorators;
    let _sub_initializers = [];
    let _sub_extraInitializers = [];
    let _role_decorators;
    let _role_initializers = [];
    let _role_extraInitializers = [];
    let _nomeCompleto_decorators;
    let _nomeCompleto_initializers = [];
    let _nomeCompleto_extraInitializers = [];
    var LoginResponse = _classThis = class {
        constructor() {
            this.access_token = __runInitializers(this, _access_token_initializers, void 0);
            this.refresh_token = (__runInitializers(this, _access_token_extraInitializers), __runInitializers(this, _refresh_token_initializers, void 0));
            this.user = (__runInitializers(this, _refresh_token_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.email = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.sub = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _sub_initializers, void 0));
            this.role = (__runInitializers(this, _sub_extraInitializers), __runInitializers(this, _role_initializers, void 0));
            this.nomeCompleto = (__runInitializers(this, _role_extraInitializers), __runInitializers(this, _nomeCompleto_initializers, void 0));
            __runInitializers(this, _nomeCompleto_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "LoginResponse");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _access_token_decorators = [(0, graphql_1.Field)(() => String)];
        _refresh_token_decorators = [(0, graphql_1.Field)(() => String)];
        _user_decorators = [(0, graphql_1.Field)(() => UsuarioResponse)];
        _email_decorators = [(0, graphql_1.Field)(() => String)];
        _sub_decorators = [(0, graphql_1.Field)(() => String)];
        _role_decorators = [(0, graphql_1.Field)(() => role_enum_1.Roles)];
        _nomeCompleto_decorators = [(0, graphql_1.Field)(() => String)];
        __esDecorate(null, null, _access_token_decorators, { kind: "field", name: "access_token", static: false, private: false, access: { has: obj => "access_token" in obj, get: obj => obj.access_token, set: (obj, value) => { obj.access_token = value; } }, metadata: _metadata }, _access_token_initializers, _access_token_extraInitializers);
        __esDecorate(null, null, _refresh_token_decorators, { kind: "field", name: "refresh_token", static: false, private: false, access: { has: obj => "refresh_token" in obj, get: obj => obj.refresh_token, set: (obj, value) => { obj.refresh_token = value; } }, metadata: _metadata }, _refresh_token_initializers, _refresh_token_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _sub_decorators, { kind: "field", name: "sub", static: false, private: false, access: { has: obj => "sub" in obj, get: obj => obj.sub, set: (obj, value) => { obj.sub = value; } }, metadata: _metadata }, _sub_initializers, _sub_extraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: obj => "role" in obj, get: obj => obj.role, set: (obj, value) => { obj.role = value; } }, metadata: _metadata }, _role_initializers, _role_extraInitializers);
        __esDecorate(null, null, _nomeCompleto_decorators, { kind: "field", name: "nomeCompleto", static: false, private: false, access: { has: obj => "nomeCompleto" in obj, get: obj => obj.nomeCompleto, set: (obj, value) => { obj.nomeCompleto = value; } }, metadata: _metadata }, _nomeCompleto_initializers, _nomeCompleto_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoginResponse = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginResponse = _classThis;
})();
exports.LoginResponse = LoginResponse;
let LoginInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _senha_decorators;
    let _senha_initializers = [];
    let _senha_extraInitializers = [];
    var LoginInput = _classThis = class {
        constructor() {
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.senha = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _senha_initializers, void 0));
            __runInitializers(this, _senha_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "LoginInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _email_decorators = [(0, graphql_1.Field)(() => String)];
        _senha_decorators = [(0, graphql_1.Field)(() => String)];
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _senha_decorators, { kind: "field", name: "senha", static: false, private: false, access: { has: obj => "senha" in obj, get: obj => obj.senha, set: (obj, value) => { obj.senha = value; } }, metadata: _metadata }, _senha_initializers, _senha_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoginInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginInput = _classThis;
})();
exports.LoginInput = LoginInput;
let RegistroInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _nomeCompleto_decorators;
    let _nomeCompleto_initializers = [];
    let _nomeCompleto_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _senha_decorators;
    let _senha_initializers = [];
    let _senha_extraInitializers = [];
    let _tipoUsuario_decorators;
    let _tipoUsuario_initializers = [];
    let _tipoUsuario_extraInitializers = [];
    let _telefone_decorators;
    let _telefone_initializers = [];
    let _telefone_extraInitializers = [];
    let _celular_decorators;
    let _celular_initializers = [];
    let _celular_extraInitializers = [];
    let _crm_decorators;
    let _crm_initializers = [];
    let _crm_extraInitializers = [];
    let _ufCrm_decorators;
    let _ufCrm_initializers = [];
    let _ufCrm_extraInitializers = [];
    let _especialidades_decorators;
    let _especialidades_initializers = [];
    let _especialidades_extraInitializers = [];
    let _instituicao_decorators;
    let _instituicao_initializers = [];
    let _instituicao_extraInitializers = [];
    let _matricula_decorators;
    let _matricula_initializers = [];
    let _matricula_extraInitializers = [];
    let _instituicaoEnsino_decorators;
    let _instituicaoEnsino_initializers = [];
    let _instituicaoEnsino_extraInitializers = [];
    let _curso_decorators;
    let _curso_initializers = [];
    let _curso_extraInitializers = [];
    let _periodo_decorators;
    let _periodo_initializers = [];
    let _periodo_extraInitializers = [];
    let _endereco_decorators;
    let _endereco_initializers = [];
    let _endereco_extraInitializers = [];
    let _cidade_decorators;
    let _cidade_initializers = [];
    let _cidade_extraInitializers = [];
    let _uf_decorators;
    let _uf_initializers = [];
    let _uf_extraInitializers = [];
    let _cep_decorators;
    let _cep_initializers = [];
    let _cep_extraInitializers = [];
    var RegistroInput = _classThis = class {
        constructor() {
            this.nomeCompleto = __runInitializers(this, _nomeCompleto_initializers, void 0);
            this.email = (__runInitializers(this, _nomeCompleto_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.senha = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _senha_initializers, void 0));
            this.tipoUsuario = (__runInitializers(this, _senha_extraInitializers), __runInitializers(this, _tipoUsuario_initializers, void 0));
            this.telefone = (__runInitializers(this, _tipoUsuario_extraInitializers), __runInitializers(this, _telefone_initializers, void 0));
            this.celular = (__runInitializers(this, _telefone_extraInitializers), __runInitializers(this, _celular_initializers, void 0));
            // Campos específicos para médicos
            this.crm = (__runInitializers(this, _celular_extraInitializers), __runInitializers(this, _crm_initializers, void 0));
            this.ufCrm = (__runInitializers(this, _crm_extraInitializers), __runInitializers(this, _ufCrm_initializers, void 0));
            this.especialidades = (__runInitializers(this, _ufCrm_extraInitializers), __runInitializers(this, _especialidades_initializers, void 0));
            this.instituicao = (__runInitializers(this, _especialidades_extraInitializers), __runInitializers(this, _instituicao_initializers, void 0));
            // Campos específicos para estudantes
            this.matricula = (__runInitializers(this, _instituicao_extraInitializers), __runInitializers(this, _matricula_initializers, void 0));
            this.instituicaoEnsino = (__runInitializers(this, _matricula_extraInitializers), __runInitializers(this, _instituicaoEnsino_initializers, void 0));
            this.curso = (__runInitializers(this, _instituicaoEnsino_extraInitializers), __runInitializers(this, _curso_initializers, void 0));
            this.periodo = (__runInitializers(this, _curso_extraInitializers), __runInitializers(this, _periodo_initializers, void 0));
            // Campos específicos para usuários comuns
            this.endereco = (__runInitializers(this, _periodo_extraInitializers), __runInitializers(this, _endereco_initializers, void 0));
            this.cidade = (__runInitializers(this, _endereco_extraInitializers), __runInitializers(this, _cidade_initializers, void 0));
            this.uf = (__runInitializers(this, _cidade_extraInitializers), __runInitializers(this, _uf_initializers, void 0));
            this.cep = (__runInitializers(this, _uf_extraInitializers), __runInitializers(this, _cep_initializers, void 0));
            __runInitializers(this, _cep_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "RegistroInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _nomeCompleto_decorators = [(0, graphql_1.Field)(() => String)];
        _email_decorators = [(0, graphql_1.Field)(() => String)];
        _senha_decorators = [(0, graphql_1.Field)(() => String)];
        _tipoUsuario_decorators = [(0, graphql_1.Field)(() => role_enum_1.Roles)];
        _telefone_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _celular_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _crm_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _ufCrm_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _especialidades_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true })];
        _instituicao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _matricula_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _instituicaoEnsino_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _curso_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _periodo_decorators = [(0, graphql_1.Field)(() => Number, { nullable: true })];
        _endereco_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _cidade_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _uf_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _cep_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        __esDecorate(null, null, _nomeCompleto_decorators, { kind: "field", name: "nomeCompleto", static: false, private: false, access: { has: obj => "nomeCompleto" in obj, get: obj => obj.nomeCompleto, set: (obj, value) => { obj.nomeCompleto = value; } }, metadata: _metadata }, _nomeCompleto_initializers, _nomeCompleto_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _senha_decorators, { kind: "field", name: "senha", static: false, private: false, access: { has: obj => "senha" in obj, get: obj => obj.senha, set: (obj, value) => { obj.senha = value; } }, metadata: _metadata }, _senha_initializers, _senha_extraInitializers);
        __esDecorate(null, null, _tipoUsuario_decorators, { kind: "field", name: "tipoUsuario", static: false, private: false, access: { has: obj => "tipoUsuario" in obj, get: obj => obj.tipoUsuario, set: (obj, value) => { obj.tipoUsuario = value; } }, metadata: _metadata }, _tipoUsuario_initializers, _tipoUsuario_extraInitializers);
        __esDecorate(null, null, _telefone_decorators, { kind: "field", name: "telefone", static: false, private: false, access: { has: obj => "telefone" in obj, get: obj => obj.telefone, set: (obj, value) => { obj.telefone = value; } }, metadata: _metadata }, _telefone_initializers, _telefone_extraInitializers);
        __esDecorate(null, null, _celular_decorators, { kind: "field", name: "celular", static: false, private: false, access: { has: obj => "celular" in obj, get: obj => obj.celular, set: (obj, value) => { obj.celular = value; } }, metadata: _metadata }, _celular_initializers, _celular_extraInitializers);
        __esDecorate(null, null, _crm_decorators, { kind: "field", name: "crm", static: false, private: false, access: { has: obj => "crm" in obj, get: obj => obj.crm, set: (obj, value) => { obj.crm = value; } }, metadata: _metadata }, _crm_initializers, _crm_extraInitializers);
        __esDecorate(null, null, _ufCrm_decorators, { kind: "field", name: "ufCrm", static: false, private: false, access: { has: obj => "ufCrm" in obj, get: obj => obj.ufCrm, set: (obj, value) => { obj.ufCrm = value; } }, metadata: _metadata }, _ufCrm_initializers, _ufCrm_extraInitializers);
        __esDecorate(null, null, _especialidades_decorators, { kind: "field", name: "especialidades", static: false, private: false, access: { has: obj => "especialidades" in obj, get: obj => obj.especialidades, set: (obj, value) => { obj.especialidades = value; } }, metadata: _metadata }, _especialidades_initializers, _especialidades_extraInitializers);
        __esDecorate(null, null, _instituicao_decorators, { kind: "field", name: "instituicao", static: false, private: false, access: { has: obj => "instituicao" in obj, get: obj => obj.instituicao, set: (obj, value) => { obj.instituicao = value; } }, metadata: _metadata }, _instituicao_initializers, _instituicao_extraInitializers);
        __esDecorate(null, null, _matricula_decorators, { kind: "field", name: "matricula", static: false, private: false, access: { has: obj => "matricula" in obj, get: obj => obj.matricula, set: (obj, value) => { obj.matricula = value; } }, metadata: _metadata }, _matricula_initializers, _matricula_extraInitializers);
        __esDecorate(null, null, _instituicaoEnsino_decorators, { kind: "field", name: "instituicaoEnsino", static: false, private: false, access: { has: obj => "instituicaoEnsino" in obj, get: obj => obj.instituicaoEnsino, set: (obj, value) => { obj.instituicaoEnsino = value; } }, metadata: _metadata }, _instituicaoEnsino_initializers, _instituicaoEnsino_extraInitializers);
        __esDecorate(null, null, _curso_decorators, { kind: "field", name: "curso", static: false, private: false, access: { has: obj => "curso" in obj, get: obj => obj.curso, set: (obj, value) => { obj.curso = value; } }, metadata: _metadata }, _curso_initializers, _curso_extraInitializers);
        __esDecorate(null, null, _periodo_decorators, { kind: "field", name: "periodo", static: false, private: false, access: { has: obj => "periodo" in obj, get: obj => obj.periodo, set: (obj, value) => { obj.periodo = value; } }, metadata: _metadata }, _periodo_initializers, _periodo_extraInitializers);
        __esDecorate(null, null, _endereco_decorators, { kind: "field", name: "endereco", static: false, private: false, access: { has: obj => "endereco" in obj, get: obj => obj.endereco, set: (obj, value) => { obj.endereco = value; } }, metadata: _metadata }, _endereco_initializers, _endereco_extraInitializers);
        __esDecorate(null, null, _cidade_decorators, { kind: "field", name: "cidade", static: false, private: false, access: { has: obj => "cidade" in obj, get: obj => obj.cidade, set: (obj, value) => { obj.cidade = value; } }, metadata: _metadata }, _cidade_initializers, _cidade_extraInitializers);
        __esDecorate(null, null, _uf_decorators, { kind: "field", name: "uf", static: false, private: false, access: { has: obj => "uf" in obj, get: obj => obj.uf, set: (obj, value) => { obj.uf = value; } }, metadata: _metadata }, _uf_initializers, _uf_extraInitializers);
        __esDecorate(null, null, _cep_decorators, { kind: "field", name: "cep", static: false, private: false, access: { has: obj => "cep" in obj, get: obj => obj.cep, set: (obj, value) => { obj.cep = value; } }, metadata: _metadata }, _cep_initializers, _cep_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RegistroInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RegistroInput = _classThis;
})();
exports.RegistroInput = RegistroInput;
let RefreshTokenInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _refreshToken_decorators;
    let _refreshToken_initializers = [];
    let _refreshToken_extraInitializers = [];
    var RefreshTokenInput = _classThis = class {
        constructor() {
            this.refreshToken = __runInitializers(this, _refreshToken_initializers, void 0);
            __runInitializers(this, _refreshToken_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "RefreshTokenInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _refreshToken_decorators = [(0, graphql_1.Field)(() => String)];
        __esDecorate(null, null, _refreshToken_decorators, { kind: "field", name: "refreshToken", static: false, private: false, access: { has: obj => "refreshToken" in obj, get: obj => obj.refreshToken, set: (obj, value) => { obj.refreshToken = value; } }, metadata: _metadata }, _refreshToken_initializers, _refreshToken_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RefreshTokenInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RefreshTokenInput = _classThis;
})();
exports.RefreshTokenInput = RefreshTokenInput;
let RecuperacaoSenhaInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    var RecuperacaoSenhaInput = _classThis = class {
        constructor() {
            this.email = __runInitializers(this, _email_initializers, void 0);
            __runInitializers(this, _email_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "RecuperacaoSenhaInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _email_decorators = [(0, graphql_1.Field)(() => String)];
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecuperacaoSenhaInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecuperacaoSenhaInput = _classThis;
})();
exports.RecuperacaoSenhaInput = RecuperacaoSenhaInput;
let RedefinirSenhaInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _token_decorators;
    let _token_initializers = [];
    let _token_extraInitializers = [];
    let _novaSenha_decorators;
    let _novaSenha_initializers = [];
    let _novaSenha_extraInitializers = [];
    var RedefinirSenhaInput = _classThis = class {
        constructor() {
            this.token = __runInitializers(this, _token_initializers, void 0);
            this.novaSenha = (__runInitializers(this, _token_extraInitializers), __runInitializers(this, _novaSenha_initializers, void 0));
            __runInitializers(this, _novaSenha_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "RedefinirSenhaInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _token_decorators = [(0, graphql_1.Field)(() => String)];
        _novaSenha_decorators = [(0, graphql_1.Field)(() => String)];
        __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: obj => "token" in obj, get: obj => obj.token, set: (obj, value) => { obj.token = value; } }, metadata: _metadata }, _token_initializers, _token_extraInitializers);
        __esDecorate(null, null, _novaSenha_decorators, { kind: "field", name: "novaSenha", static: false, private: false, access: { has: obj => "novaSenha" in obj, get: obj => obj.novaSenha, set: (obj, value) => { obj.novaSenha = value; } }, metadata: _metadata }, _novaSenha_initializers, _novaSenha_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RedefinirSenhaInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RedefinirSenhaInput = _classThis;
})();
exports.RedefinirSenhaInput = RedefinirSenhaInput;
// Manter compatibilidade com código antigo (deprecated)
let Token = (() => {
    let _classDecorators = [(0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _access_token_decorators;
    let _access_token_initializers = [];
    let _access_token_extraInitializers = [];
    let _username_decorators;
    let _username_initializers = [];
    let _username_extraInitializers = [];
    let _sub_decorators;
    let _sub_initializers = [];
    let _sub_extraInitializers = [];
    let _role_decorators;
    let _role_initializers = [];
    let _role_extraInitializers = [];
    var Token = _classThis = class {
        constructor() {
            this.access_token = __runInitializers(this, _access_token_initializers, void 0);
            this.username = (__runInitializers(this, _access_token_extraInitializers), __runInitializers(this, _username_initializers, void 0));
            this.sub = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _sub_initializers, void 0));
            this.role = (__runInitializers(this, _sub_extraInitializers), __runInitializers(this, _role_initializers, void 0));
            __runInitializers(this, _role_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Token");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _access_token_decorators = [(0, graphql_1.Field)(() => String)];
        _username_decorators = [(0, graphql_1.Field)(() => String)];
        _sub_decorators = [(0, graphql_1.Field)(() => String)];
        _role_decorators = [(0, graphql_1.Field)(() => role_enum_1.Roles)];
        __esDecorate(null, null, _access_token_decorators, { kind: "field", name: "access_token", static: false, private: false, access: { has: obj => "access_token" in obj, get: obj => obj.access_token, set: (obj, value) => { obj.access_token = value; } }, metadata: _metadata }, _access_token_initializers, _access_token_extraInitializers);
        __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: obj => "username" in obj, get: obj => obj.username, set: (obj, value) => { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
        __esDecorate(null, null, _sub_decorators, { kind: "field", name: "sub", static: false, private: false, access: { has: obj => "sub" in obj, get: obj => obj.sub, set: (obj, value) => { obj.sub = value; } }, metadata: _metadata }, _sub_initializers, _sub_extraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: obj => "role" in obj, get: obj => obj.role, set: (obj, value) => { obj.role = value; } }, metadata: _metadata }, _role_initializers, _role_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Token = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Token = _classThis;
})();
exports.Token = Token;
