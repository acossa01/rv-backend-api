"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const usuario_comum_entity_1 = require("./entities/usuario-comum.entity");
const medico_entity_1 = require("./entities/medico.entity");
const estudante_entity_1 = require("./entities/estudante.entity");
const role_enum_1 = require("../../enums/role.enum");
const status_entities_1 = require("../../enums/status.entities");
const bcrypt = __importStar(require("bcrypt"));
let UsuariosService = class UsuariosService {
    constructor(userRepository, usuarioComumRepository, medicoRepository, estudanteRepository) {
        this.userRepository = userRepository;
        this.usuarioComumRepository = usuarioComumRepository;
        this.medicoRepository = medicoRepository;
        this.estudanteRepository = estudanteRepository;
    }
    async findByEmail(email) {
        return this.userRepository.findOne({
            where: { email, status: status_entities_1.Status.ACTIVE },
        });
    }
    async findById(id) {
        return this.userRepository.findOne({
            where: { id, status: status_entities_1.Status.ACTIVE },
        });
    }
    async criarUsuarioComum(dados) {
        const existeEmail = await this.userRepository.findOne({
            where: { email: dados.email },
        });
        if (existeEmail) {
            throw new common_1.ConflictException('Email já está em uso');
        }
        const senhaHash = await bcrypt.hash(dados.senha, 10);
        const novoUsuario = this.usuarioComumRepository.create(Object.assign(Object.assign({}, dados), { senha: senhaHash, tipoUsuario: role_enum_1.Roles.USUARIO_COMUM, status: status_entities_1.Status.ACTIVE }));
        return this.usuarioComumRepository.save(novoUsuario);
    }
    async criarMedico(dados) {
        const existeEmail = await this.userRepository.findOne({
            where: { email: dados.email },
        });
        if (existeEmail) {
            throw new common_1.ConflictException('Email já está em uso');
        }
        const existeCRM = await this.medicoRepository.findOne({
            where: { crm: dados.crm },
        });
        if (existeCRM) {
            throw new common_1.ConflictException('CRM já está cadastrado');
        }
        const senhaHash = await bcrypt.hash(dados.senha, 10);
        const novoMedico = this.medicoRepository.create(Object.assign(Object.assign({}, dados), { senha: senhaHash, tipoUsuario: role_enum_1.Roles.MEDICO, status: status_entities_1.Status.ACTIVE }));
        return this.medicoRepository.save(novoMedico);
    }
    async criarEstudante(dados) {
        const existeEmail = await this.userRepository.findOne({
            where: { email: dados.email },
        });
        if (existeEmail) {
            throw new common_1.ConflictException('Email já está em uso');
        }
        const existeMatricula = await this.estudanteRepository.findOne({
            where: { matricula: dados.matricula },
        });
        if (existeMatricula) {
            throw new common_1.ConflictException('Matrícula já está cadastrada');
        }
        const senhaHash = await bcrypt.hash(dados.senha, 10);
        const novoEstudante = this.estudanteRepository.create(Object.assign(Object.assign({}, dados), { senha: senhaHash, tipoUsuario: role_enum_1.Roles.ESTUDANTE, status: status_entities_1.Status.ACTIVE }));
        return this.estudanteRepository.save(novoEstudante);
    }
    async validarCredenciais(email, senha) {
        const usuario = await this.findByEmail(email);
        if (!usuario) {
            return null;
        }
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return null;
        }
        await this.atualizarUltimoAcesso(usuario.id);
        const { senha: _ } = usuario, usuarioSemSenha = __rest(usuario, ["senha"]);
        return usuarioSemSenha;
    }
    async obterPerfilCompleto(userId) {
        const usuario = await this.findById(userId);
        if (!usuario) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        let perfilCompleto;
        switch (usuario.tipoUsuario) {
            case role_enum_1.Roles.USUARIO_COMUM:
                perfilCompleto = await this.usuarioComumRepository.findOne({
                    where: { id: userId },
                });
                break;
            case role_enum_1.Roles.MEDICO:
                perfilCompleto = await this.medicoRepository.findOne({
                    where: { id: userId },
                    relations: ['estudantesOrientados'],
                });
                break;
            case role_enum_1.Roles.ESTUDANTE:
                perfilCompleto = await this.estudanteRepository.findOne({
                    where: { id: userId },
                    relations: ['orientador'],
                });
                break;
            default:
                perfilCompleto = usuario;
        }
        if (!perfilCompleto) {
            throw new common_1.NotFoundException('Perfil não encontrado');
        }
        return perfilCompleto;
    }
    async atualizarUltimoAcesso(userId) {
        await this.userRepository.update(userId, {
            dataUltimoAcesso: new Date(),
        });
    }
    async alterarStatusUsuario(userId, novoStatus) {
        const usuario = await this.findById(userId);
        if (!usuario) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        await this.userRepository.update(userId, { status: novoStatus });
        return this.findById(userId);
    }
    async listarUsuariosPorTipo(tipo) {
        return this.userRepository.find({
            where: { tipoUsuario: tipo, status: status_entities_1.Status.ACTIVE },
            order: { nomeCompleto: 'ASC' },
        });
    }
    async buscarMedicosOrientadores() {
        return this.medicoRepository.find({
            where: {
                status: status_entities_1.Status.ACTIVE,
                ehProfessor: true,
            },
            order: { nomeCompleto: 'ASC' },
        });
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_comum_entity_1.UsuarioComumEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(medico_entity_1.MedicoEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(estudante_entity_1.EstudanteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map