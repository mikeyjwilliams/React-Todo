import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const todos = [
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
]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
     todos: todos
    };
  }

  addTodos = todo => {
      const newTodo = {
        task: todo,
        id: Date.now(),
        completed: false
      }
      this.setState({
        todos: [...this.state.todos, newTodo]
      })
  }

  deleteTask = () => {
    // filter tasks not completed and update state.
    const completedTodos = this.state.todos.filter(todo => !todo.completed)
    this.setState({
      todos: completedTodos
    })
  }

  toggleItem = id => {
      this.setState(
        { todos: this.state.todos.map(todo => { if(todo.id === id)
          { return { ...todo, completed: !todo.completed } }
          return todo; 
      })
    });
  } 

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        <TodoForm addTodos={this.addTodos} handleClick={this.handleClick} deleteTask={this.deleteTask} />
      </div>
    );
  }
}
export default App;
