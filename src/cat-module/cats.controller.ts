import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller()
export class CatsController {
  constructor(private readonly usecase: CatsService) {}

  @Post('/cats')
  async execute(@Body() dto: any) {
    const result = await this.usecase.create(dto);

    return result;
  }

  @Get('/cats')
  async get() {
    const result = await this.usecase.findAll();

    return result;
  }
}
