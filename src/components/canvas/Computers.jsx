import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Gltf, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      {/* Light properties of object */}
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={2.4} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      {/* 3D Model Object Properties */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, 2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Added listener, to any changes to the screen
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Initial value of the 'isMobile' variable.
    setIsMobile(mediaQuery.matches);

    // Define a callback to handle any changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Added callback func as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
  });

  //Remove the listener when component is unmounted

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
