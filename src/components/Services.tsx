import { Link } from "react-router-dom";
import { Shield, Cpu, Lock, Sparkles, Database, Zap,Layers } from "lucide-react";

const Services = () => {
  // Route mapping for each service
  const getServiceRoute = (title: string): string => {
    const routeMap: Record<string, string> = {
      "Cybersecurity": "/solutions/cybersecurity",
      "AI Solutions": "/solutions/ai-solutions",
      "Enterprise Software": "/solutions/enterprise-software",
      "FullStack Development": "/solutions/full-stack-development",
      "AI-Powered Security": "/solutions/cybersecurity", // Maps to cybersecurity as it's security-related
      "DevOps": "/solutions/devops",
    };
    return routeMap[title] || "#";
  };

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "End-to-end threat detection, vulnerability assessment, and incident response with 24/7 monitoring.",
      features: ["Penetration Testing", "Security Audits", "Compliance Management"],
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Custom machine learning models, NLP systems, and intelligent automation tailored to your enterprise needs.",
      features: ["Predictive Analytics", "Process Automation", "Computer Vision"],
    },
    {
      icon: Database,
      title: "Enterprise Software",
      description: "Scalable, cloud-native applications built with modern architecture and best-in-class performance.",
      features: ["Cloud Migration", "API Development", "Microservices"],
    },
    {
      icon:Layers,
      title: "FullStack Development",
      description: "Full Stack Development scalable reliable and fully responsive modern API Integration Scalable.",
      features: ["API Integration", "High Scalability", "Optimized Performance"],
    },
    {
      icon: Sparkles,
      title: "AI-Powered Security",
      description: "Leverage artificial intelligence to predict, prevent, and respond to cyber threats in real-time.",
      features: ["Threat Intelligence", "Anomaly Detection", "Automated Response"],
    },
    {
      icon: Zap,
      title: "DevOps",
      description: "Simplify your development workflow with easy CI/CD automation, faster deployments, and built-in security at every step.",
      features: ["Secure Containers", "Clean & Safe Code", "Infrastructure as Code (Easy Environment Setup)"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-border-neon/30 mb-4">
            <span className="text-sm font-medium text-neon">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive security and technology services designed for modern businesses. 
            Explore our <Link to="/contact" className="text-neon hover:underline">contact page</Link> to get started.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const route = getServiceRoute(service.title);
            return (
              <Link
                key={index}
                to={route}
                className="group glass-card p-6 lg:p-8 rounded-2xl hover:border-border-neon/60 transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
                aria-label={`Navigate to ${service.title}`}
              >
                
                {/* ✔ Icon + Title Inline */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl gradient-premium flex items-center justify-center soft-glow group-hover:neon-glow transition-all duration-300">
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
