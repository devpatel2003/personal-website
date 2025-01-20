import React from 'react';
import './modalstyle.css';

const Modal5 = ({ show, onClose, children }) => {
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
          <h3>Teaching an RL model to play Galaxian</h3>
          <p> In this project, I trained an RL model to play the game Galaxian. The model was trained using the OpenAI Gym environment and the PyTorch library. To give the agent the ability to see, a CNN use used to capture complex patterns, and to allow the agent to get a sense of movement over time, 4 frames are passed at once into the CNN to help build temporal dependencies.
            The output of the CNN is then passed into a DQN layer to help the agent make decisions.
            The model was trained over 10 hours with adjustments to the rewards and penalties in between each hour to help the agent learn various actions. For example, the reward for shooting an alien would be 10 points while the penalty to losing a life would be -100.
            At one point the model learnt to stay in the corner to avoid incoming attacks. To enforce the model to move around, a penalty was added for staying in the corner for too long.
            While the final model was not perfect, I could still see the model learning and improving over time.
          </p>
          <img src='images/portfolio/RLschem.png' alt="ModelOverview" width="100%" height="100%"/>

          <p>To see video demo's after different increments of training check out the github project link</p>
          <a href='https://github.com/devpatel2003/Atari-Game-RL-Agent/tree/main'>Github Project Link</a>
        </div>
      </div>
    </div>
  );
};

export default Modal5;