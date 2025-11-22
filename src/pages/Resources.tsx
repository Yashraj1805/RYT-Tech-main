import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Book, Code, FileText, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBorder from '@/components/AnimatedBorder';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.2);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const navigate = useNavigate();

  const categories = ['All', 'Guides', 'API Docs', 'Whitepapers', 'Case Studies'];

  const resources = [
    {
      title: 'Getting Started with Zero Trust Security',
      category: 'Guides',
      type: 'guide',
      description: 'Comprehensive guide to implementing zero trust architecture in your enterprise.',
      icon: Book,
      downloadUrl: '#',
      readTime: '15 min read',
    },
    {
      title: 'API Authentication & Authorization',
      category: 'API Docs',
      type: 'api',
      description: 'Complete API documentation for implementing secure authentication flows.',
      icon: Code,
      downloadUrl: '#',
      readTime: '20 min read',
    },
    {
      title: 'Enterprise Security Best Practices 2024',
      category: 'Whitepapers',
      type: 'whitepaper',
      description: 'Industry-leading insights on modern cybersecurity frameworks and compliance.',
      icon: FileText,
      downloadUrl: '#',
      pages: '42 pages',
    },
    {
      title: 'AI-Powered Threat Detection Guide',
      category: 'Guides',
      type: 'guide',
      description: 'Step-by-step implementation guide for ML-based security monitoring.',
      icon: Book,
      downloadUrl: '#',
      readTime: '25 min read',
    },
    {
      title: 'REST API Reference',
      category: 'API Docs',
      type: 'api',
      description: 'Complete REST API documentation with code examples and best practices.',
      icon: Code,
      downloadUrl: '#',
      readTime: '30 min read',
    },
    {
      title: 'Cloud Security Architecture Whitepaper',
      category: 'Whitepapers',
      type: 'whitepaper',
      description: 'Strategic approach to securing cloud infrastructure at scale.',
      icon: FileText,
      downloadUrl: '#',
      pages: '56 pages',
    },
    {
      title: 'GDPR Compliance Implementation Guide',
      category: 'Guides',
      type: 'guide',
      description: 'Technical guide for achieving and maintaining GDPR compliance.',
      icon: Book,
      downloadUrl: '#',
      readTime: '18 min read',
    },
    {
      title: 'WebSocket Security API',
      category: 'API Docs',
      type: 'api',
      description: 'Real-time security monitoring API with WebSocket integration.',
      icon: Code,
      downloadUrl: '#',
      readTime: '12 min read',
    },
    {
      title: 'The Future of Cybersecurity',
      category: 'Whitepapers',
      type: 'whitepaper',
      description: 'Research on emerging threats and next-generation defense strategies.',
      icon: FileText,
      downloadUrl: '#',
      pages: '38 pages',
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIconColor = (type: string) => {
    switch (type) {
      case 'guide': return 'text-blue-400';
      case 'api': return 'text-purple-400';
      case 'whitepaper': return 'text-cyan-400';
      default: return 'text-neon';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resources &
              <span className="gradient-premium bg-clip-text text-transparent"> Documentation</span>
            </h1>
            <p className="text-muted-foreground text-xl mb-12">
              Technical guides, API documentation, and whitepapers to help you build secure enterprise systems
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-secondary/50 border-border-neon/30 focus:border-neon transition-colors text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'gradient-premium' : 'border-border-neon/40 hover:border-border-neon'}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section ref={sectionRef} className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredResources.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-xl">No resources found matching your criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass-card p-6 hover:border-border-neon/50 transition-all duration-300 group h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-secondary/50 ${getIconColor(resource.type)}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 bg-neon/10 text-neon text-xs font-semibold rounded-full border border-neon/30">
                          {resource.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-neon transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-sm text-muted-foreground">
                          {resource.readTime || resource.pages}
                        </span>
                        <AnimatedBorder>
                          <Button
                            variant="ghost"
                            className="hover:text-neon transition-colors"
                            onClick={() => ("#")}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </AnimatedBorder>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Documentation?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our team can create tailored technical documentation and training materials for your specific security needs.
            </p>
            <AnimatedBorder>
              <Button size="lg" className="gradient-premium text-lg px-8" onClick={()=> navigate('/contact')}>
                Contact Our Team
              </Button>
            </AnimatedBorder>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
