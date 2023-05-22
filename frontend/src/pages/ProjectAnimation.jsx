import React from "react";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/125170-projects-text.json";
import "./ProjectAnimation.css";

function ProjectAnimation() {
  return (
    <div className="project-animation">
      <Lottie animationData={animationData} />
    </div>
  );
}

export default ProjectAnimation;