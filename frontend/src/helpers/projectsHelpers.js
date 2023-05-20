import { useState, useEffect } from "react";
import axios from "axios";

export function getUserProjects(user_id) {

  return axios.put('/projects', {user_id})
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log(e);
  })
 
};

