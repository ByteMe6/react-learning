import { Component } from "react";

class Filter extends Component {
  handleInputChange = (event) => {
    this.props.onFilterChange(event.target.value); // Передача значения фильтра в родительский компонент
  };

  render() {
    return (
      <input 
        type="text" 
        placeholder="Фильтр задач" 
        onChange={this.handleInputChange} 
      />
    );
  }
}

export default Filter;
