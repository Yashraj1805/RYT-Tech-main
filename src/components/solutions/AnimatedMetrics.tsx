import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export type Metric = {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
};

type AnimatedMetricsProps = {
  metrics: Metric[];
};

const AnimatedValue = ({ value, suffix }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayValue(parseFloat(v.toFixed(value % 1 === 0 ? 0 : 1))),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-1">
      <span className="text-4xl md:text-5xl font-bold text-foreground">{displayValue}</span>
      {suffix && <span className="text-2xl md:text-3xl font-bold text-foreground">{suffix}</span>}
    </span>
  );
};

export const AnimatedMetrics = ({ metrics }: AnimatedMetricsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-6"
  >
    {metrics.map((metric, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card p-6 rounded-xl border border-border-neon/30 text-center hover:border-border-neon/50 transition-all duration-300"
      >
        <AnimatedValue value={metric.value} suffix={metric.suffix} />
        <p className="mt-2 text-sm font-semibold text-foreground">{metric.label}</p>
        {metric.description && (
          <p className="mt-1 text-xs text-muted-foreground">{metric.description}</p>
        )}
      </motion.div>
    ))}
  </motion.div>
);

