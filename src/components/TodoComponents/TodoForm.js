import React from 'react';
import './Todo.css';
import TodoList from './TodoList';
import Todo from './Todo';

class TodoForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <form>
                <input type="text" name="task" placeholder="...todo" value="stuff" />
                <button type="button" className="add-todo">Add Todo</button>
                <button type="button" className="clear-completed">Clear Completed</button>
                </form>
            </div>
            
        );
    }
}
export default TodoForm;