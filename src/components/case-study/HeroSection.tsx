import { motion } from 'framer-motion';

type HeroSectionProps = {
  title: string;
  subtitle: string;
};

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = ({ title, subtitle }: HeroSectionProps) => (
  <motion.section
    initial="hidden"
    animate="visible"
    variants={container}
    className="text-center space-y-6"
  >
    <motion.p variants={item} className="text-sm uppercase tracking-[0.4em] text-neon">
      Case Study
    </motion.p>
    <motion.h1 variants={item} className="text-3xl md:text-5xl font-bold text-foreground">
      {title}
    </motion.h1>
    <motion.h2 variants={item} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-normal">
      {subtitle}
    </motion.h2>
  </motion.section>
);

export default HeroSection;


