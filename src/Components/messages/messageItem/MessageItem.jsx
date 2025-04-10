import PropTypes from "prop-types";
import Button from "../../button/Button";
import styles from './messageItem.module.css';

const MessageItem = ({ message, onDelete, onAdd, onEdit }) => {
  return (
    <li className={styles.messageItem}>
      <span className={styles.messageText}>{message}</span>
      <div className={styles.buttonGroup}>
        <Button text="Видалити" type="delete" onClick={onDelete} />
        <Button text="Додати" type="add" onClick={onAdd} />
        <Button text="Виправити" type="re" onClick={onEdit} />
      </div>
    </li>
  );
};

MessageItem.propTypes = {
  message: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func
};

export default MessageItem;
