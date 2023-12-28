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
                  <p>Hello! I'm Dev, a Mechatronics and Artificial Intelligence Systems Engineer at The University of Western Ontario. With a talent for problem solving and a passion for technology, I am always looking for new ways to innovate and improve the world around me. <br/><br/>I am interested in the fields of software development, data science, and machine learning. In addition to software development, I am also keenly focused on designing, prototyping, and testing various robotic systems, leveraging my expertise to integrate intelligent software with mechanical functionality. I am also open to other opportunities that will allow me to apply my skills and learn new ones. <br/><br/>In my free time, I enjoy golf, skiing, movies and solving puzzles.
                  </p>


            </div>
         </div>
      </section>
    );
  }
}