import { Controller, Get, Post, Body, Delete, Param,Patch } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

@Get('/all')
  obtainStudents() {
    return this.studentService.findAll();
  }
@Post()
  createStudents(@Body() body) {
    return this.studentService.create(body);
  }
  @Delete(':id')
  deleteStudents(@Param('id') id: string) {
    return `Delete an user by id #${id}`;
}

@Patch(':id')
updateStudent(@Param('id') id: string) {
  return `This update an user by ${id}`;
}

  // @Delete('product')
  // deleteStudent(@Param('id') idProduct: string): any {
  //   return {
  //     idProduct: idProduct,
  //     delete: true,
  //     count: 1
  //   };
  // }


}
