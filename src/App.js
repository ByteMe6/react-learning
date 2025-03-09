import { Component } from "react";
import Choice from "./components/Choice";
import StickerList from "./components/StickerList";
import sArr from "./components/stickers.json";

class App extends Component {
  state = {
    selectedSticker: "",
  };

  handleSelect = (label) => {
    this.setState({ selectedSticker: label });
  };

  render() {
    return (
      <main className="main">
        <Choice sArr={sArr} selectedSticker={this.state.selectedSticker} onSelect={this.handleSelect} />
        <StickerList sArr={sArr} selectedSticker={this.state.selectedSticker} />
      </main>
    );
  }
}

export default App;