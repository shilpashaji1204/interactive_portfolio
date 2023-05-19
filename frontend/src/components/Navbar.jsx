import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png';

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/login");
      };

    return (

        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                    <MenuIcon />
                </button>
            </div>
            <div className='navbar'>
                <Link to='/' className='navbar-logo'>
                <img src={logo} alt='logo' className='logo-image' />
                    <span className='logo-text'>Portfolio</span>
                </Link>
            </div>
            <div className="links">
                <Link to="/about"> About </Link>
                <Link to="/work"> Work </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
                {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login"> Login </Link>
            <Link to="/registration">SignUp</Link>
          </>
        )}
            </div>
        </div>
    );
};

export default Navbar;