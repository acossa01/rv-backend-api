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
exports.CriarSalaVRInput = exports.CriarSessaoVRInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const tipo_sala_enum_1 = require("../../../enums/tipo-sala.enum");
let CriarSessaoVRInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _salaId_decorators;
    let _salaId_initializers = [];
    let _salaId_extraInitializers = [];
    let _orientadorId_decorators;
    let _orientadorId_initializers = [];
    let _orientadorId_extraInitializers = [];
    let _maxParticipantes_decorators;
    let _maxParticipantes_initializers = [];
    let _maxParticipantes_extraInitializers = [];
    let _dataInicio_decorators;
    let _dataInicio_initializers = [];
    let _dataInicio_extraInitializers = [];
    var CriarSessaoVRInput = _classThis = class {
        constructor() {
            this.salaId = __runInitializers(this, _salaId_initializers, void 0);
            this.orientadorId = (__runInitializers(this, _salaId_extraInitializers), __runInitializers(this, _orientadorId_initializers, void 0));
            this.maxParticipantes = (__runInitializers(this, _orientadorId_extraInitializers), __runInitializers(this, _maxParticipantes_initializers, void 0));
            this.dataInicio = (__runInitializers(this, _maxParticipantes_extraInitializers), __runInitializers(this, _dataInicio_initializers, void 0));
            __runInitializers(this, _dataInicio_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CriarSessaoVRInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _salaId_decorators = [(0, graphql_1.Field)(() => graphql_1.ID)];
        _orientadorId_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _maxParticipantes_decorators = [(0, graphql_1.Field)(() => Number, { nullable: true })];
        _dataInicio_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true })];
        __esDecorate(null, null, _salaId_decorators, { kind: "field", name: "salaId", static: false, private: false, access: { has: obj => "salaId" in obj, get: obj => obj.salaId, set: (obj, value) => { obj.salaId = value; } }, metadata: _metadata }, _salaId_initializers, _salaId_extraInitializers);
        __esDecorate(null, null, _orientadorId_decorators, { kind: "field", name: "orientadorId", static: false, private: false, access: { has: obj => "orientadorId" in obj, get: obj => obj.orientadorId, set: (obj, value) => { obj.orientadorId = value; } }, metadata: _metadata }, _orientadorId_initializers, _orientadorId_extraInitializers);
        __esDecorate(null, null, _maxParticipantes_decorators, { kind: "field", name: "maxParticipantes", static: false, private: false, access: { has: obj => "maxParticipantes" in obj, get: obj => obj.maxParticipantes, set: (obj, value) => { obj.maxParticipantes = value; } }, metadata: _metadata }, _maxParticipantes_initializers, _maxParticipantes_extraInitializers);
        __esDecorate(null, null, _dataInicio_decorators, { kind: "field", name: "dataInicio", static: false, private: false, access: { has: obj => "dataInicio" in obj, get: obj => obj.dataInicio, set: (obj, value) => { obj.dataInicio = value; } }, metadata: _metadata }, _dataInicio_initializers, _dataInicio_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CriarSessaoVRInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CriarSessaoVRInput = _classThis;
})();
exports.CriarSessaoVRInput = CriarSessaoVRInput;
let CriarSalaVRInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _nome_decorators;
    let _nome_initializers = [];
    let _nome_extraInitializers = [];
    let _tipoSala_decorators;
    let _tipoSala_initializers = [];
    let _tipoSala_extraInitializers = [];
    let _capacidadeMaxima_decorators;
    let _capacidadeMaxima_initializers = [];
    let _capacidadeMaxima_extraInitializers = [];
    let _rolesPermitidos_decorators;
    let _rolesPermitidos_initializers = [];
    let _rolesPermitidos_extraInitializers = [];
    let _descricao_decorators;
    let _descricao_initializers = [];
    let _descricao_extraInitializers = [];
    var CriarSalaVRInput = _classThis = class {
        constructor() {
            this.nome = __runInitializers(this, _nome_initializers, void 0);
            this.tipoSala = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _tipoSala_initializers, void 0));
            this.capacidadeMaxima = (__runInitializers(this, _tipoSala_extraInitializers), __runInitializers(this, _capacidadeMaxima_initializers, void 0));
            this.rolesPermitidos = (__runInitializers(this, _capacidadeMaxima_extraInitializers), __runInitializers(this, _rolesPermitidos_initializers, void 0));
            this.descricao = (__runInitializers(this, _rolesPermitidos_extraInitializers), __runInitializers(this, _descricao_initializers, void 0));
            __runInitializers(this, _descricao_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CriarSalaVRInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _nome_decorators = [(0, graphql_1.Field)(() => String)];
        _tipoSala_decorators = [(0, graphql_1.Field)(() => tipo_sala_enum_1.TipoSala)];
        _capacidadeMaxima_decorators = [(0, graphql_1.Field)(() => Number)];
        _rolesPermitidos_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true })];
        _descricao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: obj => "nome" in obj, get: obj => obj.nome, set: (obj, value) => { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, null, _tipoSala_decorators, { kind: "field", name: "tipoSala", static: false, private: false, access: { has: obj => "tipoSala" in obj, get: obj => obj.tipoSala, set: (obj, value) => { obj.tipoSala = value; } }, metadata: _metadata }, _tipoSala_initializers, _tipoSala_extraInitializers);
        __esDecorate(null, null, _capacidadeMaxima_decorators, { kind: "field", name: "capacidadeMaxima", static: false, private: false, access: { has: obj => "capacidadeMaxima" in obj, get: obj => obj.capacidadeMaxima, set: (obj, value) => { obj.capacidadeMaxima = value; } }, metadata: _metadata }, _capacidadeMaxima_initializers, _capacidadeMaxima_extraInitializers);
        __esDecorate(null, null, _rolesPermitidos_decorators, { kind: "field", name: "rolesPermitidos", static: false, private: false, access: { has: obj => "rolesPermitidos" in obj, get: obj => obj.rolesPermitidos, set: (obj, value) => { obj.rolesPermitidos = value; } }, metadata: _metadata }, _rolesPermitidos_initializers, _rolesPermitidos_extraInitializers);
        __esDecorate(null, null, _descricao_decorators, { kind: "field", name: "descricao", static: false, private: false, access: { has: obj => "descricao" in obj, get: obj => obj.descricao, set: (obj, value) => { obj.descricao = value; } }, metadata: _metadata }, _descricao_initializers, _descricao_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CriarSalaVRInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CriarSalaVRInput = _classThis;
})();
exports.CriarSalaVRInput = CriarSalaVRInput;
