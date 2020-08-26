import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { TodoSchema } from './todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])
  ],
  providers: [TodosService, TodosResolver]
})
export class TodosModule {}
