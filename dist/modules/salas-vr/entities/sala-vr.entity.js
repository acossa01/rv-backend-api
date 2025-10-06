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
exports.SalaVREntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const tipo_sala_enum_1 = require("../../../enums/tipo-sala.enum");
const typeorm_1 = require("typeorm");
const sessao_vr_entity_1 = require("./sessao-vr.entity");
let SalaVREntity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('salas_vr'), (0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _nome_decorators;
    let _nome_initializers = [];
    let _nome_extraInitializers = [];
    let _descricao_decorators;
    let _descricao_initializers = [];
    let _descricao_extraInitializers = [];
    let _tipoSala_decorators;
    let _tipoSala_initializers = [];
    let _tipoSala_extraInitializers = [];
    let _statusSala_decorators;
    let _statusSala_initializers = [];
    let _statusSala_extraInitializers = [];
    let _capacidadeMaxima_decorators;
    let _capacidadeMaxima_initializers = [];
    let _capacidadeMaxima_extraInitializers = [];
    let _permiteMultiusuarios_decorators;
    let _permiteMultiusuarios_initializers = [];
    let _permiteMultiusuarios_extraInitializers = [];
    let _requerOrientador_decorators;
    let _requerOrientador_initializers = [];
    let _requerOrientador_extraInitializers = [];
    let _ambienteVR_decorators;
    let _ambienteVR_initializers = [];
    let _ambienteVR_extraInitializers = [];
    let _equipamentosDisponiveis_decorators;
    let _equipamentosDisponiveis_initializers = [];
    let _equipamentosDisponiveis_extraInitializers = [];
    let _ferramentasVR_decorators;
    let _ferramentasVR_initializers = [];
    let _ferramentasVR_extraInitializers = [];
    let _rolesPermitidos_decorators;
    let _rolesPermitidos_initializers = [];
    let _rolesPermitidos_extraInitializers = [];
    let _permiteInstrucaoIndividual_decorators;
    let _permiteInstrucaoIndividual_initializers = [];
    let _permiteInstrucaoIndividual_extraInitializers = [];
    let _funcionaIndependente_decorators;
    let _funcionaIndependente_initializers = [];
    let _funcionaIndependente_extraInitializers = [];
    let _totalSessoes_decorators;
    let _totalSessoes_initializers = [];
    let _totalSessoes_extraInitializers = [];
    let _totalHorasUso_decorators;
    let _totalHorasUso_initializers = [];
    let _totalHorasUso_extraInitializers = [];
    let _sessoes_decorators;
    let _sessoes_initializers = [];
    let _sessoes_extraInitializers = [];
    let _dataCriacao_decorators;
    let _dataCriacao_initializers = [];
    let _dataCriacao_extraInitializers = [];
    let _dataAtualizacao_decorators;
    let _dataAtualizacao_initializers = [];
    let _dataAtualizacao_extraInitializers = [];
    let _ultimaManutencao_decorators;
    let _ultimaManutencao_initializers = [];
    let _ultimaManutencao_extraInitializers = [];
    var SalaVREntity = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nome = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nome_initializers, void 0));
            this.descricao = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _descricao_initializers, void 0));
            this.tipoSala = (__runInitializers(this, _descricao_extraInitializers), __runInitializers(this, _tipoSala_initializers, void 0));
            this.statusSala = (__runInitializers(this, _tipoSala_extraInitializers), __runInitializers(this, _statusSala_initializers, void 0));
            // Configurações da sala
            this.capacidadeMaxima = (__runInitializers(this, _statusSala_extraInitializers), __runInitializers(this, _capacidadeMaxima_initializers, void 0));
            this.permiteMultiusuarios = (__runInitializers(this, _capacidadeMaxima_extraInitializers), __runInitializers(this, _permiteMultiusuarios_initializers, void 0));
            this.requerOrientador = (__runInitializers(this, _permiteMultiusuarios_extraInitializers), __runInitializers(this, _requerOrientador_initializers, void 0));
            // Metadados específicos do VR
            this.ambienteVR = (__runInitializers(this, _requerOrientador_extraInitializers), __runInitializers(this, _ambienteVR_initializers, void 0));
            this.equipamentosDisponiveis = (__runInitializers(this, _ambienteVR_extraInitializers), __runInitializers(this, _equipamentosDisponiveis_initializers, void 0));
            this.ferramentasVR = (__runInitializers(this, _equipamentosDisponiveis_extraInitializers), __runInitializers(this, _ferramentasVR_initializers, void 0));
            // Restrições de acesso por role
            this.rolesPermitidos = (__runInitializers(this, _ferramentasVR_extraInitializers), __runInitializers(this, _rolesPermitidos_initializers, void 0));
            // Configurações de instruções
            this.permiteInstrucaoIndividual = (__runInitializers(this, _rolesPermitidos_extraInitializers), __runInitializers(this, _permiteInstrucaoIndividual_initializers, void 0));
            this.funcionaIndependente = (__runInitializers(this, _permiteInstrucaoIndividual_extraInitializers), __runInitializers(this, _funcionaIndependente_initializers, void 0));
            // Estatísticas
            this.totalSessoes = (__runInitializers(this, _funcionaIndependente_extraInitializers), __runInitializers(this, _totalSessoes_initializers, void 0));
            this.totalHorasUso = (__runInitializers(this, _totalSessoes_extraInitializers), __runInitializers(this, _totalHorasUso_initializers, void 0));
            // Relacionamentos
            this.sessoes = (__runInitializers(this, _totalHorasUso_extraInitializers), __runInitializers(this, _sessoes_initializers, void 0));
            // Datas de controle
            this.dataCriacao = (__runInitializers(this, _sessoes_extraInitializers), __runInitializers(this, _dataCriacao_initializers, void 0));
            this.dataAtualizacao = (__runInitializers(this, _dataCriacao_extraInitializers), __runInitializers(this, _dataAtualizacao_initializers, void 0));
            this.ultimaManutencao = (__runInitializers(this, _dataAtualizacao_extraInitializers), __runInitializers(this, _ultimaManutencao_initializers, void 0));
            __runInitializers(this, _ultimaManutencao_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "SalaVREntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, graphql_1.Field)(() => graphql_1.ID), (0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _nome_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ length: 100 })];
        _descricao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _tipoSala_decorators = [(0, graphql_1.Field)(() => tipo_sala_enum_1.TipoSala), (0, typeorm_1.Column)({
                type: 'enum',
                enum: tipo_sala_enum_1.TipoSala,
                nullable: false,
            })];
        _statusSala_decorators = [(0, graphql_1.Field)(() => tipo_sala_enum_1.StatusSala), (0, typeorm_1.Column)({
                type: 'enum',
                enum: tipo_sala_enum_1.StatusSala,
                default: tipo_sala_enum_1.StatusSala.DISPONIVEL,
            })];
        _capacidadeMaxima_decorators = [(0, graphql_1.Field)(() => Number), (0, typeorm_1.Column)({ type: 'int', default: 1 })];
        _permiteMultiusuarios_decorators = [(0, graphql_1.Field)(() => Boolean, { defaultValue: true }), (0, typeorm_1.Column)({ type: 'boolean', default: true })];
        _requerOrientador_decorators = [(0, graphql_1.Field)(() => Boolean, { defaultValue: false }), (0, typeorm_1.Column)({ type: 'boolean', default: false })];
        _ambienteVR_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 500 })];
        _equipamentosDisponiveis_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true }), (0, typeorm_1.Column)({ type: 'simple-array', nullable: true })];
        _ferramentasVR_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true }), (0, typeorm_1.Column)({ type: 'simple-array', nullable: true })];
        _rolesPermitidos_decorators = [(0, graphql_1.Field)(() => [String]), (0, typeorm_1.Column)({ type: 'simple-array' })];
        _permiteInstrucaoIndividual_decorators = [(0, graphql_1.Field)(() => Boolean, { defaultValue: false }), (0, typeorm_1.Column)({ type: 'boolean', default: false })];
        _funcionaIndependente_decorators = [(0, graphql_1.Field)(() => Boolean, { defaultValue: true }), (0, typeorm_1.Column)({ type: 'boolean', default: true })];
        _totalSessoes_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _totalHorasUso_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _sessoes_decorators = [(0, graphql_1.Field)(() => [sessao_vr_entity_1.SessaoVREntity], { nullable: true }), (0, typeorm_1.OneToMany)(() => sessao_vr_entity_1.SessaoVREntity, (sessao) => sessao.sala, { nullable: true })];
        _dataCriacao_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.CreateDateColumn)({ name: 'dataCriacao' })];
        _dataAtualizacao_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.UpdateDateColumn)({ name: 'dataAtualizacao' })];
        _ultimaManutencao_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true }), (0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: obj => "nome" in obj, get: obj => obj.nome, set: (obj, value) => { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, null, _descricao_decorators, { kind: "field", name: "descricao", static: false, private: false, access: { has: obj => "descricao" in obj, get: obj => obj.descricao, set: (obj, value) => { obj.descricao = value; } }, metadata: _metadata }, _descricao_initializers, _descricao_extraInitializers);
        __esDecorate(null, null, _tipoSala_decorators, { kind: "field", name: "tipoSala", static: false, private: false, access: { has: obj => "tipoSala" in obj, get: obj => obj.tipoSala, set: (obj, value) => { obj.tipoSala = value; } }, metadata: _metadata }, _tipoSala_initializers, _tipoSala_extraInitializers);
        __esDecorate(null, null, _statusSala_decorators, { kind: "field", name: "statusSala", static: false, private: false, access: { has: obj => "statusSala" in obj, get: obj => obj.statusSala, set: (obj, value) => { obj.statusSala = value; } }, metadata: _metadata }, _statusSala_initializers, _statusSala_extraInitializers);
        __esDecorate(null, null, _capacidadeMaxima_decorators, { kind: "field", name: "capacidadeMaxima", static: false, private: false, access: { has: obj => "capacidadeMaxima" in obj, get: obj => obj.capacidadeMaxima, set: (obj, value) => { obj.capacidadeMaxima = value; } }, metadata: _metadata }, _capacidadeMaxima_initializers, _capacidadeMaxima_extraInitializers);
        __esDecorate(null, null, _permiteMultiusuarios_decorators, { kind: "field", name: "permiteMultiusuarios", static: false, private: false, access: { has: obj => "permiteMultiusuarios" in obj, get: obj => obj.permiteMultiusuarios, set: (obj, value) => { obj.permiteMultiusuarios = value; } }, metadata: _metadata }, _permiteMultiusuarios_initializers, _permiteMultiusuarios_extraInitializers);
        __esDecorate(null, null, _requerOrientador_decorators, { kind: "field", name: "requerOrientador", static: false, private: false, access: { has: obj => "requerOrientador" in obj, get: obj => obj.requerOrientador, set: (obj, value) => { obj.requerOrientador = value; } }, metadata: _metadata }, _requerOrientador_initializers, _requerOrientador_extraInitializers);
        __esDecorate(null, null, _ambienteVR_decorators, { kind: "field", name: "ambienteVR", static: false, private: false, access: { has: obj => "ambienteVR" in obj, get: obj => obj.ambienteVR, set: (obj, value) => { obj.ambienteVR = value; } }, metadata: _metadata }, _ambienteVR_initializers, _ambienteVR_extraInitializers);
        __esDecorate(null, null, _equipamentosDisponiveis_decorators, { kind: "field", name: "equipamentosDisponiveis", static: false, private: false, access: { has: obj => "equipamentosDisponiveis" in obj, get: obj => obj.equipamentosDisponiveis, set: (obj, value) => { obj.equipamentosDisponiveis = value; } }, metadata: _metadata }, _equipamentosDisponiveis_initializers, _equipamentosDisponiveis_extraInitializers);
        __esDecorate(null, null, _ferramentasVR_decorators, { kind: "field", name: "ferramentasVR", static: false, private: false, access: { has: obj => "ferramentasVR" in obj, get: obj => obj.ferramentasVR, set: (obj, value) => { obj.ferramentasVR = value; } }, metadata: _metadata }, _ferramentasVR_initializers, _ferramentasVR_extraInitializers);
        __esDecorate(null, null, _rolesPermitidos_decorators, { kind: "field", name: "rolesPermitidos", static: false, private: false, access: { has: obj => "rolesPermitidos" in obj, get: obj => obj.rolesPermitidos, set: (obj, value) => { obj.rolesPermitidos = value; } }, metadata: _metadata }, _rolesPermitidos_initializers, _rolesPermitidos_extraInitializers);
        __esDecorate(null, null, _permiteInstrucaoIndividual_decorators, { kind: "field", name: "permiteInstrucaoIndividual", static: false, private: false, access: { has: obj => "permiteInstrucaoIndividual" in obj, get: obj => obj.permiteInstrucaoIndividual, set: (obj, value) => { obj.permiteInstrucaoIndividual = value; } }, metadata: _metadata }, _permiteInstrucaoIndividual_initializers, _permiteInstrucaoIndividual_extraInitializers);
        __esDecorate(null, null, _funcionaIndependente_decorators, { kind: "field", name: "funcionaIndependente", static: false, private: false, access: { has: obj => "funcionaIndependente" in obj, get: obj => obj.funcionaIndependente, set: (obj, value) => { obj.funcionaIndependente = value; } }, metadata: _metadata }, _funcionaIndependente_initializers, _funcionaIndependente_extraInitializers);
        __esDecorate(null, null, _totalSessoes_decorators, { kind: "field", name: "totalSessoes", static: false, private: false, access: { has: obj => "totalSessoes" in obj, get: obj => obj.totalSessoes, set: (obj, value) => { obj.totalSessoes = value; } }, metadata: _metadata }, _totalSessoes_initializers, _totalSessoes_extraInitializers);
        __esDecorate(null, null, _totalHorasUso_decorators, { kind: "field", name: "totalHorasUso", static: false, private: false, access: { has: obj => "totalHorasUso" in obj, get: obj => obj.totalHorasUso, set: (obj, value) => { obj.totalHorasUso = value; } }, metadata: _metadata }, _totalHorasUso_initializers, _totalHorasUso_extraInitializers);
        __esDecorate(null, null, _sessoes_decorators, { kind: "field", name: "sessoes", static: false, private: false, access: { has: obj => "sessoes" in obj, get: obj => obj.sessoes, set: (obj, value) => { obj.sessoes = value; } }, metadata: _metadata }, _sessoes_initializers, _sessoes_extraInitializers);
        __esDecorate(null, null, _dataCriacao_decorators, { kind: "field", name: "dataCriacao", static: false, private: false, access: { has: obj => "dataCriacao" in obj, get: obj => obj.dataCriacao, set: (obj, value) => { obj.dataCriacao = value; } }, metadata: _metadata }, _dataCriacao_initializers, _dataCriacao_extraInitializers);
        __esDecorate(null, null, _dataAtualizacao_decorators, { kind: "field", name: "dataAtualizacao", static: false, private: false, access: { has: obj => "dataAtualizacao" in obj, get: obj => obj.dataAtualizacao, set: (obj, value) => { obj.dataAtualizacao = value; } }, metadata: _metadata }, _dataAtualizacao_initializers, _dataAtualizacao_extraInitializers);
        __esDecorate(null, null, _ultimaManutencao_decorators, { kind: "field", name: "ultimaManutencao", static: false, private: false, access: { has: obj => "ultimaManutencao" in obj, get: obj => obj.ultimaManutencao, set: (obj, value) => { obj.ultimaManutencao = value; } }, metadata: _metadata }, _ultimaManutencao_initializers, _ultimaManutencao_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SalaVREntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SalaVREntity = _classThis;
})();
exports.SalaVREntity = SalaVREntity;
