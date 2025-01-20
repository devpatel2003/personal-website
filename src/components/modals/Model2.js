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
          <h3>Recession Prediction Using LSTMM</h3>
          <p>Group Project to Predict Recessions in US, 4 months in advanced.</p>
          <p>This school project allowed me to learn more about what it takes to evaluate Economic indicators using ML. The datasets used in this project includes U.S Unemployment Rates, GDP, Inflation rates and Dates of US Recessions.
            The goal of this project is to predict future reccessions, to do so we needed to break up this problem into 2 parts. The first step was to train a model to predict future values of our indicators.
            The second step was to train a model to classify reccessions based on these indicators. We then combined these two models to first predict 4 months ahead and then classify if it is a reccession or not. </p>
            <p>Our model was trained from 1967-2000, and when tested it was able to predict a reccession in 2001, 2007, 2021</p>
          <div style={{ marginTop: '20px' }}>
            <h4>Project Report</h4>
            <iframe
              src = "images/portfolio/Report.pdf"
              width="100%"
              height="1000px"
              style={{ border: 'none' }}
              title="Report PDF"
              />
        

           
          </div>
          <a href='https://github.com/ChrisLato/AISE-4010-Project-US-Economic-Recession-Predictor/tree/dev'>Source Code</a>

        </div>
      </div>
    </div>
  );
};

export default Modal2;