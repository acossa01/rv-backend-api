import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConteudoEducacionalEntity } from './entities/conteudo-educacional.entity';
import { ConteudoEducacionalService } from './conteudo-educacional.service';
import { ConteudoEducacionalResolver } from './conteudo-educacional.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConteudoEducacionalEntity])
  ],
  providers: [
    ConteudoEducacionalService,
    ConteudoEducacionalResolver,
  ],
  exports: [ConteudoEducacionalService],
})
export class ConteudoEducacionalModule {} 