import React from 'react';
import './modalstyle.css';

const Modal3 = ({ show, onClose, children }) => {
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

          <div className="container">
            <div className="text">
              <h3>WeMars Software Team</h3>
              <p>The goal of my University Rover team is to design and build a remotely operated vehicle that is capable of navigating rugged landscapes. This endeavor involves several key objectives, including the transportation of various items, the manipulation of buttons and switches, and the critical task of detecting signs of life within soil samples. </p>
            </div>
            <div className="img">
              <img src="images/portfolio/WeMars.JPG" width="300" height="180"></img>
            </div>
          </div>
         <br></br>

          <h5>Software Projects</h5>
          <ol>
            <li><b>Rover Control</b> Using a gaming controller and both joysticks to opperate the Rover using tank drive. Opperate the mechanical arm using triggers and buttons.</li>
            <li><b>LiDAR</b> Onboard LiDAR to get accurate measurements of nearby obstacles within a 360 degree radius.</li>
            <li><b>Cameras</b> Various esp32 camera modules as well as intel realsense camera module, OpenCV is used to track predefined objects.</li>
            <li><b>Homebase + Communication Protocal</b> •	Developed and standardized UDP-based communication protocols to facilitate efficient data exchange between the rover and home base.</li>
            <li><b>CAN-BUS</b> Allows for efficient communication between rover subsytems and the Raspberry Pi. </li>
          </ol>

          <h5>Personal Timeline</h5>
          
            <b>September 2021 - December 2022</b> <p>Joined the team as an electrical engineer, learned about the project and the various subsystems including the motor driver and CAN-BUS.</p>
            <b>May 2022 - April 2023</b> <p>Switched into Software team to work on the embedded system, worked on code for 3-phase DC motors, and started work on communication between RPi and Homebase</p>
            <b>May 2023 - Current</b> <p>Appointed Software Team Lead. Started the development of various subsystems including LiDAR and Cameras. Continued development of homebase, GPS and CAN-BUS subsystems.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Modal3;