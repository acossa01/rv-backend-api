import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'config';

// 1. Pega todas as configurações do banco de dados do arquivo .yml
const dbConfig = config.get('db');

// 2. Define a configuração SSL de forma clara e separada
//    Prioriza a variável de ambiente, se não existir, usa o valor do arquivo .yml
const useSsl = process.env.SSL === 'true' || dbConfig.ssl;

export default {
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
} as TypeOrmModuleOptions;