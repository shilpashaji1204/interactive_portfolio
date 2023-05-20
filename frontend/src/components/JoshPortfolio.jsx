import React from "react";
import Joshwork from "../pages/Joshwork";
import '../styles/JoshPortfolio.css';
import Contact from "../pages/Contact";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const JoshPortfolio = () => {

    return (

        <div className="josh-page">
            <div className="about1">
                <h2>Hi, My Name is Josh Kelly!</h2>
                <p>
                I am a self-motivated full-stack web developer with a diverse work history and background encompassing civil engineering, insurance, sales, and financial planning. 
                I am capable of delivering full scale applications that meet the needs of clients regardless of specifications. While well-versed in using research to learn new skills independently, I also excel in a team environment being adept in communication, organization and time management.
                </p>
                <a href="https://www.linkedin.com/in/josh/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="mailto: jkelly85@alumni.uwo.ca">
                    <EmailIcon />
                </a>
                <a href="https://github.com/7-O-2-H" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, JavaScript, HTML, CSS, BootStrap, MaterialUI, Git, StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Express, MySQL, Git, Ruby on Rails, JavaScript
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            JavaScript, SQL, HTML, CSS, C++, Ruby
                        </span>
                    </li>
                </ol>
            </div>
            <Joshwork />
            <Contact />
        </div>
    )
}

export default JoshPortfolio