import { Repository } from 'typeorm';
import { BlacklistedToken } from './blacklisted-token.entity';
export declare class BlacklistService {
    private readonly repo;
    constructor(repo: Repository<BlacklistedToken>);
    add(token: string, expiresAt: Date): Promise<void>;
    isBlacklisted(token: string): Promise<boolean>;
    purgeExpired(): Promise<void>;
}
