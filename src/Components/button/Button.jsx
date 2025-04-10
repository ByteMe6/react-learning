import PropTypes from 'prop-types';
import './button.module.css';

const Button = ({ text, type, onClick }) => {
  const getButtonClass = () => {
    switch (type) {
      case 'delete':
        return 'button-delete';
      case 'add':
        return 'button-add';
      case 're':
        return 'button-edit';
      default:
        return 'button-default';
    }
  };

  return (
    <button 
      className={getButtonClass()} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['delete', 'add', 're']).isRequired,
  onClick: PropTypes.func
};

export default Button;
