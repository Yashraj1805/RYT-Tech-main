import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layers, Code, Plug, Database, Network, Settings, AlertTriangle } from 'lucide-react';
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

const EnterpriseSoftware = () => {
  const navigate = useNavigate();

  const metrics: Metric[] = [
    { value: 99.9, suffix: '%', label: 'Uptime', description: 'Mission-critical reliability' },
    { value: 50, suffix: '%', label: 'Faster Development', description: 'Accelerated delivery' },
    { value: 3, suffix: 'x', label: 'Performance Gain', description: 'Optimized systems' },
  ];

  const challenges = [
    'Legacy systems limiting innovation and scalability',
    'Fragmented data across multiple siloed applications',
    'Complex integration requirements with existing infrastructure',
    'Need for custom solutions that off-the-shelf software cannot provide',
    'Maintenance burden of outdated technology stacks',
  ];

  const features = [
    {
      icon: Code,
      title: 'Custom Enterprise Applications',
      description: 'Tailored software solutions built for your specific business needs. Scalable, maintainable applications with clean architecture, modern frameworks, and enterprise-grade security.',
    },
    {
      icon: Plug,
      title: 'Integration Engineering',
      description: 'Seamless integration with existing systems, third-party APIs, and legacy infrastructure. Enterprise service buses, API gateways, and data synchronization across platforms.',
    },
    {
      icon: Layers,
      title: 'Internal Tools & Automation',
      description: 'Internal productivity tools, workflow automation, and business process management systems. Reduce manual work, improve efficiency, and streamline operations.',
    },
    {
      icon: Database,
      title: 'Data Architecture',
      description: 'Design and implement robust data architectures for analytics, reporting, and real-time processing. Data lakes, warehouses, ETL pipelines, and governance frameworks.',
    },
    {
      icon: Network,
      title: 'API & SDK Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation, versioning, and developer experience. SDKs for multiple languages to accelerate partner and internal integrations.',
    },
    {
      icon: Settings,
      title: 'System Modernization',
      description: 'Modernize legacy systems with microservices, cloud-native architecture, and modern frameworks. Gradual migration strategies that minimize risk and downtime.',
    },
  ];

  const timeline = [
    {
      title: 'Requirements & Architecture',
      description: 'Deep dive into business requirements, technical architecture design, and solution planning with stakeholder alignment.',
    },
    {
      title: 'Development & Integration',
      description: 'Agile development with continuous integration, API development, and integration with existing systems.',
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including unit, integration, performance, and security testing with automated CI/CD pipelines.',
    },
    {
      title: 'Deployment & Support',
      description: 'Production deployment with zero-downtime strategies, monitoring setup, and ongoing support and maintenance.',
    },
  ];

  const comparisonRows = [
    { feature: 'Custom Development', ryt: true, alternatives: 'Templates only', diy: 'Time-intensive' },
    { feature: 'Enterprise Integration', ryt: true, alternatives: 'Limited', diy: 'Complex' },
    { feature: 'Scalable Architecture', ryt: true, alternatives: 'Fixed scale', diy: 'Requires expertise' },
    { feature: 'API-First Design', ryt: true, alternatives: 'Legacy patterns', diy: 'Learning curve' },
    { feature: 'Ongoing Support', ryt: true, alternatives: 'Project-based', diy: 'Internal team' },
    { feature: 'Security by Design', ryt: true, alternatives: 'Add-on', diy: 'Manual implementation' },
  ];

  const faqs = [
    {
      question: 'How do you ensure enterprise software meets our specific needs?',
      answer: 'We start with comprehensive requirements gathering and stakeholder workshops. Our agile development process includes regular demos, feedback loops, and iterative refinement to ensure the solution perfectly matches your business processes.',
    },
    {
      question: 'Can you integrate with our existing legacy systems?',
      answer: 'Yes, we specialize in legacy system integration. We use API gateways, middleware, and data transformation layers to connect modern applications with legacy systems without disrupting operations.',
    },
    {
      question: 'What technology stack do you use for enterprise software?',
      answer: 'We use modern, proven technologies including React/Next.js for frontend, Node.js/Python/Go for backend, PostgreSQL/MongoDB for databases, and cloud-native infrastructure. We select the best stack for each project based on requirements.',
    },
    {
      question: 'How long does enterprise software development typically take?',
      answer: 'Timelines vary by scope. A focused application can be delivered in 12-16 weeks, while comprehensive enterprise platforms typically take 6-12 months with phased releases.',
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements. We also provide 24/7 support for critical systems.',
    },
    {
      question: 'How do you ensure security in enterprise applications?',
      answer: 'We implement security by design with authentication, authorization, encryption, audit logging, and regular security assessments. We follow OWASP guidelines and industry best practices.',
    },
    {
      question: 'Can you help modernize our legacy applications?',
      answer: 'Absolutely. We develop modernization strategies that balance risk and innovation, using techniques like strangler fig pattern, API-first approaches, and gradual migration to minimize disruption.',
    },
    {
      question: 'What is your approach to API development?',
      answer: 'We design APIs with REST and GraphQL, comprehensive documentation, versioning strategies, rate limiting, and developer portals. We ensure APIs are scalable, secure, and easy to consume.',
    },
  ];

  const engagementSteps = [
    {
      icon: FlaskConical,
      title: 'Discovery Pilot',
      description: '30-day discovery with architecture assessment and proof of concept',
      duration: '30 days',
      features: ['Requirements analysis', 'Architecture design', 'PoC development', 'Technical roadmap'],
    },
    {
      icon: CheckCircle2,
      title: 'MVP Development',
      description: '90-day MVP with core features and integration',
      duration: '90 days',
      features: ['Core feature development', 'System integration', 'Testing & QA', 'Initial deployment'],
    },
    {
      icon: Building2,
      title: 'Enterprise Platform',
      description: 'Full enterprise platform with ongoing development and support',
      duration: 'Ongoing',
      features: ['Complete platform', 'Advanced features', '24/7 support', 'Continuous improvement'],
    },
  ];

  const architectureNodes = [
    { id: '1', label: 'Frontend', description: 'User interfaces', x: 150, y: 100 },
    { id: '2', label: 'API Gateway', description: 'API management', x: 400, y: 100 },
    { id: '3', label: 'Backend Services', description: 'Business logic', x: 650, y: 100 },
    { id: '4', label: 'Data Layer', description: 'Databases & storage', x: 400, y: 250 },
    { id: '5', label: 'Integrations', description: 'External systems', x: 150, y: 350 },
    { id: '6', label: 'Monitoring', description: 'Observability & logs', x: 650, y: 350 },
  ];

  const relatedStudies = [
    {
      slug: 'expensetracker',
      company: 'Expense Tracker',
      challenge: 'Users needed AI-driven expense management with fraud detection.',
      result: '32% better savings and 10M+ secure monthly transactions.',
    },
  ];

  return (
    <PageBackground>
      <SEO
        title="Enterprise Software Development | RYT TechCorp"
        description="High-performance, scalable enterprise software for mission-critical operations. Custom applications, APIs, and system integration."
        keywords="enterprise software, custom applications, API development, system integration, scalable software, RYT TechCorp"
        canonical="https://ryttechcorp.online/solutions/enterprise-software"
        breadcrumbs={[
          { name: 'Home', url: 'https://ryttechcorp.online' },
          { name: 'Solutions', url: 'https://ryttechcorp.online/#services' },
          { name: 'Enterprise Software', url: 'https://ryttechcorp.online/solutions/enterprise-software' },
        ]}
        serviceType="Software Development"
        serviceName="Enterprise Software Development"
      />
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 border border-neon/30 rounded-full mb-6">
                <Layers className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">Enterprise</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Enterprise Software Development
              </h1>
              <h2 className="text-muted-foreground text-xl mb-8 font-normal">
                High-performance, scalable software engineered for mission-critical operations.
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
                  RYT TechCorp builds enterprise software that scales with your business. From custom applications 
                  to system integration, we deliver solutions that are secure, maintainable, and built for the long term.
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
                      Enterprise software is the backbone of modern business operations. Poorly designed systems 
                      create technical debt, limit innovation, and increase maintenance costs. Custom enterprise 
                      software tailored to your needs can accelerate operations by 50% and reduce long-term costs.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      RYT TechCorp builds enterprise software with clean architecture, modern practices, and 
                      scalability in mind—ensuring your investment delivers value for years to come.
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
                  Enterprise Software
                  <span className="gradient-premium bg-clip-text text-transparent"> Capabilities</span>
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
        <ArchitectureDiagram nodes={architectureNodes} title="Enterprise Architecture" description="Scalable system architecture" />
        <ComparisonTable rows={comparisonRows} title="RYT vs Alternatives vs DIY" />
        <RelatedCaseStudies studies={relatedStudies} title="Enterprise Success Stories" />
        <EngagementModel steps={engagementSteps} title="Get Started with Enterprise Software" subtitle="Choose the engagement model that fits your needs" />
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
              <Card className="glass-card p-12 rounded-xl text-center bg-gradient-to-br from-neon/5 to-primary/5 border-border-neon/50">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Enterprise Software?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Schedule a demo to see how RYT TechCorp can build scalable enterprise solutions for your business.
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

export default EnterpriseSoftware;
