import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    whileHover={{ y: -10 }}
    className="group relative"
  >
    {/* Glow effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-xl">
      {/* Quote icon */}
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-xl font-bold">"</span>
      </div>
      
      {/* Testimonial text */}
      <div className="mt-2">
        <p className="text-gray-300 text-lg leading-relaxed italic">
          "{testimonial}"
        </p>
      </div>
      
      {/* Author info */}
      <div className="mt-8 pt-6 border-t border-gray-700/50 flex items-center gap-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border-2 border-blue-500/30">
            <span className="text-white font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900" />
        </div>
        
        {/* Name and position */}
        <div className="flex-1">
          <h4 className="text-white font-bold text-lg">{name}</h4>
          <p className="text-gray-400 text-sm">
            {designation} {company && `• ${company}`}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  // Testimonials data
  const testimonials = [
    {
      testimonial: "Ismail demonstrated exceptional problem-solving skills during our collaboration. His attention to detail and commitment to delivering high-quality code is impressive. He's a fast learner and adapts quickly to new technologies.",
      name: "Faycel Badaoui",
      designation: "Senior Developer",
      company: "Tech Solutions Inc.",
      rating: 5
    },
    {
      testimonial: "Working with Ismail was a great experience. His clean code architecture and innovative approach to complex challenges significantly improved our project's performance. He's a valuable asset to any development team.",
      name: "Ismail Salah",
      designation: "Project Manager",
      company: "Digital Innovations",
      rating: 5
    },
    {
      testimonial: "Ismail's expertise in React and modern web development is outstanding. He consistently delivered features ahead of schedule while maintaining excellent code quality. His communication skills and teamwork are equally impressive.",
      name: "Aboudaoud",
      designation: "Lead Developer",
      company: "WebTech Masters",
      rating: 5
    }
  ];

  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        {/* Section indicator */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-4 rounded-full bg-[#00BFFF]"
          />
          <p className={`${styles.sectionSubText} text-[#00BFFF]/80 font-mono`}>
            &lt;testimonials&gt;
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-4 h-4 rounded-full bg-[#00BFFF]"
          />
        </div>
        
        <h2 className={`${styles.sectionHeadText} text-center text-white mb-4`}>
          Client <span className="text-[#00BFFF]">Testimonials</span>
        </h2>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-400 text-lg max-w-3xl mx-auto text-center leading-relaxed"
        >
          What colleagues and clients say about working with me
        </motion.p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Feedback Statistics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300 font-medium">Positive Feedback</div>
              <div className="text-gray-400 text-sm mt-2">All clients recommend working with me</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5.0</div>
              <div className="text-gray-300 font-medium">Average Rating</div>
              <div className="text-gray-400 text-sm mt-2">Perfect score across all projects</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300 font-medium">Projects Delivered</div>
              <div className="text-gray-400 text-sm mt-2">With client satisfaction</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 pt-12 border-t border-gray-700/50 text-center"
      >
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Ready to add your positive experience? Let's work together on your next project!
        </p>
        
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-500/30 hover:border-blue-500/50 text-white px-8 py-4 rounded-2xl transition-all duration-300 group"
        >
          <span className="text-sm font-medium tracking-wider">
            Start a Project Together
          </span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg"
          >
            →
          </motion.span>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");