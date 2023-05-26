import React from "react";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/97525-code-dark.json";
import Cube from "../pages/Cube";
import EarthCanvas from "../components/EarthCanvas";


function Computer() {
  return (
    <div>
      <div>
        <h1>Full Stack Developers 3D</h1>
      </div>

      <div>
        <Lottie animationData={animationData} />
      </div>

      <div>
        <Cube />
      </div>

      <div style={{ height: "1000px", background: "#fff" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta
          cursus lorem, a aliquam nulla. Integer lacinia libero nisi, vitae
          molestie mi venenatis vitae. Praesent eget semper turpis. Etiam in
          sodales ex, vitae rhoncus orci. In semper congue feugiat. Suspendisse
          potenti. Nam volutpat sem non finibus lobortis. In vulputate nunc at
          eros sollicitudin, et laoreet purus hendrerit. Nullam in fringilla
          quam, ac rhoncus velit. In porttitor, nunc id varius pellentesque,
          sapien lacus tristique tortor, at euismod dui erat eget est. In hac
          habitasse platea dictumst. Curabitur varius convallis congue.
        </p>
      </div>

      <div>
        <EarthCanvas />
      </div>
    </div>
  );
}

export default Computer;






// import React from "react";
// import { useLocation } from "react-router-dom";
// import Lottie from "lottie-react";
// import animationData from "../assets/97525-code-dark.json";
// import Cube from "../pages/Cube";
// import "./Computer.css"

// function Computer() {
//   return (
//     <div>
//       <div>
//         <h1>Full Stack Developers 3D</h1>
//       </div>

//       <div>
//         <Lottie animationData={animationData} />
//       </div>

//       <div>
//         <Cube />
//       </div>

//       <div style={{ height: "1000px", background: "#fff" }}>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta
//           cursus lorem, a aliquam nulla. Integer lacinia libero nisi, vitae
//           molestie mi venenatis vitae. Praesent eget semper turpis. Etiam in
//           sodales ex, vitae rhoncus orci. In semper congue feugiat. Suspendisse
//           potenti. Nam volutpat sem non finibus lobortis. In vulputate nunc at
//           eros sollicitudin, et laoreet purus hendrerit. Nullam in fringilla
//           quam, ac rhoncus velit. In porttitor, nunc id varius pellentesque,
//           sapien lacus tristique tortor, at euismod dui erat eget est. In hac
//           habitasse platea dictumst. Curabitur varius convallis congue.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Computer;
