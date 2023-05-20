import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import "../styles/SampleProjects.css";

const SampleProjects = () => {

    return (

        <div className="projects">
            <h1>Portfolio</h1>
            <div className="projectList"></div>
            {projectList.map((project) => (
          <Link to={project.link} key={project.name}>
            <ProjectItem name={project.name} image={project.image} />
          </Link>
        ))}
        <div className="addIconContainer">
        <Link to="/add-project">
        <AddIcon className="addIcon" style={{ fontSize: 60 }} />
        </Link>
      </div>
      </div>
       
    )
}
export default SampleProjects