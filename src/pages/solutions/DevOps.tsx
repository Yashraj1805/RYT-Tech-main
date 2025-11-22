import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, GitBranch, Container, Eye, Rocket, Shield, AlertTriangle } from 'lucide-react';
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

const DevOps = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'DevOps Engineering | RYT TechCorp';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Self-healing pipelines, zero-downtime deployments, and enterprise DevOps automation. CI/CD, Kubernetes, and SRE practices from RYT TechCorp.');
    }
  }, []);

  const metrics: Metric[] = [
    { value: 99.9, suffix: '%', label: 'Deployment Success', description: 'Zero-downtime releases' },
    { value: 10, suffix: 'x', label: 'Faster Deployments', description: 'CI/CD automation' },
    { value: 50, suffix: '%', label: 'Incident Reduction', description: 'SRE practices' },
  ];

  const challenges = [
    'Manual deployment processes causing delays and errors',
    'Lack of visibility into system health and performance',
    'Frequent production incidents and slow recovery times',
    'Inconsistent environments between dev, staging, and production',
    'Difficulty scaling infrastructure to meet demand',
  ];

  const features = [
    {
      icon: GitBranch,
      title: 'CI/CD Setup',
      description: 'Complete CI/CD pipelines with GitHub Actions, GitLab CI, Jenkins, or cloud-native solutions. Automated testing, building, and deployment with quality gates and approval workflows.',
    },
    {
      icon: Container,
      title: 'Containerization & Kubernetes',
      description: 'Docker containerization and Kubernetes orchestration for scalable, portable applications. Helm charts, service meshes, and cloud-native patterns for production workloads.',
    },
    {
      icon: Eye,
      title: 'Observability & Monitoring',
      description: 'Comprehensive observability with Prometheus, Grafana, ELK stack, and distributed tracing. Real-time metrics, logs, and APM for proactive issue detection and resolution.',
    },
    {
      icon: Rocket,
      title: 'Automated Deployments',
      description: 'Zero-downtime deployment strategies with blue-green, canary, and rolling updates. Infrastructure as code, automated rollbacks, and feature flag management.',
    },
    {
      icon: Zap,
      title: 'Reliability Engineering (SRE)',
      description: 'Site reliability engineering practices with SLIs, SLOs, error budgets, and incident management. Self-healing systems, chaos engineering, and continuous improvement.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'DevSecOps integration with automated security scanning, vulnerability management, and compliance automation. Security by design in CI/CD pipelines.',
    },
  ];

  const timeline = [
    {
      title: 'Assessment & Strategy',
      description: 'Evaluate current processes, identify bottlenecks, and design DevOps transformation strategy with tool selection and roadmap.',
    },
    {
      title: 'CI/CD & Infrastructure',
      description: 'Implement CI/CD pipelines, infrastructure as code, and containerization with automated testing and deployment.',
    },
    {
      title: 'Observability & SRE',
      description: 'Set up monitoring, logging, and observability platforms. Implement SRE practices with SLIs, SLOs, and incident response.',
    },
    {
      title: 'Optimization & Scale',
      description: 'Continuous optimization of pipelines, infrastructure, and processes. Scale DevOps practices across teams and applications.',
    },
  ];

  const comparisonRows = [
    { feature: 'Zero-Downtime Deployments', ryt: true, alternatives: 'Scheduled downtime', diy: 'Complex' },
    { feature: 'Infrastructure as Code', ryt: true, alternatives: 'Manual setup', diy: 'Requires expertise' },
    { feature: 'Full Observability Stack', ryt: true, alternatives: 'Basic monitoring', diy: 'Time-intensive' },
    { feature: 'SRE Practices', ryt: true, alternatives: 'Reactive support', diy: 'Learning curve' },
    { feature: '10x Faster Deployments', ryt: true, alternatives: 'Manual processes', diy: 'Slow' },
    { feature: 'Self-Healing Systems', ryt: true, alternatives: false, diy: 'Complex' },
  ];

  const faqs = [
    {
      question: 'What CI/CD tools and platforms do you support?',
      answer: 'We support GitHub Actions, GitLab CI, Jenkins, CircleCI, and cloud-native solutions like AWS CodePipeline, Azure DevOps, and Google Cloud Build. We select the best tool for your environment.',
    },
    {
      question: 'How do you ensure zero-downtime deployments?',
      answer: 'We implement deployment strategies like blue-green, canary, and rolling updates with automated health checks and rollback capabilities. We test deployments in staging and use feature flags for gradual rollouts.',
    },
    {
      question: 'What is Infrastructure as Code and why is it important?',
      answer: 'Infrastructure as Code (IaC) manages infrastructure through code, enabling version control, reproducibility, and automation. We use Terraform, CloudFormation, and Ansible to ensure consistent, reliable infrastructure.',
    },
    {
      question: 'How do you implement observability and monitoring?',
      answer: 'We set up comprehensive observability with metrics (Prometheus), logs (ELK), traces (Jaeger), and APM. We create dashboards, alerts, and runbooks for proactive issue detection and resolution.',
    },
    {
      question: 'What are SRE practices and how do you implement them?',
      answer: 'Site Reliability Engineering (SRE) focuses on reliability through SLIs, SLOs, error budgets, and blameless postmortems. We implement SRE practices to balance feature velocity with system reliability.',
    },
    {
      question: 'Can you help migrate to Kubernetes?',
      answer: 'Yes, we help design and implement Kubernetes clusters, migrate applications to containers, set up Helm charts, and implement service meshes. We ensure smooth migration with minimal disruption.',
    },
    {
      question: 'How do you integrate security into DevOps?',
      answer: 'We implement DevSecOps with automated security scanning in CI/CD, vulnerability management, secrets management, and compliance automation. Security is built into every stage of the pipeline.',
    },
    {
      question: 'What is your approach to incident management?',
      answer: 'We implement incident response processes with on-call rotations, escalation policies, and runbooks. We conduct blameless postmortems and continuously improve based on incidents.',
    },
  ];

  const engagementSteps = [
    {
      icon: FlaskConical,
      title: 'DevOps Assessment',
      description: '30-day assessment with CI/CD evaluation and improvement roadmap',
      duration: '30 days',
      features: ['Process assessment', 'Tool evaluation', 'CI/CD design', 'Implementation roadmap'],
    },
    {
      icon: CheckCircle2,
      title: 'DevOps Implementation',
      description: '90-day implementation with CI/CD, IaC, and observability setup',
      duration: '90 days',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring setup', 'Team training'],
    },
    {
      icon: Building2,
      title: 'Managed DevOps',
      description: 'Ongoing DevOps management with optimization and support',
      duration: 'Ongoing',
      features: ['Pipeline optimization', '24/7 monitoring', 'SRE practices', 'Continuous improvement'],
    },
  ];

  const architectureNodes = [
    { id: '1', label: 'Source Control', description: 'Git repositories', x: 100, y: 100 },
    { id: '2', label: 'CI/CD Pipeline', description: 'Automated builds', x: 300, y: 100 },
    { id: '3', label: 'Container Registry', description: 'Docker images', x: 500, y: 100 },
    { id: '4', label: 'Kubernetes', description: 'Orchestration', x: 700, y: 100 },
    { id: '5', label: 'Monitoring', description: 'Observability', x: 400, y: 250 },
    { id: '6', label: 'Infrastructure', description: 'Cloud resources', x: 400, y: 350 },
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
                <Zap className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">DevOps</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                DevOps
                <span className="gradient-premium bg-clip-text text-transparent"> Engineering</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8">
                Self-healing pipelines, zero-downtime deployments, and enterprise DevOps automation.
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
                  RYT TechCorp delivers enterprise DevOps solutions that automate deployments, ensure reliability, 
                  and accelerate delivery. From CI/CD to Kubernetes to SRE, we build self-healing infrastructure 
                  that scales with your business.
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
                      DevOps is the engine of modern software delivery. Manual processes, poor visibility, and 
                      frequent incidents slow down innovation and damage reliability. Effective DevOps can accelerate 
                      deployments by 10x and reduce incidents by 50%.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      RYT TechCorp implements DevOps best practices with CI/CD automation, infrastructure as code, 
                      and SRE practices—ensuring fast, reliable, and scalable software delivery.
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
                  DevOps Capabilities
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
        <ArchitectureDiagram nodes={architectureNodes} title="DevOps Architecture" description="End-to-end DevOps pipeline and infrastructure" />
        <ComparisonTable rows={comparisonRows} title="RYT DevOps vs Alternatives vs DIY" />
        {relatedStudies.length > 0 && <RelatedCaseStudies studies={relatedStudies} title="DevOps Success Stories" />}
        <EngagementModel steps={engagementSteps} title="Get Started with DevOps" subtitle="Choose the engagement model that fits your needs" />
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
                  Ready to Transform Your DevOps?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Schedule a demo to see how RYT TechCorp can automate your deployments and ensure reliability with DevOps best practices.
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

export default DevOps;
