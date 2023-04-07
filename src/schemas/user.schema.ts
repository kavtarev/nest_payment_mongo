import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address, AddressSchema } from './address.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop({ type: AddressSchema })
  address: Address;
}

export const UserSchema = SchemaFactory.createForClass(User);
