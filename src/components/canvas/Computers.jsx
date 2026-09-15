import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const ComputerFallback = () => (
  <div className="w-full h-full flex items-center justify-center pointer-events-none">
    <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#00BFFF]/10 via-purple-600/10 to-transparent blur-2xl animate-pulse" />
  </div>
);

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 256 : 1024}
      />
      <pointLight intensity={isMobile ? 0.8 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2.5, -1.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <ErrorBoundary fallback={<ComputerFallback />}>
      <Canvas
        frameloop={isRotating ? 'always' : 'demand'}
        shadows={!isMobile}
        dpr={isMobile ? 1 : [1, 2]}
        camera={{ 
          position: isMobile ? [15, 2, 5] : [20, 3, 5], 
          fov: isMobile ? 30 : 25 
        }}
        // REMOVED black background: alpha: true and clear color
        gl={{
          alpha: true, // Changed to true for transparent background
          antialias: !isMobile,
          powerPreference: 'default',
        }}
        // Set transparent background
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0) // Transparent black (alpha = 0)
        }}
        // Touch event handlers
        onPointerDown={() => setIsRotating(false)}
        onPointerUp={() => {
          setTimeout(() => setIsRotating(true), 2000) // Resume after 2 seconds
        }}
        onPointerLeave={() => setIsRotating(true)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent', // Ensure no background
          touchAction: 'none',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={!isMobile}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={isRotating}
            autoRotateSpeed={0.5}
            rotateSpeed={1}
            enableDamping={true}
            dampingFactor={0.05}
            touches={{
              ONE: 2,
              TWO: 0,
            }}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default ComputersCanvas;