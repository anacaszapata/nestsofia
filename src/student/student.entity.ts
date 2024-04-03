import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'students' })
export class Student extends Document {
  @Prop()
  nombre: string;
//   @Prop()
//   correo: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
