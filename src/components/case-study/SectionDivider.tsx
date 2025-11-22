import { motion } from 'framer-motion';

export const SectionDivider = () => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="h-px w-full bg-gradient-to-r from-transparent via-neon/60 to-transparent"
  />
);

export default SectionDivider;


