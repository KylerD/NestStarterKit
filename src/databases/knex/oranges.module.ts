import { Module } from '@nestjs/common';
import { OrangeDao } from './dao/orange.dao';
import { KnexModule } from './knex.module';
import { OrangesController } from './oranges.controller';
import { OrangesService } from './oranges.service';

@Module({
  imports: [KnexModule],
  controllers: [OrangesController],
  providers: [OrangeDao, OrangesService],
  exports: [OrangesService]
})
export class OrangesModule { }