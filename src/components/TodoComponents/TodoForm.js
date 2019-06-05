import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return(
        <form>
        <input type="text" name="task" placeholder="...todo" value={props.item} />
        <button type="button" className="add-todo">Add Todo</button>
        <button type="button" className="clear-completed">Clear Completed</button>
        </form>
    );
};
export default TodoForm;