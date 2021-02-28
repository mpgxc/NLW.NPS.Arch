import { HttpResponse } from '@Core/HttpResponse';
import { ListSurvey } from './ListSurvey';

class ListSurveyController {
  constructor(private readonly listSurvey: ListSurvey) {}

  async handle(): Promise<HttpResponse> {
    const surveys = await this.listSurvey.execute();

    return { statusCode: 200, body: surveys };
  }
}

export { ListSurveyController };
