import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import { BlacklistedToken } from './blacklisted-token.entity';

@Injectable()
export class BlacklistService {
  constructor(
    @InjectRepository(BlacklistedToken)
    private readonly repo: Repository<BlacklistedToken>,
  ) {}

  async add(token: string, expiresAt: Date): Promise<void> {
    const entry = this.repo.create({ token, expiresAt });
    await this.repo.save(entry);
  }

  async isBlacklisted(token: string): Promise<boolean> {
    const exists = await this.repo.findOne({ where: { token } });
    return !!exists;
  }

  /**
   * Remover tokens expirados periodicamente (chamado em background ou on-demand)
   */
  async purgeExpired(): Promise<void> {
    await this.repo.delete({ expiresAt: LessThan(new Date()) });
  }
} 