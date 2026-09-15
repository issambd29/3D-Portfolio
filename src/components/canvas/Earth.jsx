import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const EarthFallback = () => (
  <div className="w-full h-full min-h-[300px] flex items-center justify-center pointer-events-none">
    <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-emerald-400/20 blur-xl border border-cyan-500/30 flex items-center justify-center">
      <div className="w-40 h-40 rounded-full bg-gradient-to-b from-blue-900/60 to-slate-950 border border-blue-400/30 flex items-center justify-center text-4xl">
        🌍
      </div>
    </div>
  </div>
);

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
    <ErrorBoundary fallback={<EarthFallback />}>
      <Canvas
        shadows={!isMobile}
        frameloop='demand'
        dpr={isMobile ? 1 : [1, 2]}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: !isMobile,
          powerPreference: 'default'
        }}
        camera={{
          fov: isMobile ? 50 : 45,
          near: 0.1,
          far: 200,
          position: isMobile ? [-3, 2, 5] : [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={!isMobile}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotateSpeed={isMobile ? 0.5 : 1}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;