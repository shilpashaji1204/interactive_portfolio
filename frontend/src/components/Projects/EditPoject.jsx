import React from "react";
import useAppData from "../../hooks/useAppData";
import EditProjectForm from "./EditProjectForm";
import "./EditProject.css";

export default function EditProject(props) {
  const { project } = useAppData();
  
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
      <div className="project-details">
      <div className="project-detail">
          <div className="detail-label">Description:</div>
          <div className="detail-value">{description}</div>
        </div>
        <div className="project-detail">
          <div className="detail-label">Features:</div>
          <div className="detail-value">{features}</div>
        </div>
        <div className="project-detail">
          <div className="detail-label">Tech Stack:</div>
          <div className="detail-value">{tech_stack}</div>
        </div>
        <div className="project-detail">
          <div className="detail-label">Project Url:</div>
          <div className="detail-value">{project_url}</div>
        </div>
        <div className="project-detail">
          <div className="detail-label">Image Url:</div>
          <div className="detail-value">{image_url}</div>
        </div>
      </div>
      <EditProjectForm id={id} title={title} />
    </div>
  );
}
