import { Component } from "react"
import TodoList from "./Components/TodoList";
import Info from "./Components/Info";
import TodoEditor from "./Components/TodoEditor";
import Filter from "./Components/Filter";
import TodoArr from "./Components/Todo.json";

class App extends Component {
  state = { todos: [], filter: "" }

  componentDidMount() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      this.setState({ todos: JSON.parse(storedTodos) });
    } else {
      this.setState({ todos: TodoArr }); 
    }
  }

  handleUpdateTodos = (updatedTodos) => {
    this.setState({ todos: updatedTodos }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    });
  }

  // Метод для удаления задачи
  handleDeleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos)); // Сохранение в localStorage
    });
  }

  // Метод для добавления новой задачи
  handleAddTodo = (newTodo) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }), () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos)); // Сохранение в localStorage
    });
  }

  // Метод для изменения фильтра
  handleFilterChange = (filter) => {
    this.setState({ filter });
  }

  render() { 
    const completedCount = this.state.todos.filter(todo => todo.completed).length;
    const filteredTodos = this.state.todos.filter(todo => 
      todo.task.toLowerCase().includes(this.state.filter.toLowerCase())
    ); // Фильтрация задач

    return (
      <div>
        <Info length={this.state.todos.length} completed={completedCount} />
        <Filter onFilterChange={this.handleFilterChange} />
        <TodoEditor onAddTodo={this.handleAddTodo} />
        <TodoList 
          todos={filteredTodos}
          onUpdateTodos={this.handleUpdateTodos} 
          onDelete={this.handleDeleteTodo} 
        />
      </div>
    );
  }
}
 
export default App;