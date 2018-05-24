import { observable } from 'mobx';

export default class TodoModel {
  static random(): TodoModel {
    const todo = new TodoModel();
    todo.title = todo.id;
    return todo;
  }

  id: string;
  @observable title: string;
  @observable completed: boolean;

  constructor() {
    this.id = `${Date.now()}`;
  }
}
