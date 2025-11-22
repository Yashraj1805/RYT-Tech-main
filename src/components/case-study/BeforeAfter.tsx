import { motion } from 'framer-motion';

type BeforeAfterProps = {
  beforeList: string[];
  afterList: string[];
};

export const BeforeAfter = ({ beforeList, afterList }: BeforeAfterProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 rounded-xl border border-border-neon/30"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Before RYT</p>
      <ul className="space-y-3 text-muted-foreground">
        {beforeList.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-neon">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 rounded-xl border border-neon/40 bg-neon/5"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-neon mb-4">After RYT</p>
      <ul className="space-y-3 text-foreground">
        {afterList.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-neon">+</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

export default BeforeAfter;


