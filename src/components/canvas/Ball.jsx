import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const BallCanvas = ({ icon, name }) => {
  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      scale={1.12}
      transitionSpeed={400}
      glareEnable={true}
      glareMaxOpacity={0.35}
      glareColor="#00BFFF"
      glarePosition="all"
      className="w-full h-full"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
        className="w-full h-full rounded-full bg-gradient-to-tr from-[#0a1226] via-[#111c38] to-[#1e294b] p-3 flex items-center justify-center border-2 border-[#00BFFF]/30 shadow-[0_0_20px_rgba(0,191,255,0.2)] hover:border-[#00BFFF] hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300 relative group cursor-pointer"
      >
        {/* Inner 3D sphere highlight and depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-black/50 pointer-events-none" />
        <div className="absolute top-1 left-2.5 w-1/3 h-1/4 rounded-full bg-white/20 blur-[1px] pointer-events-none" />
        <img
          src={icon}
          alt={name || "tech"}
          className="w-3/5 h-3/5 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] relative z-10 group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </motion.div>
    </Tilt>
  );
};

export default BallCanvas;
