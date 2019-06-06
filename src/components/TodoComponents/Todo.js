import React from 'react';
import './Todo.css';

const toggleItem = (props) => {
    console.log('purchase item change', props.todo.id);
    // props.toggleItem(props.todo.id);
}

const Todo = props => {
    console.log('props in Todo', props.todo);
    return (
        <div className={`${props.completed ? " completed" : ""}`} onClick={toggleItem}>
            {props.task}
        </div>
    );
}
export default Todo;