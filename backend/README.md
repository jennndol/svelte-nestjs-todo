## Description

Todo App using GraphQL

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Test Using Graphiql

To test, visit this graphiql link [localhost:3000/graphiql](http://localhost:3000/graphql).

There are 2 queries and 3 mutations

1. Query todos, to show all todo list
2. Query todo using id argument, to show specific todo
3. Mutation createTodo using input argument, to create new todo
4. Mutation updateTodo using id and input argument, to update specific todo
5. Mutation deleteTodo using id argument, to delete specific todo

### Query todos

![Query Todos](https://raw.githubusercontent.com/jennndol/todo-app/master/static/todos.png "Query Todos")

### Query todo

![Query Todo](https://raw.githubusercontent.com/jennndol/todo-app/master/static/todo.png "Query Todo")

### Mutation createTodo

![Mutation createTodo](https://raw.githubusercontent.com/jennndol/todo-app/master/static/create-todo.png "Mutation createTodo")

### Mutation updateTodo

![Mutation updateTodo](https://raw.githubusercontent.com/jennndol/todo-app/master/static/update-todo.png "Mutation updateTodo")

### Mutation deleteTodo

![Mutation deleteTodo](https://raw.githubusercontent.com/jennndol/todo-app/master/static/delete-todo.png "Mutation deleteTodo")
