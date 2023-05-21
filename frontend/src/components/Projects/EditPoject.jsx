import React from "react";
import useAppData from "../../hooks/useAppData";
import EditProjectForm from "./EditProjectForm";

export default function EditProject(props) {

  const {project} = useAppData();

  console.log(project.title);

  
  const {
    id,
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
        <EditProjectForm id={id} title={title}/>
     </div>
  )
};