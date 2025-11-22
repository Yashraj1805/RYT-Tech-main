import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, TrendingUp } from 'lucide-react';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';

const KPICounters = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.3);

  const kpis = [
  { icon: Shield, label: 'SOC v1 → Feb 2026', color: 'neon' },
  { icon: Zap, label: 'Dev Pipeline v1 → Feb 2026', color: 'accent' },
  { icon: Users, label: '5 Cyber Clients → Mar 2026', color: 'primary' },
  { icon: TrendingUp, label: '5 Web Projects Live → Jan 2026', color: 'neon' },
];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            2026 Early Stage Roadmap — 
            <span className="gradient-premium bg-clip-text text-transparent"> Building What's Next</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <KPICard
              key={index}
              {...kpi}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const KPICard = ({
  icon: Icon,
  label,
  color,
  isVisible,
  delay,
}: {
  icon: any;
  label: string;
  color: string;
  isVisible: boolean;
  delay: number;
}) => {
  // Get color-specific CSS variable and gradient
  const getColorVariable = (colorName: string) => {
    switch (colorName) {
      case 'neon': return '--neon';
      case 'accent': return '--accent';
      case 'primary': return '--primary';
      default: return '--neon';
    }
  };

  const getGradientTint = (colorName: string) => {
    switch (colorName) {
      case 'neon': return 'linear-gradient(135deg, hsl(180 85% 58% / 0.04) 0%, transparent 100%)';
      case 'accent': return 'linear-gradient(135deg, hsl(270 75% 62% / 0.04) 0%, transparent 100%)';
      case 'primary': return 'linear-gradient(135deg, hsl(220 80% 58% / 0.04) 0%, transparent 100%)';
      default: return 'linear-gradient(135deg, hsl(180 85% 58% / 0.04) 0%, transparent 100%)';
    }
  };

  const colorVar = getColorVariable(color);

  // Parse dates from label and create animated date components
  const renderAnimatedLabel = (text: string) => {
    // Match dates like "Feb 2025", "Mar 2025", "Apr 2025"
    const dateRegex = /(\w{3})\s+(\d{4})/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = dateRegex.exec(text)) !== null) {
      // Add text before the date
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${key++}`}>{text.substring(lastIndex, match.index)}</span>
        );
      }

      const month = match[1];
      const year = match[2];
      const dateKey = `date-${key++}`;

      // Add animated date
      const dateDelay = delay + 0.3;
      const monthDelay = dateDelay;
      const yearDelay = dateDelay + 0.15;
      const glowDelay = yearDelay + 0.3;

      parts.push(
        <span key={dateKey} className="inline-block relative px-1">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: monthDelay, ease: "easeOut" }}
            className="inline-block"
          >
            {month}
          </motion.span>
          {' '}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: yearDelay, ease: "easeOut" }}
            className="inline-block"
          >
            {year}
          </motion.span>
          {/* Initial glow on visibility */}
          <motion.span
            initial={{ opacity: 0, boxShadow: `0 0 0px hsl(var(${colorVar}) / 0)` }}
            animate={isVisible ? {
              opacity: [0, 1, 0],
              boxShadow: [
                `0 0 0px hsl(var(${colorVar}) / 0)`,
                `0 0 15px hsl(var(${colorVar}) / 0.6)`,
                `0 0 0px hsl(var(${colorVar}) / 0)`
              ]
            } : { opacity: 0, boxShadow: `0 0 0px hsl(var(${colorVar}) / 0)` }}
            transition={{ 
              duration: 0.5, 
              delay: glowDelay,
              times: [0, 0.5, 1],
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded pointer-events-none"
            style={{ 
              filter: 'blur(3px)',
              margin: '-3px'
            }}
          />
          {/* Hover glow for date - triggers on card hover */}
          <span
            className="absolute inset-0 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
              boxShadow: `0 0 12px hsl(var(${colorVar}) / 0.4)`,
              filter: 'blur(4px)',
              margin: '-2px'
            }}
          />
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${key++}`}>{text.substring(lastIndex)}</span>
      );
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 rounded-xl hover:border-border-neon/50 transition-all duration-300 group relative overflow-hidden"
      style={{
        background: `${getGradientTint(color)}, hsl(var(--glass-bg))`,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      whileTap={{ y: -2 }}
    >
      {/* Hover shadow glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 8px 24px hsl(var(${colorVar}) / 0.15)`,
        }}
      />

      {/* Subtle background brightness on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, hsl(var(${colorVar}) / 0.03) 0%, transparent 100%)`,
        }}
      />

      <div
        className={`w-16 h-16 rounded-full bg-${color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}
      >
        <Icon 
          className={`w-8 h-8 text-${color} transition-all duration-300 group-hover:brightness-110`}
        />
        {/* Icon glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 12px hsl(var(${colorVar}) / 0.5)`,
            filter: 'blur(5px)',
          }}
        />
      </div>

      <div className="text-[15px] font-semibold text-center relative">{renderAnimatedLabel(label)}</div>
    </motion.div>
  );
};


export default KPICounters;