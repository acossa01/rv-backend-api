import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:8081",
      credentials: true,
    },
  });

  app.use(bodyParser.json({ limit: '500mb' }));
  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

  // O Render fornece a porta através da variável de ambiente PORT
  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(`🚀 Aplicação a correr na porta ${port}`, 'Bootstrap');
}
bootstrap();
