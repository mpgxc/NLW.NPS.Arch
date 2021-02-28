## Instanciar um container docker com a imagem do postgres
```sh
docker run --restart=always --name nlw-nodejs -e POSTGRES_DB=nlw-nodejs -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```
## Criar migration
```sh
yarn typeorm migration:create -n nome_da_migration
```
## Executar a migration
```sh
  yarn typeorm migration:run
```

## Eslint

```sh
yarn add eslint -D
```
```bash
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier prettier -D
```
```bash
yarn eslint --init
```

### Diagrama ER

![image](diagrama.png)

### Arquitetura
```sh
├── Core
│   ├── Controller.ts
│   ├── HttpResponse.ts
│   └── Middleware.ts
├── Infra
│   ├── Database
│   │   ├── index.ts
│   │   └── Migrations
│   │       ├── 1614391160171-create_users.ts
│   │       └── 1614456934053-create_surveys.ts
│   └── Http
│       ├── Adapters
│       │   └── ExpressRouteAdapter.ts
│       ├── App.ts
│       ├── Factories
│       │   └── Controllers
│       │       ├── index.ts  
│       │       ├── AuthenticateUserControllerFactory.ts
│       │       ├── ListSurveyControllerFactory.ts
│       │       ├── RegisterSurveyControllerFactory.ts
│       │       └── RegisterUserControllerFactory.ts
│       ├── HttpStatusCode.ts
│       ├── Routes
│       │   ├── Accounts.routes.ts
│       │   ├── index.ts
│       │   └── Surveys.routes.ts
│       └── Server.ts
├── Modules
│   ├── Accounts
│   │   ├── Domain
│   │   │   └── User
│   │   │       └── Entity
│   │   │           ├── index.ts
│   │   │           └── User.ts
│   │   ├── Repositories
│   │   │   ├── implementations
│   │   │   │   ├── UserMemoryRepository.ts
│   │   │   │   └── UserRepository.ts
│   │   │   ├── index.ts
│   │   │   └── IUserRepository.ts
│   │   └── UseCases
│   │       ├── AuthenticateUser
│   │       │   └── AuthenticateUserController.ts
│   │       └── RegisterUser
│   │           ├── index.ts
│   │           ├── RegisterUserController.ts
│   │           ├── RegisterUserDTO.ts
│   │           └── RegisterUser.ts
│   └── Surveys
│   ...
└── @types
    └── express.d.ts
```
