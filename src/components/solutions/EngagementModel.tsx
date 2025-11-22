import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, FlaskConical, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type EngagementStep = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  duration: string;
  features: string[];
};

type EngagementModelProps = {
  steps: EngagementStep[];
  title?: string;
  subtitle?: string;
};

export const EngagementModel = ({ 
  steps, 
  title = "Engagement Models",
  subtitle = "Choose the right path for your enterprise"
}: EngagementModelProps) => {
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card p-6 rounded-xl h-full hover:border-border-neon/50 transition-all duration-300 flex flex-col">
                    <div className="p-3 rounded-lg bg-neon/10 w-fit mb-4">
                      <IconComponent className="w-6 h-6 text-neon" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <p className="text-xs font-semibold text-neon mb-4">{step.duration}</p>
                    <ul className="space-y-2 flex-1 mb-4">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-neon mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full border-neon/30 hover:bg-neon/10 hover:border-neon/50"
                      onClick={() => navigate('/contact')}
                      aria-label="Go to contact form"
                    >
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

