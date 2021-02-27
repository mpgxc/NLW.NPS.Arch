import { getRepository, Repository } from 'typeorm';
import { User } from '../../Domain/User/Entities';
import { IUserRepository } from '../IUserRepository';
import { RegisterUserDTO } from '../../UseCases/RegisterUser/RegisterUserDTO';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create({ email, name }: RegisterUserDTO): Promise<User> {
    const userCreated = this.ormRepository.create({ email, name });

    return this.ormRepository.save(userCreated);
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
