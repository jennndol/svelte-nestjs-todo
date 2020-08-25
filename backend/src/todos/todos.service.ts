import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoInterface } from './todo.interface';
import { Todo } from './dto/todo.dto';

@Injectable()
export class TodosService {
    constructor(@InjectModel('TodoInterface') private todo: Model<TodoInterface>) {}

    async findAll(): Promise<Todo[]> {
        return await this.todo.find().exec();
    }
}
