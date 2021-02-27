import { Survey } from '@Modules/Surveys/Domain/Survey/Entity';
import { ISurveyRepository } from '@Modules/Surveys/Repositories';
import { RegisterSurveyDTO } from './RegisterSurveyDTO';

class RegisterSurvey {
  constructor(private readonly surveyRepository: ISurveyRepository) {}

  async execute({ title, description }: RegisterSurveyDTO): Promise<Survey> {
    try {
      const userExists = await this.surveyRepository.exists(title);

      if (userExists) {
        throw new Error('Pesquisa já cadastrada!');
      }

      const survey = await this.surveyRepository.create({ title, description });

      return survey;
    } catch (error) {
      throw new Error(`Não foi possível cadastrar!${error}`);
    }
  }
}

export { RegisterSurvey };
