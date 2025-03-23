import { Component } from "react";

class TodoEditor extends Component {
  state = {
    task: ""
  };

  handleInputChange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.task.trim()) {
      const newTodo = {
        id: Date.now(), // Уникальный ID для новой задачи
        task: this.state.task,
        completed: false
      };
      this.props.onAddTodo(newTodo); // Вызов метода для добавления задачи
      this.setState({ task: "" }); // Очистка поля ввода
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.task} 
          onChange={this.handleInputChange} 
          placeholder="Введите новую задачу" 
        />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export default TodoEditor;
