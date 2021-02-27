import { Router } from 'express';
import { RegisterUserController } from '../../Modules/Accounts/UseCases/RegisterUser/RegisterUserController';

const router = Router();
const registerUserController = new RegisterUserController();

router.post('/users', registerUserController.create);

export { router };
