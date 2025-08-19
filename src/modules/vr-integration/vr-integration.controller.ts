import { Controller, Get, Query } from '@nestjs/common';
import { ConteudoEducacionalService } from '../conteudo-educacional/conteudo-educacional.service';
import { Roles } from 'src/enums/role.enum';

@Controller('vr')
export class VrIntegrationController {
  constructor(private conteudoService: ConteudoEducacionalService) {}

  /**
   * GET /vr/contents?role=MEDICO|ESTUDANTE|USUARIO_COMUM
   * Retorna lista de conteúdos compatíveis com o aplicativo de RV.
   */
  @Get('contents')
  async listarConteudos(@Query('role') role: Roles) {
    return this.conteudoService.obterConteudosPermitidos(role);
  }
} 