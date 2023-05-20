import { useState, useEffect } from "react";
import React from "react";
import { getUserProjects } from "../helpers/projectsHelpers";
import ProjectList from "../components/Projects/ProjectList";
import useAppData from "../hooks/useAppData";

const SampleProjects = (props) => {

  const {projects, state} = useAppData();

    return (
      <div>
          <h1>Portfolio</h1>
          <ProjectList projectData={projects}/>
      </div>
    )
};

export default SampleProjects;