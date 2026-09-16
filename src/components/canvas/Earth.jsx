import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const isWebGLSupported = () => {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const EarthFallback = () => (
  <div className="w-full h-full min-h-[300px] flex items-center justify-center pointer-events-none">
    <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/25 to-emerald-400/20 blur-xl border border-cyan-500/40 flex items-center justify-center animate-pulse">
      <div className="w-40 h-40 rounded-full bg-gradient-to-b from-blue-950 via-slate-900 to-black border border-cyan-400/40 flex flex-col items-center justify-center text-4xl shadow-[0_0_30px_rgba(0,191,255,0.4)]">
        <span>🌍</span>
        <span className="text-[11px] text-[#00BFFF] font-mono mt-2 font-medium tracking-wide">
          EARTH_3D
        </span>
      </div>
    </div>
  </div>
);

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [canRenderWebGL, setCanRenderWebGL] = useState(true);

  useEffect(() => {
    setCanRenderWebGL(isWebGLSupported());
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!canRenderWebGL || hasError) {
    return <EarthFallback />;
  }

  return (
    <ErrorBoundary fallback={<EarthFallback />}>
      <Canvas
        shadows={!isMobile}
        frameloop='demand'
        dpr={isMobile ? 1 : [1, 2]}
        gl={{ 
          alpha: true,
          preserveDrawingBuffer: true,
          antialias: !isMobile,
          powerPreference: 'default'
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.canvas.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            setHasError(true);
          });
        }}
        camera={{
          fov: isMobile ? 50 : 45,
          near: 0.1,
          far: 200,
          position: isMobile ? [-3, 2, 5] : [-4, 3, 6],
        }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
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

useGLTF.preload("/planet/scene.gltf");

export default EarthCanvas;
