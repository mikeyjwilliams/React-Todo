import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'code',
          id: Date.now(),
          completed: false
        },
        {
          task: 'be a boss',
          id: Date.now(),
          completed: true
        }
      ],
      todo: {
        task: '',
        id: Date.now(),
        completed: false
      }
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
