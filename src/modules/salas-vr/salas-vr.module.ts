import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaVREntity } from './entities/sala-vr.entity';
import { SessaoVREntity } from './entities/sessao-vr.entity';
import { SalasVRService } from './salas-vr.service';
import { SalasVRResolver, SessoesVRResolver } from './salas-vr.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([SalaVREntity, SessaoVREntity])
  ],
  providers: [
    SalasVRService,
    SalasVRResolver,
    SessoesVRResolver,
  ],
  exports: [SalasVRService],
})
export class SalasVRModule {} 