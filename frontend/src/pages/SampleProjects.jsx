import { useState, useEffect } from "react";
import React from "react";
import { getUserProjects } from "../helpers/projectsHelpers";
import ProjectList from "../components/Projects/ProjectList";
import useAppData from "../hooks/useAppData";

const SampleProjects = (props) => {

      // const [projectData, setProjectData] = useState([]);
       //const user_id = localStorage.getItem("user_id");
      
      // //const dataBuffer = (
      // getUserProjects(user_id).then((data) => {
      //   console.log(Array.isArray(data['data']));
      //   return (data['data']);
      // })
      // //)

      // setProjectData(dataBuffer);

  const {projects, state} = useAppData();

    return (

        <div>
            <h1>Portfolio</h1>
            <ProjectList projectData={projects}/>
        </div>
    )
}

export default SampleProjects