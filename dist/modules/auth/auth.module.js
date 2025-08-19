"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = __importDefault(require("config"));
const auth_service_1 = require("./auth.service");
const auth_resolver_1 = require("./auth.resolver");
const jwt_strategy_1 = require("./jwt.strategy");
const local_strategy_1 = require("./strategies/local.strategy");
const jwt_guard_1 = require("../../guards/jwt.guard");
const user_entity_1 = require("../usuarios/entities/user.entity");
const usuario_comum_entity_1 = require("../usuarios/entities/usuario-comum.entity");
const medico_entity_1 = require("../usuarios/entities/medico.entity");
const estudante_entity_1 = require("../usuarios/entities/estudante.entity");
const usuarios_module_1 = require("../usuarios/usuarios.module");
const email_module_1 = require("../email/email.module");
const blacklist_module_1 = require("../blacklist/blacklist.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            usuarios_module_1.UsuariosModule,
            email_module_1.EmailModule,
            blacklist_module_1.BlacklistModule,
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.UserEntity,
                usuario_comum_entity_1.UsuarioComumEntity,
                medico_entity_1.MedicoEntity,
                estudante_entity_1.EstudanteEntity
            ]),
            jwt_1.JwtModule.register({
                secret: config_1.default.get('jwt.secret'),
                signOptions: {
                    expiresIn: config_1.default.get('jwt.signOptions.expiresIn'),
                },
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            auth_resolver_1.AuthResolver,
            jwt_strategy_1.JwtStrategy,
            local_strategy_1.LocalStrategy,
            jwt_guard_1.JwtGuard,
        ],
        exports: [auth_service_1.AuthService, jwt_1.JwtModule, jwt_guard_1.JwtGuard],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map