import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

type Phase = {
  title: string;
  description: string;
};

type SolutionTimelineProps = {
  phases: Phase[];
};

export const SolutionTimeline = ({ phases }: SolutionTimelineProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our
            <span className="gradient-premium bg-clip-text text-transparent"> Delivery Process</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon/30 via-neon/50 to-neon/30 hidden md:block" />
            
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-neon/10 border-2 border-neon/30 flex items-center justify-center group">
                      <CheckCircle2 className="w-8 h-8 text-neon transition-transform duration-300 group-hover:scale-110" />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                        className="absolute inset-0 rounded-full bg-neon/20 blur-xl"
                      />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon animate-pulse" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="glass-card p-6 rounded-xl hover:border-border-neon/50 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-neon">Phase {index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

