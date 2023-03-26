import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cat-module/cat-module';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
