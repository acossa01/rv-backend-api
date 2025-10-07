import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

// Esta é a função que Vercel irá chamar.
// Note que não há 'app.listen()' aqui.
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:8080",
      credentials: true,
    },
  });

  app.use(bodyParser.json({ limit: '500mb' }));
  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
  
  // Prepara a aplicação para receber requisições, mas não a "trava" em uma porta.
  await app.init(); 

  // Retorna a instância do servidor para a Vercel gerenciar.
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp;
}

// Exportamos a função para a Vercel.
export default bootstrap();
