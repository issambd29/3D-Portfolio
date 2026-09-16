import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background ambient glow behind 3D computer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#00BFFF]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main content header */}
      <div
        className={`absolute inset-0 top-[90px] sm:top-[110px] md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4 sm:gap-6 z-20 pointer-events-none`}
      >
        {/* Glowing vertical cyber timeline stalk */}
        <div className="flex flex-col justify-center items-center mt-2 sm:mt-3 flex-shrink-0">
          <motion.div
            className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#00BFFF] shadow-[0_0_15px_#00BFFF]"
            animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-0.5 sm:w-1 h-32 sm:h-56 md:h-72 bg-gradient-to-b from-[#00BFFF] via-[#0080FF]/60 to-transparent" />
        </div>

        {/* Hero typography */}
        <div className="flex-1 max-w-2xl">
          {/* Cyber Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 backdrop-blur-md mb-2 sm:mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#00BFFF] uppercase">
              Full-Stack &amp; 3D Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#38BDF8] to-[#60A5FA] drop-shadow-[0_0_20px_rgba(0,191,255,0.7)]">
              Issam
            </span>
          </motion.h1>

          {/* User Requested Hero Description - Refined & High Craft */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2 sm:mt-3"
          >
            <p className="text-slate-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg">
              I develop <span className="text-[#00BFFF] font-medium">3D visuals</span>, modern user interfaces, and scalable web applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3D Computer Workstation Canvas */}
      <ComputersCanvas />

      {/* Interactive prompt hint (Desktop & Mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-gray-300 text-xs font-mono pointer-events-none z-20"
      >
        <span className="text-[#00BFFF]">✦</span>
        <span>{isMobile ? "Swipe horizontally to rotate workstation" : "Click & drag to rotate 3D workstation"}</span>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 w-full flex justify-center items-center z-20">
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="group flex flex-col items-center gap-1.5 focus:outline-none"
        >
          <div className="w-[30px] h-[52px] rounded-3xl border-2 border-[#00BFFF]/40 group-hover:border-[#00BFFF] flex justify-center items-start p-1.5 transition-colors duration-300 bg-black/30 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-2.5 h-2.5 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
