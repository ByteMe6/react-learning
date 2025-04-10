// цей компонент має рендерити список повідомлень
import PropTypes from "prop-types";
import MessageItem from "./messageItem/MessageItem";
import styles from './messageList.module.css';

const MessageList = ({ messages = [], onDelete, onAdd, onEdit }) => {
  console.log(messages);
  return (
    <ul className={styles.messageList}>
      {messages &&
        messages.map((message, index) => (
          <MessageItem 
            key={index} 
            message={message} 
            onDelete={() => onDelete?.(index)}
            onAdd={() => onAdd?.(index)}
            onEdit={() => onEdit?.(index)}
          />
        ))}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func
};

export default MessageList;
