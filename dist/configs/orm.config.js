"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const { type, host, port, database, password, username, synchronize, migrationsRun, logging, sslmode, ssl, } = config_1.default.get('db');
exports.default = {
    type: (_a = process.env.TYPE) !== null && _a !== void 0 ? _a : type,
    host: (_b = process.env.POSTGRES_HOST) !== null && _b !== void 0 ? _b : host,
    port: (_c = process.env.POSTGRES_PORT) !== null && _c !== void 0 ? _c : port,
    database: (_d = process.env.POSTGRES_DB) !== null && _d !== void 0 ? _d : database,
    password: (_e = process.env.POSTGRES_PASSWORD) !== null && _e !== void 0 ? _e : password,
    username: (_f = process.env.POSTGRES_USER) !== null && _f !== void 0 ? _f : username,
    synchronize,
    migrationsRun,
    logging,
    ssl,
    entities: ['dist/modules/**/*.entity{.ts,.js}'],
    migrations: ['dist/db/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_typeorm',
    cli: {
        migrationsDir: 'src/db/migrations',
        entitiesDir: 'src/modules/**/*.entity{.ts,.js}',
    },
};
//# sourceMappingURL=orm.config.js.map