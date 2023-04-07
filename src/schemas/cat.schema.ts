import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: mongoose.Schema.Types.ObjectId;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
