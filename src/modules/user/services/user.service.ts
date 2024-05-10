import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  async createUser(registerUser: CreateUserDto): Promise<User> {
    const user = new User();

    user.name = registerUser.name;
    user.email = registerUser.email;
    user.password = registerUser.password;

    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }
}
