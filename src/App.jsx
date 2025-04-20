import { Component } from "react";
import { fetchGifs } from "./components/ApiRequest";
import Form from "./components/Form";

class App extends Component {
  state = {
    gifs: [],
    error: null,
    keyword: " "
  };

  async componentDidMount() {
    const apiKey = import.meta.env.VITE_ApiKey;
    const gifs = await fetchGifs(apiKey, this.state.keyword);
    if (typeof gifs === 'string') { 
      this.setState({ error: gifs });
    } else {
      this.setState({ gifs });
    }
  }

  takeValue = async (newValue) => {
    this.setState({ keyword: newValue }, async () => {
      const apiKey = import.meta.env.VITE_ApiKey;
      const gifs = await fetchGifs(apiKey, newValue); // Получаем новые GIF-изображения
      if (typeof gifs === 'string') {
        this.setState({ error: gifs });
      } else {
        this.setState({ gifs });
      }
    });
  }

  render() {
    return (
      <main className="main">
        <div className="gifs">
          {this.state.error ? (
            <h2>{this.state.error}</h2>
          ) : (
            Array.isArray(this.state.gifs) && this.state.gifs.length > 0 ? (
              this.state.gifs.map(gif => (
                <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
              ))
            ) : (
              <h2>Nothing</h2>
            )
          )}
        </div>
        <Form takeV={this.takeValue}></Form>
      </main>
    );
  }
}
export default App;