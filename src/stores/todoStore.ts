import { observable, action } from 'mobx';
import TodoModel from '../models/todoModel';

export default class TodoStore {
  @observable private todos: TodoModel[] = [];

  @action
  addTodo(todo: TodoModel) {
    this.todos.push(todo);
  }

  get todoList(): TodoModel[] {
    return this.todos;
  }
}
