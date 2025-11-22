import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Key, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';

const Security = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.2);

  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data in transit and at rest is encrypted using industry-standard AES-256 and TLS 1.3 protocols.',
    },
    {
      icon: Shield,
      title: 'Zero Trust Architecture',
      description: 'Every access request is verified, authenticated, and authorized regardless of location or network.',
    },
    {
      icon: Server,
      title: 'SOC 2 Type II Certified',
      description: 'Our infrastructure undergoes annual audits to ensure the highest security and availability standards.',
    },
    {
      icon: Key,
      title: 'Multi-Factor Authentication',
      description: 'Enforce MFA across all user accounts with support for TOTP, SMS, and hardware security keys.',
    },
    {
      icon: Eye,
      title: '24/7 Security Monitoring',
      description: 'Continuous threat detection, anomaly monitoring, and automated incident response systems.',
    },
    {
      icon: CheckCircle,
      title: 'Regular Security Audits',
      description: 'Third-party penetration testing, vulnerability assessments, and code security reviews.',
    },
  ];

  const infrastructureSecurity = [
    'Geographically distributed data centers with redundancy',
    'DDoS protection and mitigation at the edge',
    'Network segmentation and firewalling',
    'Intrusion detection and prevention systems',
    'Regular security patches and updates',
    'Disaster recovery and business continuity plans',
  ];

  const appSecMeasures = [
    'Secure software development lifecycle (SSDLC)',
    'Static and dynamic application security testing',
    'Dependency scanning and vulnerability management',
    'Code review and security training for developers',
    'API security with rate limiting and authentication',
    'Input validation and output encoding',
  ];

  const dataProtection = [
    'Data classification and handling policies',
    'Role-based access control (RBAC)',
    'Data loss prevention (DLP) measures',
    'Backup encryption and secure storage',
    'Data retention and deletion policies',
    'GDPR and privacy compliance',
  ];

  return (
    <PageBackground>
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 border border-neon/30 rounded-full mb-6">
                <Shield className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">Security Overview</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise-Grade
                <span className="gradient-premium bg-clip-text text-transparent"> Security</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8">
                Protecting your data and infrastructure with industry-leading security practices, compliance certifications, and continuous monitoring.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section ref={sectionRef} className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Features</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Multi-layered security controls protecting every aspect of our platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass-card p-6 hover:border-border-neon/50 transition-all duration-300 h-full">
                      <div className="p-3 rounded-lg bg-neon/10 w-fit mb-4">
                        <IconComponent className="w-6 h-6 text-neon" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Server className="w-8 h-8 text-neon" />
                  Infrastructure Security
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our cloud infrastructure is built on industry-leading platforms with multiple layers of security controls.
                </p>
                <ul className="space-y-3">
                  {infrastructureSecurity.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Application Security */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-neon" />
                  Application Security
                </h2>
                <p className="text-muted-foreground mb-6">
                  Security is built into every stage of our development process, from design to deployment.
                </p>
                <ul className="space-y-3">
                  {appSecMeasures.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Lock className="w-8 h-8 text-neon" />
                  Data Protection
                </h2>
                <p className="text-muted-foreground mb-6">
                  Comprehensive data protection measures ensure your information remains secure and private.
                </p>
                <ul className="space-y-3">
                  {dataProtection.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Encryption Standards */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Key className="w-8 h-8 text-neon" />
                  Encryption Standards
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Data in Transit</h3>
                    <p>TLS 1.3 with perfect forward secrecy, enforcing strong cipher suites and certificate pinning where applicable.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Data at Rest</h3>
                    <p>AES-256 encryption for all stored data, with separate encryption keys managed through a secure key management service.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Key Management</h3>
                    <p>Hardware security modules (HSMs) for key storage, automated key rotation, and strict access controls.</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SOC Monitoring */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Eye className="w-8 h-8 text-neon" />
                  Security Operations Center (SOC)
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                  Our 24/7 Security Operations Center provides continuous monitoring, threat detection, and rapid incident response.
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Real-time log analysis and correlation</li>
                    <li>Automated threat detection using AI and machine learning</li>
                    <li>Incident response playbooks and escalation procedures</li>
                    <li>Security information and event management (SIEM)</li>
                    <li>Vulnerability scanning and patch management</li>
                    <li>Threat intelligence feeds and indicators of compromise (IOCs)</li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl text-center">
                <h2 className="text-2xl font-bold mb-4">Report a Security Issue</h2>
                <p className="text-muted-foreground mb-6">
                  If you discover a security vulnerability, please report it responsibly to our security team.
                </p>
                <div className="space-y-2">
                  <p className="text-foreground font-semibold">security@ryttechcorp.com</p>
                  <p className="text-sm text-muted-foreground">
                    We appreciate responsible disclosure and will acknowledge valid reports within 48 hours.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageBackground>
  );
};

export default Security;

