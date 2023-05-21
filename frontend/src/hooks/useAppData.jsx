import { useState, useEffect } from "react";
import axios from 'axios';
import { getUserProjects, getProject } from "../helpers/projectsHelpers";

export default function useAppData() {

  const [state, setState] = useState({
    id: 1,
    title: '',
    description: '',
    features: '',
    tech_stack: '',
    project_url: '',
    image_url: ''
  });

  const [projects, setProjects] = useState([]);
  const [joshProjects, setJoshProjects] = useState([]);
  const [shilpaProjects, setShilpaProjects] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const project_id = Number(localStorage.getItem("project_id"));

    Promise.all([
      getUserProjects(user_id),
      getUserProjects(5),
      getUserProjects(7),
      getProject(project_id),
    ])
    .then((all) => {
      setProjects(all[0]['data']);
      setJoshProjects(all[1]['data']);
      setShilpaProjects(all[2]['data']);
      setProject((all[3]['data'][0]));
      //localStorage.setItem("currentProject", (all[3]['data'][0]));
    })

  }, []);

  return { projects, state, joshProjects, shilpaProjects, project };
  
};