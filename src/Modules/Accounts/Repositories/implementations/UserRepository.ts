import { getRepository, Repository } from 'typeorm';
import { User } from '../../Domain/User/Entities/Users';
import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create(user: User): Promise<User> {
    const userCreated = await this.ormRepository.save(user);

    return userCreated;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return !user ? null : user;
  }

  async exists(email: string): Promise<boolean> {
    const userExists = await this.ormRepository.findOne({ where: { email } });

    return !!userExists;
  }

  async save(user: User): Promise<void> {
    await this.ormRepository.save(user);
  }
}

export { UserRepository };
