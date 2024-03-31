import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Functional component for rendering Earth model
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <mesh>
      {/* Lighting settings */}
      <hemisphereLight intensity={1} groundColor={"white"} />
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
      />
      {/* Earth model */}
      <primitive object={earth.scene} />
    </mesh>
  );
};

// Functional component for rendering Canvas with Earth model
const EarthCanvas = () => {
  return (
    <Canvas
      shadows // Enable shadows in the scene
      frameLoop="demand" // Set the frame loop to 'demand' mode for better performance
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for saving the canvas content
      camera={{
        fov: 35,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Suspense component to handle loading state */}
        <OrbitControls
          autoRotate // Enable auto rotation of the camera
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth /> {/* Render the Earth component */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
