import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
    }
  };

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10 }}
      className="group h-full"
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
        className="relative bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col"
        onClick={handleCardClick}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20" />
        
        <div className="relative flex-1 flex flex-col">
          {/* Type Badge */}
          {type && (
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {type}
              </span>
            </div>
          )}

          {/* Project Image */}
          <div className="relative w-full h-[180px] mb-6 overflow-hidden rounded-xl group flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-blue-800/30">
              <div className="text-center">
                <div className="text-4xl mb-2">🌐</div>
                <div className="text-white font-medium text-sm px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                  {name}
                </div>
              </div>
            </div>
            
            {/* Live Demo Button */}
            {live_demo_link && (
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={handleLiveDemoClick}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-white text-xs font-medium hover:bg-white/20 transition-colors duration-300 border border-white/20"
                >
                  <span className="text-xs">↗</span>
                  Live Demo
                </button>
              </div>
            )}
            
            {/* GitHub Link */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                onClick={handleSourceCodeClick}
                disabled={!source_code_link || source_code_link === "#"}
                className={`w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center items-center cursor-pointer border ${
                  source_code_link && source_code_link !== "#" 
                    ? 'border-gray-700 hover:border-white transition-all duration-300 hover:scale-110' 
                    : 'border-gray-700/50 opacity-50 cursor-not-allowed'
                }`}
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Project Info */}
          <div className="mb-4 flex-1">
            <h3 className="text-white font-bold text-xl mb-3 line-clamp-1">
              {name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags && tags.length > 0 ? (
              tags.map((tag, tagIndex) => (
                <span
                  key={`${name}-${tagIndex}`}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:opacity-80 transition-all duration-300"
                >
                  {tag.name || tag}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-xs">No technologies specified</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto pt-4 border-t border-gray-700/50 flex gap-3">
            {live_demo_link ? (
              <button
                onClick={handleLiveDemoClick}
                className="flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 hover:text-blue-300"
              >
                <span className="text-sm">↗</span>
                Live Demo
              </button>
            ) : (
              <div className="flex-1 py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2 opacity-50 cursor-not-allowed bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <span className="text-sm">↗</span>
                No Demo
              </div>
            )}
            
            <button
              onClick={handleSourceCodeClick}
              disabled={!source_code_link || source_code_link === "#"}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                source_code_link && source_code_link !== "#" 
                  ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white' 
                  : 'bg-gray-800/30 border border-gray-700/50 text-gray-500 cursor-not-allowed'
              }`}
            >
              <img src={github} alt="GitHub" className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Get unique categories from projects
  const getCategories = () => {
    const allCategories = [
      { name: "All Projects", value: "all", count: projects.length }
    ];
    
    // Extract unique types from projects
    const uniqueTypes = [];
    projects.forEach(project => {
      if (project.type && !uniqueTypes.includes(project.type)) {
        uniqueTypes.push(project.type);
      }
    });
    
    // Add each unique type as a category
    uniqueTypes.forEach(type => {
      const count = projects.filter(p => p.type === type).length;
      allCategories.push({
        name: type,
        value: type,
        count
      });
    });
    
    return allCategories;
  };

  // Filter projects
  const getFilteredProjects = () => {
    if (activeFilter === "all") {
      return projects;
    }
    
    return projects.filter(project => 
      project.type && project.type === activeFilter
    );
  };

  const filteredProjects = getFilteredProjects();
  const categories = getCategories();

  const handleFilterClick = (value) => {
    setActiveFilter(value);
  };

  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className={`${styles.sectionHeadText} text-center text-white mb-4`}>
          My <span className="text-[#00BFFF]">Projects</span>
        </h2>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-400 text-lg max-w-3xl mx-auto text-center leading-relaxed"
        >
          Explore my projects organized by technology.
        </motion.p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilterClick(category.value)}
              className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === category.value
                  ? "bg-blue-500/20 text-white border border-blue-500"
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-600"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
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
          <div className="col-span-full text-center py-12">
            <div className="text-gray-400 mb-4">
              No projects found for "{activeFilter}" category.
            </div>
            <button
              onClick={() => handleFilterClick("all")}
              className="px-5 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");