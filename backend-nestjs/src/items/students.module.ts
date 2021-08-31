import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { StudentClass, StudentSchema } from './schemas/item.schema';

@Module({

  imports: [MongooseModule.forFeature([{ name: StudentClass.name,
  schema: StudentSchema,
  collection:'student' }])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
