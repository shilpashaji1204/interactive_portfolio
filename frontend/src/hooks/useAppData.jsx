import { useState, useEffect } from "react";
import axios from 'axios';

export default function useAppData() {

  useEffect(() => {

    const getProjects = axios.get('/');
    const getUsers = axios.get('/users/');

    Promise.all([
      getProjects,
      getUsers,
    ])
    .then((data) => {
      //console.log(data)
    })

  }, []);

};