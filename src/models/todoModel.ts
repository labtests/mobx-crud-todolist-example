import { observable, computed } from 'mobx';

export default class TodoModel {
  static random(): TodoModel {
    const todo = new TodoModel();
    todo.title = todo.id;
    return todo;
  }

  id: string;
  @observable title: string;
  @observable remainingTime: number;

  @computed get completed(): boolean {
    return this.remainingTime === 0;
  }

  constructor() {
    this.id = `${Date.now()}`;
    this.remainingTime = 20;

    const refreshID = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        clearInterval(refreshID);
      }
    }, 1000);
  }
}
