import { Component } from "react"
import RandomShit from "./Components/RandomShit";
import Modal from "./Components/Modal";

class App extends Component {
  state = {
    isModalOpen: false
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() { 
    return (
      <div>
        <RandomShit onClick={this.handleOpenModal} />
        {this.state.isModalOpen && (
          <Modal onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
 
export default App;