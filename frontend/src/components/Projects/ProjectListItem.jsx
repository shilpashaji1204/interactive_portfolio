import React from "react";
import "./ProjectList.css";
import { useNavigate } from "react-router-dom";
import EditProject from "./EditPoject";

export default function ProjectListItem(props) {

  const navigate = useNavigate();
  const currentUser = localStorage.getItem("user_id");
  const editAuth = localStorage.getItem("auth");
  const { id, title, description, features, tech_stack, project_url, image_url } = props;

  const handleEdit = (event) => {
    const project_id = localStorage.setItem("project_id", id);
    navigate("/editproject");
  }
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{features}</p>
        <h3> Tech Stack: </h3>
        <p>{tech_stack}</p>
      <h3> Github Repo: {project_url} </h3>
      <div>
        <img className="image" src={image_url}/>
        {editAuth && (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  )
};