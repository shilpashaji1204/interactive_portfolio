import React from "react";
import reactIcon from "../assets/images/react_icon.webp";
import "./About.css";

const About = () => {
  return (
    <div className="about">
     
      <p>
        <span className="intro">Introduction</span> <br />
        {/* <span className="overview">Overview.</span> */}
        <br />
        <br />
        We are a full stack web development team that specializes in building cutting edge websites and web applications. If you can dream it, we can build it.
        <br />
        <br />
        We use the most modern tech stack including HTML, CSS, JavaScript, and have expertise in frameworks like React, Node.js.
        <br />
        <br />
        Let's work together to bring your ideas to life!
        <br />
        <br />

        
      </p>
      {/* <div className="icon-container">
        <img src={reactIcon} alt="React Icon" className="icon" />
        <img src={reactIcon} alt="React Icon" className="icon" />
        <img src={reactIcon} alt="React Icon" className="icon" />
        <img src={reactIcon} alt="React Icon" className="icon" />
      </div> */}

      {/* Flip Cards */}
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-front">
            <div className="image">
              <img src="https://i.postimg.cc/nhG8H3X6/copywriting.jpg" alt="Copywriting" />
              <h2>Website Development</h2>
            </div>
          </div>
          <div className="flip-card-back">
            <h2>Website Development</h2>
            <p>Introduction to Copywriting workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-front">
            <div className="image">
              <img src="https://i.postimg.cc/ydrv1ZXq/contentmarketing.jpg" alt="Content Marketing" />
              <h2>App Development</h2>
            </div>
          </div>
          <div className="flip-card-back">
            <h2>App Development</h2>
            <p>Introduction to Content Marketing workshop focuses on building content frameworks that are designed for and directed at communication engagement. This interdisciplinary workshop is best-suited to learning visual and written communication strategies.</p>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-front">
            <div className="image">
              <img src="https://i.postimg.cc/ZqbG0630/webwriting.jpg" alt="Web Writing" />
              <h2>Software Development</h2>
            </div>
          </div>
          <div className="flip-card-back">
            <h2>Software Development</h2>
            <p>Introduction to Web-Writing workshop focuses on building creative and systemic digital content through online user experiences that benefit people and robots. This workshop is best-suited to creating content for digital platforms and devices — websites, mobile, game consoles, and virtual reality engines.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;







// import React from "react";
// import reactIcon from "../assets/images/react_icon.webp";
// import "./About.css";


// const About = () => {
//     return (
//       <div className="about">
//         <h2>ABOUT US</h2>
//         <p>

//         <span className="intro">Introduction</span> <br />
//         <span className="overview">Overview.</span><br /><br />



      
//           We are a full stack web development team that specializes in building cutting edge websites and web applications. 
//           If you can dream it we can build it. 
          
//           <br />

//           We use the most modern tech stack including HTML, CSS, JavaScript, 
//           and have expertise in frameworks like React, Node.js,

//           <br />

//           Let's work together to bring
//           your ideas to life!

//           <br />



//           Filler text for space


//         </p>
//         <div className="icon-container">
//           <img src={reactIcon} alt="React Icon" className="icon" />
//           <img src={reactIcon} alt="React Icon" className="icon" />
//           <img src={reactIcon} alt="React Icon" className="icon" />
//           <img src={reactIcon} alt="React Icon" className="icon" />
//         </div>
//       </div>
//     );
// };

// export default About;
