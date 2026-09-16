import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const formatCategoryName = (type) => {
  switch (type) {
    case "html-css-js":
      return "HTML / CSS / JS";
    case "react":
      return "React & Full Stack";
    case "react-native":
      return "Mobile (React Native)";
    default:
      return type || "Web App";
  }
};

const ProjectCard = React.forwardRef(
  (
    {
      index,
      name,
      description,
      tags = [],
      image,
      source_code_link = "#",
      live_demo_link,
      type,
      badge,
    },
    ref
  ) => {
    const handleSourceCodeClick = (e) => {
      e.stopPropagation();
      if (source_code_link && source_code_link !== "#") {
        window.open(source_code_link, "_blank", "noopener,noreferrer");
      }
    };

    const handleLiveDemoClick = (e) => {
      e.stopPropagation();
      if (live_demo_link) {
        window.open(live_demo_link, "_blank", "noopener,noreferrer");
      }
    };

    const handleCardClick = () => {
      if (live_demo_link) {
        window.open(live_demo_link, "_blank", "noopener,noreferrer");
      } else if (source_code_link && source_code_link !== "#") {
        window.open(source_code_link, "_blank", "noopener,noreferrer");
      }
    };

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4) }}
        className="group h-full flex flex-col"
      >
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          scale={1.02}
          transitionSpeed={500}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#00BFFF"
          glarePosition="all"
          className="relative w-full flex flex-col justify-between bg-gradient-to-b from-[#0c1429]/95 via-[#080d1e]/90 to-[#050814]/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#00BFFF]/20 hover:border-[#00BFFF] transition-all duration-300 h-full cursor-pointer shadow-xl hover:shadow-[0_0_30px_rgba(0,191,255,0.25)]"
          onClick={handleCardClick}
        >
          {/* Subtle Ambient Hover Glow */}
          <div className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-r from-[#00BFFF]/30 via-transparent to-[#0080FF]/30 pointer-events-none" />

          <div className="relative flex-1 flex flex-col z-10">
            {/* Header: Category Tag & Special Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/30 font-mono">
                {formatCategoryName(type)}
              </span>

              {badge && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{badge}</span>
                </span>
              )}
            </div>

            {/* Project Visual Cover: High-Tech Cyber Terminal Window */}
            <div className="relative w-full h-[180px] mb-5 overflow-hidden rounded-xl group/cover flex-shrink-0 border border-white/10 bg-[#060a17]">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-[#0b142d] via-[#091024] to-[#040816] relative overflow-hidden">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bfff08_1px,transparent_1px),linear-gradient(to_bottom,#00bfff08_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                      {type === "react" ? "REACT_APP" : type === "react-native" ? "MOBILE_APP" : "WEB_SYS"}
                    </span>
                  </div>

                  {/* Center Cyber Brand Display */}
                  <div className="text-center relative z-10 my-auto">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00BFFF] mb-1.5 shadow-[0_0_15px_rgba(0,191,255,0.2)]">
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2}>
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div className="text-white font-bold text-sm tracking-wide">
                      {name}
                    </div>
                  </div>

                  {/* Bottom Terminal Status */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 relative z-10 pt-1">
                    <span className="text-[#00BFFF] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                      LIVE_SYSTEM
                    </span>
                    <span className="text-gray-500">v2.5.0</span>
                  </div>
                </div>
              )}

              {/* Hover Quick Actions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs z-20">
                {live_demo_link && (
                  <button
                    type="button"
                    onClick={handleLiveDemoClick}
                    className="px-3.5 py-1.5 rounded-lg bg-[#00BFFF] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-white transition-colors shadow-lg"
                  >
                    <span>View Demo</span>
                    <span>↗</span>
                  </button>
                )}
                {source_code_link && source_code_link !== "#" && (
                  <button
                    type="button"
                    onClick={handleSourceCodeClick}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 border border-white/20 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Code</span>
                  </button>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <div className="mb-4 flex-1">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2 group-hover:text-[#00BFFF] transition-colors line-clamp-1">
                {name}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
              {tags && tags.length > 0 ? (
                tags.map((tag, tagIndex) => {
                  const tagName = typeof tag === "string" ? tag : tag.name;
                  return (
                    <span
                      key={`${name}-tag-${tagIndex}`}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/5 text-gray-300 border border-white/10 hover:border-[#00BFFF]/40 hover:text-[#00BFFF] transition-colors"
                    >
                      #{tagName}
                    </span>
                  );
                })
              ) : null}
            </div>

            {/* Bottom Action Row */}
            <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2.5">
              {live_demo_link ? (
                <button
                  type="button"
                  onClick={handleLiveDemoClick}
                  className="flex-1 py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 bg-[#00BFFF]/15 hover:bg-[#00BFFF] text-[#00BFFF] hover:text-black border border-[#00BFFF]/40 hover:border-[#00BFFF] shadow-md group/btn"
                >
                  <span>Live App</span>
                  <span className="text-xs transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                    ↗
                  </span>
                </button>
              ) : (
                <div className="flex-1 py-2.5 px-3 text-xs font-mono rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed">
                  <span>Demo Staged</span>
                </div>
              )}

              <button
                type="button"
                onClick={handleSourceCodeClick}
                disabled={!source_code_link || source_code_link === "#"}
                className={`py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1.5 border ${
                  source_code_link && source_code_link !== "#"
                    ? "bg-white/5 hover:bg-white/15 border-white/10 hover:border-white/30 text-gray-200 hover:text-white"
                    : "bg-white/5 border-white/5 text-gray-500 cursor-not-allowed"
                }`}
                title="View GitHub repository"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="hidden sm:inline">Code</span>
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { name: "All Projects", value: "all", count: projects.length },
    {
      name: "React & Full Stack",
      value: "react",
      count: projects.filter((p) => p.type === "react").length,
    },
    {
      name: "Mobile (React Native)",
      value: "react-native",
      count: projects.filter((p) => p.type === "react-native").length,
    },
    {
      name: "HTML / CSS / JS",
      value: "html-css-js",
      count: projects.filter((p) => p.type === "html-css-js").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <>
      <span className="hash-span" id="works">&nbsp;</span>
      <span className="hash-span" id="projects">&nbsp;</span>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 mb-3 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />
          <p className="text-xs font-mono font-bold tracking-widest text-[#00BFFF] uppercase">
            PORTFOLIO_SHOWCASE
          </p>
        </div>

        <h2 className={`${styles.sectionHeadText} text-white`}>
          Featured <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.6)]">Projects</span>
        </h2>

        <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Production systems, enterprise portals, and mobile solutions engineered with modern frameworks, reliable backends, and responsive touch architectures.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((category) => {
          const isActive = activeFilter === category.value;
          return (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                isActive
                  ? "bg-[#00BFFF]/20 text-white border-[#00BFFF] shadow-[0_0_15px_rgba(0,191,255,0.3)] scale-105"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-[#00BFFF]/40 hover:text-white"
              }`}
            >
              <span>{category.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-[#00BFFF] text-black font-bold" : "bg-white/10 text-gray-400"
                }`}
              >
                {category.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
