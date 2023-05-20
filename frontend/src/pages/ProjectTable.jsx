import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ProjectTable = () => {

    const [dta, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/api/projects')
        .then(res => setData(res.data))
        .catch(er => console.log(er));
    }, [])
    return (

        <div>
              <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Feature</th>
                        <th>Tech_stack</th>
                        <th>Image_url</th>
                        <th>Project_url</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index) => {
                            <tr key={index} >
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.description}</td>
                                <td>{user.feature}</td>
                                <td>{user.tech_stack}</td>
                                <td>{user.image_url}</td>
                                <td>{user.project_url}</td>
                            </tr> 
                        })
                    }
                </tbody>
              </table>
        </div>
    )
}

export default ProjectTable 