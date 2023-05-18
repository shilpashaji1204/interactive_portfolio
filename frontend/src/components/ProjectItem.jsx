import React from "react";
import { Link } from "react-router-dom";


const ProjectItem = ({ image, name, link }) => {

    return (

        <div className="projectItem">
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
            <Link to={link} >
            <h1> {name} </h1>
            </Link>
        </div>
    )
}

export default ProjectItem