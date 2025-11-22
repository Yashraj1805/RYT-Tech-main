import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CaseStudyStat } from './types';

type NumberStatsProps = {
  stats: CaseStudyStat[];
};

const AnimatedValue = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayValue(parseFloat(v.toFixed(value % 1 === 0 ? 0 : 1))),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {displayValue}
    </span>
  );
};

export const NumberStats = ({ stats }: NumberStatsProps) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-6"
  >
    {stats.map((stat) => (
      <div key={stat.label} className="glass-card p-6 rounded-xl border border-border-neon/30">
        <AnimatedValue value={stat.value} />
        {stat.suffix && <span className="text-3xl font-bold text-foreground">{stat.suffix}</span>}
        <p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">{stat.label}</p>
      </div>
    ))}
  </motion.section>
);

export default NumberStats;


