# Yape-Code-Challenge
### Challenge using the following technologies:
- NestJS
- Typescript
- GraphQL
- Kafka
- Postgres
- Docker

## Initial Setup

1. Root directory contains a `docker-compose.yml` file. Run `docker-compose up` to create docker containers.
2. Enter to directory `ms-antifraud` and run `yarn install` to install dependencies.
3. Enter to directory `ms-antifraud` and run `yarn start:dev` to start the server.
4. Enter to directory `ms-transaction` and run `yarn install` to install dependencies.
5. Enter to directory `ms-transaction` and run `yarn start:dev` to start the server.
6. Set environment variables inside `ms-transaction` directory. Change values `.env.stage.dev` file or use the following variables:

```
PORT=3000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=12345
POSTGRES_DATABASE=transactions
```

# API Documentation

### Create transaction
```graphql
query HeroNameQuery {
  hero {
    name
  }
}
```


### Retrieve transaction
```graphql
query HeroNameQuery {
  hero {
    name
  }
}
```