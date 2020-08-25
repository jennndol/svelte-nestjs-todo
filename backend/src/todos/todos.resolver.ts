import { Resolver, Query } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './dto/todo.dto';

@Resolver()
export class TodosResolver {
    constructor(private readonly todosService: TodosService) {}

    @Query(() => [Todo])
    async todos(): Promise<Todo[]> {
        return this.todosService.findAll();
    }
}
