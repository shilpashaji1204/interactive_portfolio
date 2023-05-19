import React from "react";
import About from "../pages/About";
import Work from "../pages/Work";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import HeroSection from "../pages/HeroSection";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () =>
    {
        localStorage.removeItem("loggedin");
        navigate("/login");
    }
    return (
        <div className='home-page'>
            <p className="text-center">Loggedin as {userName.name} </p>
            <button onClick={handleLogout}
            type="button"
            className="logoutbutton"
            >
                Logout</button>
            <HeroSection />
           <About />
           <Work />
           <Projects />
           <Contact />
        </div>
    )
}

export default Home