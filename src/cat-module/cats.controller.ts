import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsDto } from './cats-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('cats')
export class CatsController {
  constructor(private readonly usecase: CatsService) {}

  @Post('/cats')
  async execute(@Body() dto: CatsDto) {
    const result = await this.usecase.create(dto);

    return result;
  }

  @Get('/cats')
  async get() {
    const result = await this.usecase.findAll();

    return result;
  }
}
