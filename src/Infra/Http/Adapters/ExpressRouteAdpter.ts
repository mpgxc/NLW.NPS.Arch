import { Response, Request } from 'express';

export function AdpterRoutes(CtxController) {
  return async (request: Request, response: Response): Promise<Response> => {
    const { body: requestData } = request;

    const controller = CtxController();

    const httpResponse = await controller.create(requestData);

    return response.status(httpResponse.statusCode).json(httpResponse.body);
  };
}
