import { Module } from '@nestjs/common';
import { ApplesService } from './apples.service';
import { ApplesController } from './apples.controller';

@Module({
  controllers: [ApplesController],
  providers: [ApplesService],
})
export class ApplesModule {}
