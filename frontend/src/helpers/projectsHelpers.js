import { useState, useEffect } from "react";
import axios from "axios";

export function getrojects(userId) {

  return axios.get(`/projects`, {userId})
  .then((data) => {
    return (data);
  });
 
};

