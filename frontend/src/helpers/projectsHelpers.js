import { useState, useEffect } from "react";
import axios from "axios";

export function getProjects(userId) {

  return axios.get(`/projects`, {userId})
  .then((data) => {
    return (data);
  });
 
};

