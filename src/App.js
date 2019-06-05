import React from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: {
        item: ""
      }
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
