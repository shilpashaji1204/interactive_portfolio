import React, { useState, Fragment } from "react";
import '../../../src/styles/ProjectTable.css';
import { editProject } from "../../helpers/projectsHelpers";

export default function EditProjectForm(props) {

  const currentUser = localStorage.getItem("user_id");
  const {id, title} = props;
 
  const [editFormData, setEditFormData] = useState({
       
    title: '',
    description: '',
    feature: '',
    techstack: '',
    imageurl: '',
    projecturl: ''

  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedProject = {
        id: Number(id),
        title: title,
        description: editFormData.description,
        features: editFormData.feature,
        tech_stack: editFormData.techstack,
        image_url: editFormData.imageurl,
        project_url: editFormData.projecturl,
        user_id: Number(currentUser),
    }

    editProject(editedProject).then((data) => {
      console.log(data);
    });
  };

  return (
    <form onSubmit={handleEditFormSubmit}>
      <input
        type="text"
        name="description"
        required="required"
        placeholder="Description"
        onChange={handleEditFormChange}
      />
      <input
          type="text"
          name="feature"
          required="required"
          placeholder="Feature"
          onChange={handleEditFormChange}
      />
      <input
          type="text"
          name="techstack"
          required="required"
          placeholder="Tech_stack"
          onChange={handleEditFormChange}
      />
      <input
          type="text"
          name="imageurl"
          required="required"
          placeholder="Image_url"
          onChange={handleEditFormChange}
      />
      <input
          type="text"
          name="projecturl"
          required="required"
          placeholder="Project_url"
          onChange={handleEditFormChange}
      />
      <button type="submit">Submit Changes</button>
    </form>
  )
};
