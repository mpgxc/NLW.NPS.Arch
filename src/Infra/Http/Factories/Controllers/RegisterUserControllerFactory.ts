import { UserRepository } from '../../../../Modules/Accounts/Repositories';
import { RegisterUser } from '../../../../Modules/Accounts/UseCases/RegisterUser/RegisterUser';
import { RegisterUserController } from '../../../../Modules/Accounts/UseCases/RegisterUser/RegisterUserController';

export function MakeRegisterUserController(): RegisterUserController {
  const userRepository = new UserRepository();
  const registerUser = new RegisterUser(userRepository);
  const registerUserController = new RegisterUserController(registerUser);

  return registerUserController;
}
