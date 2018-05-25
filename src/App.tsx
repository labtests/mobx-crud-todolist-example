import * as React from 'react';
import './App.css';
import TodoStore from './stores/todoStore';
import TodoList from './views/todoList';

class App extends React.Component {
  todoStore: TodoStore = new TodoStore();

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">mobx-crud-todolist-example</h1>
        </header>
        <div className="App-intro">
          <TodoList store={this.todoStore} />
        </div>
      </div>
    );
  }
}

export default App;
