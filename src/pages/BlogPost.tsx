import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import SEO from '@/components/SEO';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Mock blog data - in production, fetch from API
  const posts: Record<string, any> = {
    'mastering-modern-full-stack-engineering': {
      title: 'Mastering Modern Full-Stack Engineering: Trends, Tools & Real-World Practices',
      category: 'Full-Stack Development',
      author: 'Ravikant Singh',
      readTime: '7 min read',
      date: 'Mar 15, 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
      content: `
# Mastering Modern Full-Stack Engineering

Modern full-stack engineering is equal parts orchestration and precision. Teams operate across APIs, UI systems, distributed data, and infrastructure automation while staying ruthlessly focused on developer experience.

## Premium Introduction

- API-first contracts unlock partner ecosystems and reduce rework.
- Service boundaries are now defined by data ownership and latency targets.
- Engineers expect feedback loops measured in seconds, not minutes.

## Trends to Watch

### API-First & Microservices
Design interfaces before writing UI. Use domain-driven design to map bounded contexts, then expose GraphQL/REST interfaces that clients can depend on across releases.

### Serverless & Edge Runtimes
Move compute closer to users for personalization, experimentation, and real-time signals. Pair AWS Lambda, Cloudflare Workers, or Vercel Edge with pub/sub pipelines for streaming state.

### Cloud-Native Workflows
GitOps, infrastructure as code, and ephemeral preview environments became the default. Engineers spin up entire stacks in minutes to validate features before merging.

## Tooling Essentials

- **React & Next.js** for hybrid rendering, route-level data fetching, and progressive enhancement.
- **Node.js + Prisma** to deliver scalable APIs with end-to-end typing and migrations baked in.
- **Docker & Kubernetes** for consistent dev/prod parity, auto-scaling, and service discovery.
- **Storybook, Turborepo, NX** to keep component libraries, docs, and tests aligned within a monorepo.

## Best Practices

1. **Clean Architecture:** Keep business logic isolated from frameworks so upgrades don’t cause rewrites.
2. **DX & Automation:** CLI scaffolds, lint-staged hooks, and one-command environment spins accelerate onboarding.
3. **CI/CD Discipline:** Blue/green deployments, canary builds, and contract tests prevent regressions at scale.
4. **Testing Stack:** Combine Vitest/Jest, Playwright, and contract tests to cover logic, UI, and integrations.

## Real-World Examples

- **Fintech Scale-Up:** Adopted API-first architecture with Prisma and GraphQL, allowing mobile and partner teams to ship independently.
- **Healthcare Platform:** Leveraged Next.js + edge middleware for HIPAA-compliant personalization under 200ms.
- **SaaS Infrastructure Team:** Used Kubernetes and ArgoCD to roll out real-time features globally without downtime.

## Summary

Mastering full-stack engineering today means blending architecture rigor with relentless attention to developer experience. Teams that standardize on API-first thinking, automate workflows, and invest in observability deliver enterprise-grade platforms that scale elegantly.
      `,
    },
    'ai-driven-threat-detection': {
      title: 'AI-Driven Threat Detection: Real-World Case Studies',
      category: 'AI & ML',
      author: 'Yash Raj Dubey',
      readTime: '6 min read',
      date: 'Mar 12, 2024',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=600&fit=crop',
      content: `
# AI-Driven Threat Detection

Machine learning models are revolutionizing cybersecurity by identifying sophisticated attacks before they happen.

## Case Study: Financial Institution

A major bank implemented our AI-driven threat detection system and achieved:

- 99.2% accuracy in identifying phishing attempts
- Real-time detection of anomalous transactions
- 78% reduction in false positives

## Technical Implementation

\`\`\`python
import tensorflow as tf
from sklearn.preprocessing import StandardScaler

class ThreatDetectionModel:
    def __init__(self):
        self.model = self.build_model()
        self.scaler = StandardScaler()
    
    def build_model(self):
        model = tf.keras.Sequential([
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dropout(0.3),
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        return model
\`\`\`

## Key Takeaways

AI-driven threat detection is no longer optional—it's essential for modern enterprise security.
      `,
    },
    'advanced-cyber-defense-enterprises': {
      title: 'Advanced Cyber Defense: How Enterprises Combat Modern Threat Actors',
      category: 'Cybersecurity',
      author: 'Yash Raj Dubey',
      readTime: '9 min read',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=1200&h=600&fit=crop',
      content: `
# Advanced Cyber Defense: How Enterprises Combat Modern Threat Actors

Threat groups now weaponize AI, rent access broker kits, and pivot through SaaS tenants faster than legacy defenses can react. Modern enterprises answer with zero-trust guardrails, telemetry-rich detection stacks, and automated security operations that keep pace with attackers.

## The Modern Threat Actor

- Combines social engineering, MFA fatigue attacks, and supply-chain pivots in a single campaign.
- Leverages ransomware-as-a-service marketplaces for polished payloads and negotiation playbooks.
- Moves laterally within minutes, targeting identity platforms, CI/CD pipelines, and data lakes.

## Zero-Trust Execution

Zero-trust goes beyond slogans—it is policy-as-code that verifies every session. Device health, user risk, and resource sensitivity drive adaptive responses such as step-up MFA, session isolation, or just-in-time access approval.

## EDR/XDR and MFA Hardening

Extended detection and response tools ingest telemetry from endpoints, SaaS, cloud, and OT networks. When paired with phishing-resistant MFA (FIDO2 keys, certificate-based auth, conditional access), credential theft turns into a dead end rather than a breach.

## Threat Intelligence Workflows

Fusion teams blend ISAC feeds, commercial intel, and internal detections to create action-ready insights. Automated enrichment tags indicators with MITRE ATT&CK techniques, confidence scores, and recommended playbooks so analysts can prioritize what matters.

## SOC Automation Powered by AI

AI copilots triage noisy alerts, summarize historical context, and trigger scripted responses. Runbooks isolate suspicious hosts, rotate keys, and notify owners automatically, buying humans the time to investigate root causes instead of drowning in tickets.

## Real-World Attack Patterns

- **Supply-Chain Backdoors:** Attackers poison build pipelines. Enterprises respond with signed artifacts, SBOM validation, and staged deployments that catch tampering before production.
- **Ransomware Double Extortion:** Defenders combine immutable backups, micro-segmentation, and behavioral analytics to contain impact while legal/PR teams manage disclosure.
- **Business Email Compromise:** Relationship graphs, natural language models, and adaptive MFA block fraudulent wire requests even when attackers hijack trusted inboxes.

## Decision-Maker Summary

Cyber resilience is now a leadership discipline. Organizations that operationalize zero-trust, invest in XDR telemetry, and automate SOC workflows consistently outpace threat actors. The mandate is clear: align people, processes, and platforms so every breach attempt becomes a rehearsed scenario—not a crisis.
      `,
    },
  };

  const post = posts[slug || ''] || posts['mastering-modern-full-stack-engineering'];
  const shareUrl = window.location.href;

  const renderContent = (content: string) => {
    const parts = content.split(/```(\w+)?\n([\s\S]*?)```/);
    
    return parts.map((part, index) => {
      if (index % 3 === 1) {
        // This is the language identifier
        return null;
      } else if (index % 3 === 2) {
        // This is code block content
        const language = parts[index - 1] || 'javascript';
        return (
          <div key={index} className="my-6 rounded-lg overflow-hidden border border-border-neon/30">
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1.5rem',
                background: 'hsl(var(--secondary))',
              }}
            >
              {part.trim()}
            </SyntaxHighlighter>
          </div>
        );
      } else {
        // Regular markdown content
        return (
          <div
            key={index}
            className="prose prose-invert max-w-none prose-headings:gradient-premium prose-headings:bg-clip-text prose-headings:text-transparent prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: part
                .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold mt-8 mb-4">$1</h1>')
                .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold mt-6 mb-3">$1</h2>')
                .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold mt-4 mb-2">$1</h3>')
                .replace(/^\* (.+)$/gm, '<li class="ml-6 mb-2">$1</li>')
                .replace(/^- (.+)$/gm, '<li class="ml-6 mb-2">$1</li>')
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(?!<[h|l|p])/gm, '<p class="mb-4">')
            }}
          />
        );
      }
    });
  };

  if (!post) {
    return (
      <PageBackground>
        <SEO
          title="Blog Post Not Found | RYT TechCorp"
          description="The requested blog post could not be found."
          noindex={true}
        />
        <Navigation />
        <div className="pt-24 pb-16 text-center">
          <h1>Post Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
        <Footer />
      </PageBackground>
    );
  }

  const postDescription = post.excerpt || post.content.substring(0, 150) + '...';
  const optimizedDescription = postDescription.length > 155 ? postDescription.substring(0, 152) + '...' : postDescription;

  return (
    <PageBackground>
      <SEO
        title={`${post.title} | RYT TechCorp Blog`}
        description={optimizedDescription}
        keywords={`${post.category}, ${post.author}, enterprise technology, RYT TechCorp`}
        ogImage={post.image}
        canonical={`https://ryttechcorp.online/blog/${slug}`}
        breadcrumbs={[
          { name: 'Home', url: 'https://ryttechcorp.online' },
          { name: 'Blog', url: 'https://ryttechcorp.online/#blog' },
          { name: post.title, url: `https://ryttechcorp.online/blog/${slug}` },
        ]}
      />
      <Navigation />
      
      <article className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={`${post.title} - Featured image for ${post.category} article`}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          
          <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="mb-6 hover:text-neon transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
              
              <span className="inline-block px-4 py-1 bg-neon/20 backdrop-blur-sm text-neon text-sm font-semibold rounded-full border border-neon/30 mb-4">
                {post.category}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-premium bg-clip-text text-transparent">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            {/* Share Buttons */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Share2 className="w-5 h-5 mr-3 text-neon" />
                  <span className="text-foreground font-semibold">Share this article</span>
                </div>
                <div className="flex gap-3">
                  <TwitterShareButton url={shareUrl} title={post.title}>
                    <TwitterIcon size={40} round className="hover:opacity-80 transition-opacity" />
                  </TwitterShareButton>
                  <LinkedinShareButton url={shareUrl} title={post.title}>
                    <LinkedinIcon size={40} round className="hover:opacity-80 transition-opacity" />
                  </LinkedinShareButton>
                  <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={40} round className="hover:opacity-80 transition-opacity" />
                  </FacebookShareButton>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="text-lg leading-relaxed">
              {renderContent(post.content)}
            </div>

            {/* Author Bio */}
            <div className="glass-card rounded-xl p-8 mt-12">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-premium flex items-center justify-center text-2xl font-bold">
                  {post.author.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                  <p className="text-muted-foreground">
                  Cybersecurity and enterprise systems specialist with a strong focus on threat-resistant architectures, secure design principles, and end-to-end protection of digital platforms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </PageBackground>
  );
};

export default BlogPost;
