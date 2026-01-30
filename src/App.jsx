import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Loading from "./components/loading.jsx"; // Uncommented import
import './assets';
import { useEffect, useRef, useState } from "react";

const App = () => {
  
  const footerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [webglAvailable, setWebglAvailable] = useState(true); // ADDED: WebGL check state

  
  useEffect(() => {
    // ADDED: Check WebGL availability first
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setWebglAvailable(!!gl);
      } catch (e) {
        setWebglAvailable(false);
      }
    };
    
    checkWebGL();

    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Reduced to 2 seconds for better UX

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all sections
    document.querySelectorAll('section, div[class*="relative"]').forEach((el) => {
      observer.observe(el);
    });

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
      .animate-in {
        animation: fadeIn 0.8s ease-out forwards;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  // Show loading screen
  if (isLoading) {
    return <Loading />;
  }

  // ADDED: Show fallback if WebGL is not available
  if (!webglAvailable) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#00BFFF', fontSize: '28px', marginBottom: '15px' }}>⚠️ WebGL Not Supported</h1>
          <p style={{ color: '#ccc', marginBottom: '10px' }}>
            Your device or browser doesn't support WebGL, which is required for 3D graphics.
          </p>
          <p style={{ color: '#999', fontSize: '14px' }}>
            Try updating your browser to the latest version or using a different device.
          </p>
        </div>
        <div style={{
          background: 'rgba(0, 191, 255, 0.1)',
          padding: '15px',
          borderRadius: '10px',
          border: '1px solid rgba(0, 191, 255, 0.3)',
          marginTop: '20px'
        }}>
          <p style={{ color: '#00BFFF', fontSize: '14px' }}>
            <strong>Quick fixes:</strong> Update Chrome/Firefox/Safari, enable hardware acceleration, or try on a different device
          </p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* Deep black space background */}
      <div className='relative z-0 bg-black'>
        
        {/* Fixed space background */}
        <div className="fixed inset-0 overflow-hidden bg-black z-0">
          
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
          <div className='relative min-h-screen'>
            {/* Simple black hole in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-black via-gray-900/30 to-black rounded-full blur-2xl" />
            
            {/* Rings around black hole */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full" />
            
            <div className="relative">
              <Contact />
              <StarsCanvas />
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
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00BFFF] via-cyan-500 to-blue-600 flex items-center justify-center shadow-xl shadow-[#00BFFF]/20">
                        <span className="text-white font-bold text-2xl">I</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-[#00BFFF]/30 animate-ping" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl">Issam</h3>
                      <div className="inline-flex items-center gap-2 mt-1 px-3 py-1 bg-gradient-to-r from-[#00BFFF]/10 to-cyan-500/10 rounded-full border border-[#00BFFF]/20">
                        <span className="w-2 h-2 bg-[#00BFFF] rounded-full animate-pulse" />
                        <span className="text-[#00BFFF] text-sm font-medium">Full Stack Dev</span>
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
                    Contact
                  </h4>
                  <div className="space-y-4">
                    <a
                      href="mailto:badaouiissam660@gmail.com"
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 p-3 hover:bg-gray-900/30 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00BFFF]/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-lg">✉️</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white">badaouiissam660@gmail.com</p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/issambd29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 p-3 hover:bg-gray-900/30 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00BFFF]/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-lg">💻</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">GitHub</p>
                        <p className="text-white">@issambd29</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-lg flex items-center gap-3">
                    <div className="w-6 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind', 'Three.js', 'Framer', 'Vite'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gradient-to-r from-gray-900/50 to-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700/50 hover:border-[#00BFFF]/30 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider with orbit animation */}
              <div className="relative my-12">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-3">
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 border-2 border-[#00BFFF]/30 rounded-full animate-ping" />
                    <div className="absolute inset-1 bg-gradient-to-r from-[#00BFFF] to-cyan-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Copyright */}
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150" />
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300" />
                    </div>
                    <span className="text-green-400 text-sm font-mono">PORTFOLIO_ACTIVE</span>
                  </div>
                  <p className="text-gray-400">
                    © {new Date().getFullYear()} Badaoui Issam Eddine 
                    <span className="text-gray-500 mx-2">•</span>
                    All rights reserved
                  </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3">
                  {[
                    { name: 'GitHub', icon: '💻', url: 'https://github.com/issambd29' },
                    { name: 'LinkedIn', icon: '💼', url: '#' },
                    { name: 'Twitter', icon: '🐦', url: '#' },
                    { name: 'Instagram', icon: '📸', url: '#' },
                    { name: 'WhatsApp', icon: '💬', url: '#' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00BFFF]/50 hover:scale-110 hover:shadow-lg hover:shadow-[#00BFFF]/10 transition-all duration-300 group"
                      title={social.name}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="group px-6 py-3 bg-gradient-to-r from-[#00BFFF]/10 to-cyan-500/10 border border-[#00BFFF]/30 text-[#00BFFF] rounded-full hover:from-[#00BFFF]/20 hover:to-cyan-500/20 hover:border-[#00BFFF] hover:shadow-lg hover:shadow-[#00BFFF]/20 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Let&apos;s Connect</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Back to top button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-[#00BFFF] to-cyan-500 flex items-center justify-center text-white shadow-2xl hover:scale-110 hover:shadow-[#00BFFF]/40 transition-all duration-300 z-50 group"
                aria-label="Back to top"
              >
                <span className="group-hover:-translate-y-1 transition-transform">↑</span>
              </button>

              {/* Footer note */}
              <div className="mt-10 pt-8 border-t border-gray-800/30 text-center">
                <p className="text-gray-500 text-sm">
                  Made using React & Tailwind CSS
                  <span className="text-gray-600 mx-2">•</span>
                  Optimized for performance
                  <span className="text-gray-600 mx-2">•</span>
                  Updated daily
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                  <span className="text-yellow-500/70 text-xs font-mono">
                    Last deployment: {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;