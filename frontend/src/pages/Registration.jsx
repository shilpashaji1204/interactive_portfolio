import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Registration.css';

const Registration = () => {

  const navigate= useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/home");
  };


  return (
    
    <form id="register" className="input-group-register" onSubmit={handleSubmit}>
      <input
        name="name"
        value={input.name}
        onChange={(event) => setInput({...input,[event.target.name]:event.target.value,
        })
      }
        type="text"
        className="input-field"
        placeholder="Name"
        
      />
      <input
      name="email"
      value={input.email}
      onChange={(event) => setInput({...input,[event.target.name]:event.target.value,
      })
    }
        type="email"
        className="input-field"
        placeholder="Email Id"
      
      />
      <input

      name="password"
      value={input.password}
      onChange={(event) => setInput({...input,[event.target.name]:event.target.value,
      })
    }
        type="password"
        className="input-field"
        placeholder="Enter Password"
        
      />
      <div className="checkbox-container">
        <input type="checkbox" className="check-box" />
        <span>I agree to the terms and conditions</span>
      </div>
      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};
export default Registration;
