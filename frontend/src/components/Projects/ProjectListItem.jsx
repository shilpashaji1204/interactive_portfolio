import React from "react";

export default function ProjectListItem(props) {

  console.log(props.projectData[0])
  return (
    <div>
      {props.projectData[0].id}
    </div>
  )
}