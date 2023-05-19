import { useState, useEffect } from "react";
import axios from "axios";

export function validateUser(email, password) {

  return axios.put(`/login`, {email, password})
  .then((data) => {
    return (data);
  });
 
};

export function addUser(name, email, password) {

  return axios.put('/register', {name, email, password})
  .then((data) => {
    return (data);
  });
};

export async function activeUser() {

  return await axios.get('/active')
  .then((data) => {
    return data;
  });
};

