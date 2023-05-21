import React from "react";
import { getProject } from "../../helpers/projectsHelpers";
import { useState, useEffect } from "react";

export default function EditProject() {

  const [project, setProject] = useState([]);

  
  useEffect(() => {
    const project_id = Number(localStorage.getItem("project_id"));

    getProject(project_id).then((data) => {
      setProject(data);
    });
  }, []);

  console.log(project);

  return (
    <div>
      {'project'}
    </div>
  )
};