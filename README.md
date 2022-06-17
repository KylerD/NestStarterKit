<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A <a href="http://nestjs.com/" target="_blank">NEST.js</a> starter kit containing patterns for REST, Swagger Docs, Redis, Database Connections, Maps, Testing and an one-size-fits-all starting point for building efficient and scalable server-side applications.</p>

## Description

[Nest JS](https://docs.nestjs.com/) uses [Express.JS](https://expressjs.com/) under the hood by default. It supports [TypeScript](http://www.typescriptlang.org/) out of the box and comes with a ton of common best practices and tooling for building modern Javascript projects, including but not limited to:
- [Inversion of Control](https://docs.nestjs.com/fundamentals/custom-providers#di-fundamentals)
- [Open API](https://docs.nestjs.com/openapi/introduction)
- [TCP Microservices](https://docs.nestjs.com/microservices/basics)
- [GraphQL](https://docs.nestjs.com/graphql/quick-start)
- [Web Sockets](https://docs.nestjs.com/websockets/gateways)

I have integrated the services that I think are most likely to occur in a digital services project (REST API, Session Storage, Database Connections, GDS Front-end) etc. If you have any questions give me a shout on k.davidson@kainos.com

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Cheat Sheet & Patterns
- The application code that runs the program is found in `main.ts`
- Each example/pattern in this starter kit is defined as a module and imported into `app.module.ts` - generally this is the pattern you should use for your own MVC vertical slices.


### REST Example
The rest example can be found under `/products`, it showcases:
- Basic CRUD
- Request validation with [Class Validator](https://github.com/typestack/class-validator)
- Automated Documentation with [Swagger](https://docs.nestjs.com/recipes/swagger)
- IoC + Dependency Injection
- Unit & E2E tests (`*.< controller | service >.spec.ts & `*.e2e-spec.ts` respectively)
