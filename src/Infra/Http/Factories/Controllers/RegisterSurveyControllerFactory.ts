import { SurveyRepository } from '@Modules/Surveys/Repositories';
import { RegisterSurvey } from '@Modules/Surveys/UseCases/RegisterSurvey/RegisterSurvey';
import { RegisterSurveyController } from '@Modules/Surveys/UseCases/RegisterSurvey/RegisterSurveyController';

export function MakeRegisterSurveyController(): RegisterSurveyController {
  const surveyRepository = new SurveyRepository();
  const registerSurvey = new RegisterSurvey(surveyRepository);
  const registerSurveyController = new RegisterSurveyController(registerSurvey);

  return registerSurveyController;
}
