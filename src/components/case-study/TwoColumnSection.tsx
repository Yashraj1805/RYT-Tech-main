import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type TwoColumnSectionProps = {
  heading: string;
  text?: string;
  rightSlot?: ReactNode;
};

export const TwoColumnSection = ({ heading, text, rightSlot }: TwoColumnSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-start"
  >
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.2em] text-neon/80">Section</p>
      <h3 className="text-2xl font-semibold text-foreground">{heading}</h3>
    </div>
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
      {text && <p>{text}</p>}
      {rightSlot}
    </div>
  </motion.section>
);

export default TwoColumnSection;


