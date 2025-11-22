import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';

const Terms = () => {

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
                <Scale className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">Legal Agreement</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of
                <span className="gradient-premium bg-clip-text text-transparent"> Service</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-4">
                Last Updated: January 15, 2025
              </p>
              <p className="text-muted-foreground">
                Please read these terms carefully before using RYT TechCorp services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Agreement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="w-8 h-8 text-neon" />
                    1. Agreement to Terms
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      By accessing or using RYT TechCorp's services, websites, APIs, or software ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Services.
                    </p>
                    <p>
                      These Terms constitute a legally binding agreement between you ("User," "you," or "your") and RYT TechCorp ("Company," "we," "our," or "us"). If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Description of Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">2. Description of Services</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>RYT TechCorp provides:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Enterprise cybersecurity solutions and threat detection services</li>
                      <li>AI-powered software development and automation tools</li>
                      <li>Cloud infrastructure and DevOps services</li>
                      <li>APIs, SDKs, and developer tools</li>
                      <li>Consulting and professional services</li>
                    </ul>
                    <p>We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time with or without notice.</p>
                  </div>
                </Card>
              </motion.div>

              {/* User Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">3. User Responsibilities</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You agree to:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Provide accurate, current, and complete information when creating an account</li>
                      <li>Maintain the security of your account credentials and notify us of unauthorized access</li>
                      <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
                      <li>Not interfere with or disrupt the Services or servers connected to the Services</li>
                      <li>Not attempt to gain unauthorized access to any portion of the Services</li>
                      <li>Comply with all applicable laws, regulations, and third-party rights</li>
                      <li>Not use the Services to transmit malicious code, spam, or illegal content</li>
                      <li>Respect intellectual property rights of RYT TechCorp and third parties</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Acceptable Use */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <Shield className="w-8 h-8 text-neon" />
                    4. Acceptable Use Policy
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Prohibited activities include:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Violating any applicable laws or regulations</li>
                      <li>Infringing on intellectual property, privacy, or other rights</li>
                      <li>Transmitting viruses, malware, or harmful code</li>
                      <li>Engaging in fraudulent, abusive, or deceptive practices</li>
                      <li>Reverse engineering, decompiling, or disassembling our software</li>
                      <li>Using automated systems to access the Services without permission</li>
                      <li>Reselling or redistributing Services without authorization</li>
                      <li>Interfering with the security or integrity of the Services</li>
                    </ul>
                    <p>Violation of this policy may result in immediate termination of your account and legal action.</p>
                  </div>
                </Card>
              </motion.div>

              {/* Limitations of Liability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-8 h-8 text-neon" />
                    5. Limitations of Liability
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>The Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied.</li>
                      <li>We do not guarantee that the Services will be uninterrupted, error-free, or completely secure.</li>
                      <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages.</li>
                      <li>Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.</li>
                      <li>We are not responsible for third-party services, content, or websites linked from our Services.</li>
                    </ul>
                    <p>
                      Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Disclaimers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">6. Disclaimers</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>RYT TechCorp disclaims all warranties, express or implied, including:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                      <li>Warranties regarding the accuracy, reliability, or availability of the Services</li>
                      <li>Warranties that the Services will meet your requirements or expectations</li>
                      <li>Warranties regarding security, data loss, or unauthorized access</li>
                    </ul>
                    <p>
                      You acknowledge that you use the Services at your own risk and are solely responsible for any damage to your computer system or loss of data.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Intellectual Property */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">7. Intellectual Property</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, software, and code, are owned by RYT TechCorp or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <p>
                      You are granted a limited, non-exclusive, non-transferable license to access and use the Services for your internal business purposes in accordance with these Terms. This license does not include the right to:
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Resell or commercially exploit the Services</li>
                      <li>Modify, adapt, or create derivative works</li>
                      <li>Reverse engineer or extract source code</li>
                      <li>Remove or alter any proprietary notices</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Payment Terms */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">8. Payment Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                      <li>All fees are non-refundable except as required by law or as explicitly stated</li>
                      <li>We reserve the right to change pricing with 30 days' notice</li>
                      <li>Failure to pay may result in suspension or termination of Services</li>
                      <li>You are responsible for all taxes applicable to your use of the Services</li>
                      <li>Refunds are provided at our sole discretion for exceptional circumstances</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">9. Termination</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong className="text-foreground">By You:</strong> You may terminate your account at any time by contacting us or using account deletion features in the dashboard.</p>
                    <p><strong className="text-foreground">By Us:</strong> We may terminate or suspend your account immediately if:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>You breach these Terms or our policies</li>
                      <li>You engage in fraudulent or illegal activity</li>
                      <li>You fail to pay applicable fees</li>
                      <li>We discontinue the Services</li>
                      <li>Required by law or regulatory authority</li>
                    </ul>
                    <p>Upon termination, your right to use the Services will cease immediately. We may delete your data after a reasonable retention period.</p>
                  </div>
                </Card>
              </motion.div>

              {/* Governing Law */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">10. Governing Law & Dispute Resolution</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which RYT TechCorp is incorporated, without regard to its conflict of law provisions.
                    </p>
                    <p>
                      Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law. You waive any right to a jury trial or to participate in a class action.
                    </p>
                    <p>
                      If arbitration is not permitted, you agree to submit to the exclusive jurisdiction of the courts located in our jurisdiction.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Changes to Terms */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">11. Changes to Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last Updated" date.
                    </p>
                    <p>
                      Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Services and terminate your account.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Card className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">12. Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have questions about these Terms, please contact us:</p>
                    <ul className="space-y-2">
                      <li><strong className="text-foreground">Email:</strong> legal@ryttechcorp.com</li>
                      <li><strong className="text-foreground">Support:</strong> support@ryttechcorp.com</li>
                      <li><strong className="text-foreground">Address:</strong> RYT TechCorp Legal Department</li>
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

export default Terms;

