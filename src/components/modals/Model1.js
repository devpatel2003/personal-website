import React from 'react';
import './modalstyle.css';

const Modal1 = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-container" onClick={onClose}>
    <div className="modal" >
      <div className="modal-details" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose} className="close">&times;</button>
        </div>
        <div className="modal-body">
            <h3>Breast Cancer ML Model</h3>
            <p>To objective of this project is to develop a machine learning model that can predict breast cancer based on various medical indicators. 
                 The project utilizes a dataset containing medical measurements and applies a classification algorithm to distinguish between benign and malignant cases.</p>
            <br></br>

            <h5>Libraries and Tools Used:</h5>
            <ol>
                <li><b>Pandas:</b> For data manipulation and analysis</li>
                <li><b>NumPy:</b> To work with arrays and perform mathematical operations</li>
                <li><b>Scikit Learn:</b> Tools for data preprocessing, model training, and evaluation</li>
                <li><b>Matplotlib and Seaborn:</b> For data visualization</li>
            </ol>

            <h5>Key Concepts</h5>
            <ol>
                <li><b>Data Preprocessing:</b> The dataset was cleaned and prepared for model training. 
                    The data was split into training and testing sets. 
                    The data was scaled using the StandardScaler function.</li>
                <li><b>Dimensionality Reduction:</b> Using PCA to reduce the number of features while preserving essential information.</li>
                <li><b>Model Training:</b> Employing logistic regression to classify data into benign or malignant.</li>
                <li><b>Model Evaluation:</b> Assessing the model's performance using metrics like precision, recall, and accuracy.</li>
            </ol>

            <h5>Model Training and Evaluation:</h5>   
            <p>The dataset was split into training and testing sets with 90% of the data used for training and 10% used for testing. 
                The model was trained using the training set and evaluated using the testing set. 
                The model achieved an accuracy of 98% on the testing set.</p>    

            <img src="images/portfolio/BCPlot.png" width="500" height="300"></img> 
            <img src="images/portfolio/BCmatrix.png" width="500" height="300"></img> 
            <img src="images/portfolio/BCresults.png" width="500" height="300"></img>
            <br></br>

            <a href='https://github.com/devpatel2003/BreastCancerMLModel'>Source Code</a>
        


        </div>
      </div>
    </div>
    </div>
  );
};

export default Modal1;