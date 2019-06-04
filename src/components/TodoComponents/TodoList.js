// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

function TodoList() {
    return (
        <ul>
            <Todo />
        </ul>
    );
}
export default TodoList;
