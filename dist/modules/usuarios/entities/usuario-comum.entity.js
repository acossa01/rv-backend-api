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
exports.UsuarioComumEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const role_enum_1 = require("../../../enums/role.enum");
let UsuarioComumEntity = (() => {
    let _classDecorators = [(0, typeorm_1.ChildEntity)(role_enum_1.Roles.USUARIO_COMUM), (0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = user_entity_1.UserEntity;
    let _historicoMedico_decorators;
    let _historicoMedico_initializers = [];
    let _historicoMedico_extraInitializers = [];
    let _alergias_decorators;
    let _alergias_initializers = [];
    let _alergias_extraInitializers = [];
    let _medicamentosUso_decorators;
    let _medicamentosUso_initializers = [];
    let _medicamentosUso_extraInitializers = [];
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
    let _totalConteudosVisualizados_decorators;
    let _totalConteudosVisualizados_initializers = [];
    let _totalConteudosVisualizados_extraInitializers = [];
    let _ultimoConteudoVisualizado_decorators;
    let _ultimoConteudoVisualizado_initializers = [];
    let _ultimoConteudoVisualizado_extraInitializers = [];
    var UsuarioComumEntity = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            // Histórico médico básico
            this.historicoMedico = __runInitializers(this, _historicoMedico_initializers, void 0);
            this.alergias = (__runInitializers(this, _historicoMedico_extraInitializers), __runInitializers(this, _alergias_initializers, void 0));
            this.medicamentosUso = (__runInitializers(this, _alergias_extraInitializers), __runInitializers(this, _medicamentosUso_initializers, void 0));
            // Informações para agendamento
            this.endereco = (__runInitializers(this, _medicamentosUso_extraInitializers), __runInitializers(this, _endereco_initializers, void 0));
            this.cidade = (__runInitializers(this, _endereco_extraInitializers), __runInitializers(this, _cidade_initializers, void 0));
            this.uf = (__runInitializers(this, _cidade_extraInitializers), __runInitializers(this, _uf_initializers, void 0));
            this.cep = (__runInitializers(this, _uf_extraInitializers), __runInitializers(this, _cep_initializers, void 0));
            // Progresso no conteúdo educacional
            this.totalConteudosVisualizados = (__runInitializers(this, _cep_extraInitializers), __runInitializers(this, _totalConteudosVisualizados_initializers, void 0));
            this.ultimoConteudoVisualizado = (__runInitializers(this, _totalConteudosVisualizados_extraInitializers), __runInitializers(this, _ultimoConteudoVisualizado_initializers, void 0));
            __runInitializers(this, _ultimoConteudoVisualizado_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "UsuarioComumEntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _historicoMedico_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _alergias_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true }), (0, typeorm_1.Column)({ type: 'simple-array', nullable: true })];
        _medicamentosUso_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true }), (0, typeorm_1.Column)({ type: 'simple-array', nullable: true })];
        _endereco_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 100 })];
        _cidade_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 50 })];
        _uf_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 2 })];
        _cep_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 10 })];
        _totalConteudosVisualizados_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _ultimoConteudoVisualizado_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true }), (0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        __esDecorate(null, null, _historicoMedico_decorators, { kind: "field", name: "historicoMedico", static: false, private: false, access: { has: obj => "historicoMedico" in obj, get: obj => obj.historicoMedico, set: (obj, value) => { obj.historicoMedico = value; } }, metadata: _metadata }, _historicoMedico_initializers, _historicoMedico_extraInitializers);
        __esDecorate(null, null, _alergias_decorators, { kind: "field", name: "alergias", static: false, private: false, access: { has: obj => "alergias" in obj, get: obj => obj.alergias, set: (obj, value) => { obj.alergias = value; } }, metadata: _metadata }, _alergias_initializers, _alergias_extraInitializers);
        __esDecorate(null, null, _medicamentosUso_decorators, { kind: "field", name: "medicamentosUso", static: false, private: false, access: { has: obj => "medicamentosUso" in obj, get: obj => obj.medicamentosUso, set: (obj, value) => { obj.medicamentosUso = value; } }, metadata: _metadata }, _medicamentosUso_initializers, _medicamentosUso_extraInitializers);
        __esDecorate(null, null, _endereco_decorators, { kind: "field", name: "endereco", static: false, private: false, access: { has: obj => "endereco" in obj, get: obj => obj.endereco, set: (obj, value) => { obj.endereco = value; } }, metadata: _metadata }, _endereco_initializers, _endereco_extraInitializers);
        __esDecorate(null, null, _cidade_decorators, { kind: "field", name: "cidade", static: false, private: false, access: { has: obj => "cidade" in obj, get: obj => obj.cidade, set: (obj, value) => { obj.cidade = value; } }, metadata: _metadata }, _cidade_initializers, _cidade_extraInitializers);
        __esDecorate(null, null, _uf_decorators, { kind: "field", name: "uf", static: false, private: false, access: { has: obj => "uf" in obj, get: obj => obj.uf, set: (obj, value) => { obj.uf = value; } }, metadata: _metadata }, _uf_initializers, _uf_extraInitializers);
        __esDecorate(null, null, _cep_decorators, { kind: "field", name: "cep", static: false, private: false, access: { has: obj => "cep" in obj, get: obj => obj.cep, set: (obj, value) => { obj.cep = value; } }, metadata: _metadata }, _cep_initializers, _cep_extraInitializers);
        __esDecorate(null, null, _totalConteudosVisualizados_decorators, { kind: "field", name: "totalConteudosVisualizados", static: false, private: false, access: { has: obj => "totalConteudosVisualizados" in obj, get: obj => obj.totalConteudosVisualizados, set: (obj, value) => { obj.totalConteudosVisualizados = value; } }, metadata: _metadata }, _totalConteudosVisualizados_initializers, _totalConteudosVisualizados_extraInitializers);
        __esDecorate(null, null, _ultimoConteudoVisualizado_decorators, { kind: "field", name: "ultimoConteudoVisualizado", static: false, private: false, access: { has: obj => "ultimoConteudoVisualizado" in obj, get: obj => obj.ultimoConteudoVisualizado, set: (obj, value) => { obj.ultimoConteudoVisualizado = value; } }, metadata: _metadata }, _ultimoConteudoVisualizado_initializers, _ultimoConteudoVisualizado_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsuarioComumEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsuarioComumEntity = _classThis;
})();
exports.UsuarioComumEntity = UsuarioComumEntity;
