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
exports.ConteudoEducacionalEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
// Linha corrigida
const conteudo_educacional_enum_1 = require("../../../enums/conteudo-educacional.enum");
const status_entities_1 = require("../../../enums/status.entities");
const typeorm_1 = require("typeorm");
const medico_entity_1 = require("../../usuarios/entities/medico.entity");
let ConteudoEducacionalEntity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('conteudo_educacional'), (0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _titulo_decorators;
    let _titulo_initializers = [];
    let _titulo_extraInitializers = [];
    let _descricao_decorators;
    let _descricao_initializers = [];
    let _descricao_extraInitializers = [];
    let _tipoConteudo_decorators;
    let _tipoConteudo_initializers = [];
    let _tipoConteudo_extraInitializers = [];
    let _conteudoDetalhado_decorators;
    let _conteudoDetalhado_initializers = [];
    let _conteudoDetalhado_extraInitializers = [];
    let _urlModeloVR_decorators;
    let _urlModeloVR_initializers = [];
    let _urlModeloVR_extraInitializers = [];
    let _urlTextura_decorators;
    let _urlTextura_initializers = [];
    let _urlTextura_extraInitializers = [];
    let _tagsVR_decorators;
    let _tagsVR_initializers = [];
    let _tagsVR_extraInitializers = [];
    let _nivelDificuldade_decorators;
    let _nivelDificuldade_initializers = [];
    let _nivelDificuldade_extraInitializers = [];
    let _duracaoEstimadaMinutos_decorators;
    let _duracaoEstimadaMinutos_initializers = [];
    let _duracaoEstimadaMinutos_extraInitializers = [];
    let _dadosEspecificos_decorators;
    let _dadosEspecificos_initializers = [];
    let _dadosEspecificos_extraInitializers = [];
    let _versao_decorators;
    let _versao_initializers = [];
    let _versao_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _totalVisualizacoes_decorators;
    let _totalVisualizacoes_initializers = [];
    let _totalVisualizacoes_extraInitializers = [];
    let _avaliacaoMedia_decorators;
    let _avaliacaoMedia_initializers = [];
    let _avaliacaoMedia_extraInitializers = [];
    let _totalAvaliacoes_decorators;
    let _totalAvaliacoes_initializers = [];
    let _totalAvaliacoes_extraInitializers = [];
    let _autorMedico_decorators;
    let _autorMedico_initializers = [];
    let _autorMedico_extraInitializers = [];
    let _autorMedicoId_decorators;
    let _autorMedicoId_initializers = [];
    let _autorMedicoId_extraInitializers = [];
    let _dataCriacao_decorators;
    let _dataCriacao_initializers = [];
    let _dataCriacao_extraInitializers = [];
    let _dataAtualizacao_decorators;
    let _dataAtualizacao_initializers = [];
    let _dataAtualizacao_extraInitializers = [];
    let _dataPublicacao_decorators;
    let _dataPublicacao_initializers = [];
    let _dataPublicacao_extraInitializers = [];
    var ConteudoEducacionalEntity = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.titulo = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _titulo_initializers, void 0));
            this.descricao = (__runInitializers(this, _titulo_extraInitializers), __runInitializers(this, _descricao_initializers, void 0));
            this.tipoConteudo = (__runInitializers(this, _descricao_extraInitializers), __runInitializers(this, _tipoConteudo_initializers, void 0));
            this.conteudoDetalhado = (__runInitializers(this, _tipoConteudo_extraInitializers), __runInitializers(this, _conteudoDetalhado_initializers, void 0));
            // Metadados para VR
            this.urlModeloVR = (__runInitializers(this, _conteudoDetalhado_extraInitializers), __runInitializers(this, _urlModeloVR_initializers, void 0));
            this.urlTextura = (__runInitializers(this, _urlModeloVR_extraInitializers), __runInitializers(this, _urlTextura_initializers, void 0));
            this.tagsVR = (__runInitializers(this, _urlTextura_extraInitializers), __runInitializers(this, _tagsVR_initializers, void 0));
            // Configurações de dificuldade
            this.nivelDificuldade = (__runInitializers(this, _tagsVR_extraInitializers), __runInitializers(this, _nivelDificuldade_initializers, void 0));
            this.duracaoEstimadaMinutos = (__runInitializers(this, _nivelDificuldade_extraInitializers), __runInitializers(this, _duracaoEstimadaMinutos_initializers, void 0));
            // Dados específicos para diferentes tipos de conteúdo
            this.dadosEspecificos = (__runInitializers(this, _duracaoEstimadaMinutos_extraInitializers), __runInitializers(this, _dadosEspecificos_initializers, void 0));
            // Sistema de versionamento
            this.versao = (__runInitializers(this, _dadosEspecificos_extraInitializers), __runInitializers(this, _versao_initializers, void 0));
            this.status = (__runInitializers(this, _versao_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            // Estatísticas de uso
            this.totalVisualizacoes = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _totalVisualizacoes_initializers, void 0));
            this.avaliacaoMedia = (__runInitializers(this, _totalVisualizacoes_extraInitializers), __runInitializers(this, _avaliacaoMedia_initializers, void 0));
            this.totalAvaliacoes = (__runInitializers(this, _avaliacaoMedia_extraInitializers), __runInitializers(this, _totalAvaliacoes_initializers, void 0));
            // Relacionamentos
            this.autorMedico = (__runInitializers(this, _totalAvaliacoes_extraInitializers), __runInitializers(this, _autorMedico_initializers, void 0));
            this.autorMedicoId = (__runInitializers(this, _autorMedico_extraInitializers), __runInitializers(this, _autorMedicoId_initializers, void 0));
            // Datas de controle
            this.dataCriacao = (__runInitializers(this, _autorMedicoId_extraInitializers), __runInitializers(this, _dataCriacao_initializers, void 0));
            this.dataAtualizacao = (__runInitializers(this, _dataCriacao_extraInitializers), __runInitializers(this, _dataAtualizacao_initializers, void 0));
            this.dataPublicacao = (__runInitializers(this, _dataAtualizacao_extraInitializers), __runInitializers(this, _dataPublicacao_initializers, void 0));
            __runInitializers(this, _dataPublicacao_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "ConteudoEducacionalEntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, graphql_1.Field)(() => graphql_1.ID), (0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _titulo_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ length: 200 })];
        _descricao_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ type: 'text' })];
        _tipoConteudo_decorators = [(0, graphql_1.Field)(() => conteudo_educacional_enum_1.TipoConteudo), (0, typeorm_1.Column)({
                type: 'enum',
                enum: conteudo_educacional_enum_1.TipoConteudo,
                nullable: false,
            })];
        _conteudoDetalhado_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _urlModeloVR_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 500 })];
        _urlTextura_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 500 })];
        _tagsVR_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true }), (0, typeorm_1.Column)({ type: 'simple-array', nullable: true })];
        _nivelDificuldade_decorators = [(0, graphql_1.Field)(() => String, { defaultValue: 'BASICO' }), (0, typeorm_1.Column)({
                type: 'enum',
                enum: ['BASICO', 'INTERMEDIARIO', 'AVANCADO', 'ESPECIALISTA'],
                default: 'BASICO'
            })];
        _duracaoEstimadaMinutos_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _dadosEspecificos_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ type: 'json', nullable: true })];
        _versao_decorators = [(0, graphql_1.Field)(() => String, { defaultValue: '1.0.0' }), (0, typeorm_1.Column)({ length: 20, default: '1.0.0' })];
        _status_decorators = [(0, graphql_1.Field)(() => status_entities_1.Status), (0, typeorm_1.Column)({
                type: 'enum',
                enum: status_entities_1.Status,
                default: status_entities_1.Status.ACTIVE,
                nullable: false,
            })];
        _totalVisualizacoes_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _avaliacaoMedia_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, default: 0 })];
        _totalAvaliacoes_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _autorMedico_decorators = [(0, graphql_1.Field)(() => medico_entity_1.MedicoEntity, { nullable: true }), (0, typeorm_1.ManyToOne)(() => medico_entity_1.MedicoEntity, { nullable: true })];
        _autorMedicoId_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true })];
        _dataCriacao_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.CreateDateColumn)({ name: 'dataCriacao' })];
        _dataAtualizacao_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.UpdateDateColumn)({ name: 'dataAtualizacao' })];
        _dataPublicacao_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true }), (0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _titulo_decorators, { kind: "field", name: "titulo", static: false, private: false, access: { has: obj => "titulo" in obj, get: obj => obj.titulo, set: (obj, value) => { obj.titulo = value; } }, metadata: _metadata }, _titulo_initializers, _titulo_extraInitializers);
        __esDecorate(null, null, _descricao_decorators, { kind: "field", name: "descricao", static: false, private: false, access: { has: obj => "descricao" in obj, get: obj => obj.descricao, set: (obj, value) => { obj.descricao = value; } }, metadata: _metadata }, _descricao_initializers, _descricao_extraInitializers);
        __esDecorate(null, null, _tipoConteudo_decorators, { kind: "field", name: "tipoConteudo", static: false, private: false, access: { has: obj => "tipoConteudo" in obj, get: obj => obj.tipoConteudo, set: (obj, value) => { obj.tipoConteudo = value; } }, metadata: _metadata }, _tipoConteudo_initializers, _tipoConteudo_extraInitializers);
        __esDecorate(null, null, _conteudoDetalhado_decorators, { kind: "field", name: "conteudoDetalhado", static: false, private: false, access: { has: obj => "conteudoDetalhado" in obj, get: obj => obj.conteudoDetalhado, set: (obj, value) => { obj.conteudoDetalhado = value; } }, metadata: _metadata }, _conteudoDetalhado_initializers, _conteudoDetalhado_extraInitializers);
        __esDecorate(null, null, _urlModeloVR_decorators, { kind: "field", name: "urlModeloVR", static: false, private: false, access: { has: obj => "urlModeloVR" in obj, get: obj => obj.urlModeloVR, set: (obj, value) => { obj.urlModeloVR = value; } }, metadata: _metadata }, _urlModeloVR_initializers, _urlModeloVR_extraInitializers);
        __esDecorate(null, null, _urlTextura_decorators, { kind: "field", name: "urlTextura", static: false, private: false, access: { has: obj => "urlTextura" in obj, get: obj => obj.urlTextura, set: (obj, value) => { obj.urlTextura = value; } }, metadata: _metadata }, _urlTextura_initializers, _urlTextura_extraInitializers);
        __esDecorate(null, null, _tagsVR_decorators, { kind: "field", name: "tagsVR", static: false, private: false, access: { has: obj => "tagsVR" in obj, get: obj => obj.tagsVR, set: (obj, value) => { obj.tagsVR = value; } }, metadata: _metadata }, _tagsVR_initializers, _tagsVR_extraInitializers);
        __esDecorate(null, null, _nivelDificuldade_decorators, { kind: "field", name: "nivelDificuldade", static: false, private: false, access: { has: obj => "nivelDificuldade" in obj, get: obj => obj.nivelDificuldade, set: (obj, value) => { obj.nivelDificuldade = value; } }, metadata: _metadata }, _nivelDificuldade_initializers, _nivelDificuldade_extraInitializers);
        __esDecorate(null, null, _duracaoEstimadaMinutos_decorators, { kind: "field", name: "duracaoEstimadaMinutos", static: false, private: false, access: { has: obj => "duracaoEstimadaMinutos" in obj, get: obj => obj.duracaoEstimadaMinutos, set: (obj, value) => { obj.duracaoEstimadaMinutos = value; } }, metadata: _metadata }, _duracaoEstimadaMinutos_initializers, _duracaoEstimadaMinutos_extraInitializers);
        __esDecorate(null, null, _dadosEspecificos_decorators, { kind: "field", name: "dadosEspecificos", static: false, private: false, access: { has: obj => "dadosEspecificos" in obj, get: obj => obj.dadosEspecificos, set: (obj, value) => { obj.dadosEspecificos = value; } }, metadata: _metadata }, _dadosEspecificos_initializers, _dadosEspecificos_extraInitializers);
        __esDecorate(null, null, _versao_decorators, { kind: "field", name: "versao", static: false, private: false, access: { has: obj => "versao" in obj, get: obj => obj.versao, set: (obj, value) => { obj.versao = value; } }, metadata: _metadata }, _versao_initializers, _versao_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _totalVisualizacoes_decorators, { kind: "field", name: "totalVisualizacoes", static: false, private: false, access: { has: obj => "totalVisualizacoes" in obj, get: obj => obj.totalVisualizacoes, set: (obj, value) => { obj.totalVisualizacoes = value; } }, metadata: _metadata }, _totalVisualizacoes_initializers, _totalVisualizacoes_extraInitializers);
        __esDecorate(null, null, _avaliacaoMedia_decorators, { kind: "field", name: "avaliacaoMedia", static: false, private: false, access: { has: obj => "avaliacaoMedia" in obj, get: obj => obj.avaliacaoMedia, set: (obj, value) => { obj.avaliacaoMedia = value; } }, metadata: _metadata }, _avaliacaoMedia_initializers, _avaliacaoMedia_extraInitializers);
        __esDecorate(null, null, _totalAvaliacoes_decorators, { kind: "field", name: "totalAvaliacoes", static: false, private: false, access: { has: obj => "totalAvaliacoes" in obj, get: obj => obj.totalAvaliacoes, set: (obj, value) => { obj.totalAvaliacoes = value; } }, metadata: _metadata }, _totalAvaliacoes_initializers, _totalAvaliacoes_extraInitializers);
        __esDecorate(null, null, _autorMedico_decorators, { kind: "field", name: "autorMedico", static: false, private: false, access: { has: obj => "autorMedico" in obj, get: obj => obj.autorMedico, set: (obj, value) => { obj.autorMedico = value; } }, metadata: _metadata }, _autorMedico_initializers, _autorMedico_extraInitializers);
        __esDecorate(null, null, _autorMedicoId_decorators, { kind: "field", name: "autorMedicoId", static: false, private: false, access: { has: obj => "autorMedicoId" in obj, get: obj => obj.autorMedicoId, set: (obj, value) => { obj.autorMedicoId = value; } }, metadata: _metadata }, _autorMedicoId_initializers, _autorMedicoId_extraInitializers);
        __esDecorate(null, null, _dataCriacao_decorators, { kind: "field", name: "dataCriacao", static: false, private: false, access: { has: obj => "dataCriacao" in obj, get: obj => obj.dataCriacao, set: (obj, value) => { obj.dataCriacao = value; } }, metadata: _metadata }, _dataCriacao_initializers, _dataCriacao_extraInitializers);
        __esDecorate(null, null, _dataAtualizacao_decorators, { kind: "field", name: "dataAtualizacao", static: false, private: false, access: { has: obj => "dataAtualizacao" in obj, get: obj => obj.dataAtualizacao, set: (obj, value) => { obj.dataAtualizacao = value; } }, metadata: _metadata }, _dataAtualizacao_initializers, _dataAtualizacao_extraInitializers);
        __esDecorate(null, null, _dataPublicacao_decorators, { kind: "field", name: "dataPublicacao", static: false, private: false, access: { has: obj => "dataPublicacao" in obj, get: obj => obj.dataPublicacao, set: (obj, value) => { obj.dataPublicacao = value; } }, metadata: _metadata }, _dataPublicacao_initializers, _dataPublicacao_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ConteudoEducacionalEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ConteudoEducacionalEntity = _classThis;
})();
exports.ConteudoEducacionalEntity = ConteudoEducacionalEntity;
