import { SurveyRepository } from '@Modules/Surveys/Repositories';
import {
  RegisterSurvey,
  RegisterSurveyController,
} from '@Modules/Surveys/UseCases/RegisterSurvey';

export function MakeRegisterSurveyController(): RegisterSurveyController {
  const surveyRepository = new SurveyRepository();
  const registerSurvey = new RegisterSurvey(surveyRepository);
  const registerSurveyController = new RegisterSurveyController(registerSurvey);

  return registerSurveyController;
}
