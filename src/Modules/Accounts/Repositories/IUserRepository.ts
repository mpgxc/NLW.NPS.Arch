import { RegisterUserDTO } from '@Modules/Accounts/UseCases/RegisterUser';
import { User } from '@Modules/Accounts/Domain/User/Entity';

export interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  exists(email: string): Promise<boolean>;
  save(user: User): Promise<void>;
  create(user: RegisterUserDTO): Promise<User>;
}
