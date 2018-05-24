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
  {store.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
  <hr />
  <button onClick={this.newTodoHandler}>New Todo</button>
</div>
    )
  }

  private newTodoHandler = () => {
    const { store } = this.props;
    const todo = TodoModel.random();
    store.addTodo(todo);
  }
}
