import { useEffect, useState } from 'react';
import { useMousePosition } from '@/hooks/use-mouse-position';
import { useScrollProgress } from '@/hooks/use-scroll-trigger';

const AmbientLight = () => {
  const mousePosition = useMousePosition();
  const scrollProgress = useScrollProgress();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mouseX = (mousePosition.x / windowSize.width) * 100;
  const mouseY = (mousePosition.y / windowSize.height) * 100;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cursor-following ambient light */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-10 transition-all duration-300"
        style={{
          left: `${mouseX}%`,
          top: `${mouseY}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(var(--neon)) 0%, transparent 70%)',
        }}
      />

      {/* Scroll-reactive gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(${scrollProgress * 1.8}deg, 
            hsl(var(--primary) / ${0.02 + scrollProgress * 0.0005}) 0%, 
            hsl(var(--accent) / ${0.02 + scrollProgress * 0.0005}) 50%, 
            hsl(var(--neon) / ${0.02 + scrollProgress * 0.0005}) 100%)`,
        }}
      />

      {/* Static ambient corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>
  );
};

export default AmbientLight;
