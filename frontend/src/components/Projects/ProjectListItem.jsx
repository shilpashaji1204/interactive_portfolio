import React from "react";

export default function ProjectListItem(props) {

  console.log(props);

  const { title, description, features, tech_stack, project_url, image_url } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{features}</p>
        <h3> Tech Stack: {tech_stack} </h3>
        <h3> Links: </h3>
      <ul> 
        <li>{project_url} </li>
        <li>{image_url} </li>
      </ul>
    </div>
  )
};