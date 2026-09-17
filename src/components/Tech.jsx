import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <span className="hash-span" id="tech">&nbsp;</span>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
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

        <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
          Core technologies, frameworks, and engineering tools I leverage to engineer performant, reliable applications.
        </p>
      </motion.div>

      {/* Interactive Tech Grid */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.35) }}
            className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1.05rem)] md:w-[calc(25%-1.15rem)] lg:w-[calc(20%-1.25rem)] flex flex-col"
          >
            <Tilt
              tiltMaxAngleX={14}
              tiltMaxAngleY={14}
              scale={1.03}
              transitionSpeed={400}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#00BFFF"
              glarePosition="all"
              className="w-full h-full rounded-2xl bg-gradient-to-b from-[#0e162e]/90 via-[#0a1024]/85 to-[#070b18]/95 border border-white/10 hover:border-[#00BFFF]/60 p-4 sm:p-5 flex flex-col items-center justify-between backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(0,191,255,0.25)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Holographic light sweep */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#00BFFF]/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              {/* Level / Category Badge */}
              <div className="w-full flex items-center justify-between gap-1 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#00BFFF]/90 px-2 py-0.5 rounded-md bg-[#00BFFF]/10 border border-[#00BFFF]/20">
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
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
