import { useEffect, useState } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing quantum systems...');
  const [subText, setSubText] = useState('Establishing secure connection...');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const loadingMessages = [
      { main: 'Booting stellar engines...', sub: 'Warming up plasma cores...' },
      { main: 'Calibrating navigation systems...', sub: 'Syncing with galactic network...' },
      { main: 'Loading nebula effects...', sub: 'Generating particle clouds...' },
      { main: 'Initializing wormhole protocols...', sub: 'Establishing subspace link...' },
      { main: 'Mapping constellations...', sub: 'Charting cosmic pathways...' },
      { main: 'Powering up quantum computer...', sub: 'Calculating orbital trajectories...' },
      { main: 'Warming up laser matrix...', sub: 'Calibrating photon emitters...' },
      { main: 'Final system checks...', sub: 'Preparing for launch sequence...' },
      { main: 'All systems ready!', sub: 'Welcome to the cosmos...' }
    ];

    let currentIndex = 0;
    const messageInterval = setInterval(() => {
      if (currentIndex < loadingMessages.length) {
        setLoadingText(loadingMessages[currentIndex].main);
        setSubText(loadingMessages[currentIndex].sub);
        currentIndex++;
      }
    }, 500);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowWelcome(true), 300);
          setTimeout(() => {
            const event = new CustomEvent('loadingComplete');
            window.dispatchEvent(event);
          }, 1500);
          return 100;
        }
        
        let increment;
        if (prev < 30) increment = 1.5;
        else if (prev < 70) increment = 1;
        else if (prev < 90) increment = 0.5;
        else increment = 0.2;
        
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Far Stars */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff08_1px,transparent_1px)] bg-[length:150px_150px] animate-pulse" />
        
        {/* Medium Stars */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff0c_0.8px,transparent_0.8px)] bg-[length:100px_100px] animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Close Stars */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff10_0.5px,transparent_0.5px)] bg-[length:50px_50px] animate-pulse" style={{animationDelay: '2s'}} />
        
        {/* Nebula Effects */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[400px] bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-cyan-900/15 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-indigo-900/15 via-transparent to-cyan-900/10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Central Loading Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Orbiting Satellite System */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-32 h-32">
            {/* Main Satellite */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Outer Ring */}
                <div className="absolute -inset-4 border-2 border-cyan-500/30 rounded-full animate-ping" />
                
                {/* Middle Ring */}
                <div className="absolute -inset-2 border border-blue-500/20 rounded-full galaxy-rotate" style={{animationDuration: '15s'}} />
                
                {/* Satellite Body */}
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg rotate-45 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-cyan-400 rounded-t-lg" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-blue-400 rounded-b-lg" />
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                </div>
                
                {/* Solar Panels */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-12 bg-gradient-to-r from-cyan-400/80 to-cyan-300/60 rounded-lg">
                  <div className="absolute inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-12 bg-gradient-to-l from-blue-400/80 to-blue-300/60 rounded-lg">
                  <div className="absolute inset-1 bg-gradient-to-l from-transparent via-white/30 to-transparent animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
            </div>

            {/* Orbiting Planets */}
            {[
              { size: 'w-4 h-4', color: 'from-orange-500 to-yellow-400', delay: '0s', duration: '8s' },
              { size: 'w-6 h-6', color: 'from-blue-400 to-cyan-300', delay: '1s', duration: '12s' },
              { size: 'w-3 h-3', color: 'from-purple-500 to-pink-400', delay: '2s', duration: '10s' },
            ].map((planet, idx) => (
              <div
                key={idx}
                className={`absolute ${planet.size} bg-gradient-to-br ${planet.color} rounded-full galaxy-rotate shadow-lg`}
                style={{
                  animationDuration: planet.duration,
                  animationDelay: planet.delay,
                  top: '0px',
                  left: '50%',
                  transformOrigin: 'center 80px',
                }}
              >
                <div className="absolute inset-0.5 bg-gradient-to-t from-white/20 to-transparent rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-80 w-full max-w-3xl px-6">
          {/* Progress Bar Container */}
          <div className="mb-10">
            {/* Progress Labels */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-mono tracking-wider glitch-text">SYSTEM_LOAD</span>
                </div>
                <div className="w-px h-4 bg-gray-700" />
                <span className="text-gray-400 text-sm font-mono">
                  ISSAM_PORTFOLIO_V2.0
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-xl font-mono font-bold">
                  {Math.round(progress)}%
                </span>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2.5 bg-gray-900/80 rounded-full overflow-hidden border border-gray-800/50 backdrop-blur-sm">
              {/* Progress Fill with Gradient */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-200 ease-out shadow-lg shadow-cyan-500/30"
                style={{ width: `${progress}%` }}
              />
              
              {/* Animated Scan Line */}
              <div
                className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{
                  animation: 'scanline 1.5s ease-in-out infinite',
                  left: `${progress - 15}%`,
                }}
              />
              
              {/* Progress Nodes */}
              {[25, 50, 75, 100].map((node) => (
                <div
                  key={node}
                  className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                    progress >= node ? 'bg-white shadow-[0_0_8px_white]' : 'bg-gray-700'
                  }`}
                  style={{ left: `${node}%` }}
                />
              ))}
            </div>
          </div>

          {/* Loading Messages */}
          <div className="mb-8 text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white typewriter">
              {loadingText}
            </h1>
            <p className="text-gray-300 text-lg font-light">
              {subText}
            </p>
          </div>

          {/* System Status Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { 
                label: 'GRAPHICS_CORE', 
                status: progress > 20 ? 'ACTIVE' : 'BOOTING', 
                color: progress > 20 ? 'text-green-400' : 'text-yellow-400',
                icon: '🖥️',
                progress: Math.min(progress * 1.2, 100)
              },
              { 
                label: 'NETWORK_GRID', 
                status: progress > 40 ? 'SYNCED' : 'CONNECTING', 
                color: progress > 40 ? 'text-green-400' : 'text-yellow-400',
                icon: '🌐',
                progress: Math.min(progress * 1.1, 100)
              },
              { 
                label: 'DATA_STREAM', 
                status: progress > 60 ? 'FLOWING' : 'BUFFERING', 
                color: progress > 60 ? 'text-green-400' : 'text-yellow-400',
                icon: '📡',
                progress: Math.min(progress * 0.9, 100)
              },
              { 
                label: 'SECURITY_PROTOCOL', 
                status: progress > 80 ? 'SECURE' : 'SCANNING', 
                color: progress > 80 ? 'text-green-400' : 'text-yellow-400',
                icon: '🔒',
                progress: Math.min(progress * 0.8, 100)
              },
            ].map((system, idx) => (
              <div
                key={idx}
                className="group relative p-4 rounded-xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-xs font-mono">{system.label}</span>
                    <div className={`w-2 h-2 rounded-full ${system.color.replace('text-', 'bg-')} animate-pulse`} />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{system.icon}</span>
                    <span className={`text-sm font-mono ${system.color}`}>
                      {system.status}
                    </span>
                  </div>
                  
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${system.color === 'text-green-400' ? 'from-green-500 to-emerald-400' : 'from-yellow-500 to-amber-400'}`}
                      style={{ width: `${system.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Output */}
          <div className="bg-black/60 border border-gray-800/50 rounded-xl p-5 font-mono text-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-gray-400 text-xs">terminal — bash — 80×24</span>
            </div>
            
            <div className="space-y-1.5">
              <div className="text-cyan-400">
                <span className="text-green-400">issam@cosmic</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/portfolio</span>
                <span className="text-white">$</span>
                <span className="ml-2">./init.sh --theme=space --effects=all</span>
              </div>
              
              <div className="text-gray-400">
                <span className="text-green-400">[✓]</span> Loading configuration... {progress > 10 && <span className="text-green-400">DONE</span>}
              </div>
              
              <div className="text-gray-400">
                <span className="text-green-400">[✓]</span> Initializing Three.js canvas... {progress > 30 && <span className="text-green-400">DONE</span>}
              </div>
              
              <div className="text-gray-400">
                <span className={progress > 50 ? 'text-green-400' : 'text-yellow-400'}>
                  [{progress > 50 ? '✓' : '⟳'}]
                </span>
                Loading particle systems... {progress > 50 ? <span className="text-green-400">DONE</span> : <span className="text-yellow-400">LOADING</span>}
              </div>
              
              <div className="text-gray-400">
                <span className={progress > 70 ? 'text-green-400' : 'text-yellow-400'}>
                  [{progress > 70 ? '✓' : '⟳'}]
                </span>
                Compiling shaders... {progress > 70 ? <span className="text-green-400">DONE</span> : <span className="text-yellow-400">COMPILING</span>}
              </div>
              
              <div className="text-gray-400">
                <span className={progress > 90 ? 'text-green-400' : 'text-yellow-400'}>
                  [{progress > 90 ? '✓' : '⟳'}]
                </span>
                Finalizing experience... {progress > 90 ? <span className="text-green-400">READY</span> : <span className="text-yellow-400">PROCESSING</span>}
              </div>
              
              {progress >= 100 && (
                <div className="text-green-400 mt-3">
                  <span className="font-bold">🎯 System Ready!</span> Launching in 3... 2... 1...
                </div>
              )}
            </div>
            
            {/* Cursor Blink */}
            <div className="inline-block w-2 h-4 bg-cyan-500 ml-1 animate-pulse" />
          </div>

          {/* Loading Animation Dots */}
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-bounce"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.8s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message Animation */}
      {showWelcome && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 animate-fadeIn">
          <div className="text-center space-y-8">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 shimmer-text animate-pulse">
                WELCOME
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl rounded-full" />
            </div>
            
            <p className="text-2xl text-gray-300 font-light">
              Entering Issam's Cosmic Portfolio
            </p>
            
            <div className="flex justify-center gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-ping"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-800/50 bg-gray-900/40 backdrop-blur-sm py-3 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-mono">LIVE_FEED</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <span className="text-gray-400">Session: ISSAM_SPACE_V2</span>
            <div className="w-px h-4 bg-gray-700" />
            <span className="text-cyan-400 font-mono">CPU: {Math.round(progress * 0.8)}%</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-400 font-mono">NET: 1.2Gb/s</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <span className="text-gray-400 font-mono">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;