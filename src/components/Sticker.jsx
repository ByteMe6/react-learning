import { Component } from "react";

class Sticker extends Component {
  render() {
    const { img, label } = this.props.stick;
    return (
      <li className={this.props.isSelected ? "selected" : ""}>
        <img src={img} alt={label} />
        <p>{label}</p>
      </li>
    );
  }
}

export default Sticker;