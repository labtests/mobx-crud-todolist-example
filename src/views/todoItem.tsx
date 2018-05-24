import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import TodoModel from '../models/todoModel';

interface Props {
  todo: TodoModel;
}

@observer
export default class TodoItem extends React.Component<Props, object> {
  @observable isEditing: boolean = false;

  render() {
    const todo = this.props.todo;

    if (this.isEditing) {
      return (
<input type="text" value={todo.title} />
      );
    }

    return (
<div>
  ⏰ {todo.remainingTime} {todo.completed ? '✅' : '❌'} {todo.title} 
</div>
    );
  }
}
