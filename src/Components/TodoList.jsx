import { Component } from "react";

class TodoList extends Component {
    state = {  } 

    handleCheckboxChange = (id) => {
        const updatedTodos = this.props.todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        this.props.onUpdateTodos(updatedTodos);
    }

    render() { 
        return (
            <ul className="todosListListList">
                {this.props.todos.map((todo) => (
                    <li key={todo.id}>
                        <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={() => this.handleCheckboxChange(todo.id)} 
                        />
                        {todo.task}
                        <button onClick={() => this.props.onDelete(todo.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default TodoList;