import { Award, Users, Gauge, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const reasons = [
  {
    icon: Award,
    stat: "99.95%",
    label: "Deployment Reliability",
    description: "Our full-stack and DevOps pipelines deliver enterprise-grade uptime and zero-downtime releases.",
  },
  {
    icon: Users,
    stat: "10+",
    label: "AI-Driven Solutions Delivered",
    description: "Trusted by global teams for end-to-end full-stack development and intelligent automation.",
  },
  {
  icon: Gauge,
  stat: "< 30min",
  label: "Security Response",
  description: "Basic security monitoring with quick issue detection and guided remediation support.",
},
  {
    icon: HeartHandshake,
    stat: "99.5%",
    label: "Client Trust Score",
    description: "Proven expertise across full-stack, AI, DevOps, and cybersecurity with dedicated support.",
  },
];

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-border-neon/30 mb-4">
              <span className="text-sm font-medium text-neon">Why RYT TechCorp</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              The Partner You Can
              <span className="gradient-premium bg-clip-text text-transparent"> Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With our experience securing critical infrastructure and delivering cutting-edge AI solutions, 
              RYT TechCorp is your strategic partner in digital transformation.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We combine deep technical expertise with a customer-first approach. 
              Every solution is tailored to your unique business needs. 
              From threat prevention to intelligent automation, we've got you covered. 
              Explore our <Link to="/#services" className="text-neon hover:underline">solutions</Link> or 
              <Link to="/contact" className="text-neon hover:underline ml-1">contact us</Link> to get started.
            </p>
            
            {/* Key Differentiators */}
            <div className="pt-4 space-y-3">
              {[
                "AI-powered penetration testing & zero-trust security implementation",
                "Scalable web/mobile product development with cloud + DevOps",
                "Enterprise-grade microservices & AI automation solution",
                "High-performance microservices integrated with smart AI automation",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full gradient-premium flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 lg:p-8 rounded-2xl border border-border-neon/20 hover:border-border-neon/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold mb-2 gradient-premium bg-clip-text text-transparent">
                    {reason.stat}
                  </div>
                  <div className="text-base font-semibold mb-2">{reason.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;