import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type CaseStudy = {
  slug: string;
  company: string;
  challenge: string;
  result: string;
};

type RelatedCaseStudiesProps = {
  studies: CaseStudy[];
  title?: string;
};

export const RelatedCaseStudies = ({ 
  studies, 
  title = "Related Case Studies" 
}: RelatedCaseStudiesProps) => {
  const navigate = useNavigate();

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 rounded-xl h-full hover:border-border-neon/50 transition-all duration-300 flex flex-col group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors">
                    {study.company}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-1">
                    <strong className="text-foreground">Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Result:</strong> {study.result}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full justify-between hover:bg-neon/10 hover:text-neon transition-all"
                    onClick={() => navigate(`/case-studies/${study.slug}`)}
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

