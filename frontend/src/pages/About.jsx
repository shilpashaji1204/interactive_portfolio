import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleFlip3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  return (
    <div>
      <h1 className="intoduction">Introduction</h1>
      <p className="intor-para">
      We are a full stack web development team that specializes in building cutting edge websites and web applications. If you can dream it, we can build it.
      We use the most modern tech stack including HTML, CSS, JavaScript, and have expertise in frameworks like React, Node.js.
      Let's work together to bring your ideas to life!
      </p>
      <div className="flip-card-container">
        <div className={`flip-card ${isFlipped1 ? "flipped" : ""}`} onClick={handleFlip1}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="src/assets/images/web2.png" alt="Card Front 1" />
              <h2>Website Development</h2>
            </div>
            <div className="flip-card-back">
              <h2>Website Development</h2>
              <p>Introduction to Copywriting workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
            </div>
          </div>
        </div>
        <div className={`flip-card ${isFlipped2 ? "flipped" : ""}`} onClick={handleFlip2}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="src/assets/images/app1.png" alt="Card Front 2" />
              <h2>App Development</h2>
            </div>
            <div className="flip-card-back">
              <h2>App Development</h2>
              <p>Introduction to Content Marketing workshop focuses on building content frameworks that are designed for and directed at communication engagement. This interdisciplinary workshop is best-suited to learning visual and written communication strategies.</p>
            </div>
          </div>
        </div>
        <div className={`flip-card ${isFlipped3 ? "flipped" : ""}`} onClick={handleFlip3}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="src/assets/images/soft1.png" alt="Card Front 3" />
              <h2>Software Development</h2>
            </div>
            <div className="flip-card-back">
              <h2>Software Development</h2>
              <p>Introduction to Web-Writing workshop focuses on building creative and systemic digital content through online user experiences that benefit people and robots. This workshop is best-suited to creating content for digital platforms and devices — websites, mobile, game consoles, and virtual reality engines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
