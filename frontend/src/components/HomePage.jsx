import React from "react";
import About from "../pages/About";
import Work from "../pages/Work";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";


const HomePage = () => {

    return (
        <div className='home-page'>
            <h1>Welcome to Our Interactive Portfolio!</h1>
            <p>
                This is where we showcase our projects, skills, and experience. Take a
                look around and feel free to contact us if you have any questions or
                would like to work together.
            </p>
           <About />
           <Work />
           <Projects />
           <Contact />
        </div>
    )
}

export default HomePage