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
exports.MedicoEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const role_enum_1 = require("../../../enums/role.enum");
const estudante_entity_1 = require("./estudante.entity");
let MedicoEntity = (() => {
    let _classDecorators = [(0, typeorm_1.ChildEntity)(role_enum_1.Roles.MEDICO), (0, graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = user_entity_1.UserEntity;
    let _crm_decorators;
    let _crm_initializers = [];
    let _crm_extraInitializers = [];
    let _ufCrm_decorators;
    let _ufCrm_initializers = [];
    let _ufCrm_extraInitializers = [];
    let _especialidades_decorators;
    let _especialidades_initializers = [];
    let _especialidades_extraInitializers = [];
    let _anosExperiencia_decorators;
    let _anosExperiencia_initializers = [];
    let _anosExperiencia_extraInitializers = [];
    let _instituicao_decorators;
    let _instituicao_initializers = [];
    let _instituicao_extraInitializers = [];
    let _biografia_decorators;
    let _biografia_initializers = [];
    let _biografia_extraInitializers = [];
    let _enderecoConsultorio_decorators;
    let _enderecoConsultorio_initializers = [];
    let _enderecoConsultorio_extraInitializers = [];
    let _cidadeConsultorio_decorators;
    let _cidadeConsultorio_initializers = [];
    let _cidadeConsultorio_extraInitializers = [];
    let _ufConsultorio_decorators;
    let _ufConsultorio_initializers = [];
    let _ufConsultorio_extraInitializers = [];
    let _podeCriarConteudo_decorators;
    let _podeCriarConteudo_initializers = [];
    let _podeCriarConteudo_extraInitializers = [];
    let _ehProfessor_decorators;
    let _ehProfessor_initializers = [];
    let _ehProfessor_extraInitializers = [];
    let _totalConteudosCriados_decorators;
    let _totalConteudosCriados_initializers = [];
    let _totalConteudosCriados_extraInitializers = [];
    let _totalEstudantesOrientados_decorators;
    let _totalEstudantesOrientados_initializers = [];
    let _totalEstudantesOrientados_extraInitializers = [];
    let _estudantesOrientados_decorators;
    let _estudantesOrientados_initializers = [];
    let _estudantesOrientados_extraInitializers = [];
    var MedicoEntity = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.crm = __runInitializers(this, _crm_initializers, void 0);
            this.ufCrm = (__runInitializers(this, _crm_extraInitializers), __runInitializers(this, _ufCrm_initializers, void 0));
            this.especialidades = (__runInitializers(this, _ufCrm_extraInitializers), __runInitializers(this, _especialidades_initializers, void 0));
            this.anosExperiencia = (__runInitializers(this, _especialidades_extraInitializers), __runInitializers(this, _anosExperiencia_initializers, void 0));
            this.instituicao = (__runInitializers(this, _anosExperiencia_extraInitializers), __runInitializers(this, _instituicao_initializers, void 0));
            this.biografia = (__runInitializers(this, _instituicao_extraInitializers), __runInitializers(this, _biografia_initializers, void 0));
            // Informações profissionais
            this.enderecoConsultorio = (__runInitializers(this, _biografia_extraInitializers), __runInitializers(this, _enderecoConsultorio_initializers, void 0));
            this.cidadeConsultorio = (__runInitializers(this, _enderecoConsultorio_extraInitializers), __runInitializers(this, _cidadeConsultorio_initializers, void 0));
            this.ufConsultorio = (__runInitializers(this, _cidadeConsultorio_extraInitializers), __runInitializers(this, _ufConsultorio_initializers, void 0));
            // Capacidades na plataforma
            this.podeCriarConteudo = (__runInitializers(this, _ufConsultorio_extraInitializers), __runInitializers(this, _podeCriarConteudo_initializers, void 0));
            this.ehProfessor = (__runInitializers(this, _podeCriarConteudo_extraInitializers), __runInitializers(this, _ehProfessor_initializers, void 0));
            // Estatísticas
            this.totalConteudosCriados = (__runInitializers(this, _ehProfessor_extraInitializers), __runInitializers(this, _totalConteudosCriados_initializers, void 0));
            this.totalEstudantesOrientados = (__runInitializers(this, _totalConteudosCriados_extraInitializers), __runInitializers(this, _totalEstudantesOrientados_initializers, void 0));
            // Relacionamentos
            this.estudantesOrientados = (__runInitializers(this, _totalEstudantesOrientados_extraInitializers), __runInitializers(this, _estudantesOrientados_initializers, void 0));
            __runInitializers(this, _estudantesOrientados_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "MedicoEntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _crm_decorators = [(0, graphql_1.Field)(() => String), (0, typeorm_1.Column)({ length: 20, unique: true })];
        _ufCrm_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 2 })];
        _especialidades_decorators = [(0, graphql_1.Field)(() => [String]), (0, typeorm_1.Column)({ type: 'simple-array' })];
        _anosExperiencia_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _instituicao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 200 })];
        _biografia_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _enderecoConsultorio_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 100 })];
        _cidadeConsultorio_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 50 })];
        _ufConsultorio_decorators = [(0, graphql_1.Field)(() => String, { nullable: true }), (0, typeorm_1.Column)({ nullable: true, length: 2 })];
        _podeCriarConteudo_decorators = [(0, graphql_1.Field)(() => Boolean, { defaultValue: false }), (0, typeorm_1.Column)({ type: 'boolean', default: false })];
        _ehProfessor_decorators = [(0, graphql_1.Field)(() => Boolean, { defaultValue: false }), (0, typeorm_1.Column)({ type: 'boolean', default: false })];
        _totalConteudosCriados_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _totalEstudantesOrientados_decorators = [(0, graphql_1.Field)(() => Number, { defaultValue: 0 }), (0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _estudantesOrientados_decorators = [(0, graphql_1.Field)(() => [estudante_entity_1.EstudanteEntity], { nullable: true }), (0, typeorm_1.OneToMany)(() => estudante_entity_1.EstudanteEntity, (estudante) => estudante.orientador, {
                nullable: true,
            })];
        __esDecorate(null, null, _crm_decorators, { kind: "field", name: "crm", static: false, private: false, access: { has: obj => "crm" in obj, get: obj => obj.crm, set: (obj, value) => { obj.crm = value; } }, metadata: _metadata }, _crm_initializers, _crm_extraInitializers);
        __esDecorate(null, null, _ufCrm_decorators, { kind: "field", name: "ufCrm", static: false, private: false, access: { has: obj => "ufCrm" in obj, get: obj => obj.ufCrm, set: (obj, value) => { obj.ufCrm = value; } }, metadata: _metadata }, _ufCrm_initializers, _ufCrm_extraInitializers);
        __esDecorate(null, null, _especialidades_decorators, { kind: "field", name: "especialidades", static: false, private: false, access: { has: obj => "especialidades" in obj, get: obj => obj.especialidades, set: (obj, value) => { obj.especialidades = value; } }, metadata: _metadata }, _especialidades_initializers, _especialidades_extraInitializers);
        __esDecorate(null, null, _anosExperiencia_decorators, { kind: "field", name: "anosExperiencia", static: false, private: false, access: { has: obj => "anosExperiencia" in obj, get: obj => obj.anosExperiencia, set: (obj, value) => { obj.anosExperiencia = value; } }, metadata: _metadata }, _anosExperiencia_initializers, _anosExperiencia_extraInitializers);
        __esDecorate(null, null, _instituicao_decorators, { kind: "field", name: "instituicao", static: false, private: false, access: { has: obj => "instituicao" in obj, get: obj => obj.instituicao, set: (obj, value) => { obj.instituicao = value; } }, metadata: _metadata }, _instituicao_initializers, _instituicao_extraInitializers);
        __esDecorate(null, null, _biografia_decorators, { kind: "field", name: "biografia", static: false, private: false, access: { has: obj => "biografia" in obj, get: obj => obj.biografia, set: (obj, value) => { obj.biografia = value; } }, metadata: _metadata }, _biografia_initializers, _biografia_extraInitializers);
        __esDecorate(null, null, _enderecoConsultorio_decorators, { kind: "field", name: "enderecoConsultorio", static: false, private: false, access: { has: obj => "enderecoConsultorio" in obj, get: obj => obj.enderecoConsultorio, set: (obj, value) => { obj.enderecoConsultorio = value; } }, metadata: _metadata }, _enderecoConsultorio_initializers, _enderecoConsultorio_extraInitializers);
        __esDecorate(null, null, _cidadeConsultorio_decorators, { kind: "field", name: "cidadeConsultorio", static: false, private: false, access: { has: obj => "cidadeConsultorio" in obj, get: obj => obj.cidadeConsultorio, set: (obj, value) => { obj.cidadeConsultorio = value; } }, metadata: _metadata }, _cidadeConsultorio_initializers, _cidadeConsultorio_extraInitializers);
        __esDecorate(null, null, _ufConsultorio_decorators, { kind: "field", name: "ufConsultorio", static: false, private: false, access: { has: obj => "ufConsultorio" in obj, get: obj => obj.ufConsultorio, set: (obj, value) => { obj.ufConsultorio = value; } }, metadata: _metadata }, _ufConsultorio_initializers, _ufConsultorio_extraInitializers);
        __esDecorate(null, null, _podeCriarConteudo_decorators, { kind: "field", name: "podeCriarConteudo", static: false, private: false, access: { has: obj => "podeCriarConteudo" in obj, get: obj => obj.podeCriarConteudo, set: (obj, value) => { obj.podeCriarConteudo = value; } }, metadata: _metadata }, _podeCriarConteudo_initializers, _podeCriarConteudo_extraInitializers);
        __esDecorate(null, null, _ehProfessor_decorators, { kind: "field", name: "ehProfessor", static: false, private: false, access: { has: obj => "ehProfessor" in obj, get: obj => obj.ehProfessor, set: (obj, value) => { obj.ehProfessor = value; } }, metadata: _metadata }, _ehProfessor_initializers, _ehProfessor_extraInitializers);
        __esDecorate(null, null, _totalConteudosCriados_decorators, { kind: "field", name: "totalConteudosCriados", static: false, private: false, access: { has: obj => "totalConteudosCriados" in obj, get: obj => obj.totalConteudosCriados, set: (obj, value) => { obj.totalConteudosCriados = value; } }, metadata: _metadata }, _totalConteudosCriados_initializers, _totalConteudosCriados_extraInitializers);
        __esDecorate(null, null, _totalEstudantesOrientados_decorators, { kind: "field", name: "totalEstudantesOrientados", static: false, private: false, access: { has: obj => "totalEstudantesOrientados" in obj, get: obj => obj.totalEstudantesOrientados, set: (obj, value) => { obj.totalEstudantesOrientados = value; } }, metadata: _metadata }, _totalEstudantesOrientados_initializers, _totalEstudantesOrientados_extraInitializers);
        __esDecorate(null, null, _estudantesOrientados_decorators, { kind: "field", name: "estudantesOrientados", static: false, private: false, access: { has: obj => "estudantesOrientados" in obj, get: obj => obj.estudantesOrientados, set: (obj, value) => { obj.estudantesOrientados = value; } }, metadata: _metadata }, _estudantesOrientados_initializers, _estudantesOrientados_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MedicoEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MedicoEntity = _classThis;
})();
exports.MedicoEntity = MedicoEntity;
