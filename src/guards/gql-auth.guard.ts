import { Injectable, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') { // 'local' refere-se à estratégia passport-local
  
  getRequest(context: ExecutionContext) {
    // Cria o contexto do GraphQL
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    
    // **Esta é a parte mais importante:**
    // Ele pega os argumentos da sua mutation (o objeto 'input')
    // e os coloca dentro de `request.body`.
    request.body = ctx.getArgs().input;
    
    // Retorna a requisição modificada para o Passport conseguir ler.
    return request;
  }
}