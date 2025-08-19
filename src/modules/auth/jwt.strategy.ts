import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import config from 'config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: config.has('jwt.ignoreExpiration') ? config.get<boolean>('jwt.ignoreExpiration') : false,
      secretOrKey: config.get<string>('jwt.secret'),
    });
  }

  async validate(payload: any) {
    return {
      userID: payload.sub,
      email: payload.email,
      nomeCompleto: payload.nomeCompleto,
      role: payload.role,
    };
  }
}
