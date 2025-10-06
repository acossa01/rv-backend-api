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
exports.ConteudoEducacionalService = void 0;
const common_1 = require("@nestjs/common");
const conteudo_educacional_enum_1 = require("../../enums/conteudo-educacional.enum");
const role_enum_1 = require("../../enums/role.enum");
const status_entities_1 = require("../../enums/status.entities");
let ConteudoEducacionalService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ConteudoEducacionalService = _classThis = class {
        constructor(conteudoRepository) {
            this.conteudoRepository = conteudoRepository;
        }
        /**
         * Obter conteúdos permitidos baseado no role do usuário
         */
        async obterConteudosPermitidos(userRole) {
            const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);
            return this.conteudoRepository.find({
                where: {
                    tipoConteudo: tiposPermitidos.length === 1 ? tiposPermitidos[0] : undefined,
                    status: status_entities_1.Status.ACTIVE,
                },
                relations: ['autorMedico'],
                order: { dataCriacao: 'DESC' },
            });
        }
        /**
         * Obter conteúdo específico por ID, verificando permissões
         */
        async obterConteudoPorId(id, userRole) {
            const conteudo = await this.conteudoRepository.findOne({
                where: { id, status: status_entities_1.Status.ACTIVE },
                relations: ['autorMedico'],
            });
            if (!conteudo) {
                throw new common_1.NotFoundException('Conteúdo não encontrado');
            }
            this.verificarPermissaoAcesso(conteudo.tipoConteudo, userRole);
            // Incrementar visualizações
            await this.incrementarVisualizacao(id);
            return conteudo;
        }
        /**
         * Buscar conteúdos por tipo específico
         */
        async buscarPorTipo(tipo, userRole) {
            this.verificarPermissaoAcesso(tipo, userRole);
            return this.conteudoRepository.find({
                where: {
                    tipoConteudo: tipo,
                    status: status_entities_1.Status.ACTIVE,
                },
                relations: ['autorMedico'],
                order: { avaliacaoMedia: 'DESC', totalVisualizacoes: 'DESC' },
            });
        }
        /**
         * Buscar conteúdos por nível de dificuldade
         */
        async buscarPorNivel(nivel, userRole) {
            const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);
            return this.conteudoRepository.find({
                where: {
                    nivelDificuldade: nivel,
                    status: status_entities_1.Status.ACTIVE,
                    tipoConteudo: tiposPermitidos.length === 1 ? tiposPermitidos[0] : undefined,
                },
                relations: ['autorMedico'],
                order: { avaliacaoMedia: 'DESC' },
            });
        }
        /**
         * Criar novo conteúdo (apenas médicos)
         */
        async criarConteudo(dadosConteudo, autorId, userRole) {
            if (userRole !== role_enum_1.Roles.MEDICO) {
                throw new common_1.ForbiddenException('Apenas médicos podem criar conteúdo');
            }
            const novoConteudo = this.conteudoRepository.create({
                ...dadosConteudo,
                autorMedicoId: autorId,
                dataPublicacao: new Date(),
            });
            return this.conteudoRepository.save(novoConteudo);
        }
        /**
         * Atualizar conteúdo existente
         */
        async atualizarConteudo(id, dadosAtualizacao, userId, userRole) {
            if (userRole !== role_enum_1.Roles.MEDICO) {
                throw new common_1.ForbiddenException('Apenas médicos podem atualizar conteúdo');
            }
            const conteudo = await this.conteudoRepository.findOne({
                where: { id },
                relations: ['autorMedico'],
            });
            if (!conteudo) {
                throw new common_1.NotFoundException('Conteúdo não encontrado');
            }
            // Verificar se o médico é o autor do conteúdo
            if (conteudo.autorMedicoId !== userId) {
                throw new common_1.ForbiddenException('Você só pode atualizar seus próprios conteúdos');
            }
            Object.assign(conteudo, dadosAtualizacao);
            return this.conteudoRepository.save(conteudo);
        }
        /**
         * Avaliar conteúdo
         */
        async avaliarConteudo(id, nota, userRole) {
            const conteudo = await this.obterConteudoPorId(id, userRole);
            // Calcular nova média
            const totalAvaliacoes = conteudo.totalAvaliacoes + 1;
            const novaMedia = ((conteudo.avaliacaoMedia * conteudo.totalAvaliacoes) + nota) / totalAvaliacoes;
            conteudo.avaliacaoMedia = Number(novaMedia.toFixed(2));
            conteudo.totalAvaliacoes = totalAvaliacoes;
            return this.conteudoRepository.save(conteudo);
        }
        /**
         * Incrementar contador de visualizações
         */
        async incrementarVisualizacao(id) {
            await this.conteudoRepository.increment({ id }, 'totalVisualizacoes', 1);
        }
        /**
         * Obter tipos de conteúdo permitidos por role
         */
        obterTiposPermitidosPorRole(role) {
            switch (role) {
                case role_enum_1.Roles.USUARIO_COMUM:
                    return [conteudo_educacional_enum_1.TipoConteudo.GERAL];
                case role_enum_1.Roles.ESTUDANTE:
                    return [conteudo_educacional_enum_1.TipoConteudo.GERAL, conteudo_educacional_enum_1.TipoConteudo.APRENDIZADO_CLINICO];
                case role_enum_1.Roles.MEDICO:
                    return [conteudo_educacional_enum_1.TipoConteudo.GERAL, conteudo_educacional_enum_1.TipoConteudo.APRENDIZADO_CLINICO, conteudo_educacional_enum_1.TipoConteudo.CIRURGIA];
                default:
                    return [];
            }
        }
        /**
         * Verificar se o usuário tem permissão para acessar um tipo de conteúdo
         */
        verificarPermissaoAcesso(tipoConteudo, userRole) {
            const tiposPermitidos = this.obterTiposPermitidosPorRole(userRole);
            if (!tiposPermitidos.includes(tipoConteudo)) {
                throw new common_1.ForbiddenException(`Usuário com role ${userRole} não tem permissão para acessar conteúdo do tipo ${tipoConteudo}`);
            }
        }
    };
    __setFunctionName(_classThis, "ConteudoEducacionalService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ConteudoEducacionalService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ConteudoEducacionalService = _classThis;
})();
exports.ConteudoEducacionalService = ConteudoEducacionalService;
