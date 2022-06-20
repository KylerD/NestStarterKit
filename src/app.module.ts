import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplesModule } from './rest/apples.module';
import { HealthModule } from './health/health.module';
import { OrangesModule } from './databases/knex/oranges.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApplesModule,
    HealthModule,
    OrangesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
