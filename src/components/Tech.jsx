import React, { useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

// Interactive 3D Cyber Core in Three.js
const CyberCore = () => {
  const meshRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.5;
      ringRef1.current.rotation.x += delta * 0.2;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.4;
      ringRef2.current.rotation.z -= delta * 0.3;
    }
  });

  return (
    <group scale={1.2}>
      {/* Central Holographic Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#00BFFF"
          emissive="#004080"
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Inner Glowing Core */}
      <Sphere args={[0.7, 16, 16]}>
        <meshBasicMaterial color="#00BFFF" wireframe={false} transparent opacity={0.6} />
      </Sphere>

      {/* Orbiting Ring 1 */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.03, 16, 64]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.7} />
      </mesh>

      {/* Orbiting Ring 2 */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.02, 16, 64]} />
        <meshBasicMaterial color="#818CF8" transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

const CyberCoreCanvas = () => {
  return (
    <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto relative pointer-events-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[#00BFFF]/10 rounded-full blur-2xl animate-pulse" />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00BFFF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#38BDF8" />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
            <CyberCore />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

const categories = [
  { id: "all", label: "All Stack" },
  { id: "Frontend", label: "Frontend & UI" },
  { id: "Backend", label: "Backend & APIs" },
  { id: "Database", label: "Database" },
  { id: "3D & Creative", label: "3D & Creative" },
  { id: "Tools", label: "DevOps & Tools" },
];

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTechnologies =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <>
      <span className="hash-span" id="tech">&nbsp;</span>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-ping" />
          <p className="text-xs font-mono font-bold tracking-widest text-[#00BFFF] uppercase">
            TECHNICAL_CAPABILITIES
          </p>
        </div>

        <h2 className={`${styles.sectionHeadText} text-white mt-1`}>
          Skills & <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.6)]">Technologies</span>
        </h2>

        <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Comprehensive production engineering stack spanning responsive frontends, scalable Python &amp; Django backends, PostgreSQL architectures, and interactive 3D WebGL interfaces.
        </p>
      </motion.div>

      {/* 3D Holographic Core visualizer */}
      <div className="mb-8">
        <CyberCoreCanvas />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count =
            cat.id === "all"
              ? technologies.length
              : technologies.filter((t) => t.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                isActive
                  ? "bg-[#00BFFF]/20 text-white border-[#00BFFF] shadow-[0_0_15px_rgba(0,191,255,0.3)] scale-105"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-[#00BFFF]/40 hover:text-white"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-[#00BFFF] text-black font-bold" : "bg-white/10 text-gray-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3D Interactive Tech Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredTechnologies.map((technology, index) => (
            <motion.div
              layout
              key={technology.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.04}
                transitionSpeed={450}
                glareEnable={true}
                glareMaxOpacity={0.25}
                glareColor="#00BFFF"
                glarePosition="all"
                className="h-full rounded-2xl bg-gradient-to-b from-[#0e162e]/90 via-[#0a1024]/80 to-[#070b18]/90 border border-[#00BFFF]/20 hover:border-[#00BFFF] p-4 sm:p-5 flex flex-col items-center justify-between backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(0,191,255,0.3)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Holographic light sweep */}
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#00BFFF]/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                {/* Level / Category Badge */}
                <div className="w-full flex items-center justify-between gap-1 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00BFFF]/80 px-2 py-0.5 rounded-md bg-[#00BFFF]/10 border border-[#00BFFF]/20">
                    {technology.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">
                    {technology.level || "Proficient"}
                  </span>
                </div>

                {/* 3D Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-3 sm:p-3.5 flex items-center justify-center my-2 group-hover:scale-110 group-hover:border-[#00BFFF]/50 transition-all duration-300 relative shadow-inner">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
                    loading="lazy"
                  />
                </div>

                {/* Title & Description */}
                <div className="text-center w-full mt-2">
                  <h3 className="text-white text-sm sm:text-base font-bold group-hover:text-[#00BFFF] transition-colors">
                    {technology.name}
                  </h3>
                  {technology.description && (
                    <p className="text-gray-400 text-[11px] leading-tight mt-1 line-clamp-2 hidden sm:block">
                      {technology.description}
                    </p>
                  )}
                </div>

                {/* Cyber Bottom Line */}
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00BFFF]/30 to-transparent mt-3 group-hover:via-[#00BFFF] transition-all duration-300" />
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
