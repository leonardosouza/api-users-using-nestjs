
## API Users using Nestjs

Student: [leonardo.aparecido@aluno.faculdadeimpacta.com.br](mailto:leonardo.aparecido@aluno.faculdadeimpacta.com.br)

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run the calls to api using the examples in `users.http` file

```bash
### Get All Users
curl -X GET http://localhost:3000/

### Get All Users
curl -X GET http://localhost:3000/users/

### Create a New User
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Leonardo", "email": "leonardo.souza@aluno.impacta.com.br"}'

### Get an specific user
curl -X GET http://localhost:3000/users/6

### Delete an specific user
curl -X DELETE http://localhost:3000/users/1
```