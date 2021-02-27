import { Router } from 'express';
import { MakeRegisterUserController } from './Factories/Controllers/RegisterUserControllerFactory';
import { AdpterRoutes } from './Adapters/ExpressRouteAdpter';

const router = Router();

router.post('/users', AdpterRoutes(MakeRegisterUserController));

export { router };
