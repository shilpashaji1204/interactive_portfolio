import React from "react";
import "./Projects.css";
import pairPic from "../assets/images/pair_pic.jpg";
import ProjectAnimation from "./ProjectAnimation";
import Lottie from "lottie-react";
import animationData from "../assets/125170-projects-text.json"
import { Link } from "react-router-dom"

// import "./About.css";


const Projects = () => {

  const schedulerImage = 'https://github.com/7-O-2-H/scheduler/blob/master/docs/Full%20View%20of%20Application.png?raw=true';
  const jungleImage = 'https://github.com/7-O-2-H/jungle/blob/master/docs/Main%20Page%20-%20Products%20Index.png?raw=true';
  const tinyImage = 'https://raw.githubusercontent.com/RorySchof/tinyapp/main/docs/Screenshot%202023-03-27%20at%2010.05.20%20PM.png';

  return (
    <div className="project-container">

<ProjectAnimation />

      {/* <h2>PROJECTS!!!!!</h2> */}
      <p className="project-text">
        Take a look at some of our past client work. These reflect our ability to solve complex problems, work with different technologies, and manage
        projects effectively. We invite you click the link to see the work in action or explore our code. 
      </p>

      <div className="projects">
        <div className="project-card">
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="image">
                <img src={schedulerImage} alt="Pair of people working" className="project-image" />
                <h2>SCHEDULER</h2>
              </div>
            </div>
            <div className="flip-card-back">
              <h2>SCHEDULER</h2>
              <p>
                Web-based platform that allows users to search, book, and manage car rentals from various providers,
                providing a convenient and efficient solution for transportation needs.
              </p>
              <span>#react</span>

              <div className="buttons">
    <button className="button">View Project</button>
    <Link to={'https://github.com/7-O-2-H/scheduler'} >
      <button className="button">Explore Code</button>
    </Link>  </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="image">
                <img src={jungleImage} alt="Pair of people working" className="project-image" />
                <h2>JUNGLE</h2>
              </div>
            </div>
            <div className="flip-card-back">
              <h2>JUNGLE</h2>
              <p>
                Web application that enables users to search for job openings, view estimated salary ranges for positions,
                and locate available jobs based on their current location.
              </p>

              <div className="buttons">
    <button className="button">View Project</button>
    <Link to={"https://github.com/7-O-2-H/jungle"} >
      <button className="button">Explore Code</button>
    </Link>
  </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="image">
                <img src={tinyImage} alt="Pair of people working" className="project-image" />
                <h2>TINY APP</h2>
              </div>
            </div>
            <div className="flip-card-back">
              <h2>TINY APP</h2>
              <p>
                Web application that enables users to search for job openings, view estimated salary ranges for positions,
                and locate available jobs based on their current location.
              </p>
              <div className="buttons">
    <button className="button">View Project</button>
    <Link to={"https://github.com/RorySchof/tinyapp"} >
      <button className="button">Explore Code</button>
    </Link>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;








// import React from "react";
// import "./Projects.css";
// import pairPic from "../assets/images/pair_pic.jpg";

// const Projects = () => {
//   return (
//     <div className="about project-container">
//       <h2>PROJECTS!!!!!</h2>
//       <p className="about-text project-text">
//         Take a look at some of our past clinet work. Each project is
//         briefly described with links to code repositories and live demos. These reflect our ability to solve complex
//         problems, work with different technologies, and manage projects effectively.
//       </p>

//       <div className="projects">
//         <div className="project-card">
//           <img src={pairPic} alt="Pair of people working" className="project-image" />
//           <div className="project-description">
//             SCHEDULER
//             <br />
//             Web-based platform that allows users to search, book, and manage car rentals from various providers,
//             providing a convenient and efficient solution for transportation needs.
//             <br />
//             #react
//             <br />
           
//           </div>
//         </div>

//         <div className="project-card">
//           <img src={pairPic} alt="Pair of people working" className="project-image" />
//           <div className="project-description">
//             JUNGLE
//             <br />
//             Web application that enables users to search for job openings, view estimated salary ranges for positions,
//             and locate available jobs based on their current location.
//           </div>
//         </div>

//         <div className="project-card">
//           <img src={pairPic} alt="Pair of people working" className="project-image" />
//           <div className="project-description">
//             TINY APP
//             <br />
//             Web application that enables users to search for job openings, view estimated salary ranges for positions,
//             and locate available jobs based on their current location.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;