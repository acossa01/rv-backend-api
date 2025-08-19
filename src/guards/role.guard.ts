import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Roles } from 'src/enums/role.enum';

@Injectable()
export class RoleGuards implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles =
      this.reflector.get<string[]>('roles', context.getHandler()) ||
      this.reflector.get<string[]>('roles', context.getClass());

    if (!roles?.length) return true;

    const ctx = GqlExecutionContext.create(context);
    let user = ctx.getContext().req?.user;
    if (!user) user = context.switchToHttp().getRequest().user;

    //return roles.some((role: Roles) => user.role?.includes(role));

    // Se user.role for uma string única
    return roles.includes(user.role);
  }
}
