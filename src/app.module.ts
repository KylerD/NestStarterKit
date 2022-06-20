import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
