import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/97525-code-dark.json";
import "../styles/HeroSection.css";

const HeroSection = () => {

    return (
        <wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <h1 className="hero-heading">Welcome to Our Interactive Portfolio!</h1>
                <p className="hero-para">
                This is where we showcase our projects, skills, and experience. 
                Take a look around and feel free to contact us if you have any questions or would like to work together. 
                </p>
                <Link to="/login">
                <button className="hero-button">Get Started</button>
                </Link>
            </div>

        </div>
        <div className="section-hero-animation">
          <Lottie animationData={animationData} />
        </div>
        </wrapper>
      
  );
};

export default HeroSection;


// // ORGINAIL CODE (SH) BELOW


// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/HeroSection.css";

// const HeroSection = () => {

//     return (
//         <wrapper>
//         <div className="container grid grid-two-column">
//             <div className="section-hero-data">
//                 <h1 className="hero-heading">Welcome to Our Interactive Portfolio!</h1>
//                 <p className="hero-para">
//                 This is where we showcase our projects, skills, and experience. 
//                 Take a look around and create your own Portfolio. Contact us if you have any questions or would like to work together. 
//                 </p>
//                 <Link to="/login">
//                 <button className="hero-button">Get Started</button>
//                 </Link>
//             </div>

//         </div>
//         </wrapper>
//     )
// }

// export default HeroSection;