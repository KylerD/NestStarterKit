import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MangosController } from './mangos.controller';
import { MangosService } from './mangos.service';
import { Mango, MangoSchema } from './schemas/mango.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mango.name, schema: MangoSchema }]),
  ],
  controllers: [MangosController],
  providers: [MangosService],
})
export class MangosModule {}
