import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cloud, Network, GitBranch, Server, TrendingDown, Shield, AlertTriangle } from 'lucide-react';
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

const CloudServices = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Cloud Services | RYT TechCorp';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cloud-native infrastructure built for uptime, scalability, and global performance. AWS, Azure, GCP expertise from RYT TechCorp.');
    }
  }, []);

  const metrics: Metric[] = [
    { value: 99.99, suffix: '%', label: 'Uptime SLA', description: 'Guaranteed availability' },
    { value: 40, suffix: '%', label: 'Cost Reduction', description: 'Cloud optimization' },
    { value: 3, suffix: 'x', label: 'Faster Deployments', description: 'CI/CD automation' },
  ];

  const challenges = [
    'Cloud costs spiraling out of control without optimization',
    'Complex multi-cloud and hybrid infrastructure management',
    'Slow deployment cycles limiting business agility',
    'Security and compliance concerns in cloud environments',
    'Lack of cloud expertise and best practices internally',
  ];

  const features = [
    {
      icon: Network,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, resilient cloud architectures on AWS, Azure, and GCP. Microservices, serverless, and hybrid cloud solutions optimized for performance and cost.',
    },
    {
      icon: GitBranch,
      title: 'DevOps Tooling',
      description: 'Complete DevOps toolchains with infrastructure as code, configuration management, and automated provisioning. Terraform, Ansible, and cloud-native tooling for consistent deployments.',
    },
    {
      icon: Server,
      title: 'CI/CD Automation',
      description: 'End-to-end CI/CD pipelines with automated testing, security scanning, and deployment strategies. Blue-green, canary, and rolling deployments with zero-downtime releases.',
    },
    {
      icon: Cloud,
      title: 'Distributed Infrastructure',
      description: 'Multi-region, globally distributed infrastructure with CDN, edge computing, and data replication. Achieve low latency and high availability across continents.',
    },
    {
      icon: TrendingDown,
      title: 'Cost Optimization',
      description: 'Cloud cost optimization through right-sizing, reserved instances, and automated scaling. Reduce cloud spend by 30-50% while maintaining performance and reliability.',
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security with identity management, network security, encryption, and compliance automation. Secure by default with continuous monitoring.',
    },
  ];

  const timeline = [
    {
      title: 'Cloud Assessment & Strategy',
      description: 'Evaluate current infrastructure, define cloud strategy, and design target architecture with migration roadmap.',
    },
    {
      title: 'Infrastructure Setup & Migration',
      description: 'Deploy cloud infrastructure, implement IaC, and migrate workloads with minimal downtime using proven patterns.',
    },
    {
      title: 'CI/CD & Automation',
      description: 'Establish CI/CD pipelines, automate deployments, and implement monitoring and observability across environments.',
    },
    {
      title: 'Optimization & Governance',
      description: 'Continuous cost optimization, performance tuning, security hardening, and governance policies for ongoing excellence.',
    },
  ];

  const comparisonRows = [
    { feature: 'Multi-Cloud Expertise', ryt: true, alternatives: 'Single cloud', diy: 'Learning curve' },
    { feature: 'Cost Optimization', ryt: '30-50% reduction', alternatives: 'Manual', diy: 'Time-intensive' },
    { feature: 'Zero-Downtime Deployments', ryt: true, alternatives: 'Scheduled downtime', diy: 'Complex' },
    { feature: 'Infrastructure as Code', ryt: true, alternatives: 'Manual setup', diy: 'Requires expertise' },
    { feature: '24/7 Cloud Support', ryt: true, alternatives: 'Business hours', diy: 'Internal team' },
    { feature: 'Security Automation', ryt: true, alternatives: 'Manual configuration', diy: 'Error-prone' },
  ];

  const faqs = [
    {
      question: 'Which cloud providers do you support?',
      answer: 'We support AWS, Azure, and GCP with deep expertise in each platform. We help you choose the right provider or implement multi-cloud strategies based on your requirements.',
    },
    {
      question: 'How do you ensure cloud security and compliance?',
      answer: 'We implement security by design with identity and access management, network segmentation, encryption, and compliance automation. We follow cloud security best practices and maintain compliance with SOC 2, ISO 27001, and other frameworks.',
    },
    {
      question: 'Can you help reduce our cloud costs?',
      answer: 'Yes, we conduct cloud cost optimization assessments and implement strategies including right-sizing, reserved instances, spot instances, and automated scaling. Typical savings range from 30-50%.',
    },
    {
      question: 'How long does cloud migration typically take?',
      answer: 'Migration timelines vary by scope. A focused application migration can take 4-8 weeks, while comprehensive enterprise cloud transformation typically takes 6-12 months with phased approach.',
    },
    {
      question: 'Do you provide ongoing cloud management?',
      answer: 'Yes, we offer managed cloud services including monitoring, cost optimization, security updates, performance tuning, and 24/7 support for critical workloads.',
    },
    {
      question: 'What is Infrastructure as Code and why is it important?',
      answer: 'Infrastructure as Code (IaC) manages infrastructure through code, enabling version control, reproducibility, and automation. We use Terraform, CloudFormation, and Ansible to ensure consistent, reliable deployments.',
    },
    {
      question: 'Can you help with hybrid cloud deployments?',
      answer: 'Absolutely. We design and implement hybrid cloud architectures that seamlessly connect on-premise infrastructure with public cloud, enabling workload portability and optimal resource utilization.',
    },
    {
      question: 'How do you ensure high availability in the cloud?',
      answer: 'We design for high availability with multi-AZ deployments, auto-scaling, load balancing, and disaster recovery strategies. We target 99.99% uptime with redundant systems and automated failover.',
    },
  ];

  const engagementSteps = [
    {
      icon: FlaskConical,
      title: 'Cloud Assessment',
      description: '30-day assessment with architecture review and migration planning',
      duration: '30 days',
      features: ['Cloud readiness assessment', 'Cost analysis', 'Architecture design', 'Migration roadmap'],
    },
    {
      icon: CheckCircle2,
      title: 'Cloud Migration',
      description: '90-day migration with infrastructure setup and workload migration',
      duration: '90 days',
      features: ['Infrastructure deployment', 'Workload migration', 'CI/CD setup', 'Security hardening'],
    },
    {
      icon: Building2,
      title: 'Managed Cloud',
      description: 'Ongoing cloud management with optimization and support',
      duration: 'Ongoing',
      features: ['24/7 monitoring', 'Cost optimization', 'Security management', 'Performance tuning'],
    },
  ];

  const architectureNodes = [
    { id: '1', label: 'CDN', description: 'Content delivery', x: 100, y: 100 },
    { id: '2', label: 'Load Balancer', description: 'Traffic distribution', x: 300, y: 100 },
    { id: '3', label: 'App Services', description: 'Application layer', x: 500, y: 100 },
    { id: '4', label: 'Data Layer', description: 'Databases & storage', x: 700, y: 100 },
    { id: '5', label: 'CI/CD', description: 'Deployment pipeline', x: 200, y: 250 },
    { id: '6', label: 'Monitoring', description: 'Observability', x: 600, y: 250 },
  ];

  const relatedStudies: Array<{ slug: string; company: string; challenge: string; result: string }> = [];

  return (
    <PageBackground>
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
                <Cloud className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">Cloud</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud
                <span className="gradient-premium bg-clip-text text-transparent"> Services</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8">
                Cloud-native infrastructure built for uptime, scalability, and global performance.
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
                  RYT TechCorp delivers cloud-native infrastructure that scales with your business. From AWS to Azure 
                  to GCP, we build resilient, cost-optimized cloud solutions with DevOps best practices.
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
                      Cloud infrastructure is the foundation of modern digital business. Poorly architected cloud 
                      deployments lead to cost overruns, security vulnerabilities, and performance issues. Well-designed 
                      cloud infrastructure can reduce costs by 40% and accelerate deployments by 3x.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      RYT TechCorp builds cloud-native infrastructure with DevOps automation, cost optimization, and 
                      security by design—ensuring your cloud investment delivers maximum value.
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
                  Cloud Capabilities
                  <span className="gradient-premium bg-clip-text text-transparent"> & Services</span>
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
        <ArchitectureDiagram nodes={architectureNodes} title="Cloud Architecture" description="Scalable cloud infrastructure design" />
        <ComparisonTable rows={comparisonRows} title="RYT Cloud vs Alternatives vs DIY" />
        {relatedStudies.length > 0 && <RelatedCaseStudies studies={relatedStudies} title="Cloud Success Stories" />}
        <EngagementModel steps={engagementSteps} title="Get Started with Cloud Services" subtitle="Choose the engagement model that fits your needs" />
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
                  Ready to Transform Your Cloud Infrastructure?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Schedule a demo to see how RYT TechCorp can optimize your cloud infrastructure for performance and cost.
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

export default CloudServices;
