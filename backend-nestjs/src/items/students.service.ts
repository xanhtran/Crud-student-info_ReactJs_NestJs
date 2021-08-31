import { Injectable } from '@nestjs/common';
import { Student } from './interfaces/student.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StudentClass } from './schemas/item.schema';


@Injectable()
export class StudentsService {
  constructor(@InjectModel(StudentClass.name) private readonly studentModel: Model<Student>) {}

  async findAll(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student> {
    return await this.studentModel.findOne({ _id: id });
  }

  async create(student: Student): Promise<Student> {
    const newStudent = new this.studentModel(student);
    return await newStudent.save();
  }

  async delete(id: string): Promise<Student> {
    return await this.studentModel.findByIdAndRemove(id);
  }

  async update(id: string, student: Student): Promise<Student> {
    return await this.studentModel.findByIdAndUpdate(id, student, { new: true });
  }
}
