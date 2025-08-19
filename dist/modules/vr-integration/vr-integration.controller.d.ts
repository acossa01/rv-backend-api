import { ConteudoEducacionalService } from '../conteudo-educacional/conteudo-educacional.service';
import { Roles } from 'src/enums/role.enum';
export declare class VrIntegrationController {
    private conteudoService;
    constructor(conteudoService: ConteudoEducacionalService);
    listarConteudos(role: Roles): Promise<import("../conteudo-educacional/entities/conteudo-educacional.entity").ConteudoEducacionalEntity[]>;
}
