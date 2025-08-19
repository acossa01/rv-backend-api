import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'config';

import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtGuard } from 'src/guards/jwt.guard';

// Entidades dos usuários
import { UserEntity } from '../usuarios/entities/user.entity';
import { UsuarioComumEntity } from '../usuarios/entities/usuario-comum.entity';
import { MedicoEntity } from '../usuarios/entities/medico.entity';
import { EstudanteEntity } from '../usuarios/entities/estudante.entity';

// Módulo de usuários
import { UsuariosModule } from '../usuarios/usuarios.module';
import { EmailModule } from '../email/email.module';
import { BlacklistModule } from '../blacklist/blacklist.module';

@Module({
  imports: [
    PassportModule,
    UsuariosModule,
    EmailModule,
    BlacklistModule,
    TypeOrmModule.forFeature([
      UserEntity,
      UsuarioComumEntity, 
      MedicoEntity, 
      EstudanteEntity
    ]),
    JwtModule.register({
      secret: config.get<string>('jwt.secret'),
      signOptions: {
        expiresIn: config.get<string>('jwt.signOptions.expiresIn'),
      },
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    LocalStrategy,
    JwtGuard,
  ],
  exports: [AuthService, JwtModule, JwtGuard],
})
export class AuthModule {}
