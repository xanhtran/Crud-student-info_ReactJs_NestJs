import { Module } from '@nestjs/common';

import { StudentsModule } from './items/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  
  imports: [StudentsModule,MongooseModule.forRoot(config.mongoURI)],
  
})
export class AppModule {}


