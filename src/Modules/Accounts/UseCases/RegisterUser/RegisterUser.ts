import { IUserRepository } from '../../Repositories';
import { RegisterUserDTO } from './RegisterUserDTO';
import { User } from '../../Domain/User/Entities';

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
