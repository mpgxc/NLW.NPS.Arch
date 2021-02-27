import { Request, Response } from 'express';
import { User } from '../../Domain/User/Entities/Users';
import { UserRepository } from '../../Repositories';

class RegisterUserController {
  async create(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();

    const myUser = new User();
    myUser.email = 'mpgx5.c@gmail.com';
    myUser.name = 'Mateus';

    const user = await userRepository.create(myUser);

    return response.status(201).json(user);
  }
}

export { RegisterUserController };
