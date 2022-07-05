import { Knex } from 'knex';
import { Injectable } from '@nestjs/common';
import { InjectKnex } from '../../database-connectors/knex/knex.decorators';
import { Orange } from '../entities/orange.entity';
import { CreateOrangeDto } from '../dto/create-orange.dto';

@Injectable()
export class OrangeDao {
  private readonly TABLE = 'orange';
  private readonly COLUMNS: string[] = ['id', 'orange_name', 'orange_price', 'orange_description'];

  constructor(@InjectKnex() private readonly knex: Knex) { }

  public async create(createOrangeDto: CreateOrangeDto): Promise<Orange> {
    return this.knex(this.TABLE).insert(createOrangeDto).returning('*')[0];
  }

  public async find(): Promise<Orange[]> {
    return this.knex(this.TABLE).columns(this.COLUMNS).select();
  }

  public async findOne(id: number): Promise<Orange> {
    return this.knex(this.TABLE).columns(this.COLUMNS).where('id', id).first();
  }

  public async delete(id: number): Promise<Orange> {
    return this.knex(this.TABLE).columns(this.COLUMNS).where('id', id).delete();
  }
}
