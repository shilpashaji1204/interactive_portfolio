import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {

const [data, setData] = useState({name: "", email: "", phone: "", message: ""});

const handleSubmit = (event) => {

    event.preventDefault();
    console.log(data);
    setData({ name: "", email: "", phone: "", message: "" });
};
const handleInputChange = (event) => {

    const target = event.target;
    const value = target.value;
    const name = target.name;
    setData({...data, [name]: value});
};

    return (

        <form method="post" onSubmit={handleSubmit}>
            <h1>Contact</h1>
            <input type="text" name="name" id="" onChange={handleInputChange} value={data.name} placeholder="Enter Name"/>
            <input type="email" name="email" id="" onChange={handleInputChange} value={data.email} placeholder="example@gmail.com"/>
            <input type="phone" name="phone" id="" onChange={handleInputChange} value={data.phone} placeholder="+1"/>
            <textarea name="message" id="" cols="30" rows="10" onChange={handleInputChange} value={data.message} placeholder="message" />
            <button type="submit">send</button>
            
        </form>
    );
};

export default Contact