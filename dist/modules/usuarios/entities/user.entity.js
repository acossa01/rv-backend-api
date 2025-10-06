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
exports.UserEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const config_1 = __importDefault(require("config"));
const role_enum_1 = require("../../../enums/role.enum");
const status_entities_1 = require("../../../enums/status.entities");
const typeorm_1 = require("typeorm");
const typeorm_encrypted_1 = require("typeorm-encrypted");
let UserEntity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('users'), (0, typeorm_1.TableInheritance)({ column: { type: 'enum', enum: role_enum_1.Roles, name: 'userType' } }), (0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
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
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _dataCriacao_decorators;
    let _dataCriacao_initializers = [];
    let _dataCriacao_extraInitializers = [];
    let _dataAtualizacao_decorators;
    let _dataAtualizacao_initializers = [];
    let _dataAtualizacao_extraInitializers = [];
    let _telefone_decorators;
    let _telefone_initializers = [];
    let _telefone_extraInitializers = [];
    let _celular_decorators;
    let _celular_initializers = [];
    let _celular_extraInitializers = [];
    let _dataUltimoAcesso_decorators;
    let _dataUltimoAcesso_initializers = [];
    let _dataUltimoAcesso_extraInitializers = [];
    var UserEntity = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nomeCompleto = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nomeCompleto_initializers, void 0));
            this.email = (__runInitializers(this, _nomeCompleto_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.senha = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _senha_initializers, void 0));
            this.tipoUsuario = (__runInitializers(this, _senha_extraInitializers), __runInitializers(this, _tipoUsuario_initializers, void 0));
            this.status = (__runInitializers(this, _tipoUsuario_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.dataCriacao = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _dataCriacao_initializers, void 0));
            this.dataAtualizacao = (__runInitializers(this, _dataCriacao_extraInitializers), __runInitializers(this, _dataAtualizacao_initializers, void 0));
            // Campos opcionais para perfil
            this.telefone = (__runInitializers(this, _dataAtualizacao_extraInitializers), __runInitializers(this, _telefone_initializers, void 0));
            this.celular = (__runInitializers(this, _telefone_extraInitializers), __runInitializers(this, _celular_initializers, void 0));
            this.dataUltimoAcesso = (__runInitializers(this, _celular_extraInitializers), __runInitializers(this, _dataUltimoAcesso_initializers, void 0));
            __runInitializers(this, _dataUltimoAcesso_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "UserEntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, graphql_1.Field)(() => graphql_1.ID), (0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _nomeCompleto_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ length: 200 })];
        _email_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ unique: true, length: 100 })];
        _senha_decorators = [(0, graphql_1.HideField)(), (0, typeorm_1.Column)({
                type: 'varchar',
                nullable: false,
                transformer: new typeorm_encrypted_1.EncryptionTransformer(config_1.default.get('encrypt')),
            })];
        _tipoUsuario_decorators = [(0, graphql_1.Field)(() => role_enum_1.Roles), (0, typeorm_1.Column)({
                type: 'enum',
                enum: role_enum_1.Roles,
                nullable: false,
            })];
        _status_decorators = [(0, graphql_1.Field)(() => status_entities_1.Status), (0, typeorm_1.Column)({
                type: 'enum',
                enum: status_entities_1.Status,
                default: status_entities_1.Status.ACTIVE,
                nullable: false,
            })];
        _dataCriacao_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.CreateDateColumn)({ name: 'dataCriacao' })];
        _dataAtualizacao_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.UpdateDateColumn)({ name: 'dataAtualizacao' })];
        _telefone_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 20 })];
        _celular_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 20 })];
        _dataUltimoAcesso_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true }), (0, typeorm_1.Column)({ type: 'date', nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nomeCompleto_decorators, { kind: "field", name: "nomeCompleto", static: false, private: false, access: { has: obj => "nomeCompleto" in obj, get: obj => obj.nomeCompleto, set: (obj, value) => { obj.nomeCompleto = value; } }, metadata: _metadata }, _nomeCompleto_initializers, _nomeCompleto_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _senha_decorators, { kind: "field", name: "senha", static: false, private: false, access: { has: obj => "senha" in obj, get: obj => obj.senha, set: (obj, value) => { obj.senha = value; } }, metadata: _metadata }, _senha_initializers, _senha_extraInitializers);
        __esDecorate(null, null, _tipoUsuario_decorators, { kind: "field", name: "tipoUsuario", static: false, private: false, access: { has: obj => "tipoUsuario" in obj, get: obj => obj.tipoUsuario, set: (obj, value) => { obj.tipoUsuario = value; } }, metadata: _metadata }, _tipoUsuario_initializers, _tipoUsuario_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _dataCriacao_decorators, { kind: "field", name: "dataCriacao", static: false, private: false, access: { has: obj => "dataCriacao" in obj, get: obj => obj.dataCriacao, set: (obj, value) => { obj.dataCriacao = value; } }, metadata: _metadata }, _dataCriacao_initializers, _dataCriacao_extraInitializers);
        __esDecorate(null, null, _dataAtualizacao_decorators, { kind: "field", name: "dataAtualizacao", static: false, private: false, access: { has: obj => "dataAtualizacao" in obj, get: obj => obj.dataAtualizacao, set: (obj, value) => { obj.dataAtualizacao = value; } }, metadata: _metadata }, _dataAtualizacao_initializers, _dataAtualizacao_extraInitializers);
        __esDecorate(null, null, _telefone_decorators, { kind: "field", name: "telefone", static: false, private: false, access: { has: obj => "telefone" in obj, get: obj => obj.telefone, set: (obj, value) => { obj.telefone = value; } }, metadata: _metadata }, _telefone_initializers, _telefone_extraInitializers);
        __esDecorate(null, null, _celular_decorators, { kind: "field", name: "celular", static: false, private: false, access: { has: obj => "celular" in obj, get: obj => obj.celular, set: (obj, value) => { obj.celular = value; } }, metadata: _metadata }, _celular_initializers, _celular_extraInitializers);
        __esDecorate(null, null, _dataUltimoAcesso_decorators, { kind: "field", name: "dataUltimoAcesso", static: false, private: false, access: { has: obj => "dataUltimoAcesso" in obj, get: obj => obj.dataUltimoAcesso, set: (obj, value) => { obj.dataUltimoAcesso = value; } }, metadata: _metadata }, _dataUltimoAcesso_initializers, _dataUltimoAcesso_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserEntity = _classThis;
})();
exports.UserEntity = UserEntity;
