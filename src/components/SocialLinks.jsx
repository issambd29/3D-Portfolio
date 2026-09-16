import React from "react";
import { motion } from "framer-motion";

// Official brand SVG vector paths
export const SocialIconsData = [
  {
    name: "GitHub",
    id: "social-github",
    url: "https://github.com/issambd29",
    handle: "@issambd29",
    action: "View Repositories",
    color: "#f0f6fc",
    accent: "#00BFFF",
    bgHover: "hover:border-[#00BFFF] hover:shadow-[0_0_25px_rgba(0,191,255,0.4)]",
    gradient: "from-gray-900 to-black",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    id: "social-linkedin",
    url: "https://www.linkedin.com/in/issam-badaoui",
    handle: "in/issam-badaoui",
    action: "Connect Profile",
    color: "#0A66C2",
    accent: "#00BFFF",
    bgHover: "hover:border-[#0A66C2] hover:shadow-[0_0_25px_rgba(10,102,194,0.4)]",
    gradient: "from-blue-950/50 to-black",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    id: "social-instagram",
    url: "https://instagram.com/issambd29",
    handle: "@issambd29",
    action: "Follow & DM",
    color: "#E1306C",
    accent: "#F77737",
    bgHover: "hover:border-[#E1306C] hover:shadow-[0_0_25px_rgba(225,48,108,0.4)]",
    gradient: "from-purple-950/50 to-pink-950/30",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    id: "social-whatsapp",
    url: "https://wa.me/?text=Hello%20Issam,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20collaborate!",
    handle: "Direct Chat",
    action: "Instant Message",
    color: "#25D366",
    accent: "#128C7E",
    bgHover: "hover:border-[#25D366] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]",
    gradient: "from-emerald-950/50 to-black",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.214 8.214 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.01-2.96-.19-.3a8.196 8.196 0 0 1-1.25-4.51c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z" />
      </svg>
    ),
  },
];

// Inline compact icon pill bar for footer and nav
export const SocialIconsBar = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SocialIconsData.map((social) => (
        <motion.a
          key={social.id}
          id={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${social.gradient} border border-white/10 ${social.bgHover} flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-lg group relative`}
          title={`${social.name} • ${social.handle}`}
          aria-label={`Visit Issam's ${social.name}`}
        >
          {/* Subtle luminous halo */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity blur-md"
            style={{ backgroundColor: social.color }}
          />
          <div
            className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            style={{ color: social.color }}
          >
            {social.svg}
          </div>
        </motion.a>
      ))}
    </div>
  );
};

// Full interactive card grid for Contact section
export const SocialCardsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {SocialIconsData.map((social) => (
        <motion.a
          key={social.id}
          id={`card-${social.id}`}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`p-3.5 sm:p-4 rounded-xl backdrop-blur-md bg-gradient-to-br ${social.gradient} border border-white/10 ${social.bgHover} flex items-center gap-3.5 transition-all duration-300 group cursor-pointer shadow-lg`}
        >
          <div
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 flex-shrink-0"
            style={{
              backgroundColor: `${social.color}15`,
              borderColor: `${social.color}40`,
              color: social.color,
            }}
          >
            {social.svg}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="text-white text-sm font-semibold truncate group-hover:text-white">
                {social.name}
              </span>
              <span className="text-[11px] font-mono text-[#00BFFF]/80 flex items-center gap-0.5">
                <span>↗</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs truncate mt-0.5 group-hover:text-gray-300">
              {social.handle}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIconsBar;
