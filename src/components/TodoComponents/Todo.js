import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
    return (
        <div>
            <TodoList />
            <TodoForm /> 
        </div>
    );
}
export default Todo;