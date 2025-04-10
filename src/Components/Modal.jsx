import React from 'react';
import './modal.css'; // Создайте файл стилей для модального окна

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Закрыть</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
