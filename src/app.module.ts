import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplesModule } from './apples/apples.module';
import { HealthModule } from './health/health.module';
import { OrangesModule } from './oranges/oranges.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApplesModule,
    HealthModule,
    OrangesModule, // Uses Knex
    // MangosModule, // Uses MongoDB with Mongoose
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
