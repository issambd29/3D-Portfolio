import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Palette } from "lucide-react";
import { styles } from "../styles";

const roles = [
  {
    title: "Full-Stack Web Engineer",
    icon: Globe,
    description:
      "Engineering modern, scalable web platforms with React, Vite, Tailwind CSS, and robust state architectures.",
    badge: "React • JavaScript • Tailwind",
  },
  {
    title: "Backend & API Architect",
    icon: Server,
    description:
      "Building high-throughput REST APIs, JWT authentication, and relational schemas with Django, Python, and PostgreSQL.",
    badge: "Django • Python • PostgreSQL",
  },
  {
    title: "Mobile App Developer",
    icon: Smartphone,
    description:
      "Developing fluid cross-platform mobile applications for Android & iOS with React Native and responsive touch layouts.",
    badge: "React Native • Mobile UI",
  },
  {
    title: "UI/UX & Frontend Design",
    icon: Palette,
    description:
      "Crafting intuitive user interfaces, design systems, wireframes, and responsive component architectures with Figma and modern CSS.",
    badge: "Figma • UI/UX Systems",
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full py-20 sm:py-28">
      <span className="hash-span" id="about">&nbsp;</span>

      <div className={`max-w-7xl mx-auto ${styles.paddingX}`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-row items-start gap-4 sm:gap-5 mb-14"
        >
          {/* Cyan Glow Stalk */}
          <div className="flex flex-col justify-center items-center mt-1">
            <div className="w-4 h-4 rounded-full bg-[#00BFFF] shadow-[0_0_12px_#00BFFF]" />
            <div className="w-0.5 h-28 sm:h-32 bg-gradient-to-b from-[#00BFFF] to-transparent" />
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
              <p className="text-xs font-mono font-semibold tracking-wider text-[#00BFFF] uppercase">
                ENGINEER_PROFILE
              </p>
            </div>

            <h2 className={`${styles.sectionHeadText} text-white`}>
              Overview &amp; <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.6)]">Expertise</span>
            </h2>

            <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed backdrop-blur-md bg-gradient-to-r from-white/5 to-white/0 rounded-2xl p-5 sm:p-6 border border-white/10">
              Full-stack software engineer building high-performance web applications, Django &amp; PostgreSQL backends, and cross-platform mobile apps. Focused on clean architecture, reliability, and real-world results.
            </p>
          </div>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative h-full flex flex-col"
              >
                <div className="relative backdrop-blur-md bg-gradient-to-b from-[#0e172e]/90 via-[#0a1024]/80 to-[#070c1a]/90 rounded-2xl p-6 border border-white/10 group-hover:border-[#00BFFF]/60 transition-all duration-300 h-full flex flex-col justify-between shadow-lg group-hover:shadow-[0_0_25px_rgba(0,191,255,0.25)]">
                  <div>
                    {/* Top Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-[#0080FF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF] mb-5 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-white text-lg font-bold mb-2 group-hover:text-[#00BFFF] transition-colors">
                      {role.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {role.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 mt-auto">
                    <span className="text-[11px] font-mono text-[#00BFFF]/90 block">
                      {role.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
