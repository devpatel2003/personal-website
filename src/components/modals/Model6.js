import React from 'react';
import './modalstyle.css';

const Modal6 = ({ show, onClose, children }) => {
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
          <h3>Autonomous Wheelchair Navigation and Docking Using Reinforcement Learning</h3>

          <div style={{ marginTop: '20px', marginBottom: '30px' }}>
            <video
              width="100%"
              controls
              autoPlay
              muted
              loop
              style={{ border: 'none', maxWidth: '800px', display: 'block', margin: '0 auto' }}
            >
              <source src="https://github.com/devpatel2003/personal-website/releases/download/video-assests/obs_avoid_480p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p>
            This was my biggest reinforcement learning project so far, where I set out to teach a robot how to navigate 
            and explore completely on its own. I built the entire system from scratch, creating a custom simulation environment 
            in PyBullet, modeling the robot’s physics, randomizing sensors and actuators to improve robustness, and using 
            Stable-Baselines3 as the core RL framework. A lot of the work went into designing reward functions, 
            tuning hyperparameters, and getting the robot to learn stable, meaningful behaviours instead of exploiting shortcuts. It pushed everything I knew about robotics, control, and RL to a new level.
          </p>

          <p>
            This project actually started out as a simple class assignment, but it quickly grew into something much bigger. 
            I became really interested in the idea of teaching a mobility device to navigate and dock on its own, so 
            I kept pushing the work long after the course ended. That curiosity eventually turned it into a full summer 
            research position at my University, where I expanded the environment, redesigned the reward structure, 
            added domain randomization, and explored more advanced RL algorithms to make the system more realistic and reliable.
          </p>

          <p>
            The project itself focuses on enabling powered wheelchairs to perform autonomous navigation and precise docking. 
            Many wheelchair users struggle with consistently aligning their chair for charging, transfers, or entering tight 
            public-transit docking stations. My goal was to explore how reinforcement learning could make these tasks safer, 
            smoother, and more independent.
          </p>

          <p>
            I trained the system in two phases. In Phase 1, I used Twin Delayed Deep Deterministic Policy Gradient (TD3) with 
            full goal information, achieving a 91% docking success rate even in cluttered environments. In Phase 2, I introduced 
            partial observability by removing goal coordinates and relying solely on vision—using ArUco markers as visual 
            targets. With a Recurrent Proximal Policy Optimization (RPPO) agent and LSTM memory, the robot learned to navigate 
            and dock even when the target temporarily disappeared from view, reaching 66–82% success depending on obstacle 
            density.
          </p>

          <p>
            The simulation environment incorporated realistic wheelchair kinematics, noisy LiDAR, camera-based detection, 
            IMU drift, wheel slip, actuator delays, and other sim-to-real challenges. Training was primarily done in PyBullet, 
            and the next major step is to transition the entire environment into Isaac Sim for even more realistic simulations 
            and physics-based testing, then deploying the learned policies onto a ROS 2 platform for real-world testing.
          </p>

          <p>
            First prototype: <a href='https://github.com/devpatel2003/RL-GoalNav-Prototype'>Github Project Link</a>
            <br></br>
            Expanded project: <a href='https://github.com/devpatel2003/RL-ObstacleNavigation/tree/dev'>Github Project Link</a>
          </p>

          <div style={{ marginTop: '20px' }}>
            <h4>Research Poster</h4>
            <iframe
              src="images/portfolio/researchPoster.pdf"
              width="100%"
              height="1000px"
              style={{ border: 'none' }}
              title="Research Poster"
              />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal6;
