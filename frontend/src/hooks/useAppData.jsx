import { useState, useEffect } from "react";
import axios from 'axios';
import { getUserProjects } from "../helpers/projectsHelpers";

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

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
      
    getUserProjects(user_id).then((data) => {
      setProjects(data['data']);
    })

    getUserProjects(5).then((data) => {
      setJoshProjects(data['data']);
    })

    getUserProjects(7).then((data) => {
      setShilpaProjects(data['data']);
    })

  }, []);

  return { projects, state, joshProjects, shilpaProjects };
  
};