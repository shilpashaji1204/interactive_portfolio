import React, { useState } from "react";
import Registration from "./Registration";
import "../styles/Login.css";

const Login = () => {
    const [showLogin, setShowLogin] = useState(true);

    const handleToggle = () => {
        setShowLogin(!showLogin);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

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
                    <form id="login" className="input-group-login" onSubmit={handleSubmit}>
                        <input type="text" className="input-field" placeholder="Email Id" />
                        <input type="password" className="input-field" placeholder="Enter Password" />
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
