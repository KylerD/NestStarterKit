import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMangoDto } from './dto/create-mango.dto';
import { MangosService } from './mangos.service';
import { Mango } from './schemas/mango.schema';

@Controller('mangos')
export class MangosController {
  constructor(private readonly mangosService: MangosService) { }

  @Post()
  async create(@Body() createMangoDto: CreateMangoDto) {
    await this.mangosService.create(createMangoDto);
  }

  @Get()
  async findAll(): Promise<Mango[]> {
    return this.mangosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Mango> {
    return this.mangosService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.mangosService.delete(id);
  }
}