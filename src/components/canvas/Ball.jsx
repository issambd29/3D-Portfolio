import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const BallFallback = ({ icon }) => (
  <div className="w-full h-full rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 p-2.5 flex items-center justify-center border-2 border-[#00BFFF]/40 shadow-[0_0_20px_rgba(0,191,255,0.25)] hover:scale-110 hover:border-[#00BFFF] transition-all duration-300">
    <img src={icon} alt="tech" className="w-3/5 h-3/5 object-contain drop-shadow-md" />
  </div>
);

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const SafeCanvas = ({ icon, isMobile }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={isMobile ? 1 : [1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isMobile,
        powerPreference: 'default'
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={!isMobile}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <ErrorBoundary fallback={<BallFallback icon={icon} />}>
      <SafeCanvas icon={icon} isMobile={isMobile} />
    </ErrorBoundary>
  );
};

export default BallCanvas;