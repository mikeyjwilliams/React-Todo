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
          id: Date.now() + 1,
          completed: false,
        },
        {
          task: 'run outside',
          id: Date.now() + 2,
          completed: false,
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

  toggleItem = id => {
    console.log(id);
    const newList = this.state.todos.map(item => {
      if (item.id === id) {
        const newObj = {
          ...item,
          completed: !item.purchased
        };
        return newObj;
      } else {
        return item;
      }
    });

    this.setState({ todos: newList });
  };
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        <TodoForm handleUpdate={this.handleUpdate} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
