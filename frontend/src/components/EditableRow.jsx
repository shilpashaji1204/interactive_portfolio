 import React from "react";

 const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {

    return(
<tr>
    <td>
        <input
        type="text"
        required="required"
        placeholder="Title"
        name="title"
        value={editFormData.title} 
        onChange={handleEditFormChange}
        >
        </input>
    </td>
    <td>
        <input
        type="text"
        required="required"
        placeholder="Description"
        name="description"
        value={editFormData.description}
        onChange={handleEditFormChange}
        >
        </input>
    </td>
    <td>
        <input
        type="text"
        required="required"
        placeholder="Feature"
        name="feature"
        value={editFormData.feature}
        onChange={handleEditFormChange}
        >
        </input>
    </td>
    <td>
        <input
        type="text"
        required="required"
        placeholder="Techstack"
        name="techstack"
        value={editFormData.techstack}
        onChange={handleEditFormChange}
        >
        </input>
    </td>
    <td>
        <input
        type="text"
        required="required"
        placeholder="Imageurl"
        name="imageurl"
        value={editFormData.imageurl}
        onChange={handleEditFormChange}
        >
        </input>
    </td>
    <td>
        <input
        type="text"
        required="required"
        placeholder="Projecturl"
        name="projecturl"
        value={editFormData.projecturl}
        onChange={handleEditFormChange}
        >
        </input>
    </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
</tr>
    )
 }

 export default EditableRow