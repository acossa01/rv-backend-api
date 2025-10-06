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
exports.SessaoVREntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const sala_vr_entity_1 = require("./sala-vr.entity");
const user_entity_1 = require("../../usuarios/entities/user.entity");
const medico_entity_1 = require("../../usuarios/entities/medico.entity");
let SessaoVREntity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('sessoes_vr'), (0, graphql_1.ObjectType)()];
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
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _dataInicio_decorators;
    let _dataInicio_initializers = [];
    let _dataInicio_extraInitializers = [];
    let _dataFim_decorators;
    let _dataFim_initializers = [];
    let _dataFim_extraInitializers = [];
    let _duracaoMinutos_decorators;
    let _duracaoMinutos_initializers = [];
    let _duracaoMinutos_extraInitializers = [];
    let _ehPrivada_decorators;
    let _ehPrivada_initializers = [];
    let _ehPrivada_extraInitializers = [];
    let _maxParticipantes_decorators;
    let _maxParticipantes_initializers = [];
    let _maxParticipantes_extraInitializers = [];
    let _configuracaoVR_decorators;
    let _configuracaoVR_initializers = [];
    let _configuracaoVR_extraInitializers = [];
    let _cenarioVR_decorators;
    let _cenarioVR_initializers = [];
    let _cenarioVR_extraInitializers = [];
    let _sala_decorators;
    let _sala_initializers = [];
    let _sala_extraInitializers = [];
    let _salaId_decorators;
    let _salaId_initializers = [];
    let _salaId_extraInitializers = [];
    let _criador_decorators;
    let _criador_initializers = [];
    let _criador_extraInitializers = [];
    let _criadorId_decorators;
    let _criadorId_initializers = [];
    let _criadorId_extraInitializers = [];
    let _orientador_decorators;
    let _orientador_initializers = [];
    let _orientador_extraInitializers = [];
    let _orientadorId_decorators;
    let _orientadorId_initializers = [];
    let _orientadorId_extraInitializers = [];
    let _participantes_decorators;
    let _participantes_initializers = [];
    let _participantes_extraInitializers = [];
    let _progressoSessao_decorators;
    let _progressoSessao_initializers = [];
    let _progressoSessao_extraInitializers = [];
    let _avaliacaoMedia_decorators;
    let _avaliacaoMedia_initializers = [];
    let _avaliacaoMedia_extraInitializers = [];
    let _dataCriacao_decorators;
    let _dataCriacao_initializers = [];
    let _dataCriacao_extraInitializers = [];
    let _dataAtualizacao_decorators;
    let _dataAtualizacao_initializers = [];
    let _dataAtualizacao_extraInitializers = [];
    var SessaoVREntity = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.titulo = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _titulo_initializers, void 0));
            this.descricao = (__runInitializers(this, _titulo_extraInitializers), __runInitializers(this, _descricao_initializers, void 0));
            // Status da sessão
            this.status = (__runInitializers(this, _descricao_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            // Datas da sessão
            this.dataInicio = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _dataInicio_initializers, void 0));
            this.dataFim = (__runInitializers(this, _dataInicio_extraInitializers), __runInitializers(this, _dataFim_initializers, void 0));
            this.duracaoMinutos = (__runInitializers(this, _dataFim_extraInitializers), __runInitializers(this, _duracaoMinutos_initializers, void 0));
            // Configurações da sessão
            this.ehPrivada = (__runInitializers(this, _duracaoMinutos_extraInitializers), __runInitializers(this, _ehPrivada_initializers, void 0));
            this.maxParticipantes = (__runInitializers(this, _ehPrivada_extraInitializers), __runInitializers(this, _maxParticipantes_initializers, void 0));
            // Dados específicos da sessão VR
            this.configuracaoVR = (__runInitializers(this, _maxParticipantes_extraInitializers), __runInitializers(this, _configuracaoVR_initializers, void 0));
            this.cenarioVR = (__runInitializers(this, _configuracaoVR_extraInitializers), __runInitializers(this, _cenarioVR_initializers, void 0));
            // Relacionamentos
            this.sala = (__runInitializers(this, _cenarioVR_extraInitializers), __runInitializers(this, _sala_initializers, void 0));
            this.salaId = (__runInitializers(this, _sala_extraInitializers), __runInitializers(this, _salaId_initializers, void 0));
            this.criador = (__runInitializers(this, _salaId_extraInitializers), __runInitializers(this, _criador_initializers, void 0));
            this.criadorId = (__runInitializers(this, _criador_extraInitializers), __runInitializers(this, _criadorId_initializers, void 0));
            this.orientador = (__runInitializers(this, _criadorId_extraInitializers), __runInitializers(this, _orientador_initializers, void 0));
            this.orientadorId = (__runInitializers(this, _orientador_extraInitializers), __runInitializers(this, _orientadorId_initializers, void 0));
            this.participantes = (__runInitializers(this, _orientadorId_extraInitializers), __runInitializers(this, _participantes_initializers, void 0));
            // Controle de progresso
            this.progressoSessao = (__runInitializers(this, _participantes_extraInitializers), __runInitializers(this, _progressoSessao_initializers, void 0));
            this.avaliacaoMedia = (__runInitializers(this, _progressoSessao_extraInitializers), __runInitializers(this, _avaliacaoMedia_initializers, void 0));
            // Datas de controle
            this.dataCriacao = (__runInitializers(this, _avaliacaoMedia_extraInitializers), __runInitializers(this, _dataCriacao_initializers, void 0));
            this.dataAtualizacao = (__runInitializers(this, _dataCriacao_extraInitializers), __runInitializers(this, _dataAtualizacao_initializers, void 0));
            __runInitializers(this, _dataAtualizacao_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "SessaoVREntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, graphql_1.Field)(() => graphql_1.ID), (0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _titulo_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ length: 200 })];
        _descricao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _status_decorators = [(0, graphql_1.Field)(() => String, { defaultValue: 'AGENDADA' }), (0, typeorm_1.Column)({
                type: 'enum',
                enum: ['AGENDADA', 'EM_ANDAMENTO', 'PAUSADA', 'FINALIZADA', 'CANCELADA'],
                default: 'AGENDADA'
            })];
        _dataInicio_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.Column)({ type: 'timestamp' })];
        _dataFim_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true }), (0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        _duracaoMinutos_decorators = [(0, graphql_1.Field)(() => Number, { nullable: true }), (0, typeorm_1.Column)({ type: 'int', nullable: true })];
        _ehPrivada_decorators = [(0, graphql_1.Field)(() => Boolean, { defaultValue: false }), (0, typeorm_1.Column)({ type: 'boolean', default: false })];
        _maxParticipantes_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 1 }), (0, typeorm_1.Column)({ type: 'int', default: 1 })];
        _configuracaoVR_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ type: 'json', nullable: true })];
        _cenarioVR_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 500 })];
        _sala_decorators = [(0, graphql_1.Field)(() => sala_vr_entity_1.SalaVREntity), (0, typeorm_1.ManyToOne)(() => sala_vr_entity_1.SalaVREntity, (sala) => sala.sessoes)];
        _salaId_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)()];
        _criador_decorators = [(0, graphql_1.Field)(() => user_entity_1.UserEntity), (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity)];
        _criadorId_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)()];
        _orientador_decorators = [(0, graphql_1.Field)(() => medico_entity_1.MedicoEntity, { nullable: true }), (0, typeorm_1.ManyToOne)(() => medico_entity_1.MedicoEntity, { nullable: true })];
        _orientadorId_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true })];
        _participantes_decorators = [(0, graphql_1.Field)(() => [user_entity_1.UserEntity]), (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity), (0, typeorm_1.JoinTable)({
                name: 'participantes_sessao',
                joinColumn: { name: 'sessaoId', referencedColumnName: 'id' },
                inverseJoinColumn: { name: 'participanteId', referencedColumnName: 'id' }
            })];
        _progressoSessao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ type: 'json', nullable: true })];
        _avaliacaoMedia_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, default: 0 })];
        _dataCriacao_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.CreateDateColumn)({ name: 'dataCriacao' })];
        _dataAtualizacao_decorators = [(0, graphql_1.Field)(() => Date), (0, typeorm_1.UpdateDateColumn)({ name: 'dataAtualizacao' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _titulo_decorators, { kind: "field", name: "titulo", static: false, private: false, access: { has: obj => "titulo" in obj, get: obj => obj.titulo, set: (obj, value) => { obj.titulo = value; } }, metadata: _metadata }, _titulo_initializers, _titulo_extraInitializers);
        __esDecorate(null, null, _descricao_decorators, { kind: "field", name: "descricao", static: false, private: false, access: { has: obj => "descricao" in obj, get: obj => obj.descricao, set: (obj, value) => { obj.descricao = value; } }, metadata: _metadata }, _descricao_initializers, _descricao_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _dataInicio_decorators, { kind: "field", name: "dataInicio", static: false, private: false, access: { has: obj => "dataInicio" in obj, get: obj => obj.dataInicio, set: (obj, value) => { obj.dataInicio = value; } }, metadata: _metadata }, _dataInicio_initializers, _dataInicio_extraInitializers);
        __esDecorate(null, null, _dataFim_decorators, { kind: "field", name: "dataFim", static: false, private: false, access: { has: obj => "dataFim" in obj, get: obj => obj.dataFim, set: (obj, value) => { obj.dataFim = value; } }, metadata: _metadata }, _dataFim_initializers, _dataFim_extraInitializers);
        __esDecorate(null, null, _duracaoMinutos_decorators, { kind: "field", name: "duracaoMinutos", static: false, private: false, access: { has: obj => "duracaoMinutos" in obj, get: obj => obj.duracaoMinutos, set: (obj, value) => { obj.duracaoMinutos = value; } }, metadata: _metadata }, _duracaoMinutos_initializers, _duracaoMinutos_extraInitializers);
        __esDecorate(null, null, _ehPrivada_decorators, { kind: "field", name: "ehPrivada", static: false, private: false, access: { has: obj => "ehPrivada" in obj, get: obj => obj.ehPrivada, set: (obj, value) => { obj.ehPrivada = value; } }, metadata: _metadata }, _ehPrivada_initializers, _ehPrivada_extraInitializers);
        __esDecorate(null, null, _maxParticipantes_decorators, { kind: "field", name: "maxParticipantes", static: false, private: false, access: { has: obj => "maxParticipantes" in obj, get: obj => obj.maxParticipantes, set: (obj, value) => { obj.maxParticipantes = value; } }, metadata: _metadata }, _maxParticipantes_initializers, _maxParticipantes_extraInitializers);
        __esDecorate(null, null, _configuracaoVR_decorators, { kind: "field", name: "configuracaoVR", static: false, private: false, access: { has: obj => "configuracaoVR" in obj, get: obj => obj.configuracaoVR, set: (obj, value) => { obj.configuracaoVR = value; } }, metadata: _metadata }, _configuracaoVR_initializers, _configuracaoVR_extraInitializers);
        __esDecorate(null, null, _cenarioVR_decorators, { kind: "field", name: "cenarioVR", static: false, private: false, access: { has: obj => "cenarioVR" in obj, get: obj => obj.cenarioVR, set: (obj, value) => { obj.cenarioVR = value; } }, metadata: _metadata }, _cenarioVR_initializers, _cenarioVR_extraInitializers);
        __esDecorate(null, null, _sala_decorators, { kind: "field", name: "sala", static: false, private: false, access: { has: obj => "sala" in obj, get: obj => obj.sala, set: (obj, value) => { obj.sala = value; } }, metadata: _metadata }, _sala_initializers, _sala_extraInitializers);
        __esDecorate(null, null, _salaId_decorators, { kind: "field", name: "salaId", static: false, private: false, access: { has: obj => "salaId" in obj, get: obj => obj.salaId, set: (obj, value) => { obj.salaId = value; } }, metadata: _metadata }, _salaId_initializers, _salaId_extraInitializers);
        __esDecorate(null, null, _criador_decorators, { kind: "field", name: "criador", static: false, private: false, access: { has: obj => "criador" in obj, get: obj => obj.criador, set: (obj, value) => { obj.criador = value; } }, metadata: _metadata }, _criador_initializers, _criador_extraInitializers);
        __esDecorate(null, null, _criadorId_decorators, { kind: "field", name: "criadorId", static: false, private: false, access: { has: obj => "criadorId" in obj, get: obj => obj.criadorId, set: (obj, value) => { obj.criadorId = value; } }, metadata: _metadata }, _criadorId_initializers, _criadorId_extraInitializers);
        __esDecorate(null, null, _orientador_decorators, { kind: "field", name: "orientador", static: false, private: false, access: { has: obj => "orientador" in obj, get: obj => obj.orientador, set: (obj, value) => { obj.orientador = value; } }, metadata: _metadata }, _orientador_initializers, _orientador_extraInitializers);
        __esDecorate(null, null, _orientadorId_decorators, { kind: "field", name: "orientadorId", static: false, private: false, access: { has: obj => "orientadorId" in obj, get: obj => obj.orientadorId, set: (obj, value) => { obj.orientadorId = value; } }, metadata: _metadata }, _orientadorId_initializers, _orientadorId_extraInitializers);
        __esDecorate(null, null, _participantes_decorators, { kind: "field", name: "participantes", static: false, private: false, access: { has: obj => "participantes" in obj, get: obj => obj.participantes, set: (obj, value) => { obj.participantes = value; } }, metadata: _metadata }, _participantes_initializers, _participantes_extraInitializers);
        __esDecorate(null, null, _progressoSessao_decorators, { kind: "field", name: "progressoSessao", static: false, private: false, access: { has: obj => "progressoSessao" in obj, get: obj => obj.progressoSessao, set: (obj, value) => { obj.progressoSessao = value; } }, metadata: _metadata }, _progressoSessao_initializers, _progressoSessao_extraInitializers);
        __esDecorate(null, null, _avaliacaoMedia_decorators, { kind: "field", name: "avaliacaoMedia", static: false, private: false, access: { has: obj => "avaliacaoMedia" in obj, get: obj => obj.avaliacaoMedia, set: (obj, value) => { obj.avaliacaoMedia = value; } }, metadata: _metadata }, _avaliacaoMedia_initializers, _avaliacaoMedia_extraInitializers);
        __esDecorate(null, null, _dataCriacao_decorators, { kind: "field", name: "dataCriacao", static: false, private: false, access: { has: obj => "dataCriacao" in obj, get: obj => obj.dataCriacao, set: (obj, value) => { obj.dataCriacao = value; } }, metadata: _metadata }, _dataCriacao_initializers, _dataCriacao_extraInitializers);
        __esDecorate(null, null, _dataAtualizacao_decorators, { kind: "field", name: "dataAtualizacao", static: false, private: false, access: { has: obj => "dataAtualizacao" in obj, get: obj => obj.dataAtualizacao, set: (obj, value) => { obj.dataAtualizacao = value; } }, metadata: _metadata }, _dataAtualizacao_initializers, _dataAtualizacao_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SessaoVREntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SessaoVREntity = _classThis;
})();
exports.SessaoVREntity = SessaoVREntity;
