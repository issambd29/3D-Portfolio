import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
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

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const data = random.inSphere(new Float32Array(5001), { radius: 1.2 });
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) data[i] = 0;
    }
    return data;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#00BFFF'
          size={0.0022}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [canRender, setCanRender] = useState(true);

  useEffect(() => {
    setCanRender(isWebGLSupported());
  }, []);

  if (!canRender) return null;

  return (
    <div className='w-full h-full absolute inset-0 pointer-events-none'>
      <ErrorBoundary fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          gl={{ alpha: true, powerPreference: "low-power" }}
          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        >
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default StarsCanvas;
