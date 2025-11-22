import { motion } from 'framer-motion';

type TechStackGridProps = {
  items: string[];
};

export const TechStackGrid = ({ items }: TechStackGridProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-2 md:grid-cols-4 gap-4"
  >
    {items.map((item) => (
      <div
        key={item}
        className="rounded-full border border-border-neon/40 bg-secondary/40 px-4 py-2 text-center text-sm text-foreground hover:border-neon/60 transition-colors"
      >
        {item}
      </div>
    ))}
  </motion.div>
);

export default TechStackGrid;


