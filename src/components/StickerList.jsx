import { Component } from "react";
import Sticker from "./Sticker";

class StickerList extends Component {
  render() {
    return (
      <ul className="sList">
        {this.props.sArr.map((sticker, index) => (
          <Sticker
            key={index}
            stick={sticker}
            isSelected={this.props.selectedSticker === sticker.label}
          />
        ))}
      </ul>
    );
  }
}

export default StickerList;