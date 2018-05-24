import { observable, action } from 'mobx';
import TodoModel from '../models/todoModel';

export default class TodoStore {
  @observable private todos: TodoModel[] = [];

  @action
  add(todo: TodoModel) {
    this.todos.push(todo);
  }

  @action
  delete(todo: TodoModel): boolean {
    const idx = this.todoList.indexOf(todo);
    if (idx >= 0) {
      this.todoList.splice(idx, 1);
      return true;
    }
    return false;
  }

  get todoList(): TodoModel[] {
    return this.todos;
  }
}
