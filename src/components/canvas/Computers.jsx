import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Helper to determine fine-tuned responsive 3D model scale and position
// Keeps the workstation close to the hero paragraph while adapting to phone, tablet, laptop, and desktop
export const getDeviceProfile = (width) => {
  if (width < 640) {
    // Phone: Prominent workstation shifted clearly to the right
    if (width <= 375) {
      return {
        device: "phone-sm",
        scale: 0.72,
        position: [0.55, -0.52, -0.1],
        rotation: [-0.01, -0.2, -0.1],
      };
    }
    if (width <= 480) {
      return {
        device: "phone",
        scale: 0.78,
        position: [0.62, -0.55, -0.1],
        rotation: [-0.01, -0.2, -0.1],
      };
    }
    return {
      device: "phone-lg",
      scale: 0.82,
      position: [0.68, -0.58, -0.1],
      rotation: [-0.01, -0.2, -0.1],
    };
  }
  // Tablet: Optically balanced horizontally
  if (width < 1024) {
    return {
      device: "tablet",
      scale: 0.72,
      position: [0.25, -0.7, -0.2],
      rotation: [-0.01, -0.2, -0.1],
    };
  }
  // PC / Desktop screen - Shifted more to the right as requested
  return {
    device: "desktop",
    scale: 0.75,
    position: [0.65, -3.25, -1.5],
    rotation: [-0.01, -0.2, -0.1],
  };
};

const Computers = ({ scale, position, rotation }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [profile, setProfile] = useState(() =>
    typeof window !== "undefined"
      ? getDeviceProfile(window.innerWidth)
      : getDeviceProfile(1200)
  );

  useEffect(() => {
    const handleResize = () => {
      setProfile(getDeviceProfile(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{ touchAction: "pan-y" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={(controls) => {
            if (controls?.domElement) {
              controls.domElement.style.touchAction = "pan-y";
            }
          }}
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.8}
          enableDamping={true}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          scale={profile.scale}
          position={profile.position}
          rotation={profile.rotation}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("./desktop_pc/scene.gltf");

export default ComputersCanvas;
