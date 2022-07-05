import { Module } from '@nestjs/common';
import { KnexModule } from 'src/database-connectors/knex/knex.module';
import { OrangeDao } from './dao/orange.dao';
import { OrangesController } from './oranges.controller';
import { OrangesService } from './oranges.service';

@Module({
  imports: [KnexModule],
  controllers: [OrangesController],
  providers: [OrangeDao, OrangesService],
  exports: [OrangesService],
})
export class OrangesModule { }
