import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.2);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Cybersecurity', 'AI & ML', 'Enterprise', 'Compliance'];

  const posts = [
    {
      title: 'Mastering Modern Full-Stack Engineering: Trends, Tools & Real-World Practices',
      excerpt: 'A deep dive into the evolving landscape of full-stack development — exploring modern frameworks, API-first architectures, cloud-native workflows, and best practices for building scalable, production-ready applications.',
      category: 'Full-Stack Development',
      author: 'Ravikant Singh',
      readTime: '7 min read',
      date: 'Mar 15, 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
      slug: 'mastering-modern-full-stack-engineering',
    },
    {
      title: 'AI-Driven Threat Detection: Real-World Case Studies',
      excerpt: 'How machine learning models are identifying sophisticated attacks before they happen.',
      category: 'AI & ML',
      author: 'Yash Raj Dubey',
      readTime: '6 min read',
      date: 'Mar 12, 2024',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop',
      slug: 'ai-driven-threat-detection',
    },
    {
      title: 'Advanced Cyber Defense: How Enterprises Combat Modern Threat Actors',
      excerpt: 'An inside look at how companies are leveraging zero-trust security, threat intelligence, EDR/XDR ecosystems, and automated detection systems to stay ahead of sophisticated cyber attackers in 2025.',
      category: 'Cybersecurity',
      author: 'Yash Raj Dubey',
      readTime: '9 min read',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=800&h=500&fit=crop',
      slug: 'advanced-cyber-defense-enterprises',
    },
    // {
    //   title: 'Building Resilient Enterprise Systems',
    //   excerpt: 'Best practices for designing fault-tolerant architectures that scale with your business.',
    //   category: 'Enterprise',
    //   author: 'Jennifer Park',
    //   readTime: '7 min read',
    //   date: 'Mar 8, 2024',
    //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    //   slug: 'resilient-enterprise-systems',
    // },
    // {
    //   title: 'The Evolution of Ransomware: Defense Strategies',
    //   excerpt: 'Understanding modern ransomware tactics and implementing proactive defense mechanisms.',
    //   category: 'Cybersecurity',
    //   author: 'Dr. Alex Kumar',
    //   readTime: '9 min read',
    //   date: 'Mar 5, 2024',
    //   image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
    //   slug: 'ransomware-defense',
    // },
    // {
    //   title: 'Neural Networks in Security Operations',
    //   excerpt: 'Leveraging deep learning for anomaly detection in enterprise security ecosystems.',
    //   category: 'AI & ML',
    //   author: 'Sarah Chen',
    //   readTime: '11 min read',
    //   date: 'Mar 1, 2024',
    //   image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    //   slug: 'neural-networks-security',
    // },
  ];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Latest
            <span className="gradient-premium bg-clip-text text-transparent"> Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert perspectives on cybersecurity, AI, and enterprise technology
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'gradient-premium' : 'border-border-neon/40 hover:border-border-neon'}
            >
              {category}
            </Button>
          ))}
        </motion.div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden hover:border-border-neon/50 transition-all duration-300 group cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={`${post.title} - ${post.category} article by ${post.author}`}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  decoding="async"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-neon/20 backdrop-blur-sm text-neon text-xs font-semibold rounded-full border border-neon/30">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full mt-4 justify-between hover:bg-neon/10 hover:text-neon transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
