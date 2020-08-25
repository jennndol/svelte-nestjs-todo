import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './dto/todo.dto';
import { TodoInput } from './todo.input';

@Resolver()
export class TodosResolver {
    constructor(private readonly todosService: TodosService) {}

    @Query(() => [Todo])
    async todos(): Promise<Todo[]> {
        return this.todosService.findAll();
    }

    @Mutation(() => Todo)
    async createTodo(@Args('input') input: TodoInput): Promise<TodoInput> {
        return this.todosService.create(input);
    }
}
