import React, { useState, Fragment } from "react";
import '../../../src/styles/ProjectTable.css';
import { addProject } from "../../helpers/projectsHelpers";


export default function AddProject() {

    const currentUser = localStorage.getItem("user_id");

    const [addFormData, setAddFormData] = useState({

        title: '',
        description: '',
        feature: '',
        techstack: '',
        imageurl: '',
        projecturl: ''

    });

    // const [editFormData, setEditFormData] = useState({
    //     title: '',
    //     description: '',
    //     feature: '',
    //     techstack: '',
    //     imageurl: '',
    //     projecturl: ''

    // })

    // const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    // const handleEditFormChange = (event) => {
    //     event.preventDefault();

    //     const fieldName = event.target.getAttribute("name");
    //     const fieldValue = event.target.value;

    //     const newFormData = { ...editFormData }
    //     newFormData[fieldName] = fieldValue;

    //     setEditFormData(newFormData);
    // }

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
        // const newContacts = [...contacts, newContact];
        // setContacts(newContacts);
    };

    // const handleEditFormSubmit = (event) => {
    //     event.preventDefault();

    //     const editedContact = {
    //         id: editContactId,
    //         title: editFormData.title,
    //         description: editFormData.description,
    //         feature: editFormData.feature,
    //         techstack: editFormData.techstack,
    //         imageurl: editFormData.imageurl,
    //         projecturl: editFormData.projecturl,
    //     }

    //     const newContacts = [...contacts];

    //     const index = contacts.findIndex((contact) => contact.id === editContactId);
    //     newContacts[index] = editedContact;

    //     setContacts(newContacts);
    //     setEditContactId(null);
    // }

    // const handleEditClick = (event, contact) => {
    //     event.preventDefault();
    //     setEditContactId(contact.id);

    //     const formValues = {
    //         title: contact.title,
    //         description: contact.description,
    //         feature: contact.feature,
    //         techstack: contact.techstack,
    //         imageurl: contact.imageurl,
    //         projecturl: contact.projecturl,
    //     };

    //     setEditFormData(formValues);
    // };

    // const handleCancelClick = () => {
    //     setEditContactId(null);
    // }

    // const handleDeleteClick = (contactId) => {
    //     const newContacts = [...contacts];

    //     const index = contacts.findIndex((contact)=> contact.id === contactId); 
    //     newContacts.splice(index, 1);

    //     setContacts(newContacts); 
    // }

    return (
        <div className="app-container">
        {/* <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Description </th>
                        <th> Feature</th>
                        <th> Tech_stack </th>
                        <th> Image_url </th>
                        <th> Project_url </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (

                        <Fragment>
                            {editContactId === contact.id ? (
                                <EditableRow  
                                editFormData={editFormData} 
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}
                                />
                            ) : (

                                <tr>
                                    <td>{contact.title}</td>
                                    <td>{contact.description}</td>
                                    <td>{contact.feature}</td>
                                    <td>{contact.techstack}</td>
                                    <td>{contact.imageurl}</td>
                                    <td>{contact.projecturl}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(event) => handleEditClick(event, contact)}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                        type="button"
                                        onClick={() => handleDeleteClick(contact.id)}
                                        >
                                            Delete</button>
                                    </td>
                                </tr>

                            )}


                        </Fragment>
                    ))}

                </tbody>
            </table>
            </form> */}
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

