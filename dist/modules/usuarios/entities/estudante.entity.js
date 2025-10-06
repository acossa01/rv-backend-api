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
exports.EstudanteEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const role_enum_1 = require("../../../enums/role.enum");
const medico_entity_1 = require("./medico.entity");
let EstudanteEntity = (() => {
    let _classDecorators = [(0, typeorm_1.ChildEntity)(role_enum_1.Roles.ESTUDANTE), (0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = user_entity_1.UserEntity;
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
    let _anoIngresso_decorators;
    let _anoIngresso_initializers = [];
    let _anoIngresso_extraInitializers = [];
    let _previsaoConclusao_decorators;
    let _previsaoConclusao_initializers = [];
    let _previsaoConclusao_extraInitializers = [];
    let _areasInteresse_decorators;
    let _areasInteresse_initializers = [];
    let _areasInteresse_extraInitializers = [];
    let _notaMedia_decorators;
    let _notaMedia_initializers = [];
    let _notaMedia_extraInitializers = [];
    let _horasEstudoCompletadas_decorators;
    let _horasEstudoCompletadas_initializers = [];
    let _horasEstudoCompletadas_extraInitializers = [];
    let _simulacoesRealizadas_decorators;
    let _simulacoesRealizadas_initializers = [];
    let _simulacoesRealizadas_extraInitializers = [];
    let _casosClinicosEstudados_decorators;
    let _casosClinicosEstudados_initializers = [];
    let _casosClinicosEstudados_extraInitializers = [];
    let _nivelVR_decorators;
    let _nivelVR_initializers = [];
    let _nivelVR_extraInitializers = [];
    let _orientador_decorators;
    let _orientador_initializers = [];
    let _orientador_extraInitializers = [];
    let _orientadorId_decorators;
    let _orientadorId_initializers = [];
    let _orientadorId_extraInitializers = [];
    let _ultimaSimulacao_decorators;
    let _ultimaSimulacao_initializers = [];
    let _ultimaSimulacao_extraInitializers = [];
    let _ultimoCasoClinico_decorators;
    let _ultimoCasoClinico_initializers = [];
    let _ultimoCasoClinico_extraInitializers = [];
    var EstudanteEntity = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.matricula = __runInitializers(this, _matricula_initializers, void 0);
            this.instituicaoEnsino = (__runInitializers(this, _matricula_extraInitializers), __runInitializers(this, _instituicaoEnsino_initializers, void 0));
            this.curso = (__runInitializers(this, _instituicaoEnsino_extraInitializers), __runInitializers(this, _curso_initializers, void 0));
            this.periodo = (__runInitializers(this, _curso_extraInitializers), __runInitializers(this, _periodo_initializers, void 0));
            this.anoIngresso = (__runInitializers(this, _periodo_extraInitializers), __runInitializers(this, _anoIngresso_initializers, void 0));
            this.previsaoConclusao = (__runInitializers(this, _anoIngresso_extraInitializers), __runInitializers(this, _previsaoConclusao_initializers, void 0));
            // Área de especialização
            this.areasInteresse = (__runInitializers(this, _previsaoConclusao_extraInitializers), __runInitializers(this, _areasInteresse_initializers, void 0));
            // Progresso acadêmico
            this.notaMedia = (__runInitializers(this, _areasInteresse_extraInitializers), __runInitializers(this, _notaMedia_initializers, void 0));
            this.horasEstudoCompletadas = (__runInitializers(this, _notaMedia_extraInitializers), __runInitializers(this, _horasEstudoCompletadas_initializers, void 0));
            this.simulacoesRealizadas = (__runInitializers(this, _horasEstudoCompletadas_extraInitializers), __runInitializers(this, _simulacoesRealizadas_initializers, void 0));
            this.casosClinicosEstudados = (__runInitializers(this, _simulacoesRealizadas_extraInitializers), __runInitializers(this, _casosClinicosEstudados_initializers, void 0));
            // Nível de proficiência em VR
            this.nivelVR = (__runInitializers(this, _casosClinicosEstudados_extraInitializers), __runInitializers(this, _nivelVR_initializers, void 0));
            // Relacionamentos
            this.orientador = (__runInitializers(this, _nivelVR_extraInitializers), __runInitializers(this, _orientador_initializers, void 0));
            this.orientadorId = (__runInitializers(this, _orientador_extraInitializers), __runInitializers(this, _orientadorId_initializers, void 0));
            // Histórico de progresso
            this.ultimaSimulacao = (__runInitializers(this, _orientadorId_extraInitializers), __runInitializers(this, _ultimaSimulacao_initializers, void 0));
            this.ultimoCasoClinico = (__runInitializers(this, _ultimaSimulacao_extraInitializers), __runInitializers(this, _ultimoCasoClinico_initializers, void 0));
            __runInitializers(this, _ultimoCasoClinico_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "EstudanteEntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _matricula_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ length: 20 })];
        _instituicaoEnsino_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ length: 200 })];
        _curso_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ length: 100 })];
        _periodo_decorators = [(0, graphql_1.Field)(() => Number), (0, typeorm_1.Column)({ type: 'int' })];
        _anoIngresso_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 2024 }), (0, typeorm_1.Column)({ type: 'int', default: 2024 })];
        _previsaoConclusao_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true }), (0, typeorm_1.Column)({ type: 'date', nullable: true })];
        _areasInteresse_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true }), (0, typeorm_1.Column)({ type: 'simple-array', nullable: true })];
        _notaMedia_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, default: 0 })];
        _horasEstudoCompletadas_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _simulacoesRealizadas_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _casosClinicosEstudados_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _nivelVR_decorators = [(0, graphql_1.Field)(() => String, { defaultValue: 'INICIANTE' }), (0, typeorm_1.Column)({
                type: 'enum',
                enum: ['INICIANTE', 'INTERMEDIARIO', 'AVANCADO'],
                default: 'INICIANTE'
            })];
        _orientador_decorators = [(0, graphql_1.Field)(() => medico_entity_1.MedicoEntity, { nullable: true }), (0, typeorm_1.ManyToOne)(() => medico_entity_1.MedicoEntity, (medico) => medico.estudantesOrientados, {
                nullable: true,
            })];
        _orientadorId_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true })];
        _ultimaSimulacao_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true }), (0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        _ultimoCasoClinico_decorators = [(0, graphql_1.Field)(() => Date, { nullable: true }), (0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        __esDecorate(null, null, _matricula_decorators, { kind: "field", name: "matricula", static: false, private: false, access: { has: obj => "matricula" in obj, get: obj => obj.matricula, set: (obj, value) => { obj.matricula = value; } }, metadata: _metadata }, _matricula_initializers, _matricula_extraInitializers);
        __esDecorate(null, null, _instituicaoEnsino_decorators, { kind: "field", name: "instituicaoEnsino", static: false, private: false, access: { has: obj => "instituicaoEnsino" in obj, get: obj => obj.instituicaoEnsino, set: (obj, value) => { obj.instituicaoEnsino = value; } }, metadata: _metadata }, _instituicaoEnsino_initializers, _instituicaoEnsino_extraInitializers);
        __esDecorate(null, null, _curso_decorators, { kind: "field", name: "curso", static: false, private: false, access: { has: obj => "curso" in obj, get: obj => obj.curso, set: (obj, value) => { obj.curso = value; } }, metadata: _metadata }, _curso_initializers, _curso_extraInitializers);
        __esDecorate(null, null, _periodo_decorators, { kind: "field", name: "periodo", static: false, private: false, access: { has: obj => "periodo" in obj, get: obj => obj.periodo, set: (obj, value) => { obj.periodo = value; } }, metadata: _metadata }, _periodo_initializers, _periodo_extraInitializers);
        __esDecorate(null, null, _anoIngresso_decorators, { kind: "field", name: "anoIngresso", static: false, private: false, access: { has: obj => "anoIngresso" in obj, get: obj => obj.anoIngresso, set: (obj, value) => { obj.anoIngresso = value; } }, metadata: _metadata }, _anoIngresso_initializers, _anoIngresso_extraInitializers);
        __esDecorate(null, null, _previsaoConclusao_decorators, { kind: "field", name: "previsaoConclusao", static: false, private: false, access: { has: obj => "previsaoConclusao" in obj, get: obj => obj.previsaoConclusao, set: (obj, value) => { obj.previsaoConclusao = value; } }, metadata: _metadata }, _previsaoConclusao_initializers, _previsaoConclusao_extraInitializers);
        __esDecorate(null, null, _areasInteresse_decorators, { kind: "field", name: "areasInteresse", static: false, private: false, access: { has: obj => "areasInteresse" in obj, get: obj => obj.areasInteresse, set: (obj, value) => { obj.areasInteresse = value; } }, metadata: _metadata }, _areasInteresse_initializers, _areasInteresse_extraInitializers);
        __esDecorate(null, null, _notaMedia_decorators, { kind: "field", name: "notaMedia", static: false, private: false, access: { has: obj => "notaMedia" in obj, get: obj => obj.notaMedia, set: (obj, value) => { obj.notaMedia = value; } }, metadata: _metadata }, _notaMedia_initializers, _notaMedia_extraInitializers);
        __esDecorate(null, null, _horasEstudoCompletadas_decorators, { kind: "field", name: "horasEstudoCompletadas", static: false, private: false, access: { has: obj => "horasEstudoCompletadas" in obj, get: obj => obj.horasEstudoCompletadas, set: (obj, value) => { obj.horasEstudoCompletadas = value; } }, metadata: _metadata }, _horasEstudoCompletadas_initializers, _horasEstudoCompletadas_extraInitializers);
        __esDecorate(null, null, _simulacoesRealizadas_decorators, { kind: "field", name: "simulacoesRealizadas", static: false, private: false, access: { has: obj => "simulacoesRealizadas" in obj, get: obj => obj.simulacoesRealizadas, set: (obj, value) => { obj.simulacoesRealizadas = value; } }, metadata: _metadata }, _simulacoesRealizadas_initializers, _simulacoesRealizadas_extraInitializers);
        __esDecorate(null, null, _casosClinicosEstudados_decorators, { kind: "field", name: "casosClinicosEstudados", static: false, private: false, access: { has: obj => "casosClinicosEstudados" in obj, get: obj => obj.casosClinicosEstudados, set: (obj, value) => { obj.casosClinicosEstudados = value; } }, metadata: _metadata }, _casosClinicosEstudados_initializers, _casosClinicosEstudados_extraInitializers);
        __esDecorate(null, null, _nivelVR_decorators, { kind: "field", name: "nivelVR", static: false, private: false, access: { has: obj => "nivelVR" in obj, get: obj => obj.nivelVR, set: (obj, value) => { obj.nivelVR = value; } }, metadata: _metadata }, _nivelVR_initializers, _nivelVR_extraInitializers);
        __esDecorate(null, null, _orientador_decorators, { kind: "field", name: "orientador", static: false, private: false, access: { has: obj => "orientador" in obj, get: obj => obj.orientador, set: (obj, value) => { obj.orientador = value; } }, metadata: _metadata }, _orientador_initializers, _orientador_extraInitializers);
        __esDecorate(null, null, _orientadorId_decorators, { kind: "field", name: "orientadorId", static: false, private: false, access: { has: obj => "orientadorId" in obj, get: obj => obj.orientadorId, set: (obj, value) => { obj.orientadorId = value; } }, metadata: _metadata }, _orientadorId_initializers, _orientadorId_extraInitializers);
        __esDecorate(null, null, _ultimaSimulacao_decorators, { kind: "field", name: "ultimaSimulacao", static: false, private: false, access: { has: obj => "ultimaSimulacao" in obj, get: obj => obj.ultimaSimulacao, set: (obj, value) => { obj.ultimaSimulacao = value; } }, metadata: _metadata }, _ultimaSimulacao_initializers, _ultimaSimulacao_extraInitializers);
        __esDecorate(null, null, _ultimoCasoClinico_decorators, { kind: "field", name: "ultimoCasoClinico", static: false, private: false, access: { has: obj => "ultimoCasoClinico" in obj, get: obj => obj.ultimoCasoClinico, set: (obj, value) => { obj.ultimoCasoClinico = value; } }, metadata: _metadata }, _ultimoCasoClinico_initializers, _ultimoCasoClinico_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EstudanteEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EstudanteEntity = _classThis;
})();
exports.EstudanteEntity = EstudanteEntity;
