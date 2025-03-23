import { Component } from "react";

class Info extends Component {
  state = {};

  render() {
    let All = this.props.length;
    let Completed = this.props.completed;
    return (
      <div className="info">
        Всього: {All} <br />
        Виконано: {Completed}
      </div>
    );
  }
}

export default Info;
