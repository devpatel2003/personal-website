import React from 'react';
import './modalstyle.css';

const Modal4 = ({ show, onClose, children }) => {
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
          <h3>8-Bit Computer Prototype</h3>
          <p>An attempt at recreating Ben Eater's 8-bit Computer design using basic logic gates and latches. 
          The 8 bit computer composed of a clock module, registers, arithmetic logic unit (ALU), random access memory (RAM),
           program counter, output register and a central bus. Built using schematics provided by Ben Eater. Some IC's could not be ordered so a tempory replacement was made using various other IC's and logic gates.
          </p>
          <img src='images/portfolio/8bitschem.png' alt="8bitcomputer" width="100%" height="100%"/>

          <h3>Output Register</h3>
          <p>
            The output register is used to display the output of the computer. It is connected to the central bus and can be loaded with data from the bus. 
            The 8-bit output takes a binary input, converts it in to a decimal output and displays it on a 7 segment display. Since there was no access to an EEPROM, 2 Arduino Nano's were used in its place to perfom the conversion logic. The decimal is then displayed one at a time on each seven-segment display, however it displays each digit quicky giving the appearnce of one number. A potentiometer is used to control the display speed.
          </p>

          <img src='images/portfolio/8bitOutput.png' alt="outputregister" width="100%" height="100%"/>
          <img src='images/portfolio/8bitOutputSchem.png' alt="outputregister" width="100%" height="100%"/>


          <h3>Program Counter</h3>
          <p>
            The program counter is used to s keep track of which instruction the computer is currently executing. It is connected to the central bus and can be loaded with data from the bus. 
            The program counter is a 4-bit register that is incremented by one each clock cycle. The program counter is also connected to the output register. When the program counter is loaded with data from the bus, the output register displays the address of the next instruction to be executed.
          </p>

          <img src='images/portfolio/8bitPC.png' alt="programcounter" width="100%" height="100%"/>
          <img src='images/portfolio/8bitPCschem.png' alt="programcounter" width="100%" height="100%"/>

        </div>
      </div>
    </div>
  );
};

export default Modal4;