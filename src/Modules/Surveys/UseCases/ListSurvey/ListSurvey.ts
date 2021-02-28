import { Survey } from '@Modules/Surveys/Domain/Survey/Entity';
import { ISurveyRepository } from '@Modules/Surveys/Repositories';

class ListSurvey {
  constructor(private readonly surveyRepository: ISurveyRepository) {}

  async execute(): Promise<Survey[]> {
    try {
      const survey = await this.surveyRepository.findAll();

      return survey;
    } catch (error) {
      throw new Error(`Não foi possível listar!${error}`);
    }
  }
}

export { ListSurvey };
