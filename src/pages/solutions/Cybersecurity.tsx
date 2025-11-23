import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Eye, Lock, FileCheck, Zap, AlertTriangle, CheckCircle2, FlaskConical, Building2 } from 'lucide-react';
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

const Cybersecurity = () => {
  const navigate = useNavigate();

  const metrics: Metric[] = [
    { value: 99.9, suffix: '%', label: 'Uptime SLA', description: 'Guaranteed availability' },
    { value: 90, suffix: '%', label: 'Faster Detection', description: 'Mean time to detection' },
    { value: 24, suffix: '/7', label: 'SOC Monitoring', description: 'Continuous protection' },
  ];

  const challenges = [
    'Sophisticated threat actors targeting critical infrastructure',
    'Compliance requirements across multiple frameworks (SOC 2, ISO 27001, GDPR)',
    'Legacy systems with security gaps and limited visibility',
    'Alert fatigue from false positives overwhelming security teams',
    'Incident response delays causing extended breach impact',
  ];

  const features = [
    {
      icon: Eye,
      title: 'Threat Detection & Monitoring',
      description: 'AI-powered real-time threat detection with behavioral analysis, anomaly detection, and continuous monitoring across your entire infrastructure. Identify and neutralize threats before they impact your business.',
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement comprehensive zero trust security with identity verification, least privilege access, micro-segmentation, and continuous validation. Every access request is authenticated and authorized regardless of location.',
    },
    {
      icon: Zap,
      title: 'Incident Response Automation',
      description: 'Rapid incident response with automated containment, forensic analysis, and recovery procedures. Our 24/7 SOC team provides continuous monitoring and immediate threat mitigation with sub-minute response times.',
    },
    {
      icon: FileCheck,
      title: 'Compliance & Governance',
      description: 'Achieve and maintain compliance with SOC 2 Type II, ISO 27001, GDPR, HIPAA, and other regulatory frameworks. Comprehensive risk assessments, continuous compliance monitoring, and audit-ready documentation.',
    },
    {
      icon: Shield,
      title: 'Security AI Engine',
      description: 'Advanced AI-driven security automation that learns from threats, adapts to new attack patterns, and automates response workflows. Reduce mean time to detection and response by up to 90% with intelligent automation.',
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Management',
      description: 'Proactive vulnerability scanning, patch management, and security posture assessment. Continuous security testing and penetration testing to identify and remediate risks before exploitation.',
    },
  ];

  const timeline = [
    {
      title: 'Security Assessment & Discovery',
      description: 'Comprehensive security audit, threat modeling, and risk assessment to identify vulnerabilities and define security requirements.',
    },
    {
      title: 'Architecture & Implementation',
      description: 'Design and deploy zero trust architecture, security controls, and monitoring infrastructure with minimal business disruption.',
    },
    {
      title: 'SOC Integration & Training',
      description: 'Integrate with existing systems, establish 24/7 monitoring, and train your team on security operations and incident response.',
    },
    {
      title: 'Continuous Optimization',
      description: 'Ongoing threat intelligence updates, security tuning, compliance maintenance, and performance optimization.',
    },
  ];

  const comparisonRows = [
    { feature: 'AI-Driven Threat Detection', ryt: true, alternatives: 'Limited', diy: false },
    { feature: '24/7 SOC Monitoring', ryt: true, alternatives: 'Business hours only', diy: false },
    { feature: 'Zero Trust Implementation', ryt: true, alternatives: 'Partial', diy: 'Complex' },
    { feature: 'Compliance Automation', ryt: true, alternatives: 'Manual', diy: 'Time-intensive' },
    { feature: 'Incident Response SLA', ryt: '< 5 minutes', alternatives: 'Hours to days', diy: 'Variable' },
    { feature: 'Security AI Engine', ryt: true, alternatives: false, diy: false },
  ];

  const faqs = [
    {
      question: 'What is included in your 24/7 SOC monitoring?',
      answer: 'Our SOC provides continuous monitoring of your infrastructure, real-time threat detection, automated incident response, security event correlation, and immediate alerting. Our team of security analysts works around the clock to protect your assets.',
    },
    {
      question: 'How quickly can you implement zero trust architecture?',
      answer: 'Implementation typically takes 8-12 weeks depending on infrastructure complexity. We start with a security assessment, then phase the rollout to minimize business disruption while maintaining security throughout the transition.',
    },
    {
      question: 'Do you provide compliance documentation for audits?',
      answer: 'Yes, we provide comprehensive compliance documentation including security policies, control evidence, audit logs, and compliance reports. Our platform maintains audit-ready documentation for SOC 2, ISO 27001, GDPR, and other frameworks.',
    },
    {
      question: 'How does your AI security engine reduce false positives?',
      answer: 'Our AI engine uses machine learning to analyze threat patterns, user behavior, and network traffic. It continuously learns from your environment to reduce false positives by up to 85% while maintaining high detection accuracy for real threats.',
    },
    {
      question: 'What happens during a security incident?',
      answer: 'Our automated incident response system immediately contains threats, isolates affected systems, and notifies your team. Our SOC analysts investigate, provide remediation guidance, and help restore operations with minimal downtime.',
    },
    {
      question: 'Can you integrate with our existing security tools?',
      answer: 'Yes, we integrate with SIEM platforms, firewalls, endpoint protection, identity providers, and cloud security tools. Our API-first architecture ensures seamless integration with your existing security stack.',
    },
    {
      question: 'What is your incident response SLA?',
      answer: 'We guarantee sub-5-minute response time for critical security incidents, with automated containment and immediate SOC analyst engagement. Our tiered SLA ensures appropriate response times based on threat severity.',
    },
    {
      question: 'How do you ensure data privacy and compliance?',
      answer: 'We implement data encryption at rest and in transit, role-based access controls, audit logging, and data residency options. Our platform is designed with privacy by design principles and supports GDPR, HIPAA, and other privacy regulations.',
    },
  ];

  const engagementSteps = [
    {
      icon: FlaskConical,
      title: 'Security Pilot',
      description: '30-day pilot with core security monitoring and threat detection',
      duration: '30 days',
      features: ['Threat detection setup', 'Basic SOC monitoring', 'Incident response testing', 'Security assessment report'],
    },
    {
      icon: CheckCircle2,
      title: 'Proof of Concept',
      description: '90-day PoC with full zero trust implementation and compliance',
      duration: '90 days',
      features: ['Zero trust architecture', 'Full SOC integration', 'Compliance framework setup', 'Team training'],
    },
    {
      icon: Building2,
      title: 'Enterprise Integration',
      description: 'Full enterprise security program with ongoing optimization',
      duration: 'Ongoing',
      features: ['24/7 SOC monitoring', 'Advanced AI security', 'Compliance automation', 'Dedicated security team'],
    },
  ];

  const architectureNodes = [
    { id: '1', label: 'Threat Intel', description: 'Real-time threat intelligence feeds', x: 100, y: 100 },
    { id: '2', label: 'AI Engine', description: 'Machine learning threat detection', x: 300, y: 100 },
    { id: '3', label: 'SOC Platform', description: 'Security operations center dashboard', x: 500, y: 100 },
    { id: '4', label: 'Incident Response', description: 'Automated containment and remediation', x: 700, y: 100 },
    { id: '5', label: 'Compliance', description: 'Audit and compliance reporting', x: 400, y: 250 },
    { id: '6', label: 'Your Infrastructure', description: 'Protected endpoints and systems', x: 400, y: 350 },
  ];

  const relatedStudies = [
    {
      slug: 'sochboxai',
      company: 'SochBoxAI',
      challenge: 'Creators faced content leaks and unauthorized access across distributed teams.',
      result: '99.7% reduction in unauthorized access with zero content leaks.',
    },
  ];

  return (
    <PageBackground>
      <SEO
        title="Cybersecurity Solutions | RYT TechCorp"
        description="AI-driven threat detection, zero trust architecture, and 24/7 SOC monitoring. Enterprise cybersecurity solutions."
        keywords="cybersecurity, penetration testing, threat detection, SOC monitoring, zero trust, security audit, RYT TechCorp"
        canonical="https://ryttechcorp.online/solutions/cybersecurity"
        breadcrumbs={[
          { name: 'Home', url: 'https://ryttechcorp.online' },
          { name: 'Solutions', url: 'https://ryttechcorp.online/#services' },
          { name: 'Cybersecurity', url: 'https://ryttechcorp.online/solutions/cybersecurity' },
        ]}
        serviceType="Cybersecurity Services"
        serviceName="Enterprise Cybersecurity Solutions"
      />
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          {/* Subtle particle glow effect */}
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
                <Shield className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">Security</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Cybersecurity Solutions
              </h1>
              <h2 className="text-muted-foreground text-xl mb-8 font-normal">
                Protecting enterprises with intelligent, real-time threat defense and 24/7 SOC monitoring.
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center mb-12"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RYT TechCorp delivers enterprise-grade cybersecurity solutions that combine AI-driven threat detection, 
                  zero trust architecture, and 24/7 security operations center (SOC) monitoring. We protect your critical 
                  infrastructure from sophisticated threats while ensuring compliance with industry standards.
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
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
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
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="glass-card p-8 rounded-xl border-border-neon/50">
                    <h2 className="text-2xl font-bold mb-4">Why It Matters</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In 2024, the average cost of a data breach exceeded $4.45 million, with detection and response 
                      taking an average of 277 days. Organizations without robust cybersecurity face not only financial 
                      losses but also regulatory penalties, reputational damage, and operational disruption.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      RYT TechCorp's cybersecurity solutions reduce mean time to detection by 90%, automate incident 
                      response, and ensure continuous compliance—transforming security from a cost center into a 
                      competitive advantage.
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Comprehensive Security
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
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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
          title="Security Architecture"
          description="End-to-end security monitoring and response flow"
        />

        {/* Comparison Table */}
        <ComparisonTable 
          rows={comparisonRows}
          title="RYT vs Alternatives vs DIY"
        />

        {/* Related Case Studies */}
        <RelatedCaseStudies 
          studies={relatedStudies}
          title="Security Success Stories"
        />

        {/* Engagement Model */}
        <EngagementModel 
          steps={engagementSteps}
          title="Get Started with Enterprise Security"
          subtitle="Choose the engagement model that fits your needs"
        />

        {/* FAQ */}
        <SolutionFAQ faqs={faqs} />

        {/* Final CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-12 rounded-xl text-center bg-gradient-to-br from-neon/5 to-primary/5 border-border-neon/50">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Secure Your Enterprise?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Schedule a demo to see how RYT TechCorp can protect your infrastructure with AI-driven security.
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

export default Cybersecurity;
