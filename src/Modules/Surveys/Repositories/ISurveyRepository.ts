import { RegisterSurveyDTO } from '@Modules/Surveys/UseCases/RegisterSurvey/RegisterSurveyDTO';
import { Survey } from '@Modules/Surveys/Domain/Survey/Entity';

export interface ISurveyRepository {
  findByTitle(title: string): Promise<Survey>;
  exists(title: string): Promise<boolean>;
  save(survey: Survey): Promise<void>;
  create(survey: RegisterSurveyDTO): Promise<Survey>;
}
