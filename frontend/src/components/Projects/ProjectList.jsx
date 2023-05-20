import React from "react";
import ProjectListItem from './ProjectListItem';

export default function ProjectList(props) {
  console.log(props);
  return (
    <ProjectListItem
      projectData={props.projectData}
    />
  )
}