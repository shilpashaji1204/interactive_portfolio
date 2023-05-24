import React from "react";
import useAppData from "../../hooks/useAppData";
import EditProjectForm from "./EditProjectForm";
import "./EditProject.css";

export default function EditProject(props) {

  const {project} = useAppData();
  
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
     <div className="edit-page">
       <h1 className="project-title">{title}</h1>
          <p>Description: {description}</p>
        <table style={{width: 300}}>
          <thead>
            <tr style={{width: 100}}>
              <th style={{height: 100}}>Features</th>
              <th>{features}</th>
            </tr>
            <tr>
              <th style={{font:"bold"}}>Tech Stack</th>
              <th>{tech_stack}</th>
            </tr>
            <tr>
              <th>Project Url</th>
              <th>{project_url}</th>
            </tr>
            <tr>
              <th>Image Url</th>
              <th>{image_url}</th>
            </tr>
          </thead>
        </table>
        <EditProjectForm id={id} title={title}/>
     </div>
  )
};