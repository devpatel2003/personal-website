import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
                  <p>
                     Hi! I'm Dev. I’m studying Mechatronics and Artificial Intelligence Systems Engineering at the Univeristy of 
                     Western Ontario, and I’ve always been drawn to building things that move, react, and learn.
                     I love the hands-on side of engineering just as much as the software side. Whether it’s designing a part in CAD, prototyping 
                     a gearbox, or testing code to bring a robot to life. <br></br><br></br>

                     A lot of my work focuses on robotics, reinforcement learning, and intelligent control, but most of my ideas start in the mechanical design phase. 
                     I like figuring out how parts fit together, how forces move through a system, and sizing motors or gear ratios based on the loads I expect. 
                     Whether it’s a robotic arm or a mobile rover, I enjoy turning a rough concept into hardware that’s actually strong, smooth, and reliable.<br></br><br></br>

                     On the software side, I’ve been exploring RL-based navigation, VLA robotic arm control, and simulation workflows using ROS 2 + Gazebo, 
                     PyBullet, and Isaac Sim. What motivates me most is the challenge of connecting all the pieces (mechanical, electrical, and software)
                     into a system that actually works in the real world.<br></br><br></br>

                     Outside of school and projects, you'll find me improving my homelab, 3D printing random ideas, indoor rock climbing, 
                     camping, playing golf, or enjoying some downtime with video games or a good movie.
                  </p>


            </div>
         </div>
      </section>
    );
  }
}