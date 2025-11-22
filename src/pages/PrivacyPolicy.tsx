import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';

const PrivacyPolicy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.2);

  const tocSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'data-collection', title: 'Data Collection' },
    { id: 'data-usage', title: 'How We Use Your Data' },
    { id: 'data-storage', title: 'Data Storage & Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'gdpr', title: 'GDPR Compliance' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'third-party', title: 'Third-Party Services' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' },
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
                <span className="text-sm font-semibold text-neon">Legal Document</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy
                <span className="gradient-premium bg-clip-text text-transparent"> Policy</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-4">
                Last Updated: January 15, 2025
              </p>
              <p className="text-muted-foreground">
                Your privacy is important to us. This policy explains how RYT TechCorp collects, uses, and protects your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section ref={sectionRef} className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-neon" />
                  Table of Contents
                </h2>
                <ul className="space-y-2">
                  {tocSections.map((section, index) => (
                    <li key={index}>
                      <a
                        href={`#${section.id}`}
                        className="text-muted-foreground hover:text-neon transition-colors flex items-center gap-2"
                      >
                        <span className="text-neon">{index + 1}.</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Overview */}
              <motion.div
                id="overview"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">1. Overview</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      RYT TechCorp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our website, APIs, and software solutions.
                    </p>
                    <p>
                      By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Data Collection */}
              <motion.div
                id="data-collection"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <Database className="w-8 h-8 text-neon" />
                    2. Data Collection
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-semibold text-foreground">We collect the following types of information:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li><strong className="text-foreground">Account Information:</strong> Name, email address, company name, and contact details when you create an account.</li>
                      <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our services, including API calls, feature usage, and performance metrics.</li>
                      <li><strong className="text-foreground">Technical Data:</strong> IP addresses, browser type, device information, and log files.</li>
                      <li><strong className="text-foreground">Payment Information:</strong> Processed securely through third-party payment processors. We do not store full credit card details.</li>
                      <li><strong className="text-foreground">Communication Data:</strong> Messages, support tickets, and feedback you provide to us.</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Data Usage */}
              <motion.div
                id="data-usage"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <Eye className="w-8 h-8 text-neon" />
                    3. How We Use Your Data
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use collected information for the following purposes:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>To provide, maintain, and improve our services</li>
                      <li>To process transactions and send related information</li>
                      <li>To send technical notices, updates, and support messages</li>
                      <li>To respond to your comments, questions, and requests</li>
                      <li>To monitor and analyze usage patterns and trends</li>
                      <li>To detect, prevent, and address technical issues and security threats</li>
                      <li>To comply with legal obligations and enforce our terms</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Data Storage & Security */}
              <motion.div
                id="data-storage"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <Lock className="w-8 h-8 text-neon" />
                    4. Data Storage & Security
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We implement industry-standard security measures to protect your data:
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li><strong className="text-foreground">Encryption:</strong> All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.</li>
                      <li><strong className="text-foreground">Access Controls:</strong> Strict access controls and authentication mechanisms limit who can access your data.</li>
                      <li><strong className="text-foreground">Infrastructure:</strong> Data is stored in SOC 2 Type II compliant data centers with geographic redundancy.</li>
                      <li><strong className="text-foreground">Monitoring:</strong> Continuous security monitoring and threat detection systems protect against unauthorized access.</li>
                      <li><strong className="text-foreground">Incident Response:</strong> We maintain an incident response plan and will notify affected users of any data breaches as required by law.</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Data Retention */}
              <motion.div
                id="data-retention"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">5. Data Retention</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Account data is retained while your account is active and for 30 days after account deletion.</li>
                      <li>Transaction records are retained for 7 years to comply with financial regulations.</li>
                      <li>Log data is retained for 90 days for security and troubleshooting purposes.</li>
                      <li>You may request deletion of your data at any time, subject to legal retention requirements.</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                id="your-rights"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">6. Your Rights</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You have the following rights regarding your personal data:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li><strong className="text-foreground">Access:</strong> Request a copy of your personal data</li>
                      <li><strong className="text-foreground">Rectification:</strong> Correct inaccurate or incomplete data</li>
                      <li><strong className="text-foreground">Erasure:</strong> Request deletion of your data</li>
                      <li><strong className="text-foreground">Portability:</strong> Receive your data in a structured, machine-readable format</li>
                      <li><strong className="text-foreground">Objection:</strong> Object to processing of your data for certain purposes</li>
                      <li><strong className="text-foreground">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    </ul>
                    <p>To exercise these rights, contact us at privacy@ryttechcorp.com.</p>
                  </div>
                </Card>
              </motion.div>

              {/* GDPR Compliance */}
              <motion.div
                id="gdpr"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <Shield className="w-8 h-8 text-neon" />
                    7. GDPR Compliance
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      RYT TechCorp is committed to compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>We act as a data controller for account and usage data, and as a data processor for customer data processed through our services.</li>
                      <li>We have implemented appropriate technical and organizational measures to ensure GDPR compliance.</li>
                      <li>We provide data processing agreements (DPAs) for enterprise customers.</li>
                      <li>We support data subject rights including access, rectification, erasure, and portability.</li>
                      <li>We maintain records of processing activities and conduct data protection impact assessments where required.</li>
                    </ul>
                    <p>
                      For EU residents, our legal basis for processing includes consent, contract performance, legal obligations, and legitimate interests.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Cookies */}
              <motion.div
                id="cookies"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">8. Cookies & Tracking</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use cookies and similar tracking technologies to:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Maintain your session and authentication state</li>
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website usage and improve user experience</li>
                      <li>Provide personalized content and recommendations</li>
                    </ul>
                    <p>You can control cookies through your browser settings. Note that disabling cookies may affect functionality of our services.</p>
                  </div>
                </Card>
              </motion.div>

              {/* Third-Party Services */}
              <motion.div
                id="third-party"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">9. Third-Party Services</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We may use third-party services that have access to your information:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li><strong className="text-foreground">Cloud Providers:</strong> AWS, Google Cloud for infrastructure</li>
                      <li><strong className="text-foreground">Payment Processors:</strong> Stripe, PayPal for payment processing</li>
                      <li><strong className="text-foreground">Analytics:</strong> Google Analytics for usage analytics (anonymized)</li>
                      <li><strong className="text-foreground">Support Tools:</strong> Intercom, Zendesk for customer support</li>
                    </ul>
                    <p>All third-party services are bound by confidentiality agreements and data processing agreements where applicable.</p>
                  </div>
                </Card>
              </motion.div>

              {/* Policy Changes */}
              <motion.div
                id="changes"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">10. Policy Changes</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                    </p>
                    <p>
                      For significant changes, we will provide additional notice via email or through our services. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Contact */}
              <motion.div
                id="contact"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="scroll-mt-24"
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">11. Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                    <ul className="space-y-2">
                      <li><strong className="text-foreground">Email:</strong> privacy@ryttechcorp.com</li>
                      <li><strong className="text-foreground">Data Protection Officer:</strong> dpo@ryttechcorp.com</li>
                      <li><strong className="text-foreground">Address:</strong> RYT TechCorp, Data Protection Office</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageBackground>
  );
};

export default PrivacyPolicy;

