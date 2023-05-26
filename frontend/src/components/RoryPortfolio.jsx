import React from "react";
import Rorywork from "../pages/Rorywork";
import Contact from "../pages/Contact";
import '../styles/RoryPortfolio.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


const RoryPortfolio = () => {

    return (

        <div className="rory-page">
            <div className="about1">
                <h2>Hi, My Name is Rory Schofield!</h2>
                <p>
                Full-stack web developer with a broad range of professional experience across a multitude of industries. Through a strong process of research, planning, design, development, and testing, able to create robust full-cycle websites and web applications that meet the needs of clients. Able to work independently, or as part of a team, to meet deadlines and deliver high-quality work. 
                </p>
                <a href="https://www.linkedin.com/in/roryschofield/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="mailto:  roryschofield@gmail.com">
                    <EmailIcon />
                </a>
                <a href="https://github.com/RorySchof" target="_blank" rel="noopener noreferrer">
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
            <Rorywork />
            <Contact />
        </div>
    )
}

export default RoryPortfolio