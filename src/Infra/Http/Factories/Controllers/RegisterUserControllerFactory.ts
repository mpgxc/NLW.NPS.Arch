import { UserRepository } from '@Modules/Accounts/Repositories';
import {
  RegisterUserController,
  RegisterUser,
} from '@Modules/Accounts/UseCases/RegisterUser';

export function MakeRegisterUserController(): RegisterUserController {
  const userRepository = new UserRepository();
  const registerUser = new RegisterUser(userRepository);
  const registerUserController = new RegisterUserController(registerUser);

  return registerUserController;
}
