import { Controller, Get, UseGuards } from '@nestjs/common';
import { AtGuard } from 'src/auth/guards/auth.jwt-auth.guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AtGuard)
  @Get('/profile')
  getHello(): string {
    // return this.userService.findOne;
    return 'user';
  }
}
