import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller()
export class CatsController {
  constructor(private readonly usecase: CatsService) {}

  @Post('/cats')
  async execute() {
    const result = await this.usecase.create({});

    return result;
  }

  @Get('/cats')
  async get() {
    const result = await this.usecase.findAll();

    return result;
  }
}
