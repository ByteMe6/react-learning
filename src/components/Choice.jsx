import { Component } from "react";

class Choice extends Component {
  handleChange = (event) => {
    this.props.onSelect(event.target.value);
  };

  render() {
    return (
      <div className="choiceCont">
        <label>Choose sticker: </label>
        <select onChange={this.handleChange} value={this.props.selectedSticker}>
        <option value="choose!">Choose!</option>
          {this.props.sArr.map((sticker, index) => (
            <option key={index} value={sticker.label}>
              {sticker.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Choice;