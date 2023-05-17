import React from "react";
import "./TechStack.css";

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h2>Tech Stack</h2>
      <p>
        We use the following technologies. 
      </p>
      <div className="circle-container">
        <div className="circle-wrapper">
          <div className="circle">HTML</div>
        </div>
        <div className="circle-wrapper">
          <div className="circle">CSS</div>
        </div>
        <div className="circle-wrapper">
          <div className="circle">JS</div>
        </div>
        <div className="circle-wrapper">
          <div className="circle">REACT</div>
        </div>
        <div className="circle-wrapper">
          <div className="circle">3JS</div>
        </div>
        <div className="circle-wrapper">
          <div className="circle">EXPRESS</div>
        </div>
        <div className="circle-wrapper">
          <div className="circle">RUBY</div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;