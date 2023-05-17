import React from "react";
import reactIcon from "../assets/images/react_icon.webp";
import "./About.css";


const About = () => {
    return (
      <div className="about">
        <h2>ABOUT US</h2>
        <p>

        <span className="intro">Introduction</span> <br />
        <span className="overview">Overview.</span><br /><br />



      
          We are a full stack web development team that specializes in building cutting edge websites and web applications. 
          If you can dream it we can build it. 
          
          <br />

          We use the most modern tech stack including HTML, CSS, JavaScript, 
          and have expertise in frameworks like React, Node.js,

          <br />

          Let's work together to bring
          your ideas to life!

          <br />



          Filler text for space


        </p>
        <div className="icon-container">
          <img src={reactIcon} alt="React Icon" className="icon" />
          <img src={reactIcon} alt="React Icon" className="icon" />
          <img src={reactIcon} alt="React Icon" className="icon" />
          <img src={reactIcon} alt="React Icon" className="icon" />
        </div>
      </div>
    );
};

export default About;
