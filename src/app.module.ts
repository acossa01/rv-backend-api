import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import graphconfig from './configs/graphql.config';
import ormconfig from './configs/orm.config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// Módulos da aplicação
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ConteudoEducacionalModule } from './modules/conteudo-educacional/conteudo-educacional.module';
import { SalasVRModule } from './modules/salas-vr/salas-vr.module';
import { BlacklistModule } from './modules/blacklist/blacklist.module';
import { EmailModule } from './modules/email/email.module';
import { VrIntegrationModule } from './modules/vr-integration/vr-integration.module';

@Module({
  imports: [
    UsuariosModule,
    AuthModule,
    ConteudoEducacionalModule,
    SalasVRModule,
    BlacklistModule,
    EmailModule,
    VrIntegrationModule,

    // Configuração do GraphQL atualizada
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      ...graphconfig, // Mantém as suas configurações existentes
    }),

    TypeOrmModule.forRoot(ormconfig),
  ],
  controllers: [], // Vazio, pois removemos o AppController
  providers: [],   // Vazio, pois removemos o AppService
})
export class AppModule {}
