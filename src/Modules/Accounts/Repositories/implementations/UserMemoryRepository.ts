import { User } from '../../Domain/User/Entities/Users';
import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private ormRepository: User[];

  constructor() {
    this.ormRepository = [];
  }

  async create(user: User): Promise<User> {
    this.ormRepository.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const [user] = this.ormRepository.filter(
      element => element.email === email,
    );

    return !user ? null : user;
  }

  async exists(email: string): Promise<boolean> {
    const user = this.ormRepository.some(element => element.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.ormRepository = this.ormRepository.map(element => {
      if (element.email === user.id) {
        return user;
      }
      return element;
    });
  }
}

export { UserRepository };
