import { motion } from 'framer-motion';

type TimelineSectionProps = {
  phases: string[];
};

export const TimelineSection = ({ phases }: TimelineSectionProps) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {phases.map((phase, index) => (
      <motion.div
        key={phase}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative p-5 rounded-xl border border-border-neon/30 bg-secondary/30"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 rounded-full bg-neon shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Phase {index + 1}</p>
        </div>
        <p className="text-base font-medium text-foreground">{phase}</p>
      </motion.div>
    ))}
  </div>
);

export default TimelineSection;


