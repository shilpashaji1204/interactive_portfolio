import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import moonTextureImage from '../pages/moon2.jpeg';
import normalTextureImage from '../pages/normal.jpg';
import jeffTextureImage from '../pages/man.png';

const Cube = () => {
  const canvasRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer with alpha transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set the clear color to black and the opacity to 0

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Create a torus
    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    // Load the moon texture and normal map
    const moonTexture = new THREE.TextureLoader().load(moonTextureImage);
    const normalTexture = new THREE.TextureLoader().load(normalTextureImage);

    // Create the moon mesh
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );

    // Set the initial position and scale of the moon
    moon.position.set(-10, 0, 0);
    moon.scale.set(1, 1, 1);

    // Add the moon to the scene
    scene.add(moon);

    // Avatar
    const jeffTexture = new THREE.TextureLoader().load(jeffTextureImage);
    const jeff = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ map: jeffTexture })
    );
    scene.add(jeff);

    // Stars
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill().forEach(addStar);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    // Update cube position based on mouse movement
    function updateCubePosition(event) {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    // Update camera position based on scroll
    function updateCameraPosition() {
      const scrollY = window.scrollY;
      camera.position.z = 5 + scrollY * 0.01; // Adjust the factor to control the speed of zooming out
    }

    // Scroll Animation
    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;

      // Increase the rotation speed in the x-axis
      moon.rotation.x += 0.05;

      // Increase the rotation speed in the y-axis
      moon.rotation.y += 0.075;

      // Increase the rotation speed in the z-axis
      moon.rotation.z += 0.05;

      jeff.rotation.y += 0.01;
      jeff.rotation.z += 0.01;

      // Increase the scaling factor
      const scaleFactor = 1.3 - t * 0.0005;

      // Increase the translation factor
      const horizontalPosition = -50 + t * -0.015;

      // Set the new position and scale of the moon
      moon.position.x = horizontalPosition;
      moon.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Adjust the camera position and rotation
      camera.position.z = 5 + t * -0.02;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    // Add event listeners to track mouse movement and scroll
    window.addEventListener('mousemove', updateCubePosition);
    window.addEventListener('scroll', updateCameraPosition);

    // Render the scene with the cube
    canvas.appendChild(renderer.domElement);

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      // Update cube position based on mouse movement
      cube.position.x = mouseX.current * 2;
      cube.position.y = mouseY.current * 2;

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      // Render the scene with the cube
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      // Clean up resources on component unmount
      window.removeEventListener('mousemove', updateCubePosition);
      window.removeEventListener('scroll', updateCameraPosition);
      scene.remove(cube);
      scene.remove(torus);
      scene.remove(moon);
      scene.remove(jeff);
      geometry.dispose();
      material.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} className="canvas-container" />;
};

export default Cube;











// // working code

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import moonTextureImage from '../pages/moon2.jpeg';
// import normalTextureImage from '../pages/normal.jpg';
// import jeffTextureImage from '../pages/man.png';
// import spaceTextureImage from '../pages/space.jpg';


// const Cube = () => {
//   const canvasRef = useRef(null);
//   const mouseX = useRef(0);
//   const mouseY = useRef(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     // Create a scene
//     const scene = new THREE.Scene();

//     // Create a camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Create a renderer with transparent background
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setClearColor(0x000000, 0);
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Create a cube
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     // Create a torus
//     const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
//     const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347 });
//     const torus = new THREE.Mesh(torusGeometry, torusMaterial);
//     scene.add(torus);

//     // Load the moon texture and normal map
//     const moonTexture = new THREE.TextureLoader().load(moonTextureImage);
//     const normalTexture = new THREE.TextureLoader().load(normalTextureImage);

//     // Create the moon mesh
//     const moon = new THREE.Mesh(
//       new THREE.SphereGeometry(3, 32, 32),
//       new THREE.MeshStandardMaterial({
//         map: moonTexture,
//         normalMap: normalTexture,
//       })
//     );

//     // Set the position of the moon
//     moon.position.set(10, 0, -10); // Adjust the position as needed

//     // Add the moon to the scene
//     scene.add(moon);

