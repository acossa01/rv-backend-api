import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'config';

const {
  type,
  host,
  port,
  database,
  password,
  username,
  synchronize,
  migrationsRun,
  logging,
  sslmode,
  ssl,
} = config.get('db');

export default {
  type: process.env.TYPE ?? type,
  host: process.env.POSTGRES_HOST ?? host,
  port: process.env.POSTGRES_PORT ?? port,
  database: process.env.POSTGRES_DB ?? database,
  password: process.env.POSTGRES_PASSWORD ?? password,
  username: process.env.POSTGRES_USER ?? username,
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
} as TypeOrmModuleOptions;
