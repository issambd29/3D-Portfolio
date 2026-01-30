import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  // Check if mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <Canvas
      shadows={!isMobile}  // FIX: Disable shadows on mobile
      frameloop='demand'
      dpr={isMobile ? 1 : [1, 2]}  // FIX: Lower DPR on mobile
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isMobile,  // FIX: Disable antialias on mobile
        powerPreference: 'default'
      }}
      camera={{
        fov: isMobile ? 50 : 45,  // FIX: Wider FOV on mobile
        near: 0.1,
        far: 200,
        position: isMobile ? [-3, 2, 5] : [-4, 3, 6],  // FIX: Closer camera on mobile
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={!isMobile}  // FIX: Disable panning on mobile
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotateSpeed={isMobile ? 0.5 : 1}  // FIX: Slower rotation on mobile
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;