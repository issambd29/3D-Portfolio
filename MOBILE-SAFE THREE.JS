import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const MobileSafeCanvas = ({ children, fallback }) => {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const [isHighPerfDevice, setIsHighPerfDevice] = useState(false);

  useEffect(() => {
    // Detect WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setIsWebGLAvailable(false);
      return;
    }

    // Detect mobile/low-end devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowEnd = (navigator.deviceMemory || 4) < 4; // Less than 4GB RAM
    const gpuTier = detectGPUTier(); // You can use 'detect-gpu' package
    
    setIsHighPerfDevice(!isMobile && !isLowEnd && gpuTier.tier > 1);
  }, []);

  // Fallback for WebGL unavailable
  if (!isWebGLAvailable) {
    return fallback || (
      <div className="webgl-fallback">
        <img src="/static-model.jpg" alt="3D Model Fallback" />
      </div>
    );
  }

  return (
    <Canvas
      dpr={Math.min(window.devicePixelRatio, isHighPerfDevice ? 2 : 1)} // CRITICAL
      gl={{
        alpha: true,
        antialias: isHighPerfDevice, // Disable on mobile
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: true, // Auto-fallback
        preserveDrawingBuffer: false, // Save memory
      }}
      onCreated={({ gl }) => {
        // Handle WebGL context loss
        gl.canvas.addEventListener('webglcontextlost', (event) => {
          event.preventDefault();
          console.warn('WebGL context lost - switching to fallback');
          setIsWebGLAvailable(false);
        });
        
        // Reduce memory usage
        gl.autoClear = false;
        gl.setClearColor(0x000000, 0);
      }}
      style={{
        touchAction: 'none', // Prevent browser gestures
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      {children}
    </Canvas>
  );
};