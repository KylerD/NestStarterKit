<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A <a href="http://nestjs.com/" target="_blank">NEST.js</a> API Starter Kit containing patterns for REST with automated Swagger Documentation, Dynamic Config, Various Database Options, Healthchecks and a one-size-fits-all starting point for building efficient and scalable server-side applications.</p>

## Description

[Nest JS](https://docs.nestjs.com/) uses [Express.JS](https://expressjs.com/) under the hood by default. It supports [TypeScript](http://www.typescriptlang.org/) out of the box and comes with a ton of common best practices and tooling for building modern Javascript projects, including but not limited to:
- [Inversion of Control](https://docs.nestjs.com/fundamentals/custom-providers#di-fundamentals)
- [Open API](https://docs.nestjs.com/openapi/introduction)
- [TCP Microservices](https://docs.nestjs.com/microservices/basics)
- [GraphQL](https://docs.nestjs.com/graphql/quick-start)
- [Web Sockets](https://docs.nestjs.com/websockets/gateways)

I have integrated the services that I think are most likely to occur in a digital services API. If you have any questions give me a shout on k.davidson@kainos.com . For more recipes check out the [Nest Docs](https://docs.nestjs.com/recipes)

## Installation

```bash
$ npm install
```

## Running Locally

The easiest way to run the application is with `docker-compose up`. This will setup your database connections for you. If you would prefer to run outside of docker you can just use the commands inside `package.json`:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Note that without docker you will need to have your own databases setup with the `PG_CONNECTION_STRING` and `MONGO_CONNECTION_STRING` ENV vars set appropriately. Checkout my `postgres-init/init.sql` file for the basic setup.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Getting Started
* The application code that runs the program is found in `main.ts`
* Each example/pattern in this starter kit is defined as a module and imported into `app.module.ts` - generally this is the pattern you should use for your own MVC vertical slices.
  * The controllers layer handles HTTP requests and delegates tasks to the services layer.
  * The services layer is where most of the business logic lives.
  * Services use repositories / DAOs to change / persist entities.
  * Entities act as containers for the values, with setters and getters.
* You can just delete any modules you're not using, i.e. pick one database option depending on your needs. I have used Knex query builder with the most success.

### Configuration
A Nest config object is defined in `config/configuration.ts`, it can be injected into any classes constructor like so:
```js
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MyClass {
  constructor(private configService: ConfigService) {
    this.configService.get<string>("SOME_CONFIG_VAR");
  }
```

### HealthChecks

This API is setup with a healthcheck module already.

### REST
The rest example can be found under the `rest` folder, it uses an apples resource to showcase:
- Basic CRUD
- Request validation with [Class Validator](https://github.com/typestack/class-validator)
- Automated Documentation with [Swagger](https://docs.nestjs.com/recipes/swagger)
- IoC + Dependency Injection
- Unit & E2E tests (`*.< controller | service >.spec.ts` & `*.e2e-spec.ts` respectively)

### Databases
There are quite a number of options available to you in regards to how you connect to a DB, and which DB you use. Most of them are described [here](https://docs.nestjs.com/recipes). I've included my preferred relational (Knex with Postgres) and no-sql (Mongo) approaches as examples.

### Mongo DB
The mongo DB example can be found under the `mongo` folder, it uses a mangos resource to showcases:
- Basic CRUD
- IoC + Dependency Injection
- Unit tests (`*.< controller | service >.spec.ts & `)
- Configurable env vars

It is not enabled by default, to try it out locally you need to import the mongoose module and mango resource into your `app.module.ts`, like this:
```js
    imports: [
      MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          uri: configService.get<string>('MONGO_CONNECTION_STRING'),
        }),
        inject: [ConfigService],
      }),
      MangosModule
    ]
```

Remember to change the `MONGO_CONNECTION_STRING` config variable defined in `config/configuration.ts`


Mention linting.