import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Key, Zap, FileText, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Documentation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.2);

  const apiExamples = {
    authentication: `// Initialize RYT SDK
import { RYTClient } from '@ryt-tech/sdk';

const client = new RYTClient({
  apiKey: process.env.RYT_API_KEY,
  environment: 'production'
});

// Authenticate request
const response = await client.authenticate({
  userId: 'user_123',
  permissions: ['read:data', 'write:logs']
});`,
    security: `// Security monitoring endpoint
const securityCheck = await client.security.check({
  endpoint: '/api/sensitive',
  method: 'POST',
  headers: request.headers
});

if (!securityCheck.allowed) {
  return { error: securityCheck.reason };
}`,
  };

  const sdkFeatures = [
    {
      icon: Key,
      title: 'Authentication SDK',
      description: 'Secure token management, OAuth flows, and session handling.',
      version: 'v2.1.0',
      docs: '/docs/auth',
    },
    {
      icon: Zap,
      title: 'Security SDK',
      description: 'Threat detection, anomaly monitoring, and real-time alerts.',
      version: 'v1.8.2',
      docs: '/docs/security',
    },
    {
      icon: Code,
      title: 'API Client',
      description: 'TypeScript-first API client with full type safety.',
      version: 'v3.0.1',
      docs: '/docs/api',
    },
    {
      icon: FileText,
      title: 'Webhooks SDK',
      description: 'Event-driven integrations with signature verification.',
      version: 'v1.5.0',
      docs: '/docs/webhooks',
    },
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: 'Get Your API Key',
      description: 'Sign up and generate your API key from the dashboard.',
    },
    {
      step: 2,
      title: 'Install SDK',
      description: 'npm install @ryt-tech/sdk or use our REST API directly.',
    },
    {
      step: 3,
      title: 'Configure Environment',
      description: 'Set up your environment variables and test endpoints.',
    },
    {
      step: 4,
      title: 'Start Building',
      description: 'Follow our quickstart guides to integrate in minutes.',
    },
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
                <Book className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">Developer Documentation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build with
                <span className="gradient-premium bg-clip-text text-transparent"> RYT TechCorp</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8">
                Comprehensive guides, APIs, and SDKs to integrate enterprise security and AI solutions into your applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="gradient-premium">
                  <Download className="w-4 h-4 mr-2" />
                  Download SDK
                </Button>
                <Button variant="outline" className="border-border-neon/40">
                  View API Reference
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section ref={sectionRef} className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Quick Start Guide
              </h2>
              <div className="glass-card p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Installation</h3>
                <div className="rounded-lg overflow-hidden border border-border-neon/30">
                  <SyntaxHighlighter
                    language="bash"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: '1.5rem',
                      background: 'hsl(var(--secondary))',
                    }}
                  >
                    {`npm install @ryt-tech/sdk
# or
yarn add @ryt-tech/sdk
# or
pnpm add @ryt-tech/sdk`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SDK Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                SDKs & Libraries
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose the right SDK for your stack and start building in minutes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {sdkFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass-card p-6 hover:border-border-neon/50 transition-all duration-300 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-neon/10">
                          <IconComponent className="w-6 h-6 text-neon" />
                        </div>
                        <span className="px-3 py-1 bg-secondary text-xs font-semibold rounded-full">
                          {feature.version}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <Button variant="ghost" className="w-full justify-between hover:text-neon">
                        View Docs
                        <FileText className="w-4 h-4" />
                      </Button>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Examples */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                API Examples
              </h2>

              <div className="space-y-8">
                {Object.entries(apiExamples).map(([key, code], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-bold mb-4 capitalize">{key}</h3>
                    <div className="rounded-lg overflow-hidden border border-border-neon/30">
                      <SyntaxHighlighter
                        language="typescript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          background: 'hsl(var(--secondary))',
                        }}
                      >
                        {code}
                      </SyntaxHighlighter>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Onboarding Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Get Started in 4 Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {onboardingSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="glass-card p-6 hover:border-border-neon/50 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full gradient-premium flex items-center justify-center text-lg font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Version Info */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl text-center">
                <h2 className="text-2xl font-bold mb-4">API Versioning</h2>
                <p className="text-muted-foreground mb-6">
                  We maintain backward compatibility and provide clear migration paths between versions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-4 py-2 bg-secondary rounded-lg">
                    <span className="text-sm font-semibold">Current: v3.0</span>
                  </div>
                  <div className="px-4 py-2 bg-secondary rounded-lg">
                    <span className="text-sm font-semibold">Supported: v2.x, v1.x</span>
                  </div>
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

export default Documentation;

