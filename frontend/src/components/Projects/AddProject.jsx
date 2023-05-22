import React, { useState, Fragment } from "react";
import '../../../src/styles/ProjectTable.css';
import { addProject } from "../../helpers/projectsHelpers";
import { useNavigate } from "react-router-dom";


export default function AddProject() {

    const currentUser = localStorage.getItem("user_id");
    const navigate = useNavigate();

    

  

    const [addFormData, setAddFormData] = useState({

        title: '',
        description: '',
        feature: '',
        techstack: '',
        imageurl: '',
        projecturl: ''

    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newProject = {
            title: addFormData.title,
            description: addFormData.description,
            features: addFormData.feature,
            tech_stack: addFormData.techstack,
            image_url: addFormData.imageurl,
            project_url: addFormData.projecturl,
        };

        const user_id = Number(currentUser);
        console.log(newProject.title, newProject.features);

        addProject(user_id, newProject).then((data) => {
          console.log(data);
        });

        window.location.reload(false);
    };

  return (
      <div className="app-container">
      
          <h2>Add Project</h2>
          <form onSubmit={handleAddFormSubmit}>
              <input
                  type="text"
                  name="title"
                  required="required"
                  placeholder="Title"
                  onChange={handleAddFormChange}
              />
              <input
                  type="text"
                  name="description"
                  required="required"
                  placeholder="Description"
                  onChange={handleAddFormChange}
              />
              <input
                  type="text"
                  name="feature"
                  required="required"
                  placeholder="Feature"
                  onChange={handleAddFormChange}
              />
              <input
                  type="text"
                  name="techstack"
                  required="required"
                  placeholder="Tech_stack"
                  onChange={handleAddFormChange}
              />
              <input
                  type="text"
                  name="imageurl"
                  required="required"
                  placeholder="Image_url"
                  onChange={handleAddFormChange}
              />
              <input
                  type="text"
                  name="projecturl"
                  required="required"
                  placeholder="Project_url"
                  onChange={handleAddFormChange}
              />
              <button type="submit">Add</button>
          </form>
      </div>
  )
};

