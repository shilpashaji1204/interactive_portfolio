import { useState, useEffect } from "react";
import axios from "axios";

export function getUserProjects(user_id) {

  return axios.put('/projects', {user_id})
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log(e);
  });
 
};
export function addProject(user_id, project_info) {
  
  return axios.post('/projects/new', {user_id, project_info})
  .then((data) => {
    return data;
  })
  .catch((e) => {
    return ('Error message: ', e);
  });

};

export function getProject(project_id) {

  return axios.put('/project', {project_id}) 
  .then((data) => {
    return data;
  });
};

export function editProject(editedProject) {

  return axios.put('/projects/edit', {editedProject}) 
  .then((data) => {
    return data;
  })
  .catch((e) => {
    return ('Error message: ', e);
  });
};

export function deleteProject(project) {

  return axios.post('/project/delete', {project})
  .then((data) => {
    return data;
  });
};