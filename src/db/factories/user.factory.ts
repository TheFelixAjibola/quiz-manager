import { User } from 'src/modules/user/entities/user.entity';
import { setSeederFactory } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';

export default setSeederFactory(User, (faker) => {
  const user = new User();

  user.name = faker.person.fullName();
  user.email = faker.internet.email();
  user.password = bcrypt.hashSync('defaultPassword', 10);

  return user;
});
