import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from 'src/modules/user/entities/user.entity';
import * as bcrypt from 'bcrypt';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE TABLE `users`;');

    const userRepository = dataSource.getRepository(User);

    const hashedPassword = await bcrypt.hash('Password@123', 10);
    await userRepository.insert({
      name: 'Felix Ajibola',
      email: 'thefelixajibola@gmail.com',
      password: hashedPassword,
    });

    const userFactory = factoryManager.get(User);
    await userFactory.save();

    await userFactory.saveMany(5);
  }
}
