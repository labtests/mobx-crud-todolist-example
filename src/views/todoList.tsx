import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import TodoItem from './todoItem';
import TodoStore from '../stores/todoStore';
import TodoModel from '../models/todoModel';

interface Props {
  store: TodoStore;
}

@observer
export default class TodoList extends React.Component<Props, object> {
  @observable isEditing: boolean = false;

  render() {
    const { store } = this.props;

    return (
<div>
  <button onClick={this.newTodoHandler}>New Todo</button>
  <hr />
  {store.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} requestRemoval={this.requestRemovalHandler} />)}
</div>
    )
  }

  private newTodoHandler = () => {
    const { store } = this.props;
    const todo = TodoModel.random();
    store.add(todo);
  }

  private requestRemovalHandler = (model: TodoModel) => {
    const { store } = this.props;
    store.delete(model);
  }
}
