import React, { useState } from "react";
import "../styles/Login.css";
import { validateUser } from "../helpers/usersHelpers";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    validateUser(email, password).then((data) => {
      if (!data["data"][0]) {
        console.log(data["data"][1]);
      } else {
        localStorage.setItem("loggedin", JSON.stringify(true));
        localStorage.setItem("user_id", (data['data'][1]));
        navigate("/");
      }
    });
  };

  return (
    <form id="login" className="input-group-login" onSubmit={handleLogin}>
      <input
        id="email"
        type="email"
        className="input-field"
        placeholder="Email Id"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        id="password"
        type="password"
        className="input-field"
        placeholder="Enter Password"
        value={password}
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
