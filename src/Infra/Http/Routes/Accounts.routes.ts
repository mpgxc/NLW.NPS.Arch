import { Router } from 'express';
import { MakeRegisterUserController } from '../Factories/Controllers';
import { AdpterRoutes } from '../Adapters/ExpressRouteAdapter';

const userRouter = Router();

userRouter.post('/', AdpterRoutes(MakeRegisterUserController));

export { userRouter };
