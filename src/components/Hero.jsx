import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showTouchHint, setShowTouchHint] = useState(true);

  useEffect(() => {
    // Only run on client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Hide touch hint after 5 seconds
    const timer = setTimeout(() => {
      setShowTouchHint(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Main content - LET TOUCH PASS THROUGH */}
      <div
        className={`absolute inset-0 top-[120px] sm:top-[100px] md:top-[120px] lg:top-[120px] xl:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-30 pointer-events-none`}
      >
        {/* Left indicator line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00BFFF] shadow-lg shadow-[#00BFFF]/60"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-1 h-40 sm:h-60 md:h-70 lg:h-80 xl:h-80 bg-gradient-to-b from-[#00BFFF] to-transparent" />
        </div>

        {/* Hero text */}
        <div className="flex-1">
          <motion.h1
            className={`${styles.heroHeadText} text-white drop-shadow-[0_0_10px_rgba(0,191,255,0.6)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.8)]">Issam</span>
          </motion.h1>
        </div>
      </div>

      {/* 3D Computer - MAKE IT TOUCHABLE */}
      <div className="absolute inset-0 z-20 pointer-events-auto">
        <ComputersCanvas />
      </div>

      {/* Mobile touch hint - Just text, no background */}
      {isMobile && showTouchHint && (
        <motion.div 
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center z-40 pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-white/80 text-sm font-medium">
            👆 Touch & drag to rotate
          </p>
        </motion.div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-10 sm:bottom-8 md:bottom-10 w-full flex justify-center items-center z-40">
        <a href="#about" className="pointer-events-auto">
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-[30px] h-[55px] sm:w-[32px] sm:h-[58px] md:w-[35px] md:h-[64px] rounded-3xl border-2 border-[#00BFFF]/40 flex justify-center items-start p-1.5 sm:p-1.5 md:p-2 backdrop-blur-sm bg-white/5">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#00BFFF] mb-1 shadow-lg shadow-[#00BFFF]/60"
              />
            </div>
            <p className="text-[#00BFFF]/80 text-xs sm:text-xs md:text-sm font-medium tracking-wider drop-shadow-lg">
              {isMobile ? 'Tap to scroll' : 'Scroll down'}
            </p>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;