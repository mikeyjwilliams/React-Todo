import React from 'react';
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
          completed: false,
        },
        {
          task: 'run outside',
          id: Date.now(),
          completed: true,
        },
      ],
      todo: {
        task: '',
        id: Date.now(),
        completed: false,
      },
    };
  }

  handleUpdate = (event) => {
   console.log('event.target.value=> ', event.target.value);
   console.log('this.state.todo', this.state.todo);
   this.setState({
     todo: {
       ...this.state.todo,
       task: event.target.value
     }
   });
  };

  handleClick = (event) => {
    const newTodosList = this.state.todos;
    newTodosList.push(this.state.todo);
    console.log('newTodoList=> ', newTodosList);
    this.setState ({
      todos: newTodosList
    });
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm handleUpdate={this.handleUpdate} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
