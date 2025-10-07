import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';
import { AppController } from './app.controller';
import graphconfig from './configs/graphql.config';
import ormconfig from './configs/orm.config';

// Novos módulos da aplicação VR
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ConteudoEducacionalModule } from './modules/conteudo-educacional/conteudo-educacional.module';
import { SalasVRModule } from './modules/salas-vr/salas-vr.module';
import { BlacklistModule } from './modules/blacklist/blacklist.module';
import { EmailModule } from './modules/email/email.module';
import { VrIntegrationModule } from './modules/vr-integration/vr-integration.module';

@Module({
  imports: [
    // Módulos principais da aplicação VR de Oftalmologia
    UsuariosModule,
    AuthModule,
    ConteudoEducacionalModule,
    SalasVRModule,
    BlacklistModule,
    EmailModule,
    VrIntegrationModule,
    
    // Configurações do GraphQL e banco de dados
    GraphQLModule.forRoot(graphconfig),
    TypeOrmModule.forRoot(ormconfig),
    
    // Servir arquivos estáticos
    ServeStaticModule.forRoot({
      rootPath: resolve('/assets'),
      exclude: ['/api*', '/graphql'],
      serveRoot: '/assets',
      serveStaticOptions: {
        index: false,
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}
