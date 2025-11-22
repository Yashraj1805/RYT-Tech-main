import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollTrigger(sectionRef, 0.2);

  // const testimonials = [
  //   {
  //     quote: "RYT TechCorp transformed our security infrastructure. Their AI-driven approach reduced our incident response time by 90%.",
  //     author: "Sarah Mitchell",
  //     role: "CISO, Fortune 500 Financial Services",
  //     rating: 5,
  //   },
  //   {
  //     quote: "The level of expertise and professionalism is unmatched. We finally have a security partner we can trust completely.",
  //     author: "David Chen",
  //     role: "VP of Engineering, Healthcare Technology",
  //     rating: 5,
  //   },
  //   {
  //     quote: "From implementation to ongoing support, RYT TechCorp has exceeded every expectation. Our uptime has never been better.",
  //     author: "Maria Rodriguez",
  //     role: "CTO, Global E-commerce Platform",
  //     rating: 5,
  //   },
  // ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by
            <span className="gradient-premium bg-clip-text text-transparent"> Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from security professionals who chose RYT TechCorp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl hover:border-border-neon/50 transition-all duration-300 relative"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-neon text-neon" />
                ))}
              </div>
              
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border-neon/30 pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  )
};

export default Testimonials;
