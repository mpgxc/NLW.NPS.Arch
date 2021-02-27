import { User } from '../Domain/User/Entities/Users';

export interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  exists(email: string): Promise<boolean>;
  save(user: User): Promise<void>;
  create(user: User): Promise<User>;
}
