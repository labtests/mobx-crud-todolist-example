import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import TodoModel from '../models/todoModel';
import { createViewModel, IViewModel } from 'mobx-utils';

interface Props {
  todo: TodoModel;
}

@observer
export default class TodoItem extends React.Component<Props, object> {
  @observable isEditing: boolean = false;
  todoViewModel: IViewModel<TodoModel>;

  render() {
    if (this.isEditing) {
      const todoModel = this.todoViewModel.model;
      return (
<div>
  <input type="text" value={todoModel.title} onChange={this.titleChangedHandler} />
  <button onClick={this.saveHandler}>✅ Save</button>
  <button onClick={this.cancelHandler}>❌ Cancel</button>
</div>
      );
    }

    const todo = this.props.todo;
    return (
<div>
  ⏰ {todo.remainingTime} {todo.completed ? '✅' : '❌'} {todo.title} 
  <button onClick={this.editHandler}>Edit</button>
</div>
    );
  }

  private editHandler = () => {
    this.todoViewModel = createViewModel(this.props.todo);
    this.isEditing = true;
  }
  private saveHandler = () => {
    this.todoViewModel.submit();
    this.isEditing = false;
  }
  private cancelHandler = () => {
    this.todoViewModel.reset();
    this.isEditing = false;
  }
  private titleChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.todoViewModel.model.title = e.target.value;
  }
}
