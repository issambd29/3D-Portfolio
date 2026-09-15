import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <span className="hash-span" id="tech">&nbsp;</span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className={`${styles.sectionSubText} text-[#00BFFF] tracking-widest font-semibold`}>
          My Technical Stack
        </p>
        <h2 className={`${styles.sectionHeadText} text-white mt-2`}>
          Skills & <span className="text-[#00BFFF]">Technologies</span>
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-8 sm:gap-10'>
        {technologies.map((technology, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
            className='flex flex-col items-center group'
            key={technology.name}
          >
            <div className='w-24 h-24 sm:w-28 sm:h-28 relative'>
              <BallCanvas icon={technology.icon} />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-gray-400 group-hover:text-[#00BFFF] transition-colors font-medium text-center">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
