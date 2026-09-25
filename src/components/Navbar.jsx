import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, issamLogo } from "../assets";
import { generateIssamResumePDF } from "../utils/generateResumePDF";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setToggle(false);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setToggle(false);
  };

  const handleDownloadCV = () => {
    try {
      // Generate the fresh, up-to-date, executive CV directly
      const doc = generateIssamResumePDF();
      doc.save("CV_Issam_Badaoui.pdf");
    } catch (error) {
      console.warn("Direct PDF generation fallback to static file:", error);
      // Fallback to updated static file with cache-busting timestamp
      const cvUrl = `./cvissam.pdf?v=${Date.now()}`;
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "CV_Issam_Badaoui.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      {/* Fixed navbar with highest z-index */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "backdrop-blur-xl bg-primary/95 border-b border-secondary/20 shadow-card py-2.5 sm:py-3" 
            : "bg-primary/80 backdrop-blur-md py-3 sm:py-4"
        }`}
      >
        {/* Animated top border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent pointer-events-none"
        />

        <div className="w-full px-3.5 sm:px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex justify-between items-center w-full">
            
            {/* Logo with developer photo avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer min-w-0"
              onClick={() => {
                setActive("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* Photo Avatar Logo */}
              <motion.div 
                className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#00BFFF]/70 shadow-[0_0_12px_rgba(0,191,255,0.4)] bg-black/60">
                  <img
                    src={issamLogo}
                    alt="Issam Badaoui"
                    onError={(e) => {
                      // Fallback gracefully to public image paths if bundle path fails
                      if (e.target.src !== `${window.location.origin}/issam_logo.jpg`) {
                        e.target.src = "/issam_logo.jpg";
                      }
                    }}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
              
              {/* Name with glow effect */}
              <div className="flex flex-col min-w-0">
                <h1 className="text-white font-bold text-sm sm:text-base md:text-xl tracking-wider drop-shadow-[0_0_10px_rgba(0,191,255,0.5)] truncate leading-tight">
                  Issam
                </h1>
                <p className="text-secondary text-[8.5px] sm:text-[10px] md:text-xs font-mono font-medium tracking-wider uppercase truncate leading-tight">
                  Full Stack Web Dev
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation - Only mounted when not mobile */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="hidden md:flex items-center gap-6"
              >
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActive(link.title);
                      scrollToSection(link.id);
                    }}
                    className="relative px-1 py-2"
                  >
                    {/* Active indicator */}
                    {active === link.title && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] rounded-full shadow-lg shadow-[#00BFFF]/50"
                      />
                    )}
                    
                    <span className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                      active === link.title
                        ? "text-white drop-shadow-[0_0_8px_rgba(0,191,255,0.8)]"
                        : "text-secondary hover:text-white hover:drop-shadow-[0_0_5px_rgba(0,191,255,0.5)]"
                    }`}>
                      {link.title}
                    </span>
                  </motion.button>
                ))}
                
                {/* Download CV Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold tracking-wider shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 border border-emerald-500/30 flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </motion.button>
              </motion.div>
            )}

            {/* Mobile Menu Toggle Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setToggle(!toggle)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:border-[#00BFFF]/40 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2 group touch-manipulation z-50"
            >
              {/* Animated hamburger icon */}
              <div className="relative w-4 h-3.5">
                <motion.span
                  animate={toggle ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 w-4 h-0.5 bg-white rounded-full group-hover:bg-[#00BFFF] transition-colors"
                />
                <motion.span
                  animate={toggle ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-1.5 left-0 w-4 h-0.5 bg-white rounded-full group-hover:bg-[#00BFFF] transition-colors"
                />
                <motion.span
                  animate={toggle ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute top-3 left-0 w-4 h-0.5 bg-white rounded-full group-hover:bg-[#00BFFF] transition-colors"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop & Drawer - Mounted outside nav container to guarantee full viewport overlay without clipping */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden flex flex-col justify-start pt-16 sm:pt-20 px-3.5 sm:px-4"
          onClick={() => setToggle(false)}
        >
          {/* Mobile Menu Content Panel */}
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="w-full max-w-sm mx-auto bg-black-100/98 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1 p-3 sm:p-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                    scrollToSection(link.id);
                  }}
                  className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-between touch-manipulation min-h-[46px] ${
                    active === link.title
                      ? "bg-gradient-to-r from-[#00BFFF]/25 to-[#0080FF]/15 text-white border border-[#00BFFF]/30"
                      : "text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="font-medium tracking-wide text-sm sm:text-base">{link.title}</span>
                  {active === link.title && (
                    <motion.div
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]"
                    />
                  )}
                </motion.button>
              ))}
              
              {/* Mobile Download CV Button */}
              <div className="pt-3 mt-2 border-t border-white/10">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setToggle(false);
                    handleDownloadCV();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-semibold text-sm sm:text-base tracking-wider shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 touch-manipulation min-h-[46px]"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;