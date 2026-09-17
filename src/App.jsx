import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ErrorBoundary from "./components/ErrorBoundary";
import { SocialIconsBar } from "./components/SocialLinks";
import { Mail, Code2, Sparkles } from "lucide-react";
import { issamLogo } from "./assets";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const footerRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Add CSS animations for particles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-20px) translateX(10px); }
      }
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* Deep black space background */}
        <div className='relative z-0 bg-black min-h-screen text-white'>
          
          {/* Fixed space background */}
          <div className="fixed inset-0 overflow-hidden bg-black z-0 pointer-events-none">
          
          {/* Base star layers */}
          <div className="absolute inset-0">
            {/* Distant stars (small) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#fff1_1px,transparent_1px)] bg-[length:150px_150px]" />
            
            {/* Medium stars */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#fff2_0.5px,transparent_0.5px)] bg-[length:100px_100px]" />
            
            {/* Close stars (large) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#fff3_0.3px,transparent_0.3px)] bg-[length:50px_50px]" />
          </div>
          
          {/* Gaseous cloud (nebula) */}
          <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-gradient-to-r from-blue-900/10 to-purple-900/10 blur-3xl rounded-full opacity-30" />
          <div className="absolute bottom-40 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-900/5 to-indigo-900/5 blur-3xl rounded-full opacity-20" />
          
          {/* Shining stars */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_white] animate-pulse" />
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-[0_0_8px_1px_#93c5fd] animate-pulse" style={{animationDelay: '1000ms'}} />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_6px_1px_#67e8f9] animate-pulse" style={{animationDelay: '2000ms'}} />
          
          {/* Milky Way (galaxy) */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12" />
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transform -rotate-6" />
          </div>
          
          {/* Cosmic dust layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
          
          {/* Main moving stars component */}
          <StarsCanvas />
        </div>
        
        {/* App content */}
        <div className="relative z-10">
          {/* Main header section */}
          <div className='relative min-h-screen'>
            {/* Galaxy center effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-2xl rounded-full" />
            
            {/* Header content */}
            <div className="relative z-20">
              <Navbar />
              <Hero />
            </div>
            
            {/* Meteor-like separator line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>

          {/* Main content */}
          
          {/* About section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            <div className="relative">
              <About />
            </div>
          </div>

          {/* Experience section */}
          <div className="relative">
            {/* Planet in background */}
            <div className="absolute -right-20 top-1/3 w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-gray-600/5 rounded-full blur-xl" />
              <div className="absolute inset-10 bg-gradient-to-br from-gray-700/5 to-gray-500/3 rounded-full blur-lg" />
            </div>
            
            <div className="relative">
              <Experience />
            </div>
          </div>

          {/* Technologies section */}
          <div className="relative">
            {/* Star grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,white_1px,transparent_1px)] bg-[length:100px_100px]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent,white_1px,transparent_1px)] bg-[length:100px_100px]" />
            </div>
            
            <div className="relative">
              <Tech />
            </div>
          </div>

          {/* Works section */}
          <div className="relative">
            {/* Nebula in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10 blur-3xl rounded-full" />
            
            <div className="relative">
              <Works />
            </div>
          </div>

          {/* Testimonials section */}
          <div className="relative">
            {/* Scattered stars */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className={`absolute w-1 h-1 bg-white rounded-full opacity-${Math.random() > 0.5 ? '40' : '60'}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
            
            <div className="relative">
              <Feedbacks />
            </div>
          </div>

          {/* Contact section */}
          <div className='relative z-0 min-h-screen overflow-hidden'>
            <StarsCanvas />
            <div className='relative z-10'>
              <Contact />
            </div>
          </div>

          {/* Footer */}
          <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black pt-20 pb-10 overflow-hidden">
            {/* Animated background effects */}
            <div className="absolute inset-0">
              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,white_1px,transparent_1px)] bg-[length:100px_100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent,white_1px,transparent_1px)] bg-[length:100px_100px]" />
              </div>
              
              {/* Floating particles */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full particle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: Math.random() * 0.6 + 0.2,
                  }}
                />
              ))}
              
              {/* Nebula effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#00BFFF]/10 via-transparent to-transparent blur-3xl" />
              
              {/* Top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[#00BFFF] blur-sm" />
            </div>

            {/* Satellite indicators */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-mono">LIVE</span>
            </div>
            
            <div className="absolute top-6 right-6 flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Main content grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
                {/* Brand section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#00BFFF]/70 shadow-xl shadow-[#00BFFF]/20 bg-black/60">
                        <img
                          src={issamLogo}
                          alt="Issam Badaoui"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="absolute -inset-1.5 rounded-full border border-[#00BFFF]/30 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl">Issam Badaoui</h3>
                      <div className="inline-flex items-center gap-2 mt-1 px-3 py-1 bg-gradient-to-r from-[#00BFFF]/10 to-cyan-500/10 rounded-full border border-[#00BFFF]/20">
                        <span className="w-2 h-2 bg-[#00BFFF] rounded-full animate-pulse" />
                        <span className="text-[#00BFFF] text-sm font-medium">Full Stack Web Developer</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Building digital experiences that combine innovation with functionality. 
                    Passionate about creating solutions that make an impact.
                  </p>
                </div>

                {/* Quick links */}
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-lg flex items-center gap-3">
                    <div className="w-6 h-px bg-gradient-to-r from-[#00BFFF] to-cyan-500" />
                    Navigation
                  </h4>
                  <ul className="space-y-3">
                    {['Home', 'About', 'Work', 'Projects', 'Contact'].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
                        >
                          <span className="text-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                          <span>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact info */}
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-lg flex items-center gap-3">
                    <div className="w-6 h-px bg-gradient-to-r from-cyan-500 to-blue-500" />
                    Direct Contact
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="mailto:badaouiissam660@gmail.com"
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 p-2.5 hover:bg-gray-900/40 rounded-xl border border-transparent hover:border-[#00BFFF]/20"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/20 flex items-center justify-center group-hover:scale-105 transition-transform text-[#00BFFF]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400">Email Address</p>
                        <p className="text-white text-xs sm:text-sm font-medium truncate">badaouiissam660@gmail.com</p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/issambd29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 p-2.5 hover:bg-gray-900/40 rounded-xl border border-transparent hover:border-[#00BFFF]/20"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/20 flex items-center justify-center group-hover:scale-105 transition-transform text-[#00BFFF]">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400">GitHub Profile</p>
                        <p className="text-white text-xs sm:text-sm font-medium">@issambd29</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-lg flex items-center gap-3">
                    <div className="w-6 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
                    Production Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind CSS', 'Django', 'PostgreSQL', 'Three.js', 'Firebase', 'Vite'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1.5 bg-gradient-to-r from-gray-900/60 to-gray-800/60 text-gray-300 text-xs font-mono rounded-lg border border-white/10 hover:border-[#00BFFF]/40 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider with orbit animation */}
              <div className="relative my-10">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-3">
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 border-2 border-[#00BFFF]/30 rounded-full animate-ping" />
                    <div className="absolute inset-1 bg-gradient-to-r from-[#00BFFF] to-cyan-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom section with upgraded social icons bar */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Copyright */}
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-xs font-mono uppercase tracking-wider">AVAILABLE_FOR_NEW_PROJECTS</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Issam Badaoui
                    <span className="text-gray-600 mx-2">•</span>
                    Full-Stack Web Developer &amp; Software Engineer
                  </p>
                </div>

                {/* Upgraded Official Social Icons: GitHub, LinkedIn, Instagram, WhatsApp */}
                <div className="flex flex-col items-center lg:items-end gap-2">
                  <SocialIconsBar />
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="group px-6 py-2.5 bg-gradient-to-r from-[#00BFFF]/15 to-cyan-500/15 border border-[#00BFFF]/40 text-[#00BFFF] rounded-full hover:from-[#00BFFF]/30 hover:to-cyan-500/30 hover:border-[#00BFFF] hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all duration-300 flex items-center gap-2 text-sm font-medium"
                >
                  <span>Start a Conversation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Back to top button - only shown when scrolled down */}
              {showBackToTop && (
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#00BFFF] to-cyan-500 flex items-center justify-center text-black font-bold shadow-2xl hover:scale-110 active:scale-95 hover:shadow-[0_0_25px_#00BFFF] transition-all duration-300 z-50 group touch-manipulation"
                  aria-label="Back to top"
                >
                  <span className="group-hover:-translate-y-0.5 transition-transform text-base sm:text-lg">↑</span>
                </button>
              )}

              {/* Footer note */}
              <div className="mt-10 pt-6 border-t border-gray-800/30 text-center">
                <p className="text-gray-500 text-xs font-mono">
                  Engineered with React, Three.js &amp; Tailwind CSS
                  <span className="text-gray-700 mx-2">•</span>
                  Enterprise Grade Architecture
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;