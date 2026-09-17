import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants/index.js";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(17, 24, 39, 0.7)",
        backdropFilter: "blur(12px)",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0, 191, 255, 0.1)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid rgba(0, 191, 255, 0.3)" 
      }}
      date={experience.date}
      dateClassName="text-[#00BFFF] font-medium"
      iconStyle={{ 
        background: experience.iconBg,
        border: "2px solid rgba(0, 191, 255, 0.3)",
        boxShadow: "0 0 20px rgba(0, 191, 255, 0.4)"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
      visible={true}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className='text-white text-[22px] font-bold'>
              {experience.title}
            </h3>
            <p className='text-[#00BFFF] text-[16px] font-semibold mt-1'>
              {experience.company_name}
            </p>
          </div>
          <div className="hidden md:block px-3 py-1 bg-[#00BFFF]/10 rounded-full">
            <span className="text-[#00BFFF] text-sm font-medium">
              {experience.date}
            </span>
          </div>
        </div>

        <ul className='mt-5 space-y-3'>
          {experience.points.map((point, pointIndex) => (
            <motion.li
              key={`experience-point-${pointIndex}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: pointIndex * 0.05 + index * 0.1 }}
              viewport={{ once: true }}
              className='flex items-start gap-3'
            >
              <div className="w-2 h-2 rounded-full bg-[#00BFFF] mt-2 flex-shrink-0" />
              <span className='text-gray-300 text-[14px] leading-relaxed'>
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Tech Tags based on role */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          viewport={{ once: true }}
          className="mt-6 pt-5 border-t border-gray-700/50"
        >
          <div className="flex flex-wrap gap-2">
            {experience.title.includes("HTML CSS JS") && 
              ["HTML", "CSS", "JavaScript", "Responsive Design"].map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs bg-gray-800/50 rounded-full text-gray-300">
                  {tech}
                </span>
              ))
            }
            {experience.title.includes("React") && 
              ["React", "Tailwind"].map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs bg-blue-500/10 rounded-full text-blue-400">
                  {tech}
                </span>
              ))
            }
            {experience.title.includes("App") && 
              ["React Native", "iOS", "Android", "Mobile UI"].map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs bg-purple-500/10 rounded-full text-purple-400">
                  {tech}
                </span>
              ))
            }
            {experience.title.includes("Designer") && 
              ["Figma", "UI/UX", "Prototyping","Canva"].map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs bg-pink-500/10 rounded-full text-pink-400">
                  {tech}
                </span>
              ))
            }
          </div>
        </motion.div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20"
      >
        {/* Section indicator */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-4 rounded-full bg-[#00BFFF]"
          />
          <p className={`${styles.sectionSubText} text-[#00BFFF]/80 font-mono`}>
            &lt;experience&gt;
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-4 h-4 rounded-full bg-[#00BFFF]"
          />
        </div>
        
        <h2 className={`${styles.sectionHeadText} text-center text-white mb-4`}>
          Work <span className="text-[#00BFFF]">Experience</span>
        </h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Production roles, client delivery, and full-stack software milestones.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='mt-10 flex flex-col'
      >
        {/* Custom timeline line styling */}
        <style>{`
          .vertical-timeline::before {
            background: linear-gradient(to bottom, #00BFFF, transparent) !important;
            width: 3px !important;
          }
          
          .vertical-timeline-element-content {
            box-shadow: 0 8px 32px rgba(0, 191, 255, 0.15) !important;
          }
          
          .vertical-timeline-element-content:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 191, 255, 0.2) !important;
            transition: all 0.3s ease;
          }
          
          @media (max-width: 1170px) {
            .vertical-timeline-element-content:hover {
              transform: translateY(-3px);
            }
          }
        `}</style>

        <VerticalTimeline lineColor="rgba(0, 191, 255, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>

        {/* Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-700/50"
        >
        
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");