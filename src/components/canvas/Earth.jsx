import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2.2 : 2.55}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
      {/* Soft celestial radial atmosphere glow behind canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] lg:w-[380px] h-[280px] sm:h-[340px] lg:h-[380px] rounded-full bg-gradient-to-r from-[#00BFFF]/20 via-[#0080FF]/15 to-transparent blur-3xl pointer-events-none" />

      <Canvas
        shadows
        frameloop="always"
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          touchAction: "pan-y",
        }}
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 10, 7]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-5, -2, -5]} intensity={1.2} color="#00BFFF" />
        <pointLight position={[0, 5, 5]} intensity={1.5} color="#38bdf8" />

        <ErrorBoundary fallback={null}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              ref={(controls) => {
                if (controls?.domElement) {
                  controls.domElement.style.touchAction = "pan-y";
                }
              }}
              autoRotate
              autoRotateSpeed={1.5}
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth isMobile={isMobile} />
            <Preload all />
          </Suspense>
        </ErrorBoundary>
      </Canvas>
    </div>
  );
};

useGLTF.preload("./planet/scene.gltf");

export default EarthCanvas;

