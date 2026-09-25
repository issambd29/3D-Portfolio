import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { issamLogo } from "../assets";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    { label: "SYS_INIT", desc: "Initializing Environment", code: "0x7F" },
    { label: "MESH_3D", desc: "Compiling 3D Workstation", code: "GLTF_OK" },
    { label: "NET_SEC", desc: "Securing Encrypted Gateway", code: "TLS_1.3" },
    { label: "PORTFOLIO", desc: "Launching Experience", code: "200_OK" },
  ];

  useEffect(() => {
    // Check if client is a search engine crawler or bot (Googlebot, Bingbot, etc.)
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(userAgent);

    if (isBot) {
      // Instantly finish loading for crawlers
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }

        const delta = Math.floor(Math.random() * 7) + 3;
        const next = Math.min(prev + delta, 100);

        if (next < 30) setCurrentStage(0);
        else if (next < 65) setCurrentStage(1);
        else if (next < 90) setCurrentStage(2);
        else setCurrentStage(3);

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Generate 20 distinct segments for a high-tech segmented HUD gauge
  const totalSegments = 20;
  const filledSegments = Math.floor((progress / 100) * totalSegments);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(8px)", scale: 1.02 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-[#030612] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Dynamic Cyber Grid & Deep Ambient Aurora */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#00BFFF18_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,#915EFF10_0%,transparent_60%)] pointer-events-none" />
      
      {/* Precision dot grid overlay */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#00BFFF 0.75px, transparent 0.75px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative Cyber HUD Frame Lines */}
      <div className="absolute inset-6 sm:inset-10 border border-white/[0.04] pointer-events-none rounded-3xl">
        {/* Top-Left Corner Accent */}
        <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-[#00BFFF]/60 rounded-tl-lg" />
        <div className="absolute top-2 left-3 font-mono text-[9px] text-white/30 tracking-widest hidden sm:block">
          AUTH://BADAOUI.SYSTEMS
        </div>

        {/* Top-Right Corner Accent */}
        <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-[#00BFFF]/60 rounded-tr-lg" />
        <div className="absolute top-2 right-3 font-mono text-[9px] text-white/30 tracking-widest hidden sm:block">
          SECURITY: ENCRYPTED
        </div>

        {/* Bottom-Left Corner Accent */}
        <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-[#915EFF]/60 rounded-bl-lg" />
        <div className="absolute bottom-2 left-3 font-mono text-[9px] text-white/30 tracking-widest hidden sm:block">
          STATUS: 0xREADY
        </div>

        {/* Bottom-Right Corner Accent */}
        <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-[#915EFF]/60 rounded-br-lg" />
        <div className="absolute bottom-2 right-3 font-mono text-[9px] text-white/30 tracking-widest hidden sm:block">
          LATENCY: 12ms
        </div>
      </div>

      {/* Center Core HUD Console */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        
        {/* Futuristic Orbital Avatar Frame */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-7 flex items-center justify-center">
          {/* Outer rotating cyber dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#00BFFF]/40"
          />

          {/* Counter-rotating segmented ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border-t border-b border-[#915EFF]/50"
          />

          {/* Glowing neon aura */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#00BFFF]/30 to-[#915EFF]/30 blur-lg animate-pulse" />

          {/* Central Logo Container */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#00BFFF] shadow-[0_0_24px_rgba(0,191,255,0.45)] bg-[#050816] flex items-center justify-center">
            <img
              src={issamLogo}
              alt="Issam Badaoui"
              onError={(e) => {
                if (e.target.src !== `${window.location.origin}/issam_logo.jpg`) {
                  e.target.src = "/issam_logo.jpg";
                }
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small orbital beacon indicator */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_10px_#00BFFF] -top-1 left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>

        {/* Brand Typography */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-2.5 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-ping" />
            <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">
              {stages[currentStage].label} • {stages[currentStage].code}
            </span>
          </motion.div>

          <h1 className="text-white font-extrabold text-2xl sm:text-3xl tracking-wider drop-shadow-[0_0_15px_rgba(0,191,255,0.4)]">
            ISSAM BADAOUI
          </h1>
          <p className="text-secondary text-xs sm:text-sm font-mono tracking-widest uppercase mt-1">
            Full Stack & Cybersecurity
          </p>
        </div>

        {/* High-Tech Segmented Progress Gauge */}
        <div className="w-full bg-[#0d122b]/80 border border-white/10 rounded-xl p-3.5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          {/* Top telemetry status line */}
          <div className="flex items-center justify-between font-mono text-[11px] mb-2.5">
            <span className="text-white/80 flex items-center gap-1.5">
              <span className="text-[#00BFFF]">›</span>
              {stages[currentStage].desc}
            </span>
            <span className="text-[#00BFFF] font-bold tracking-wider">
              {progress}%
            </span>
          </div>

          {/* Segmented Cyber Gauge (20 discreet glowing blocks) */}
          <div className="flex items-center gap-1 h-2.5 w-full">
            {Array.from({ length: totalSegments }).map((_, idx) => {
              const isFilled = idx < filledSegments;
              const isHead = idx === filledSegments - 1;
              return (
                <div
                  key={idx}
                  className={`flex-1 h-full rounded-sm transition-all duration-150 ${
                    isFilled
                      ? isHead
                        ? "bg-white shadow-[0_0_8px_#ffffff]"
                        : "bg-gradient-to-r from-[#00BFFF] to-[#38bdf8] shadow-[0_0_4px_#00BFFF]"
                      : "bg-white/10"
                  }`}
                />
              );
            })}
          </div>

          {/* Bottom terminal-like info line */}
          <div className="flex items-center justify-between font-mono text-[9px] text-white/40 mt-2.5 pt-2 border-t border-white/5">
            <span>MEM: 64MB OK</span>
            <span className="text-[#38bdf8]/70 animate-pulse">STREAMING ASSETS</span>
            <span>NODE_V20</span>
          </div>
        </div>

      </div>

      {/* Bottom Global Status Tag */}
      <div className="absolute bottom-4 sm:bottom-6 text-center">
        <span className="font-mono text-[10px] text-white/30 tracking-[0.25em] uppercase">
          ISSAM PORTFOLIO • REACT 18 + THREE.JS
        </span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
