import React from "react";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
// import animationData from "../../assets/97525-code-dark.json";
import animationData from "../assets/97525-code-dark.json"

function Computer() {
  return (
    <div>
      <div className="">
        <h1>Full Stack Developers 3d</h1>
      </div>

      <div>
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}

export default Computer;
