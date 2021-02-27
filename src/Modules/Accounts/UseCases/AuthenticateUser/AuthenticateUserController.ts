import { Request, Response } from 'express';

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    return response.status(201).json({ message: 'Hello, World!' });
  }
}

export { UserController };
