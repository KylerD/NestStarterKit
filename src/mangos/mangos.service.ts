import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMangoDto } from './dto/create-mango.dto';
import { Mango, MangoDocument } from './schemas/mango.schema';

@Injectable()
export class MangosService {
  constructor(
    @InjectModel(Mango.name) private readonly mangoModel: Model<MangoDocument>,
  ) {}

  async create(createMangoDto: CreateMangoDto): Promise<Mango> {
    const createdMango = await this.mangoModel.create(createMangoDto);
    return createdMango;
  }

  async findAll(): Promise<Mango[]> {
    return this.mangoModel.find().exec();
  }

  async findOne(id: string): Promise<Mango> {
    return this.mangoModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedMango = await this.mangoModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedMango;
  }
}
