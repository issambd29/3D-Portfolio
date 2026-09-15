import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github as githubIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const formatCategoryName = (type) => {
  switch (type) {
    case "html-css-js":
      return "HTML / CSS / JS";
    case "react":
      return "React";
    case "react-native":
      return "React Native";
    default:
      return type || "Web App";
  }
};

const ProjectCard = ({
  index,
  name,
  description,
  tags = [],
  image,
  source_code_link = "#",
  live_demo_link,
  type,
}) => {
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.5) }}
      whileHover={{ y: -10 }}
      className="group h-full flex"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02}
        transitionSpeed={500}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#3B82F6"
        glarePosition="all"
        className="relative w-full flex flex-col justify-between bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 h-full cursor-pointer shadow-xl"
        onClick={handleCardClick}
      >
        {/* Ambient Hover Glow */}
        <div className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 pointer-events-none" />

        <div className="relative flex-1 flex flex-col">
          {/* Category Tag */}
          {type && (
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {formatCategoryName(type)}
              </span>
            </div>
          )}

          {/* Original Project Cover */}
          <div className="relative w-full h-[180px] mb-6 overflow-hidden rounded-xl group/cover flex-shrink-0">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-blue-800/30 border border-blue-500/20 rounded-xl transition-colors duration-300 group-hover:border-blue-500/40">
                <div className="text-center px-4">
                  <div className="text-4xl mb-2">🌐</div>
                  <div className="text-white font-medium text-sm px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 shadow-sm">
                    {name}
                  </div>
                </div>
              </div>
            )}

            {/* Live Demo Quick Action */}
            {live_demo_link && (
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <button
                  type="button"
                  onClick={handleLiveDemoClick}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs font-medium transition-colors duration-300 border border-white/20 shadow-md"
                >
                  <span className="text-xs">↗</span>
                  <span>Live Demo</span>
                </button>
              </div>
            )}

            {/* Source Code Quick Action */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <button
                type="button"
                onClick={handleSourceCodeClick}
                disabled={!source_code_link || source_code_link === "#"}
                className={`w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center items-center cursor-pointer border ${
                  source_code_link && source_code_link !== "#"
                    ? "border-gray-700 hover:border-white transition-all duration-300 hover:scale-110 shadow-lg"
                    : "border-gray-700/50 opacity-50 cursor-not-allowed"
                }`}
              >
                <img src={githubIcon} alt="source code" className="w-5 h-5 object-contain" />
              </button>
            </div>
          </div>

          {/* Project Title & Description */}
          <div className="mb-4 flex-1">
            <h3 className="text-white font-bold text-xl mb-3 line-clamp-1">{name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags && tags.length > 0 ? (
              tags.map((tag, tagIndex) => {
                const tagName = typeof tag === "string" ? tag : tag.name;
                return (
                  <span
                    key={`${name}-tag-${tagIndex}`}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:opacity-80 transition-all duration-300"
                  >
                    #{tagName}
                  </span>
                );
              })
            ) : (
              <span className="text-gray-500 text-xs">No technologies specified</span>
            )}
          </div>

          {/* Action Buttons Footer */}
          <div className="mt-auto pt-4 border-t border-gray-700/50 flex gap-3">
            {live_demo_link ? (
              <button
                type="button"
                onClick={handleLiveDemoClick}
                className="flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 hover:text-blue-300"
              >
                <span className="text-sm">↗</span>
                <span>Live Demo</span>
              </button>
            ) : (
              <div className="flex-1 py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2 opacity-50 cursor-not-allowed bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <span className="text-sm">↗</span>
                <span>No Demo</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleSourceCodeClick}
              disabled={!source_code_link || source_code_link === "#"}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                source_code_link && source_code_link !== "#"
                  ? "bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white"
                  : "bg-gray-800/30 border border-gray-700/50 text-gray-500 cursor-not-allowed"
              }`}
            >
              <img src={githubIcon} alt="GitHub" className="w-4 h-4 object-contain" />
              <span>Code</span>
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Get unique categories with user-friendly names
  const getCategories = () => {
    const allCategories = [
      { name: "All Projects", value: "all", count: projects.length }
    ];

    const types = [];
    projects.forEach((p) => {
      if (p.type && !types.includes(p.type)) {
        types.push(p.type);
      }
    });

    types.forEach((t) => {
      const count = projects.filter((p) => p.type === t).length;
      allCategories.push({
        name: formatCategoryName(t),
        value: t,
        count
      });
    });

    return allCategories;
  };

  const getFilteredProjects = () => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter((project) => project.type === activeFilter);
  };

  const filteredProjects = getFilteredProjects();
  const categories = getCategories();

  return (
    <>
      <span className="hash-span" id="works">&nbsp;</span>
      <span className="hash-span" id="projects">&nbsp;</span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className={`${styles.sectionSubText} text-[#00BFFF] tracking-widest font-semibold`}>
          My Creative Portfolio
        </p>
        <h2 className={`${styles.sectionHeadText} text-white mt-2`}>
          My <span className="text-[#00BFFF]">Projects</span>
        </h2>

        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to live demos and code repositories.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="mb-12 flex justify-center">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const isActive = activeFilter === category.value;
            return (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-500/20 text-white border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-600"
                }`}
              >
                {category.name} ({category.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                index={index}
                name={project.name}
                description={project.description}
                tags={project.tags}
                image={project.image}
                source_code_link={project.source_code_link}
                live_demo_link={project.live_demo_link}
                type={project.type}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-[#0c1226]/50 rounded-2xl border border-slate-800">
              <p className="text-gray-400 text-base mb-4">
                No projects found in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="px-5 py-2.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-400 rounded-xl transition-all duration-200"
              >
                View All Projects
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "works");
