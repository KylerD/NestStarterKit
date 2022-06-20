import { Inject, Injectable } from '@nestjs/common';
import { OrangeDao } from './dao/orange.dao';
import { CreateOrangeDto } from './dto/create-orange.dto';
import { Orange } from './entities/orange.entity';

@Injectable()
export class OrangesService {
  constructor(private readonly orangeDao: OrangeDao
  ) { }

  async create(createOrangeDto: CreateOrangeDto): Promise<Orange> {
    const createdOrange = await this.orangeDao.create(createOrangeDto);
    return createdOrange;
  }

  async findAll(): Promise<Orange[]> {
    return this.orangeDao.find();
  }

  async findOne(id: number): Promise<Orange> {
    return this.orangeDao.findOne(id);
  }

  async delete(id: number) {
    const deletedOrange = await this.orangeDao.delete(id);
    return deletedOrange;
  }
}