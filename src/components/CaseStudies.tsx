import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.2);
  const navigate = useNavigate();

  const studies = [
    {
      company: 'HumotionAI',
      industry: 'Artificial Intelligence & Emotional Intelligence',
      challenge: 'Needed a full website to explain EI tech, voice interactions, and emotion engine value.',
      solution: 'RYT TechCorp built end-to-end pages covering EI engine, demos, enterprise modules, and compliance.',
      results: ['3x improvement in user engagement', 'Complete EI-focused brand identity established', 'Faster onboarding through clear product communication'],
      icon: Building2,
      slug: 'humotionai',
    },
    {
      company: 'SochBoxAI',
      industry: 'AI for Social Media Creators',
      challenge: 'Creators struggled with leaks, asset misuse, slow approvals, and disjointed collaboration.',
      solution: 'Secured AI workflow website with encrypted media hubs, automation flows, and branded collaboration modules.',
      results: ['99.7% reduction in unauthorized access', '70% faster content approvals', 'Zero content leaks across creator teams'],
      icon: Shield,
      slug: 'sochboxai',
    },
    {
      company: 'Expense Tracker',
      industry: 'Finance & Banking',
      challenge: 'Users lacked visibility into spending, fraud indicators, and sustainable money habits.',
      solution: 'Delivered an AI-driven expense site with automated categorization, fraud alerts, and insight-rich UI flows.',
      results: ['32% better savings by users', '10M+ secure monthly transactions handled', 'Zero fraudulent withdrawals'],
      icon: TrendingUp,
      slug: 'expensetracker',
    },
  ];

  const scrollToHero = () => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Proven
            <span className="gradient-premium bg-clip-text text-transparent"> Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world results from enterprises that trust RYT TechCorp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl hover:border-border-neon/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon/10 to-transparent rounded-full blur-2xl" />

              {/* ICON + COMPANY NAME INLINE */}
              <div className="flex items-center gap-4 mb-4">
                <study.icon className="w-12 h-12 text-neon" />
                <h3 className="text-2xl font-bold">{study.company}</h3>
              </div>
              <p className="text-accent text-sm mb-6">{study.industry}</p>

              {/* CHALLENGE + SOLUTION */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Challenge</h4>
                  <p className="text-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Solution</h4>
                  <button
                    onClick={scrollToHero}
                    className="text-foreground text-left p-0 m-0 inline-block w-full text-sm hover:underline hover:text-neon transition-colors cursor-pointer"
                    aria-label={`View solution details for ${study.company}`}
                  >
                    {study.solution}
                  </button>
                </div>
              </div>

              {/* RESULTS + CTA */}
              <div className="border-t border-border-neon/30 pt-6">
                <h4 className="text-sm font-semibold mb-3">Results</h4>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon mt-2 mr-2 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:bg-neon/10 hover:text-neon transition-all"
                  onClick={() => navigate(`/case-studies/${study.slug}`)}
                >
                  Read Full Case Study →
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
