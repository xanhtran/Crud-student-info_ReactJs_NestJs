import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';
import { Student } from './interfaces/student.interface';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Student> {
    return this.studentsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateStudentDto: CreateStudentDto, @Param('id') id): Promise<Student> {
    return this.studentsService.update(id, updateStudentDto);
  }
}
