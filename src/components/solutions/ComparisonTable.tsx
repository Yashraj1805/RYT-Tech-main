import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

type ComparisonRow = {
  feature: string;
  ryt: boolean | string;
  alternatives: boolean | string;
  diy: boolean | string;
};

type ComparisonTableProps = {
  rows: ComparisonRow[];
  title?: string;
};

export const ComparisonTable = ({ rows, title = "Why Choose RYT TechCorp" }: ComparisonTableProps) => {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-neon mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
      );
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {title}
          </h2>
          
          <Card className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-4 font-semibold text-neon">RYT TechCorp</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">Alternatives</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">DIY</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-border/30 hover:bg-secondary/30 transition-colors"
                    >
                      <td className="p-4 font-medium text-foreground">{row.feature}</td>
                      <td className="p-4 text-center">{renderValue(row.ryt)}</td>
                      <td className="p-4 text-center">{renderValue(row.alternatives)}</td>
                      <td className="p-4 text-center">{renderValue(row.diy)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

