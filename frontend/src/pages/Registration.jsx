import React, { useState } from "react";
import '../styles/Registration.css';

const Registration = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
     
    };


  return (
    
    <div id="registration-form" className="registration-page">
      
        <form id="register" className="input-group-register" onSubmit={handleSubmit}>
          <input type="text" className="input-field" placeholder="Name" />
          <input type="email" className="input-field" placeholder="Email Id" />
          <input type="password" className="input-field" placeholder="Enter Password" />
          <div className="checkbox-container">
          <input type="checkbox" className="check-box" />
          <span>I agree to the terms and conditions</span>
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    
  );
};

export default Registration;
