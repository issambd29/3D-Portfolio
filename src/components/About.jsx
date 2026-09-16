import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Palette, CheckCircle2 } from "lucide-react";
import { styles } from "../styles";

const roles = [
  {
    title: "Full-Stack Web Engineer",
    icon: Globe,
    description:
      "Engineering modern, scalable web platforms with React, Vite, Tailwind CSS, and robust state architectures.",
    badge: "React • TypeScript • Tailwind",
  },
  {
    title: "Mobile App Developer",
    icon: Smartphone,
    description:
      "Developing fluid cross-platform mobile applications for Android & iOS with React Native and responsive touch layouts.",
    badge: "React Native • Expo • Mobile UI",
  },
  {
    title: "Backend & Database Architect",
    icon: Server,
    description:
      "Building high-throughput REST APIs, JWT authentication, and relational schemas with Django, Python, and PostgreSQL.",
    badge: "Django • PostgreSQL • REST APIs",
  },
  {
    title: "UI/UX & 3D Interactive Designer",
    icon: Palette,
    description:
      "Crafting immersive visual user interfaces, design systems, and WebGL Three.js interactive scenes.",
    badge: "Figma • Three.js • Spline 3D",
  },
];

const highlights = [
  "Production experience deploying enterprise applications (Snai3i, Madrassat El-Itqane)",
  "Full lifecycle expertise: Figma design -> Frontend -> REST APIs -> Cloud Database",
  "High performance and mobile-first responsive architecture",
  "Real-time integrations, authentication protocols, and clean code principles",
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
              I am a versatile software engineer with proven experience constructing end-to-end digital platforms. From responsive React frontends and cross-platform mobile apps to scalable Python, Django backends, and PostgreSQL databases, I design and deploy reliable systems tailored to real company needs and user expectations.
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

        {/* Enterprise Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl backdrop-blur-md bg-gradient-to-r from-blue-950/40 via-black/50 to-purple-950/30 border border-[#00BFFF]/20 p-6 sm:p-8"
        >
          <h4 className="text-white text-base sm:text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00BFFF]" />
            Core Engineering Standard
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00BFFF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
