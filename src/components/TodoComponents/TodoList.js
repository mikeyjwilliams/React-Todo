// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
    console.log('props in TodoList', props);
    return (
        <div>
      {props.todos.map(todo => {
            return <Todo task={todo.task}/>;
          })}
        </div>
    );
}
export default TodoList;
