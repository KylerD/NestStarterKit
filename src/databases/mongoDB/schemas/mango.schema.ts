import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MangoDocument = Mango & Document;

@Schema()
export class Mango {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const MangoSchema = SchemaFactory.createForClass(Mango);