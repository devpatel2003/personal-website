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
          <h3>Recession Prediction Using LSTM</h3>
          <p>Group Project to Predict Recessions in US, 4 months in advanced.</p>
          <div style={{ marginTop: '20px' }}>
            <h4>Project Report</h4>
            <embed
              src="images/portfolio/Report.pdf"
              type="application/pdf"
              width="100%"
              height="500px"
            />
          </div>
          <a href='https://github.com/ChrisLato/AISE-4010-Project-US-Economic-Recession-Predictor/tree/dev'>Source Code</a>

        </div>
      </div>
    </div>
  );
};

export default Modal2;