import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { BlacklistService } from 'src/modules/blacklist/blacklist.service';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  constructor(private blacklist: BlacklistService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Extrai request do contexto GraphQL
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if (authHeader && typeof authHeader === 'string') {
      const token = authHeader.split(' ')[1];
      if (await this.blacklist.isBlacklisted(token)) {
        return false;
      }
    }
    // Continua fluxo padrão (validação de assinatura/expiração)
    return (await super.canActivate(context)) as boolean;
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
