import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Owner, OwnerDocument } from 'src/schemas/owner.schema';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>,
  ) {}

  async create(dto: any): Promise<Owner> {
    const owner = new this.ownerModel({
      name: dto.name,
      age: dto.age,
    });

    return owner.save();
  }

  async findAll(): Promise<Owner[]> {
    return this.ownerModel.find({ age: { $lt: 17 } }).exec();
  }
}
