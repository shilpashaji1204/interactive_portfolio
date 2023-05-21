import React from "react";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import "../styles/ShilpaPortfolio.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddProject from "./Projects/AddProject";
import useAppData from "../hooks/useAppData";
import ProjectList from "./Projects/ProjectList";


const ShilpaPortfolio = () => {

    const {shilpaProjects} = useAppData();
    const currentUser = localStorage.getItem("user_id");
    const editAuth = (currentUser === "7");
    console.log(editAuth);
    localStorage.setItem("auth", editAuth);

    return (
        <div className="shilpa-page">
            <div className="about1">
                <h2>Hi, My Name is Shilpa Shaji!</h2>
                <p>
                    I am a web development professional with a Masters in Computer Application and around 4 years of professional experience ranging from Web Development to IT recruitment.
                    I possess strong analytical skills and a quick learning ability.
                </p>
                <a href="https://www.linkedin.com/in/shilpashaji/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="mailto:shilpashaji1204@gmail.com">
                    <EmailIcon />
                </a>
                <a href="https://github.com/shilpashaji1204" target="_blank" rel="noopener noreferrer">
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
                            NodeJS, Express, MySQL, Git, .Net, Ruby on Rails, JavaScript
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            JavaScript, Java, C#, C++, C, SQL, HTML, CSS, Visual Basic
                        </span>
                    </li>
                </ol>
            </div>
            <Work />
            <ProjectList projectData={shilpaProjects} />
            {editAuth && (
              <AddProject />
            )}
            <Contact />
        </div>
    )
}

export default ShilpaPortfolio