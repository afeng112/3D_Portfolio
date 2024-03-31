import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// Import a custom loader component
import CanvasLoader from "../Loader";

// Define a functional component for the internal structure of the ball
const Ball = (props) => {
  // Load the texture for the ball's decal
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Add ambient and directional light, define the shape of the ball property */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Define the shape of the ball */}
        <icosahedronGeometry args={[1, 1]} />
        {/* Apply material to the ball */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Add the icons to the ball */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// Define a functional component for the canvas containing the ball
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/* Display a loading indicator while assets are being loaded */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Add controls to orbit around the ball */}
        <OrbitControls enableZoom={false} />
        {/* Render the ball component */}
        <Ball imgUrl={icon} />
      </Suspense>
      {/* Preload all assets */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
