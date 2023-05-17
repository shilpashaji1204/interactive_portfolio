import React from "react";
import "./Projects.css";
import pairPic from "../assets/images/pair_pic.jpg";

const Projects = () => {
  return (
    <div className="about project-container">
      <h2>PROJECTS</h2>
      <p className="about-text project-text">
        Take a look at some of our past clinet work. Each project is
        briefly described with links to code repositories and live demos. These reflect our ability to solve complex
        problems, work with different technologies, and manage projects effectively.
      </p>

      <div className="projects">
        <div className="project-card">
          <img src={pairPic} alt="Pair of people working" className="project-image" />
          <div className="project-description">
            SCHEDULER
            <br />
            Web-based platform that allows users to search, book, and manage car rentals from various providers,
            providing a convenient and efficient solution for transportation needs.
            <br />
            #react
            <br />
           
          </div>
        </div>

        <div className="project-card">
          <img src={pairPic} alt="Pair of people working" className="project-image" />
          <div className="project-description">
            JUNGLE
            <br />
            Web application that enables users to search for job openings, view estimated salary ranges for positions,
            and locate available jobs based on their current location.
          </div>
        </div>

        <div className="project-card">
          <img src={pairPic} alt="Pair of people working" className="project-image" />
          <div className="project-description">
            TINY APP
            <br />
            Web application that enables users to search for job openings, view estimated salary ranges for positions,
            and locate available jobs based on their current location.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;