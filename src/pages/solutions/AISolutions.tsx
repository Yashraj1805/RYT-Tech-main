import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, Network, MessageSquare, BarChart3, Heart, TrendingUp, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import SEO from '@/components/SEO';
import {
  AnimatedMetrics,
  SolutionTimeline,
  ComparisonTable,
  SolutionFAQ,
  EngagementModel,
  RelatedCaseStudies,
  ArchitectureDiagram,
  type Metric,
} from '@/components/solutions';
import { FlaskConical, CheckCircle2, Building2 } from 'lucide-react';

const AISolutions = () => {
  const navigate = useNavigate();

  const metrics: Metric[] = [
    { value: 85, suffix: '%', label: 'Automation Rate', description: 'Process automation' },
    { value: 3, suffix: 'x', label: 'Faster Insights', description: 'AI-powered analytics' },
    { value: 60, suffix: '%', label: 'Cost Reduction', description: 'Operational efficiency' },
  ];

  const challenges = [
    'Manual processes consuming valuable time and resources',
    'Data silos preventing unified insights and decision-making',
    'Inconsistent customer experiences across touchpoints',
    'Difficulty scaling operations without proportional cost increases',
    'Limited predictive capabilities for business planning',
  ];

  const features = [
    {
      icon: Network,
      title: 'Machine Learning Pipelines',
      description: 'End-to-end ML pipelines from data ingestion to model deployment. Automated feature engineering, model training, A/B testing, and MLOps best practices for production-ready AI systems.',
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants powered by large language models. Natural language understanding, context awareness, and multi-turn conversations for customer support and internal automation.',
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboards',
      description: 'Real-time AI-powered analytics and business intelligence dashboards. Predictive insights, anomaly detection, and automated reporting to drive data-driven decision making across your organization.',
    },
    {
      icon: Brain,
      title: 'Predictive Modeling',
      description: 'Advanced predictive models for forecasting, risk assessment, and optimization. Time series analysis, regression models, and ensemble methods tailored to your business use cases.',
    },
    {
      icon: Heart,
      title: 'Emotion-Aware AI (Humo Engine)',
      description: 'Revolutionary emotional intelligence AI that understands tone, sentiment, and human context. Voice-first companions and emotion-aware systems for healthcare, wellness, and enterprise applications.',
    },
    {
      icon: TrendingUp,
      title: 'AI Automation',
      description: 'Intelligent process automation that learns from patterns and adapts to changing conditions. Automate repetitive tasks, workflows, and decision-making with AI-driven orchestration.',
    },
  ];

  const timeline = [
    {
      title: 'AI Strategy & Discovery',
      description: 'Assess AI opportunities, define use cases, and develop a comprehensive AI strategy aligned with business objectives.',
    },
    {
      title: 'Data Preparation & Pipeline',
      description: 'Build data pipelines, implement feature engineering, and establish MLOps infrastructure for model development.',
    },
    {
      title: 'Model Development & Training',
      description: 'Develop, train, and validate AI models with continuous learning capabilities and performance monitoring.',
    },
    {
      title: 'Deployment & Optimization',
      description: 'Deploy models to production, integrate with existing systems, and continuously optimize for performance and accuracy.',
    },
  ];

  const comparisonRows = [
    { feature: 'Custom ML Models', ryt: true, alternatives: 'Generic only', diy: 'Complex' },
    { feature: 'Emotion-Aware AI', ryt: true, alternatives: false, diy: false },
    { feature: 'Real-time Analytics', ryt: true, alternatives: 'Batch only', diy: 'Limited' },
    { feature: 'MLOps Automation', ryt: true, alternatives: 'Manual', diy: 'Time-intensive' },
    { feature: 'Enterprise Integration', ryt: true, alternatives: 'Limited', diy: 'Custom work' },
    { feature: 'Continuous Learning', ryt: true, alternatives: false, diy: 'Complex' },
  ];

  const faqs = [
    {
      question: 'How do you ensure AI model accuracy and reliability?',
      answer: 'We implement rigorous model validation, A/B testing, and continuous monitoring. Our MLOps pipeline includes automated retraining, performance tracking, and drift detection to ensure models remain accurate over time.',
    },
    {
      question: 'Can you integrate AI solutions with our existing systems?',
      answer: 'Yes, we design AI solutions with API-first architecture for seamless integration. We support REST, GraphQL, and event-driven integrations with your existing ERP, CRM, and data systems.',
    },
    {
      question: 'What is Emotion-Aware AI and how does it work?',
      answer: 'Emotion-Aware AI (Humo Engine) analyzes voice tone, sentiment, and contextual cues to understand emotional states. It enables empathetic interactions in healthcare, customer service, and wellness applications by adapting responses to user emotions.',
    },
    {
      question: 'How long does it take to deploy an AI solution?',
      answer: 'Deployment timelines vary by complexity. Simple automation can be deployed in 4-6 weeks, while custom ML models typically take 12-16 weeks including data preparation, training, and integration.',
    },
    {
      question: 'Do you provide ongoing model maintenance and updates?',
      answer: 'Yes, we offer continuous model monitoring, retraining, and optimization services. Our MLOps platform automatically detects performance degradation and triggers retraining when needed.',
    },
    {
      question: 'What data privacy measures do you implement for AI?',
      answer: 'We implement data encryption, access controls, and privacy-preserving ML techniques. We support on-premise deployment, federated learning, and data anonymization to protect sensitive information.',
    },
    {
      question: 'Can you help us identify AI opportunities in our business?',
      answer: 'Absolutely. We conduct AI readiness assessments to identify high-impact use cases, evaluate data availability, and develop a prioritized roadmap for AI implementation.',
    },
    {
      question: 'What industries have you implemented AI solutions for?',
      answer: 'We have delivered AI solutions across healthcare, finance, e-commerce, manufacturing, and SaaS. Our experience includes emotion-aware systems, fraud detection, predictive maintenance, and conversational AI.',
    },
  ];

  const engagementSteps = [
    {
      icon: FlaskConical,
      title: 'AI Pilot',
      description: '30-day pilot with focused AI use case and proof of value',
      duration: '30 days',
      features: ['Use case identification', 'Quick-win AI implementation', 'Performance metrics', 'ROI analysis'],
    },
    {
      icon: CheckCircle2,
      title: 'AI PoC',
      description: '90-day proof of concept with custom ML models and integration',
      duration: '90 days',
      features: ['Custom model development', 'Data pipeline setup', 'System integration', 'Team training'],
    },
    {
      icon: Building2,
      title: 'Enterprise AI',
      description: 'Full enterprise AI program with MLOps and continuous optimization',
      duration: 'Ongoing',
      features: ['MLOps platform', 'Multiple AI use cases', 'Continuous learning', 'Dedicated AI team'],
    },
  ];

  const architectureNodes = [
    { id: '1', label: 'Data Sources', description: 'Enterprise data ingestion', x: 100, y: 100 },
    { id: '2', label: 'ML Pipeline', description: 'Feature engineering and training', x: 300, y: 100 },
    { id: '3', label: 'AI Models', description: 'Production ML models', x: 500, y: 100 },
    { id: '4', label: 'API Layer', description: 'AI service APIs', x: 700, y: 100 },
    { id: '5', label: 'Applications', description: 'Business applications', x: 400, y: 250 },
    { id: '6', label: 'Monitoring', description: 'MLOps and performance tracking', x: 400, y: 350 },
  ];

  const relatedStudies = [
    {
      slug: 'humotionai',
      company: 'HumotionAI',
      challenge: 'Needed to showcase emotional intelligence AI technology and voice interactions.',
      result: '3x improvement in user engagement with complete EI-focused brand identity.',
    },
  ];

  return (
    <PageBackground>
      <SEO
        title="AI Solutions | RYT TechCorp"
        description="Intelligent AI systems for enterprise automation, optimization, and scaling. Machine learning, NLP, and predictive analytics."
        keywords="AI solutions, machine learning, NLP, predictive analytics, automation, AI consulting, RYT TechCorp"
        canonical="https://ryttechcorp.online/solutions/ai-solutions"
        breadcrumbs={[
          { name: 'Home', url: 'https://ryttechcorp.online' },
          { name: 'Solutions', url: 'https://ryttechcorp.online/#services' },
          { name: 'AI Solutions', url: 'https://ryttechcorp.online/solutions/ai-solutions' },
        ]}
        serviceType="AI Services"
        serviceName="Enterprise AI Solutions"
      />
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 border border-neon/30 rounded-full mb-6">
                <Brain className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">AI & Automation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                AI Solutions
              </h1>
              <h2 className="text-muted-foreground text-xl mb-8 font-normal">
                Intelligent systems designed to automate, optimize, and scale enterprise operations.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-premium soft-glow hover:scale-105 transition-transform"
                  onClick={() => navigate('/contact')}
                  aria-label="Go to contact form"
                >
                  Request Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neon/30 hover:bg-neon/10 hover:border-neon/50"
                  onClick={() => navigate('/contact')}
                  aria-label="Go to contact form"
                >
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro Block */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RYT TechCorp delivers enterprise AI solutions that transform how you work. From machine learning 
                  pipelines to emotion-aware AI, we build intelligent systems that automate processes, generate insights, 
                  and enhance customer experiences.
                </p>
              </motion.div>
              <AnimatedMetrics metrics={metrics} />
            </div>
          </div>
        </section>

        {/* Problem → Opportunity */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="glass-card p-8 rounded-xl">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-neon" />
                      Key Challenges
                    </h2>
                    <ul className="space-y-3">
                      {challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-neon mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="glass-card p-8 rounded-xl border-border-neon/50">
                    <h2 className="text-2xl font-bold mb-4">Why It Matters</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      AI adoption can drive 85% process automation, reduce operational costs by 60%, and accelerate 
                      decision-making by 3x. Organizations that leverage AI gain competitive advantages through 
                      predictive insights, personalized experiences, and intelligent automation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      RYT TechCorp's AI solutions are built for enterprise scale with MLOps best practices, 
                      ensuring reliable, maintainable, and continuously improving AI systems that deliver measurable ROI.
                    </p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Breakdown */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  AI Capabilities
                  <span className="gradient-premium bg-clip-text text-transparent"> & Solutions</span>
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="glass-card p-6 rounded-xl hover:border-border-neon/50 transition-all duration-300 group h-full">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-neon/10 flex-shrink-0 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-6 h-6 text-neon" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <SolutionTimeline phases={timeline} />

        {/* Architecture Diagram */}
        <ArchitectureDiagram 
          nodes={architectureNodes}
          title="AI Solution Architecture"
          description="End-to-end AI pipeline from data to insights"
        />

        {/* Comparison Table */}
        <ComparisonTable 
          rows={comparisonRows}
          title="RYT AI vs Alternatives vs DIY"
        />

        {/* Related Case Studies */}
        <RelatedCaseStudies 
          studies={relatedStudies}
          title="AI Success Stories"
        />

        {/* Engagement Model */}
        <EngagementModel 
          steps={engagementSteps}
          title="Get Started with Enterprise AI"
          subtitle="Choose the engagement model that fits your needs"
        />

        {/* FAQ */}
        <SolutionFAQ faqs={faqs} />

        {/* Final CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-12 rounded-xl text-center bg-gradient-to-br from-neon/5 to-accent/5 border-border-neon/50">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform with AI?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Schedule a demo to see how RYT TechCorp can automate and optimize your operations with AI.
                </p>
                <Button
                  size="lg"
                  className="gradient-premium soft-glow hover:scale-105 transition-transform"
                  onClick={() => navigate('/contact')}
                  aria-label="Go to contact form"
                >
                  Request Demo
                </Button>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageBackground>
  );
};

export default AISolutions;
