import { RegisterUser } from './RegisterUser';
import { RegisterUserDTO } from './RegisterUserDTO';

type HttpResponse = {
  statusCode: number;
  body: unknown;
};

class RegisterUserController {
  constructor(private registerUser: RegisterUser) {}

  async handle({ name, email }: RegisterUserDTO): Promise<HttpResponse> {
    if (!name || !email) {
      return { statusCode: 400, body: { message: 'Email ou Name inválidos!' } };
    }

    const user = await this.registerUser.execute({ name, email });

    return { statusCode: 201, body: user };
  }
}

export { RegisterUserController };
