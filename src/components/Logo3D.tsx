import { motion } from 'framer-motion';

const Logo3D = () => {
  return (
    <div className="relative w-24 h-24 mx-auto mb-8">
      <motion.div
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 glass-card rounded-lg flex items-center justify-center border-2 border-neon/30"
          style={{
            transform: 'translateZ(12px)',
          }}
        >
          <span className="text-2xl font-bold gradient-premium bg-clip-text text-transparent">
            RYT
          </span>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 glass-card rounded-lg flex items-center justify-center border-2 border-accent/30"
          style={{
            transform: 'translateZ(-12px) rotateY(180deg)',
          }}
        >
          <span className="text-2xl font-bold gradient-premium bg-clip-text text-transparent">
            RYT
          </span>
        </div>

        {/* Left face */}
        <div
          className="absolute inset-0 glass-card rounded-lg border-2 border-primary/30"
          style={{
            transform: 'rotateY(-90deg) translateZ(12px)',
          }}
        />

        {/* Right face */}
        <div
          className="absolute inset-0 glass-card rounded-lg border-2 border-primary/30"
          style={{
            transform: 'rotateY(90deg) translateZ(12px)',
          }}
        />

        {/* Top face */}
        <div
          className="absolute inset-0 glass-card rounded-lg border-2 border-accent/30"
          style={{
            transform: 'rotateX(90deg) translateZ(12px)',
          }}
        />

        {/* Bottom face */}
        <div
          className="absolute inset-0 glass-card rounded-lg border-2 border-accent/30"
          style={{
            transform: 'rotateX(-90deg) translateZ(12px)',
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-neon/20 blur-xl"
        />
      </div>
    </div>
  );
};

export default Logo3D;
