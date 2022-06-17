import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import configuration from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enforces validation on all endpoints based on the class-validator declarations in the various DTOs
  app.useGlobalPipes(new ValidationPipe());

  /* Open API / Swagger Docs Example
   https://docs.nestjs.com/openapi/introduction */
  const config = new DocumentBuilder()
    .setTitle('REST Example')
    .setDescription('The products API')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configuration().PORT);
}
bootstrap();
