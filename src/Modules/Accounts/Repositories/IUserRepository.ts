import { User } from '../Domain/User/Entities';
import { RegisterUserDTO } from '../UseCases/RegisterUser/RegisterUserDTO';

export interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  exists(email: string): Promise<boolean>;
  save(user: User): Promise<void>;
  create(user: RegisterUserDTO): Promise<User>;
}
