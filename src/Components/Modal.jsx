import { Component } from "react";
import { MdCloseFullscreen } from "react-icons/md";

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку фона
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible'; // Возвращаем прокрутку
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  }

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    const text = "Модальное окно (Modal) - это элемент интерфейса, который отображается поверх основного содержимого страницы. Оно часто используется для показа важной информации, требующей внимания пользователя, или для выполнения определенных действий без перехода на другую страницу. Модальные окна помогают сфокусировать внимание пользователя на конкретной задаче.";

    return (
      <div className="backdrop" onClick={this.handleBackdropClick}>
        <div className="modal">
          <p className="randomText">{text}</p>
          <button className="close" onClick={this.props.onClose}>
            <MdCloseFullscreen className="closeIcon"/>
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
