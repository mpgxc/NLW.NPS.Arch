import { SurveyRepository } from '@Modules/Surveys/Repositories';
import {
  ListSurvey,
  ListSurveyController,
} from '@Modules/Surveys/UseCases/ListSurvey';

export function MakeListSurveyController(): ListSurveyController {
  const surveyRepository = new SurveyRepository();
  const listSurvey = new ListSurvey(surveyRepository);
  const listSurveyController = new ListSurveyController(listSurvey);

  return listSurveyController;
}
