import React from "react";
import { Link } from "react-router-dom";
//import "./ProjectsListItem.css";

export default function ProjectsListItem(props) {

  const { title, description, features, tech_stack, project_url, image_url } = props;

  return (
  
  <div className="projects-page">
      <div className="project-card-container">

        <div className="projects">
          <div className="project-card">
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="image">
                  <img src={image_url} className="project-image" />
                </div>
              </div>
              <div className="flip-card-back">
                <h2>{title}</h2>
                <p>
                  {description}
                </p>

                <div className="buttons">
                  <button className="button">View Project</button>
                  <Link to={project_url} >
                    <button className="button">Explore Code</button>
                  </Link>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="title">{title}</h2>
    </div>  
  )
}