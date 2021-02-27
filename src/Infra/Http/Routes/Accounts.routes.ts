import { Router } from 'express';
import { MakeRegisterUserController } from '../Factories/Controllers/RegisterUserControllerFactory';
import { AdpterRoutes } from '../Adapters/ExpressRouteAdpter';

const userRouter = Router();

userRouter.post('/', AdpterRoutes(MakeRegisterUserController));

export { userRouter };
