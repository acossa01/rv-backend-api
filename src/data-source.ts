// src/data-source.ts
import { DataSource } from 'typeorm';
import ormConfig from './configs/orm.config'; // Importa sua configuração existente

const AppDataSource = new DataSource(ormConfig as any); // 'as any' para evitar problemas de tipo temporariamente

export default AppDataSource;
