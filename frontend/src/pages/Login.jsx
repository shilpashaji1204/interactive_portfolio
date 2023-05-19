import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  
  

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password)
    {
      localStorage.setItem("loggedin", true);
      navigate('/home')
    }
    else {

      alert("wrong Email or Password");
    }
  };

  return (
    <form id="login" className="input-group-login" onSubmit={handleSubmit}>
      <input

        name="email"
        value={input.email}
        onChange={(event) => setInput({
          ...input, [event.target.name]: event.target.value,
        })
        }
        id="email"
        type="email"
        className="input-field"
        placeholder="Email Id"

      />
      <input

        name="password"
        value={input.password}
        onChange={(event) => setInput({
          ...input, [event.target.name]: event.target.value,
        })
        }
        id="password"
        type="password"
        className="input-field"
        placeholder="Enter Password"
        
      />
      <div className="checkbox-container">
        <input type="checkbox" className="check-box" />
        <span>Remember Password</span>
      </div>
      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );
};

export default Login;