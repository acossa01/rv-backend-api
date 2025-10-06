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
exports.AtualizarConteudoEducacionalInput = exports.ConteudoEducacionalInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const conteudo_educacional_enum_1 = require("../../../enums/conteudo-educacional.enum");
let ConteudoEducacionalInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
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
    var ConteudoEducacionalInput = _classThis = class {
        constructor() {
            this.titulo = __runInitializers(this, _titulo_initializers, void 0);
            this.descricao = (__runInitializers(this, _titulo_extraInitializers), __runInitializers(this, _descricao_initializers, void 0));
            this.tipoConteudo = (__runInitializers(this, _descricao_extraInitializers), __runInitializers(this, _tipoConteudo_initializers, void 0));
            this.conteudoDetalhado = (__runInitializers(this, _tipoConteudo_extraInitializers), __runInitializers(this, _conteudoDetalhado_initializers, void 0));
            this.urlModeloVR = (__runInitializers(this, _conteudoDetalhado_extraInitializers), __runInitializers(this, _urlModeloVR_initializers, void 0));
            this.urlTextura = (__runInitializers(this, _urlModeloVR_extraInitializers), __runInitializers(this, _urlTextura_initializers, void 0));
            this.tagsVR = (__runInitializers(this, _urlTextura_extraInitializers), __runInitializers(this, _tagsVR_initializers, void 0));
            this.nivelDificuldade = (__runInitializers(this, _tagsVR_extraInitializers), __runInitializers(this, _nivelDificuldade_initializers, void 0));
            this.duracaoEstimadaMinutos = (__runInitializers(this, _nivelDificuldade_extraInitializers), __runInitializers(this, _duracaoEstimadaMinutos_initializers, void 0));
            this.dadosEspecificos = (__runInitializers(this, _duracaoEstimadaMinutos_extraInitializers), __runInitializers(this, _dadosEspecificos_initializers, void 0));
            this.versao = (__runInitializers(this, _dadosEspecificos_extraInitializers), __runInitializers(this, _versao_initializers, void 0));
            __runInitializers(this, _versao_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "ConteudoEducacionalInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _titulo_decorators = [(0, graphql_1.Field)(() => String)];
        _descricao_decorators = [(0, graphql_1.Field)(() => String)];
        _tipoConteudo_decorators = [(0, graphql_1.Field)(() => conteudo_educacional_enum_1.TipoConteudo)];
        _conteudoDetalhado_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _urlModeloVR_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _urlTextura_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _tagsVR_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true })];
        _nivelDificuldade_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _duracaoEstimadaMinutos_decorators = [(0, graphql_1.Field)(() => Number, { nullable: true })];
        _dadosEspecificos_decorators = [(0, graphql_1.Field)(() => String, { nullable: true, description: 'Campo JSON serializado em string (opcional)' })];
        _versao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
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
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ConteudoEducacionalInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ConteudoEducacionalInput = _classThis;
})();
exports.ConteudoEducacionalInput = ConteudoEducacionalInput;
let AtualizarConteudoEducacionalInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
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
    var AtualizarConteudoEducacionalInput = _classThis = class {
        constructor() {
            this.titulo = __runInitializers(this, _titulo_initializers, void 0);
            this.descricao = (__runInitializers(this, _titulo_extraInitializers), __runInitializers(this, _descricao_initializers, void 0));
            this.tipoConteudo = (__runInitializers(this, _descricao_extraInitializers), __runInitializers(this, _tipoConteudo_initializers, void 0));
            this.conteudoDetalhado = (__runInitializers(this, _tipoConteudo_extraInitializers), __runInitializers(this, _conteudoDetalhado_initializers, void 0));
            this.urlModeloVR = (__runInitializers(this, _conteudoDetalhado_extraInitializers), __runInitializers(this, _urlModeloVR_initializers, void 0));
            this.urlTextura = (__runInitializers(this, _urlModeloVR_extraInitializers), __runInitializers(this, _urlTextura_initializers, void 0));
            this.tagsVR = (__runInitializers(this, _urlTextura_extraInitializers), __runInitializers(this, _tagsVR_initializers, void 0));
            this.nivelDificuldade = (__runInitializers(this, _tagsVR_extraInitializers), __runInitializers(this, _nivelDificuldade_initializers, void 0));
            this.duracaoEstimadaMinutos = (__runInitializers(this, _nivelDificuldade_extraInitializers), __runInitializers(this, _duracaoEstimadaMinutos_initializers, void 0));
            this.dadosEspecificos = (__runInitializers(this, _duracaoEstimadaMinutos_extraInitializers), __runInitializers(this, _dadosEspecificos_initializers, void 0));
            this.versao = (__runInitializers(this, _dadosEspecificos_extraInitializers), __runInitializers(this, _versao_initializers, void 0));
            __runInitializers(this, _versao_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "AtualizarConteudoEducacionalInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _titulo_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _descricao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _tipoConteudo_decorators = [(0, graphql_1.Field)(() => conteudo_educacional_enum_1.TipoConteudo, { nullable: true })];
        _conteudoDetalhado_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _urlModeloVR_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _urlTextura_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _tagsVR_decorators = [(0, graphql_1.Field)(() => [String], { nullable: true })];
        _nivelDificuldade_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
        _duracaoEstimadaMinutos_decorators = [(0, graphql_1.Field)(() => Number, { nullable: true })];
        _dadosEspecificos_decorators = [(0, graphql_1.Field)(() => String, { nullable: true, description: 'Campo JSON serializado em string (opcional)' })];
        _versao_decorators = [(0, graphql_1.Field)(() => String, { nullable: true })];
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
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AtualizarConteudoEducacionalInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AtualizarConteudoEducacionalInput = _classThis;
})();
exports.AtualizarConteudoEducacionalInput = AtualizarConteudoEducacionalInput;
