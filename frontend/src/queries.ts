import { gql } from "apollo-boost";

export const GET_TODOS = gql `
  {
    todos {
      id
      content
      isCompleted
    }
  }
`;


export const ADD_TODO = gql`
  mutation ($content: String) {
    createTodo(input: { content: $content }) {
      id
      content
      isCompleted
    }
  }`;

export const DELETE_TODO = gql`
  mutation ($id: String) {
    deleteTodo(id: $id)
  }
`;

export const UPDATE_TODO = gql`
  mutation ($id: String){
    updateTodo(id: $id, input: { isCompleted: true }) {
      id
      content
      isCompleted
    }
  }
`;