//     // Avatar
//     const jeffTexture = new THREE.TextureLoader().load(jeffTextureImage);
//     const jeff = new THREE.Mesh(
//       new THREE.BoxGeometry(3, 3, 3),
//       new THREE.MeshBasicMaterial({ map: jeffTexture })
//     );
//     scene.add(jeff);

//     // Stars
//     function addStar() {
//       const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//       const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//       const star = new THREE.Mesh(geometry, material);

//       const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

//       star.position.set(x, y, z);
//       scene.add(star);
//     }

//     Array(200).fill().forEach(addStar);

//     // Lights
//     const pointLight = new THREE.PointLight(0xffffff);
//     pointLight.position.set(5, 5, 5);

//     const ambientLight = new THREE.AmbientLight(0xffffff);
//     scene.add(pointLight, ambientLight);

//     // Update cube position based on mouse movement
//     function updateCubePosition(event) {
//       mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
//     }

//     // Update camera position based on scroll
//     function updateCameraPosition() {
//       const scrollY = window.scrollY;
//       camera.position.z = 5 + scrollY * 0.01; // Adjust the factor to control the speed of zooming out
//     }

//     // Scroll Animation
//     function moveCamera() {
//       const t = document.body.getBoundingClientRect().top;
//       moon.rotation.x += 0.05;
//       moon.rotation.y += 0.075;
//       moon.rotation.z += 0.05;

//       jeff.rotation.y += 0.01;
//       jeff.rotation.z += 0.01;

//       camera.position.z = t * -0.01;
//       camera.position.x = t * -0.0002;
//       camera.rotation.y = t * -0.0002;
//     }

//     document.body.onscroll = moveCamera;
//     moveCamera();

//     // Add event listeners to track mouse movement and scroll
//     window.addEventListener('mousemove', updateCubePosition);
//     window.addEventListener('scroll', updateCameraPosition);

//     // Render the scene with the cube
//     canvas.appendChild(renderer.domElement);

//     // Animation Loop
//     function animate() {
//       requestAnimationFrame(animate);

//       // Update cube position based on mouse movement
//       cube.position.x = mouseX.current * 2;
//       cube.position.y = mouseY.current * 2;

//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.01;

//       // Render the scene with the cube
//       renderer.render(scene, camera);
//     }

//     animate();

//     return () => {
//       // Clean up resources on component unmount
//       window.removeEventListener('mousemove', updateCubePosition);
//       window.removeEventListener('scroll', updateCameraPosition);
//       scene.remove(cube);
//       scene.remove(torus);
//       scene.remove(moon);
//       scene.remove(jeff);
//       geometry.dispose();
//       material.dispose();
//       torusGeometry.dispose();
//       torusMaterial.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} className="canvas-container" />;
// };

// export default Cube;








// // working code

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const Cube = () => {
//   const canvasRef = useRef(null);
//   const mouseX = useRef(0);
//   const mouseY = useRef(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     // Create a scene
//     const scene = new THREE.Scene();

//     // Create a camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Create a renderer with transparent background
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setClearColor(0x000000, 0);
//     renderer.setSize(window.innerWidth, window.innerHeight);

    

//     // Create a cube
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     // Create a torus
//     const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
//     const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347 });
//     const torus = new THREE.Mesh(torusGeometry, torusMaterial);
//     scene.add(torus);

//     // Lights

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);

//     // Update cube position based on mouse movement
//     function updateCubePosition(event) {
//       mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
//     }

//     // Add event listeners to track mouse movement
//     window.addEventListener('mousemove', updateCubePosition);

//     // Render the scene with the cube
//     canvas.appendChild(renderer.domElement);
//     function animate() {
//       requestAnimationFrame(animate);

//       // Update cube position based on mouse movement
//       cube.position.x = mouseX.current * 2;
//       cube.position.y = mouseY.current * 2;

//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     }
//     animate();

//     return () => {
//       // Clean up resources on component unmount
//       window.removeEventListener('mousemove', updateCubePosition);
//       scene.remove(cube);
//       scene.remove(torus);
//       geometry.dispose();
//       material.dispose();
//       torusGeometry.dispose();
//       torusMaterial.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} className="canvas-container" />;
// };

// export default Cube;