import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { validateUser, activeUser } from "../helpers/usersHelpers";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  let user_id;
  
  
  
  useEffect(() => {
    user_id = activeUser()
      .then((data) => {
        return data['data'][0];
    });
  }, []);
  if (user_id = null && user_id != "" && user_id != undefined) {
    return navigate('/');
  };
  console.log(user_id)

  //console.log(user_id);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      return validateUser(email, password)
      .then((data) => {
        if(!(data['data'][0])) {
          console.log(data['data'][1]);
        } else {
          setUserId(data['data'][1]);
          setIsLoggedIn(true);
          console.log(data['data'][1]);
          navigate('/');
          };
        }); 
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserId("");
      };
    

    return (
        <form id="login" className="input-group-login" onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        className="input-field"
        placeholder="Email Id"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        id="password"
        type="password"
        className="input-field"
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
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