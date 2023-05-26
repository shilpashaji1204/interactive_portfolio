import React from "react";
import "./Projects.css";
import pairPic from "../assets/images/pair_pic.jpg";
import ProjectAnimation from "./ProjectAnimation";
import Lottie from "lottie-react";
import animationData from "../assets/125170-projects-text.json"
import { Link } from "react-router-dom"
import useAppData from "../hooks/useAppData";
import ProjectsListItem from "./ProjectsListItem";


const Projects = () => {

  const {allProjects} = useAppData();

  const projectsArray = allProjects.map(project => (
    <div>
     <ProjectsListItem  
      key={project.id}
      title={project.title}
      description={project.description}
      features={project.features}
      tech_stack={project.tech_stack}
      project_url={project.project_url}
      image_url={project.image_url}
    />
    <div className="spacer"></div>
    </div>
  ));

  return (
    
    <div>
      <ProjectAnimation/>
      {projectsArray}
    </div>
  
  )
};

export default Projects;








