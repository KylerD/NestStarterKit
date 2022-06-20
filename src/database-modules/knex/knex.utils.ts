import knex, { Knex } from 'knex';

export const KNEX_TOKEN = 'knex';

export function createKnexConnection(config: Knex.Config): Knex {
  return knex(config);
}
