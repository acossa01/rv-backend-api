"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
// 1. Pega todas as configurações do banco de dados do arquivo .yml
const dbConfig = config_1.default.get('db');
// 2. Define a configuração SSL de forma clara e separada
//    Prioriza a variável de ambiente, se não existir, usa o valor do arquivo .yml
const useSsl = process.env.SSL === 'true' || dbConfig.ssl;
exports.default = {
    type: process.env.TYPE ?? dbConfig.type,
    host: process.env.POSTGRES_HOST ?? dbConfig.host,
    port: process.env.POSTGRES_PORT ?? dbConfig.port,
    database: process.env.POSTGRES_DB ?? dbConfig.database,
    password: process.env.POSTGRES_PASSWORD ?? dbConfig.password,
    username: process.env.POSTGRES_USER ?? dbConfig.username,
    synchronize: dbConfig.synchronize,
    migrationsRun: dbConfig.migrationsRun,
    logging: dbConfig.logging,
    // 3. Usa a variável 'useSsl' para montar o objeto de configuração do SSL
    ssl: useSsl ? { rejectUnauthorized: false } : false,
    entities: ['dist/modules/**/*.entity{.ts,.js}'],
    migrations: ['dist/db/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_typeorm',
    cli: {
        migrationsDir: 'src/db/migrations',
        entitiesDir: 'src/modules/**/*.entity{.ts,.js}',
    },
};
