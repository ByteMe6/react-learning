import { Component } from "react";
import { arr } from "./comps/array";
import Comp from "./comps/Comp";

class App extends Component {
  state = { message: "Test!", arr };
  render() {
    return <Comp arr={this.state.arr} />;
  }
}

export default App;
