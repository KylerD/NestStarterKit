import { Inject } from '@nestjs/common';
import { KNEX_TOKEN } from './knex.utils';

export const InjectKnex = () => {
  return Inject(KNEX_TOKEN);
};

export const InjectConnection = InjectKnex;
