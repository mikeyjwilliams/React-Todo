import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm';

class Todo extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return (
            <div>
                <TodoForm />
            </div>
        );
    }
}
export default Todo;