import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('owner')
export class OwnerController {
  constructor(private readonly usecase: OwnerService) {}

  @Post('/owner')
  async execute(@Body() dto: any) {
    const result = await this.usecase.create(dto);

    return result;
  }

  @Get('/owner')
  async get() {
    const result = await this.usecase.findAll();

    return result;
  }
}
