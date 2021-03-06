import { HttpResponse } from '@Core/HttpResponse';
import { RegisterSurveyDTO } from './RegisterSurveyDTO';
import { RegisterSurvey } from './RegisterSurvey';

class RegisterSurveyController {
  constructor(private readonly registerSurvey: RegisterSurvey) {}

  async handle({
    title,
    description,
  }: RegisterSurveyDTO): Promise<HttpResponse> {
    if (!title || !description) {
      return {
        statusCode: 400,
        body: { message: 'Title ou Description inválidos!' },
      };
    }

    const survey = await this.registerSurvey.execute({ title, description });

    return { statusCode: 201, body: survey };
  }
}

export { RegisterSurveyController };
