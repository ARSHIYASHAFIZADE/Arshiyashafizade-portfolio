import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/6756e17a1aa3af1c627b3bec.glb");
  const modelRef = useRef();

  // Check for model loading errors
  if (!scene) {
    console.error("Failed to load model.");
    return null;
  }

  scene.traverse((node) => {
    if (node.isMesh && node.material.map) {
      node.material.map.encoding = THREE.sRGBEncoding;
    }
  });

  // Set initial rotation to look left when loaded
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = 1; // Set initial rotation to 180 degrees to face the opposite direction
    }
  }, []);

  // Add rotation animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Slow rotation
      modelRef.current.scale.set(2, 2, 2);
    }
  });

  return (
    <mesh ref={modelRef}>
      <primitive
        object={scene} // Directly pass the GLTF model object
        position={[0, -1.5, 0]} // Adjusted default position
        rotation={[-0.01, 0, 0]} // Adjusted rotation
        material={{ color: "#FFFFFF" }}
        scale={[2, 2, 2]} // Scale the model to make it larger
      />
      <meshStandardMaterial attach="shadow" color="#000000" />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // Adjusted for larger screens
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 5, 10], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      className="z-10" // Ensure model is on top of other elements
    >
      <ambientLight intensity={0.5} />{" "}
      {/* Ambient light for overall scene brightness */}
      <pointLight position={[10, 10, 10]} intensity={200} />{" "}
      {/* Directional light for highlighting the model */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.5} // Adjust rotation speed
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
