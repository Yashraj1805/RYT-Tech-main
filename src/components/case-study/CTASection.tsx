import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type CTASectionProps = {
  title: string;
  subtitle: string;
};

export const CTASection = ({ title, subtitle }: CTASectionProps) => {
  const navigate = useNavigate();
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-gradient-to-r from-neon/20 via-primary/20 to-secondary/30 p-10 md:p-14 text-center border border-border-neon/40"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-neon">Next Project</p>
      <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
      <Button 
        className="mt-8 px-8 py-6 text-base hover:scale-[1.02] transition-transform"
        onClick={() => navigate('/contact')}
        aria-label="Go to contact form"
      >
        Start a Strategy Call
      </Button>
    </motion.section>
  );
};

export default CTASection;


