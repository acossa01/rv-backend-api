import { Module } from '@nestjs/common';
import { VrIntegrationController } from './vr-integration.controller';
import { ConteudoEducacionalModule } from '../conteudo-educacional/conteudo-educacional.module';

@Module({
  imports: [ConteudoEducacionalModule],
  controllers: [VrIntegrationController],
})
export class VrIntegrationModule {} 