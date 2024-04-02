import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

@Get('all')
  obtainStudents() {
    return this.studentService.findAll();
  }
@Post()
  createStudents(@Body() body) {
    return this.studentService.create(body);
  }
  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return `Delete an user by id #${id}`;
}


}
