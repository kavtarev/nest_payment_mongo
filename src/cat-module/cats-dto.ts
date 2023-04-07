import { ApiProperty } from '@nestjs/swagger';

export class CatsDto {
  @ApiProperty({
    deprecated: true,
    description: 'Use the name property instead',
  })
  name: string;
  @ApiProperty({
    deprecated: true,
    description: 'Use the name property instead',
  })
  age: number;
  @ApiProperty({
    deprecated: true,
    description: 'Use the name property instead',
  })
  breed: string;
  @ApiProperty({
    deprecated: true,
    description: 'Use the name property instead',
  })
  owner: string;
}
