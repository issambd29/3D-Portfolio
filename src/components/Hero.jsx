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
    <section className="relative w-full flex flex-col items-center justify-start pt-16 sm:pt-20 pb-4 sm:pb-6 px-3 sm:px-6 overflow-hidden lg:block lg:h-screen lg:min-h-0 lg:p-0">
      {/* Background ambient glow behind 3D computer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[480px] lg:w-[600px] h-[280px] sm:h-[480px] lg:h-[600px] bg-[#00BFFF]/10 rounded-full blur-[80px] lg:blur-[100px] pointer-events-none" />

      {/* Main content header - Centered & compact on mobile/tablet, preserved left-aligned on PC (lg) */}
      <div
        className="w-full max-w-xl mx-auto flex flex-col items-center text-center z-20 pointer-events-none lg:absolute lg:inset-0 lg:top-[120px] lg:max-w-7xl lg:mx-auto lg:px-16 lg:flex-row lg:items-start lg:text-left lg:gap-6"
      >
        {/* Glowing vertical cyber timeline stalk - visible on PC (lg) */}
        <div className="hidden lg:flex flex-col justify-center items-center mt-2 sm:mt-2.5 flex-shrink-0">
          <motion.div
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#00BFFF] shadow-[0_0_15px_#00BFFF]"
            animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-0.5 sm:w-1 h-20 sm:h-28 md:h-32 bg-gradient-to-b from-[#00BFFF] via-[#0080FF]/60 to-transparent" />
        </div>

        {/* Hero typography */}
        <div className="flex-1 max-w-2xl flex flex-col items-center lg:items-start">
          {/* Cyber Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 backdrop-blur-md mb-1 sm:mb-1.5"
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
            className="text-white text-2xl xs:text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#38BDF8] to-[#60A5FA] drop-shadow-[0_0_20px_rgba(0,191,255,0.7)] whitespace-nowrap">
              Issam Badaoui
            </span>
          </motion.h1>

          {/* User Requested Hero Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-1 sm:mt-1.5"
          >
            <p className="text-slate-200 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
              I build <span className="text-[#00BFFF] font-medium">full-stack web applications</span>, modern user interfaces, and scalable backend services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3D Computer Workstation Canvas Container */}
      <div className="w-full max-w-lg xs:max-w-xl mx-auto h-[245px] xs:h-[270px] sm:h-[300px] relative z-10 flex items-center justify-center mt-0.5 sm:mt-1 lg:absolute lg:inset-0 lg:h-full lg:w-full lg:max-w-none lg:mt-0">
        <ComputersCanvas />
      </div>

      {/* Mobile/Tablet Bottom Controls: Directly beneath workstation with minimal gap */}
      <div className="w-full flex flex-col items-center gap-1.5 z-20 -mt-3.5 xs:-mt-4 sm:-mt-5 pb-1 lg:hidden">
        {/* Interactive prompt hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-gray-300 text-[10px] sm:text-xs font-mono shadow-lg whitespace-nowrap"
        >
          <span className="text-[#00BFFF]">✦</span>
          <span>Swipe to rotate 3D workstation</span>
        </motion.div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="group flex flex-col items-center focus:outline-none mt-0.5"
        >
          <div className="w-[22px] sm:w-[24px] h-[32px] sm:h-[36px] rounded-2xl border-2 border-[#00BFFF]/40 group-hover:border-[#00BFFF] flex justify-center items-start p-1 transition-colors duration-300 bg-black/40 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]"
            />
          </div>
        </a>
      </div>

      {/* Desktop Bottom Controls (Preserved user-approved PC configuration) */}
      <div className="hidden lg:flex absolute bottom-5 w-full flex-col items-center gap-2.5 z-20 pointer-events-none">
        {/* Interactive prompt hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-gray-300 text-xs font-mono shadow-xl whitespace-nowrap pointer-events-auto"
        >
          <span className="text-[#00BFFF]">✦</span>
          <span>Click & drag to rotate workstation</span>
        </motion.div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="pointer-events-auto group flex flex-col items-center focus:outline-none"
        >
          <div className="w-[26px] h-[42px] rounded-2xl border-2 border-[#00BFFF]/40 group-hover:border-[#00BFFF] flex justify-center items-start p-1 transition-colors duration-300 bg-black/40 backdrop-blur-sm">
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
