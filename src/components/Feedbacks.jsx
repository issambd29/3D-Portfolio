import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="relative flex flex-col justify-between bg-gradient-to-b from-[#0c152e]/90 to-[#070c1a]/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#00BFFF]/40 transition-all duration-300 shadow-xl"
  >
    <div>
      <span className="text-3xl text-[#00BFFF] font-serif leading-none select-none block mb-3">
        &ldquo;
      </span>
      <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
        {testimonial}
      </p>
    </div>

    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
      <div>
        <h4 className="text-white font-semibold text-sm">{name}</h4>
        <p className="text-gray-400 text-xs mt-0.5">
          {designation} • <span className="text-[#00BFFF]">{company}</span>
        </p>
      </div>

      <div className="flex items-center gap-0.5 text-amber-400 text-xs">
        {"★".repeat(5)}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
          <p className="text-xs font-mono font-semibold tracking-wider text-[#00BFFF] uppercase">
            ENDORSEMENTS
          </p>
        </div>

        <h2 className={`${styles.sectionHeadText} text-white`}>
          Client <span className="text-[#00BFFF]">Testimonials</span>
        </h2>
        <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Direct feedback from project leads and teams I have delivered software for.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
