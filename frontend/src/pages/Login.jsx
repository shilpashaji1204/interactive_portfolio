import React, { useState } from "react";
import Registration from "./Registration";
import "../styles/Login.css";
import { validateUser } from "../helpers/usersHelpers";

const Login = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleToggle = () => {
        setShowLogin(!showLogin);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      return validateUser(email, password)
        .then((data) => {
          if(!(data['data'][0])) {
            console.log(data['data'][1]);
          } else {
            setUserId(data['data'][1]);
            console.log(data['data'][1]);
          }
        });
        
    };

    return (
        <div id="login-form" className="login-page">
            <div className="form-box">
                <div className="button-box">
                    <button
                        type="button"
                        onClick={handleToggle}
                        className={`toggle-btn ${showLogin ? "active" : ""}`}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={handleToggle}
                        className={`toggle-btn ${!showLogin ? "active" : ""}`}
                    >
                        Register
                    </button>
                </div>
                {showLogin ? (
                    <form id="login" className="input-group-login" onSubmit={(handleSubmit)}>
                        <input id="email" type="email" className="input-field" placeholder="Email Id" onChange={(event) => setEmail(event.target.value)} />
                        <input id="password" type="password" className="input-field" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} />
                        <div className="checkbox-container">
                            <input type="checkbox" className="check-box" /><span>Remember Password</span>
                        </div>
                        <button type="submit" className="submit-btn">Login</button>
                    </form>
                ) : (
                    <Registration />
                )}
            </div>
        </div>
    );
};

export default Login;
