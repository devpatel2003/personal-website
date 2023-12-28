import React from 'react';
import './modalstyle.css';

const Modal2 = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose} className="close">&times;</button>
        </div>
        <div className="modal-body">
          <h3>Stock Price Prediction Using LSTM</h3>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Modal2;