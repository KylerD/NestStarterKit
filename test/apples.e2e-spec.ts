import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { ApplesModule } from '../src/rest/apples.module';

describe('ApplesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApplesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  describe('/apples (POST)', () => {
    it('should validate an empty body', () => {
      return request(app.getHttpServer())
        .post('/apples')
        .expect(400)
        .expect({
          "statusCode": 400,
          "message": ["name should not be empty", "name must be a string", "price must be an integer number"],
          "error": "Bad Request"
        });
    });
  });
});
