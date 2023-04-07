import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from '../schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}
  // 642f1e48120ab1529216b7d2
  async create(dto: any): Promise<Cat> {
    const createdCat = new this.catModel({
      name: dto.name,
      breed: dto.breed,
      age: dto.age,
      owner: dto.owner,
    });
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find({}).populate('owner', 'name').exec();
  }
}
