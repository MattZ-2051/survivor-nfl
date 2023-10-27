import * as argon from 'argon2';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User, JwtPayload, Tokens } from './interfaces/auth.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && argon.verify(user.password, pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<Tokens> {
    const tokens = await this.getTokens(user.id, user.username);
    return tokens;
  }

  async signup(dto: CreateUserDto): Promise<Tokens> {
    const passwordHash = await argon.hash(dto.password);

    const user = await this.usersService.createUser(dto.username, passwordHash);

    const tokens = await this.getTokens(user.id, user.username);

    return tokens;
  }

  async getTokens(userId: number, username: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      username,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      access: at,
      refresh: rt,
    };
  }

  async refreshTokens(username: string): Promise<Tokens> {
    const user = await this.usersService.findOne(username);
    if (!user) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.username);

    return tokens;
  }
}
