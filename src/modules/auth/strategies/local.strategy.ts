import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email', // Usar email em vez de username
      passwordField: 'senha',  // Usar senha em português
    });
  }

  async validate(email: string, senha: string): Promise<any> {
    const usuario = await this.authService.validarUsuario(email, senha);
    
    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    
    return usuario;
  }
} 