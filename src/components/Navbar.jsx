import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, issamLogo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    // Use the correct path to your CV file in the public folder
    const cvUrl = "./cvissam.pdf"; // Make sure this file exists in public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Badaoui_Issam.pdf'; // The filename users will see
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Fixed navbar with highest z-index */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-x-clip ${
          scrolled 
            ? "backdrop-blur-xl bg-primary/90 border-b border-secondary/20 shadow-card py-3" 
            : "bg-primary/60 backdrop-blur-md py-4"
        }`}
      >
        {/* Animated top border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent pointer-events-none"
        />

        <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
          <div className="flex justify-between items-center">
            
            {/* Logo with developer photo avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => {
                setActive("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* Photo Avatar Logo */}
              <motion.div 
                className="relative w-11 h-11"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00BFFF]/70 shadow-[0_0_12px_rgba(0,191,255,0.4)] bg-black/60">
                  <img
                    src={issamLogo}
                    alt="Issam Badaoui"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
              
              {/* Name with glow effect */}
              <div className="flex flex-col">
                <h1 className="text-white font-bold text-lg sm:text-xl tracking-wider drop-shadow-[0_0_10px_rgba(0,191,255,0.5)]">
                  Issam
                </h1>
                <p className="text-secondary text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase">
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

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setToggle(!toggle)}
              className="md:hidden w-12 h-12 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:border-[#00BFFF]/40 flex items-center justify-center transition-all duration-300 group"
            >
              {/* Animated hamburger icon */}
              <div className="relative w-6 h-5">
                <motion.span
                  animate={toggle ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 w-6 h-0.5 bg-white rounded-full group-hover:bg-[#00BFFF] transition-colors"
                />
                <motion.span
                  animate={toggle ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-2 left-0 w-6 h-0.5 bg-white rounded-full group-hover:bg-[#00BFFF] transition-colors"
                />
                <motion.span
                  animate={toggle ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="absolute top-4 left-0 w-6 h-0.5 bg-white rounded-full group-hover:bg-[#00BFFF] transition-colors"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/90 backdrop-blur-md z-40 md:hidden"
            onClick={() => setToggle(false)}
          >
            {/* Mobile Menu Content */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute top-20 left-4 right-4 bg-black-100/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-card overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                      scrollToSection(link.id);
                    }}
                    className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 touch-manipulation min-h-[48px] ${
                      active === link.title
                        ? "bg-gradient-to-r from-[#00BFFF]/30 to-transparent text-white"
                        : "text-secondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {active === link.title && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-lg shadow-[#00BFFF]/60"
                      />
                    )}
                    <span className="font-medium tracking-wider">{link.title}</span>
                  </motion.button>
                ))}
                
                {/* Mobile Download CV Button */}
                <div className="px-6 pt-4 mt-2 border-t border-white/10">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setToggle(false);
                      handleDownloadCV();
                    }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold tracking-wider shadow-lg shadow-emerald-500/40 flex items-center justify-center gap-2 touch-manipulation min-h-[48px]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download CV</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;