import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, FileText, HelpCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import SEO from '@/components/SEO';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { toast } from '@/hooks/use-toast';

const Support = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.2);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const contactOptions = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@ryttechcorp.com',
      responseTime: '24 hours',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Real-time assistance from our team',
      contact: 'Available 9 AM - 6 PM EST',
      responseTime: 'Instant',
    },
    {
      icon: FileText,
      title: 'Ticket System',
      description: 'Submit detailed support requests',
      contact: 'Create ticket in dashboard',
      responseTime: '4-8 hours',
    },
  ];

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I get started with RYT TechCorp services?',
          a: 'Sign up for an account, verify your email, and follow our onboarding guide. You can start with our free tier to explore features.',
        },
        {
          q: 'What documentation is available?',
          a: 'We provide comprehensive API docs, SDK guides, integration tutorials, and best practices in our documentation portal.',
        },
        {
          q: 'Do you offer trial periods?',
          a: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required.',
        },
      ],
    },
    {
      category: 'Billing & Plans',
      questions: [
        {
          q: 'How does billing work?',
          a: 'We offer monthly and annual subscription plans. Billing is automatic and you can upgrade or downgrade at any time.',
        },
        {
          q: 'Can I cancel my subscription?',
          a: 'Yes, you can cancel anytime from your dashboard. Your access continues until the end of your billing period.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers.',
        },
      ],
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'What are your API rate limits?',
          a: 'Rate limits vary by plan. Free tier: 1,000 requests/day. Pro: 100,000/day. Enterprise: Custom limits.',
        },
        {
          q: 'How do I integrate your SDK?',
          a: 'Install via npm, yarn, or pnpm. Initialize with your API key and follow our quickstart guide in the docs.',
        },
        {
          q: 'Do you provide webhook support?',
          a: 'Yes, we support webhooks for real-time event notifications. Configure endpoints in your dashboard.',
        },
      ],
    },
    {
      category: 'Security & Compliance',
      questions: [
        {
          q: 'How is my data secured?',
          a: 'We use end-to-end encryption, SOC 2 Type II compliance, and follow industry best practices for data protection.',
        },
        {
          q: 'Where is data stored?',
          a: 'Data is stored in secure, compliant data centers with geographic redundancy. You can choose your preferred region.',
        },
        {
          q: 'Do you offer GDPR compliance?',
          a: 'Yes, we are GDPR compliant and provide data export, deletion, and consent management tools.',
        },
      ],
    },
  ];

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://ryt-tech-backend.onrender.com/api/tickets/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      toast({
        title: "Message Sent 🎉",
        description: "We’ll contact you soon!",
      });

      // Clear form after success
      setFormData({
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      toast({
        title: "Failed to Send ❌",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const helpCategories = [
    { name: 'All', count: faqs.reduce((acc, cat) => acc + cat.questions.length, 0) },
    { name: 'Getting Started', count: faqs[0].questions.length },
    { name: 'Billing & Plans', count: faqs[1].questions.length },
    { name: 'Technical Support', count: faqs[2].questions.length },
    { name: 'Security & Compliance', count: faqs[3].questions.length },
  ];

  const filteredFAQs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(cat => cat.category === selectedCategory);

  return (
    <PageBackground>
      <SEO
        title="Support | RYT TechCorp"
        description="Technical support, knowledge base, FAQs, and contact our team for enterprise AI and cybersecurity solutions."
        keywords="technical support, help desk, customer support, RYT TechCorp support"
        canonical="https://ryttechcorp.online/support"
        breadcrumbs={[
          { name: 'Home', url: 'https://ryttechcorp.online' },
          { name: 'Support', url: 'https://ryttechcorp.online/support' },
        ]}
      />
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
                <HelpCircle className="w-5 h-5 text-neon" />
                <span className="text-sm font-semibold text-neon">Support Center</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We're Here to
                <span className="gradient-premium bg-clip-text text-transparent"> Help</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8">
                Get assistance from our support team, browse FAQs, or submit a ticket for detailed help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Options */}
        <section ref={sectionRef} className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Support</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose the best way to reach us based on your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contactOptions.map((option, index) => {
                const IconComponent = option.icon;
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
                      <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                      <div className="flex items-center gap-2 text-sm mb-4">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{option.responseTime}</span>
                      </div>
                      <Button variant="ghost" className="w-full justify-between hover:text-neon">
                        {option.contact}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ticket Creation */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Submit a Support Ticket</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Email</label>
                    <Input
                      id='email'
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="bg-secondary/50 border-border-neon/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Subject</label>
                    <Input
                      id='subject'
                      type="text"
                      placeholder="Brief description of your issue"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="bg-secondary/50 border-border-neon/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Message</label>
                    <Textarea
                      id='message'
                      placeholder="Describe your issue in detail..."
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="bg-secondary/50 border-border-neon/30"
                    />
                  </div>
                  <Button className="w-full gradient-premium">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Submit Ticket
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find answers to common questions about our services and platform.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
              {helpCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.name)}
                  className={
                    selectedCategory === category.name
                      ? 'gradient-premium'
                      : 'border-border-neon/40 hover:border-border-neon'
                  }
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </Button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {filteredFAQs.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.questions.map((faq, index) => (
                      <Card
                        key={index}
                        className="glass-card p-6 hover:border-border-neon/50 transition-all duration-300"
                      >
                        <h4 className="text-lg font-bold mb-2 flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                          {faq.q}
                        </h4>
                        <p className="text-muted-foreground ml-7">{faq.a}</p>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageBackground>
  );
};

export default Support;

