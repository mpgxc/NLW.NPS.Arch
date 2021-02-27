import { Survey } from '@Modules/Surveys/Domain/Survey/Entity';

import { ISurveyRepository } from '../ISurveyRepository';

class SurveyMemoryRepository implements ISurveyRepository {
  private ormRepository: Survey[];

  constructor() {
    this.ormRepository = [];
  }

  async create(survey: Survey): Promise<Survey> {
    this.ormRepository.push(survey);
    return survey;
  }

  async findByTitle(title: string): Promise<Survey> {
    const [user] = this.ormRepository.filter(
      element => element.title === title,
    );

    return !user ? null : user;
  }

  async exists(title: string): Promise<boolean> {
    const user = this.ormRepository.some(element => element.title === title);

    return user;
  }

  async save(survey: Survey): Promise<void> {
    this.ormRepository = this.ormRepository.map(element => {
      if (element.id === survey.id) {
        return survey;
      }
      return element;
    });
  }
}

export { SurveyMemoryRepository };
