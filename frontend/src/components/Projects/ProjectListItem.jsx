import React from "react";
import "./ProjectList.css";

export default function ProjectListItem(props) {

  console.log(props);
  const { title, description, features, tech_stack, project_url, image_url } = props;

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
      </div>
    </div>
  )
};