import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOrangeDto } from './dto/create-orange.dto';
import { Orange } from './entities/orange.entity';
import { OrangesService } from './oranges.service';

@Controller('oranges')
export class OrangesController {
  constructor(private readonly orangesService: OrangesService) {}

  @Post()
  async create(@Body() createOrangeDto: CreateOrangeDto) {
    await this.orangesService.create(createOrangeDto);
  }

  @Get()
  async findAll(): Promise<Orange[]> {
    return this.orangesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Orange> {
    return this.orangesService.findOne(+id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.orangesService.delete(+id);
  }
}
