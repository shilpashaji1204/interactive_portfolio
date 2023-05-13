import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {

    return (

        <div className="navbar">
            <div className="toggleButton">
                <button></button>
            </div>
            <div className="navbar-logo">
                Interactive Portfolio
            </div>
            <div className="links">
                <Link to="/"> About </Link>
                <Link to="/work"> Work </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
    )
};

export default Navbar;