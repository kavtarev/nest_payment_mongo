import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { OwnerService } from './owner.service';
import { Cat, CatSchema } from '../schemas/cat.schema';
import { Owner, OwnerSchema } from 'src/schemas/owner.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { AddressSchema, Address } from 'src/schemas/address.schema';
import { CatsService } from './cats.service';
import { OwnerController } from './owner.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: Owner.name, schema: OwnerSchema },
      { name: User.name, schema: UserSchema },
      { name: Address.name, schema: AddressSchema },
    ]),
  ],
  controllers: [CatsController, OwnerController],
  providers: [CatsService, OwnerService],
})
export class CatsModule {}
