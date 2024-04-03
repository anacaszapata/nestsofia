import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://anacaszapata:khvrES0VEKyM0QVF@estudiantesprofesores.ukdbcld.mongodb.net/',
    ),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
