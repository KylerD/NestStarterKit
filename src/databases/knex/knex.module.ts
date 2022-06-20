import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createKnexConnection, KNEX_TOKEN } from './knex.utils';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [{
    provide: KNEX_TOKEN,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      return createKnexConnection({
        client: 'pg',
        connection: configService.get<string>('PG_CONNECTION_STRING')
      });
    }
  }],
  exports: [KNEX_TOKEN]
})
export class KnexModule { }
