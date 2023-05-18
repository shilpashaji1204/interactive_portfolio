import React, { useState } from "react";
import "../styles/Login.css";
import { validateUser } from "../helpers/usersHelpers";

const Login = () => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();

      return validateUser(email, password)
        .then((data) => {
          if(!(data['data'][0])) {
            console.log(data['data'][1]);
          } else {
            setUserId(data['data'][1]);
            Cookies.set(userId, data['data'][1]);
          };
        }); 
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserId("");
      };

    if (isLoggedIn) {
        return (
          <div className="navbar">
            <span>Welcome, {userId}!</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        );
      }

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
