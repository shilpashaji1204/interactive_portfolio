import React from "react";
import ProjectListItem from './ProjectListItem';

export default function ProjectList(props) {

  const projectArray = props.projectData.map(project => {

    return (
      <ProjectListItem
        key={project.id}
        id={project.id}
        title={project.title}
        description={project.description}
        features={project.features}
        tech_stack={project.tech_stack}
        project_url={project.project_url}
        image_url={project.image_url}
      />
    )
  })

  return <ul>{projectArray}</ul>
}