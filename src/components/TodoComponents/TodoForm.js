import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            todo: ""
        };
    }
    handleUpdate = event => {
        this.setState({
            todo: event.target.value
        })  
        console.log(event.target.value);
    }

    submitTodo = event => {
        event.preventDefault();
        this.props.addTodos(this.state.todo);
        this.setState({todo: ""});
    }

    render() {
        return(
            <form onSubmit={this.submitTodo}>
                <input 
                    type="text"
                    name="todo" 
                    placeholder="...todo" 
                    className="todo-input" 
                    onChange={this.handleUpdate} 
                    value={this.state.task} 
                />
                <button 
                    type="submit" 
                    className="add-todo">
                        Add Todo
                </button>
    
                <button 
                    type="button" 
                    className="clear-completed" 
                    onClick={this.props.deleteTask}>
                        Clear Completed
                </button>
            </form>
        );
    }
}   
export default TodoForm;