import React, { useState } from 'react';
import './App.css';
import Container from './components/container/Container';
import MessageList from './components/messages/MessageList';
import Modal from './components/Modal';

function App() {
  const [messages, setMessages] = useState(["asd", "qwe", "zxc"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleDelete = (index) => {
    setMessages(prev => prev.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setCurrentMessage('');
    setCurrentIndex(null);
    setIsModalOpen(true);
  };

  const handleEdit = (index) => {
    setCurrentMessage(messages[index]);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (currentIndex !== null) {
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[currentIndex] = currentMessage;
        return newMessages;
      });
    } else {
      setMessages(prev => [...prev, currentMessage]);
    }
    setIsModalOpen(false);
  };

  return (
    <Container>
      {/* <button onClick={handleAdd}>Добавить сообщение</button> */}
      <MessageList 
        messages={messages}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>{currentIndex !== null ? 'Редактировать сообщение' : 'Добавить сообщение'}</h2>
        <input 
          type="text" 
          value={currentMessage} 
          onChange={(e) => setCurrentMessage(e.target.value)} 
        />
        <button onClick={handleSave}>Сохранить</button>
      </Modal>
    </Container>
  );
}

export default App;
