import React from "react";
import About from "../pages/About";
import Work from "../pages/Work";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import HeroSection from "../pages/HeroSection";


const HomePage = () => {

    return (
        <div className='home-page'>
            <HeroSection />
           <About />
           <Work />
           <Projects />
           <Contact />
        </div>
    )
}

export default HomePage