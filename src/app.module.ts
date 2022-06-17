import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplesModule } from './rest/apples.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApplesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
