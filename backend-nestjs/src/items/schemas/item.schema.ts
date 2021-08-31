
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ReviewTimelineDto } from '../dto/perf-review.dto';
import { PeriodDto } from '../dto/period.dto';

export type StudentDocument = StudentClass & Document;

@Schema()
export class StudentClass {
  @Prop()
  name: string;

  @Prop()
  description: string;

 
  
  @Prop()
  email: string;

  @Prop()
  phone: string;



}

export const StudentSchema = SchemaFactory.createForClass(StudentClass);