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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const graphql_config_1 = __importDefault(require("./configs/graphql.config"));
const orm_config_1 = __importDefault(require("./configs/orm.config"));
const auth_module_1 = require("./modules/auth/auth.module");
const usuarios_module_1 = require("./modules/usuarios/usuarios.module");
const conteudo_educacional_module_1 = require("./modules/conteudo-educacional/conteudo-educacional.module");
const salas_vr_module_1 = require("./modules/salas-vr/salas-vr.module");
const blacklist_module_1 = require("./modules/blacklist/blacklist.module");
const email_module_1 = require("./modules/email/email.module");
const vr_integration_module_1 = require("./modules/vr-integration/vr-integration.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuarios_module_1.UsuariosModule,
            auth_module_1.AuthModule,
            conteudo_educacional_module_1.ConteudoEducacionalModule,
            salas_vr_module_1.SalasVRModule,
            blacklist_module_1.BlacklistModule,
            email_module_1.EmailModule,
            vr_integration_module_1.VrIntegrationModule,
            graphql_1.GraphQLModule.forRoot(graphql_config_1.default),
            typeorm_1.TypeOrmModule.forRoot(orm_config_1.default),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.resolve)('/assets'),
                exclude: ['/api*', '/graphql'],
                serveRoot: '/assets',
                serveStaticOptions: {
                    index: false,
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map