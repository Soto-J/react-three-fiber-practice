/*
  -- @react-three/drei: 
  Collection of useful helpers and abstractions for working 
  with React-Three-Fiber.   

  Installation: npm install @react-three/drei
  
  -- leva
  Installation: npm install leva
  */
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Camera } from "./components/camera";
import { Cube } from "./components/geometry/cube";
import { Sphere } from "./components/geometry/sphere";
import { Torus } from "./components/geometry/torus";
import { TorusKnot } from "./components/geometry/torus-knot";

const App = () => {
  return (
    <Canvas>
      <Camera />

      {/* <group>
        <Cube
          position={[-0.8, 0.8, 0]}
          size={[1, 1, 1]}
          color="orange"
          animateRotate="top"
        />
        <Cube
          position={[0.8, 0.8, 0]}
          size={[1, 1, 1]}
          color="red"
          animateRotate="bottom"
        />
        <Cube
          position={[-0.8, -0.8, 0]}
          size={[1, 1, 1]}
          color="blue"
          animateRotate="left"
        />
        <Cube
          position={[0.8, -0.8, 0]}
          size={[1, 1, 1]}
          color="green"
          animateRotate="right"
        />
        <Cube position={[0, 2.2, 0]} size={[1, 1, 1]} color="green" />
      </group> */}

      <group>
        {/* <Sphere
          position={[0, 0, 0]}
          args={[1, 40, 32]}
          color="blue"
          wireframe
        /> */}
        {/* <Torus
          position={[-4, 0, 0]}
          args={[1, 0.3, 16, 100, 6.283185307179586]}
          rotate={[0, 0, 0]}
          color="yellow"
        /> */}
        {/* <TorusKnot
          position={[4, 0, 0]}
          args={[1, 0.297, 96, 19, 2, 3]}
          rotate={[0, 0, 0]}
          color="red"
        /> */}
        <TorusKnot
          position={[0, 0, 0]}
          args={[1, 0.1, 1000, 50]}
          rotate={[0, 0, 0]}
          color="red"
        />
      </group>
    </Canvas>
  );
};

export default App;
