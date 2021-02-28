import { getRepository, Repository } from 'typeorm';
import { RegisterSurveyDTO } from '@Modules/Surveys/UseCases/RegisterSurvey';
import { Survey } from '@Modules/Surveys/Domain/Survey/Entity';
import { ISurveyRepository } from '../ISurveyRepository';

class SurveyRepository implements ISurveyRepository {
  private ormRepository: Repository<Survey>;

  constructor() {
    this.ormRepository = getRepository(Survey);
  }

  async create({ title, description }: RegisterSurveyDTO): Promise<Survey> {
    const surveyCreated = this.ormRepository.create({ title, description });

    return this.ormRepository.save(surveyCreated);
  }

  async findAll(): Promise<Survey[]> {
    const surveys = await this.ormRepository.find();

    return surveys;
  }

  async findByTitle(title: string): Promise<Survey> {
    const user = await this.ormRepository.findOne({
      where: { title },
    });

    return !user ? null : user;
  }

  async exists(title: string): Promise<boolean> {
    const userExists = await this.ormRepository.findOne({ where: { title } });

    return !!userExists;
  }

  async save(user: Survey): Promise<void> {
    await this.ormRepository.save(user);
  }
}

export { SurveyRepository };
