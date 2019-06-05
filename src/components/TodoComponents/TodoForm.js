import React from 'react';
import './Todo.css';

const TodoForm = props => {
    console.log('props in TodoForm', props);
    return(
        <form>
            <input 
            type="text"
            name="task" 
            placeholder="...todo" 
            className="todo-input" 
            onChange={props.handlesChanges} 
            value={props.name} 
            />
            <button type="button" className="add-todo">Add Todo</button>
            <button type="button" className="clear-completed">Clear Completed</button>
        </form>
    );
};
export default TodoForm;