import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const About = () => {
  const roles = [
    {
      title: "Web Developer",
      icon: "🌐",
      description: "Building responsive, modern web applications with html css js or React and modern frameworks"
    },
    {
      title: "App Developer",
      icon: "📱",
      description: "Creating mobile applications for Android and iOS platforms using React Native"
    },
    {
      title: "Backend Developer",
      icon: "⚙️",
      description: "Creating robust server-side solutions and APIs"
    },
    {
      title: "Designer",
      icon: "🎨",
      description: "ui/ux design focusing on user-friendly and visually appealing interfaces"
    }
  ];

  return (
    <section id="about" className="relative w-full py-24">
      <span className="hash-span" id="about">&nbsp;</span>
      {/* Main content container */}
      <div className={`max-w-7xl mx-auto ${styles.paddingX}`}>
        
        {/* Section Header with indicator line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-row items-start gap-5 mb-16"
        >
          {/* Left indicator line */}
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#00BFFF] shadow-lg shadow-[#00BFFF]/60" />
            <div className="w-1 h-32 bg-gradient-to-b from-[#00BFFF] to-transparent" />
          </div>

          {/* Header content */}
          <div className="flex-1">
            {/* Section Label */}
            <p className={`${styles.sectionSubText} text-[#00BFFF]/80 drop-shadow-[0_0_5px_rgba(0,191,255,0.4)]`}>
              INTRODUCTION
            </p>
            
            {/* Main Headline */}
            <h2 className={`${styles.sectionHeadText} text-white mt-2 drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]`}>
              Who am I?
            </h2>
            
            {/* Description Paragraph */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-white text-lg max-w-3xl leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl p-6"
            >
        An ambitious web and application developer with a strong interest in backend systems and UI/UX design. I enjoy building complete digital experiences, from clean and intuitive interfaces to robust and scalable server-side architectures. Continuously learning and improving, I aim to combine creativity and technical skills to deliver efficient, user-focused solutions with real-world impact.
            </motion.p>
          </div>
        </motion.div>

        {/* Roles Grid with consistent styling */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 hover:border-[#00BFFF]/30 transition-all duration-300 h-full">
                
                {/* Icon with pulse animation */}
                <div className="flex justify-center mb-6">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00BFFF]/20 to-transparent flex items-center justify-center border border-[#00BFFF]/20 group-hover:border-[#00BFFF]/40 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-3xl">{role.icon}</span>
                  </motion.div>
                </div>
                
                {/* Role Title */}
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  {role.title}
                </h3>
                
                {/* Role Description */}
                <p className="text-gray-300 text-center text-sm leading-relaxed">
                  {role.description}
                </p>
                
                {/* Bottom accent line */}
                <motion.div 
                  className="w-0 h-0.5 bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent mx-auto mt-6 group-hover:w-16 transition-all duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 backdrop-blur-sm bg-white/5 rounded-xl p-6">
              Seeking a role where I can apply my skills and passion to create 
              meaningful solutions and make a positive impact through technology.
            </p>
            
            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors duration-300 group"
              >
                <span className="text-sm font-medium tracking-wider drop-shadow-[0_0_5px_rgba(0,191,255,0.4)]">
                  Let's work together
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-[#00BFFF] shadow-lg shadow-[#00BFFF]/60"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;