import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import "./TechStack.css";
import reactIcon from "../pages/react_icon.webp";

const TechStack = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add the renderer to the HTML canvas
    canvas.appendChild(renderer.domElement);

    // Create cubes for each technology
    const technologies = [
      "HTML",
      "CSS",
      "JS",
      "REACT",
      "3JS",
      "EXPRESS",
      "RUBY",
    ];

    const cubes = [];
    const cubeSize = 2;

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(reactIcon);

    // Calculate the total height occupied by the cubes
    const totalHeight = cubeSize * technologies.length;

    technologies.forEach((technology, index) => {
      const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.x = (index - technologies.length / 2) * 4;

      // Set the y position to keep the cubes at the bottom of the screen
      cube.position.y = -totalHeight / 2;

      scene.add(cube);
      cubes.push(cube);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate cubes
      cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      // Render the scene with the camera
      renderer.render(scene, camera);
    };

    animate();

    // Update renderer size on window resize
    const handleWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      canvas.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} className="canvas-container" />;
};

export default TechStack;





// Woriking w black background

// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";

// import "./TechStack.css";
// import reactIcon from "../pages/react_icon.webp";

// const TechStack = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     // Create a scene
//     const scene = new THREE.Scene();

//     // Create a camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 10;

//     // Create a renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Add the renderer to the HTML canvas
//     canvas.appendChild(renderer.domElement);

//     // Create cubes for each technology
//     const technologies = [
//       "HTML",
//       "CSS",
//       "JS",
//       "REACT",
//       "3JS",
//       "EXPRESS",
//       "RUBY",
//     ];

//     const cubes = [];
//     const cubeSize = 2;

//     const textureLoader = new THREE.TextureLoader();
//     const texture = textureLoader.load(reactIcon);

//     technologies.forEach((technology, index) => {
//       const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
//       const cubeMaterial = new THREE.MeshBasicMaterial({
//         map: texture,
//       });
//       const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//       cube.position.x = (index - technologies.length / 2) * 4;
//       scene.add(cube);
//       cubes.push(cube);
//     });

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate cubes
//       cubes.forEach((cube) => {
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//       });

//       // Render the scene with the camera
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Update renderer size on window resize
//     const handleWindowResize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener("resize", handleWindowResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//       canvas.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={canvasRef} className="canvas-container" />;
// };

// export default TechStack;


// working. rough

// import React from "react";
// import "./TechStack.css";

// const TechStack = () => {
//   return (
//     <div className="tech-stack">
//       <h2>Tech Stack</h2>
//       <p>
//         We use the following technologies. 
//       </p>
//       <div className="circle-container">
//         <div className="circle-wrapper">
//           <div className="circle">HTML</div>
//         </div>
//         <div className="circle-wrapper">
//           <div className="circle">CSS</div>
//         </div>
//         <div className="circle-wrapper">
//           <div className="circle">JS</div>
//         </div>
//         <div className="circle-wrapper">
//           <div className="circle">REACT</div>
//         </div>
//         <div className="circle-wrapper">
//           <div className="circle">3JS</div>
//         </div>
//         <div className="circle-wrapper">
//           <div className="circle">EXPRESS</div>
//         </div>
//         <div className="circle-wrapper">
//           <div className="circle">RUBY</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;