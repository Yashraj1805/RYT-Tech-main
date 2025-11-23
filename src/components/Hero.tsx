import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ParticleEffect from "@/components/ParticleEffect";
import Logo3D from "@/components/Logo3D";
import AnimatedBorder from "@/components/AnimatedBorder";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section id="solutions" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Holographic Wave Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Particle Effect */}
      <ParticleEffect />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
          {/* 3D Logo */}
          <Logo3D />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-border-neon/30"
          >
            <div className="w-2 h-2 rounded-full bg-neon animate-pulse mr-2" />
            <span className="text-sm font-medium">Enterprise Security. AI-Powered.</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Secure Your Digital Future with AI
          </h1>

          {/* Subheadline */}
          <h2 className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
            Enterprise-grade software, AI solutions, and cybersecurity services. 
            Protect what matters most—your data, your users, your business.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <AnimatedBorder>
              <Button
                size="lg"
                className="gradient-premium text-base font-semibold px-8 py-6 neon-glow hover:scale-105 transition-transform duration-200"
                onClick={() => navigate('/contact')}
                aria-label="Go to contact form"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedBorder>
            <AnimatedBorder>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-8 py-6 border-border-neon/40 hover:border-border-neon hover:bg-secondary/50 transition-all duration-200"
                onClick={() => {
                  const serviceSection = document.querySelector("#services");
                  serviceSection?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="Scroll to solutions section"
              >
                View Solutions
              </Button>
            </AnimatedBorder>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;