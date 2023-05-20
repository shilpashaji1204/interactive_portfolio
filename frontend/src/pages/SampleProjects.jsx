import { useState, useEffect } from "react";
import React from "react";
import { getUserProjects } from "../helpers/projectsHelpers";

const SampleProjects = () => {

  // const [user, setUser] = useState(null);

    // useEffect(() => {
      // const currentUser = JSON.parse(localStorage.getItem('loggedin'));
      // if (currentUser) {
      //  setUser(currentUser);
      // }

      const user_id = localStorage.getItem("user_id");
      //console.log(user_id);
      getUserProjects(user_id).then((data) => {
        console.log(data);
      })
    // }, []);

    

    return (

        <div>
            <h1>Portfolio</h1>

        </div>
    )
}

export default SampleProjects