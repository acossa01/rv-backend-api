import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from 'config';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const PORT = config.get('server.port') || 3000;
  const HOST = config.get('server.host');
  const PROTOCOL = config.get('server.https') ? 'https' : 'http';

    const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:8080", // Defina a URL do seu frontend em produção
      credentials: true,
    },
  });


  app.use(bodyParser.json({ limit: '500mb' }));
  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
  await app.listen(PORT);
  Logger.debug(`[PORT]: ${PORT}`);
  Logger.debug(`[Environment] ${process.env.NODE_ENV || 'development'}`);
  Logger.debug(`[SERVER AT]: ${PROTOCOL}://${HOST}:${PORT}/graphql`);
}
bootstrap();
