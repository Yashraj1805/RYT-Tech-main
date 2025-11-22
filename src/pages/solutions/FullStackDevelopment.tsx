import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, Monitor, Server, Database, Zap, Layers, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
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

const FullStackDevelopment = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Full-Stack Development | RYT TechCorp';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Modern, fast, and intelligent full-stack engineering for web, mobile, and enterprise systems. React, Next.js, Node.js expertise from RYT TechCorp.');
    }
  }, []);

  const metrics: Metric[] = [
    { value: 50, suffix: '%', label: 'Faster Delivery', description: 'Accelerated development' },
    { value: 95, suffix: '+', label: 'Lighthouse Score', description: 'Performance optimized' },
    { value: 3, suffix: 'x', label: 'Developer Productivity', description: 'Modern tooling' },
  ];

  const challenges = [
    'Slow development cycles with outdated technology stacks',
    'Poor performance impacting user experience and SEO',
    'Difficulty maintaining and scaling monolithic applications',
    'Limited developer productivity with legacy workflows',
    'Security vulnerabilities from outdated dependencies',
  ];

  const features = [
    {
      icon: Monitor,
      title: 'Frontend Engineering (React, Next.js)',
      description: 'Modern frontend development with React, Next.js, and TypeScript. Server-side rendering, static site generation, and progressive web apps with optimal performance and SEO.',
    },
    {
      icon: Server,
      title: 'Backend Engineering (Node, Python, Go)',
      description: 'Scalable backend systems built with Node.js, Python, Go, and microservices architecture. RESTful and GraphQL APIs, real-time services, and high-performance server applications.',
    },
    {
      icon: Database,
      title: 'Database & Storage Design',
      description: 'Optimal database design with PostgreSQL, MongoDB, Redis, and data warehousing solutions. Query optimization, indexing strategies, and data modeling for scale.',
    },
    {
      icon: Code,
      title: 'Scalable API Development',
      description: 'API-first development with comprehensive documentation, versioning, and rate limiting. GraphQL and REST APIs with authentication, authorization, and monitoring.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'End-to-end performance optimization from frontend bundle size to database queries. Lighthouse scores, Core Web Vitals, caching strategies, and CDN integration.',
    },
    {
      icon: Layers,
      title: 'Full-Stack Architecture',
      description: 'End-to-end system design with modern architecture patterns, microservices, and cloud-native deployment. Scalable, maintainable, and secure full-stack solutions.',
    },
  ];

  const timeline = [
    {
      title: 'Discovery & Architecture',
      description: 'Requirements gathering, technical architecture design, and technology stack selection with stakeholder alignment.',
    },
    {
      title: 'Development & Integration',
      description: 'Agile full-stack development with frontend and backend in parallel, API development, and third-party integrations.',
    },
    {
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, security hardening, and accessibility compliance.',
    },
    {
      title: 'Deployment & Launch',
      description: 'CI/CD deployment, monitoring setup, documentation, and knowledge transfer for ongoing maintenance.',
    },
  ];

  const comparisonRows = [
    { feature: 'Modern Tech Stack', ryt: true, alternatives: 'Legacy frameworks', diy: 'Learning curve' },
    { feature: 'Full-Stack Expertise', ryt: true, alternatives: 'Specialized teams', diy: 'Multiple skills needed' },
    { feature: 'Performance Optimization', ryt: '95+ Lighthouse', alternatives: 'Basic', diy: 'Manual tuning' },
    { feature: 'API-First Design', ryt: true, alternatives: 'Tightly coupled', diy: 'Requires expertise' },
    { feature: 'Rapid Development', ryt: '50% faster', alternatives: 'Standard pace', diy: 'Time-intensive' },
    { feature: 'Security by Default', ryt: true, alternatives: 'Add-on', diy: 'Manual implementation' },
  ];

  const faqs = [
    {
      question: 'What technology stack do you use for full-stack development?',
      answer: 'We use modern, proven technologies: React/Next.js for frontend, Node.js/Python/Go for backend, PostgreSQL/MongoDB for databases, and cloud-native infrastructure. We select the optimal stack for each project.',
    },
    {
      question: 'How do you ensure application performance and speed?',
      answer: 'We implement performance optimization from the start: code splitting, lazy loading, CDN integration, database query optimization, and caching strategies. We target 95+ Lighthouse scores and Core Web Vitals.',
    },
    {
      question: 'Can you build both web and mobile applications?',
      answer: 'Yes, we build responsive web applications and can develop mobile apps using React Native or native development. We ensure consistent experiences across platforms.',
    },
    {
      question: 'How long does full-stack development typically take?',
      answer: 'Timelines vary by scope. A focused application can be delivered in 8-12 weeks, while comprehensive platforms typically take 4-6 months with iterative releases.',
    },
    {
      question: 'Do you provide API documentation and developer tools?',
      answer: 'Yes, we provide comprehensive API documentation, SDKs, Postman collections, and developer portals. We ensure APIs are well-documented and easy to consume.',
    },
    {
      question: 'How do you handle database design and optimization?',
      answer: 'We design databases with scalability in mind: proper indexing, query optimization, connection pooling, and data modeling. We use appropriate databases (SQL, NoSQL) based on requirements.',
    },
    {
      question: 'Can you integrate with existing systems and APIs?',
      answer: 'Absolutely. We integrate with existing systems, third-party APIs, and legacy applications. We use API gateways, middleware, and data transformation to ensure seamless integration.',
    },
    {
      question: 'What is your approach to security in full-stack applications?',
      answer: 'We implement security by design: authentication, authorization, input validation, encryption, secure APIs, and regular security audits. We follow OWASP guidelines and best practices.',
    },
  ];

  const engagementSteps = [
    {
      icon: FlaskConical,
      title: 'MVP Development',
      description: '30-day MVP with core features and basic integration',
      duration: '30 days',
      features: ['Core features', 'Basic UI/UX', 'API development', 'Initial deployment'],
    },
    {
      icon: CheckCircle2,
      title: 'Full Application',
      description: '90-day full application with advanced features',
      duration: '90 days',
      features: ['Complete features', 'Advanced UI/UX', 'Full API suite', 'Production deployment'],
    },
    {
      icon: Building2,
      title: 'Enterprise Platform',
      description: 'Ongoing platform development with scaling and optimization',
      duration: 'Ongoing',
      features: ['Scalable platform', 'Advanced features', 'Performance optimization', 'Ongoing support'],
    },
  ];

  const architectureNodes = [
    { id: '1', label: 'Frontend', description: 'React/Next.js apps', x: 150, y: 100 },
    { id: '2', label: 'API Gateway', description: 'API management', x: 400, y: 100 },
    { id: '3', label: 'Backend Services', description: 'Node/Python/Go', x: 650, y: 100 },
    { id: '4', label: 'Databases', description: 'PostgreSQL/MongoDB', x: 400, y: 250 },
    { id: '5', label: 'Cache Layer', description: 'Redis/CDN', x: 150, y: 350 },
    { id: '6', label: 'Monitoring', description: 'Observability', x: 650, y: 350 },
  ];

  const relatedStudies = [
    {
      slug: 'expensetracker',
      company: 'Expense Tracker',
      challenge: 'Needed AI-driven expense management with fraud detection.',
      result: '32% better savings with 10M+ secure monthly transactions.',
    },
    {
      slug: 'humotionai',
      company: 'HumotionAI',
      challenge: 'Required emotional intelligence AI platform with voice interactions.',
      result: '3x improvement in user engagement with complete EI brand identity.',
    },
  ];

  return (
    <PageBackground>
      <Navigation />
      <main className="pt-24 pb-16">
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
                <Code className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Full-Stack
                <span className="gradient-premium bg-clip-text text-transparent"> Development</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8">
                Modern, fast, and intelligent full-stack engineering for web, mobile, and enterprise systems.
              </p>
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
                  RYT TechCorp delivers full-stack applications that are fast, scalable, and maintainable. From 
                  React frontends to Node.js backends, we build modern applications with best practices and 
                  performance optimization.
                </p>
              </motion.div>
              <AnimatedMetrics metrics={metrics} />
            </div>
          </div>
        </section>

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
                      Full-stack applications are the face of your business. Poor performance, outdated technology, 
                      and security vulnerabilities damage user experience and business reputation. Modern full-stack 
                      development can accelerate delivery by 50% and improve performance by 3x.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      RYT TechCorp builds full-stack applications with modern frameworks, performance optimization, 
                      and security by design—ensuring your applications are fast, secure, and scalable.
                    </p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

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
                  Full-Stack Capabilities
                  <span className="gradient-premium bg-clip-text text-transparent"> & Expertise</span>
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

        <SolutionTimeline phases={timeline} />
        <ArchitectureDiagram nodes={architectureNodes} title="Full-Stack Architecture" description="End-to-end application architecture" />
        <ComparisonTable rows={comparisonRows} title="RYT Full-Stack vs Alternatives vs DIY" />
        <RelatedCaseStudies studies={relatedStudies} title="Development Success Stories" />
        <EngagementModel steps={engagementSteps} title="Get Started with Full-Stack Development" subtitle="Choose the engagement model that fits your needs" />
        <SolutionFAQ faqs={faqs} />

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
                  Ready to Build Modern Applications?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Schedule a demo to see how RYT TechCorp can build fast, scalable full-stack applications for your business.
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

export default FullStackDevelopment;
