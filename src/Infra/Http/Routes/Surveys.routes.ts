import { Router } from 'express';
import {
  MakeRegisterSurveyController,
  MakeListSurveyController,
} from '../Factories/Controllers';
import { AdpterRoutes } from '../Adapters/ExpressRouteAdapter';

const surveyRouter = Router();

surveyRouter.post('/', AdpterRoutes(MakeRegisterSurveyController));
surveyRouter.get('/', AdpterRoutes(MakeListSurveyController));

export { surveyRouter };
