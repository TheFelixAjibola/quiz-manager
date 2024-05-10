import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { SETTINGS } from 'src/app.utils';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async userRegistration(
    @Body(SETTINGS.VALIDATION_PIPE) registerUser: CreateUserDto,
  ): Promise<User> {
    return await this.userService.createUser(registerUser);
  }
}
