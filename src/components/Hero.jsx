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
        className={`absolute inset-0 top-[75px] sm:top-[85px] md:top-[95px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-6 z-20 pointer-events-none`}
      >
        {/* Glowing vertical cyber timeline stalk */}
        <div className="flex flex-col justify-center items-center mt-2 sm:mt-3 flex-shrink-0">
          <motion.div
            className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#00BFFF] shadow-[0_0_15px_#00BFFF]"
            animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-0.5 sm:w-1 h-24 sm:h-44 md:h-56 bg-gradient-to-b from-[#00BFFF] via-[#0080FF]/60 to-transparent" />
        </div>

        {/* Hero typography */}
        <div className="flex-1 max-w-2xl">
          {/* Cyber Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 backdrop-blur-md mb-2 sm:mb-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-[#00BFFF] uppercase">
              Full-Stack Web Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#38BDF8] to-[#60A5FA] drop-shadow-[0_0_20px_rgba(0,191,255,0.7)]">
              Issam Badaoui
            </span>
          </motion.h1>

          {/* User Requested Hero Description - Focused on Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2 sm:mt-2.5"
          >
            <p className="text-slate-200 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md sm:max-w-lg">
              I build <span className="text-[#00BFFF] font-medium">full-stack web applications</span>, modern user interfaces, and scalable backend services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3D Computer Workstation Canvas */}
      <ComputersCanvas />

      {/* Unified Bottom Controls: Hint pill above, scroll mouse below (no overlap) */}
      <div className="absolute bottom-3 sm:bottom-5 w-full flex flex-col items-center gap-2 sm:gap-2.5 z-20 pointer-events-none">
        {/* Interactive prompt hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-gray-300 text-[10px] sm:text-xs font-mono shadow-xl whitespace-nowrap pointer-events-auto"
        >
          <span className="text-[#00BFFF]">✦</span>
          <span>{isMobile ? "Swipe to rotate 3D workstation" : "Click & drag to rotate workstation"}</span>
        </motion.div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="pointer-events-auto group flex flex-col items-center focus:outline-none"
        >
          <div className="w-[24px] sm:w-[26px] h-[38px] sm:h-[42px] rounded-2xl border-2 border-[#00BFFF]/40 group-hover:border-[#00BFFF] flex justify-center items-start p-1 transition-colors duration-300 bg-black/40 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
