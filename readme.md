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
