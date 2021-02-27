import { User } from '@Modules/Accounts/Domain/User/Entity';
import { IUserRepository } from '@Modules/Accounts/Repositories';
import { RegisterUserDTO } from './RegisterUserDTO';

class RegisterUser {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email }: RegisterUserDTO): Promise<User> {
    try {
      const userExists = await this.userRepository.exists(email);

      if (userExists) {
        throw new Error('Usuário já cadastrado!');
      }

      const user = await this.userRepository.create({ name, email });

      return user;
    } catch (error) {
      throw new Error(`Não foi possível cadastrar!${error}`);
    }
  }
}

export { RegisterUser };
