import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UsuarioComumEntity } from './entities/usuario-comum.entity';
import { MedicoEntity } from './entities/medico.entity';
import { EstudanteEntity } from './entities/estudante.entity';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UsuarioComumEntity,
      MedicoEntity,
      EstudanteEntity,
    ])
  ],
  providers: [
    UsuariosService,
    UsuariosResolver,
  ],
  exports: [UsuariosService, TypeOrmModule],
})
export class UsuariosModule {} 