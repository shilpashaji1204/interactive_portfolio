import React from "react";
import useAppData from "../../hooks/useAppData";

export default function EditProject() {

  const {project} = useAppData();

  //const currentProject = localStorage.getItem("currentProject");
  console.log(project.title);

  
  const {
    title,
    description,
    features,
    tech_stack,
    project_url, 
    image_url,
  } = project;


  return (
     <div>
       <h1>{title}</h1>
        <table>
          <thead>
            <th>{description}</th>
            <th>{features}</th>
            <th>{tech_stack}</th>
            <th>{project_url}</th>
            <th>{image_url}</th>
          </thead>
        </table>
     </div>
  )
};