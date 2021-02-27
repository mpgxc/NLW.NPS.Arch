import { Router } from 'express';
import { MakeRegisterSurveyController } from '../Factories/Controllers/RegisterSurveyControllerFactory';
import { AdpterRoutes } from '../Adapters/ExpressRouteAdpter';

const surveyRouter = Router();

surveyRouter.post('/', AdpterRoutes(MakeRegisterSurveyController));

export { surveyRouter };
