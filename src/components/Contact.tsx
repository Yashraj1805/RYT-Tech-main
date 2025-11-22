import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
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
      const res = await fetch("https://ryt-tech-backend.onrender.com/api/users/message", {
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
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
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
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-border-neon/30 mb-4">
                <span className="text-sm font-medium text-neon">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Let's Secure Your
                <span className="gradient-premium bg-clip-text text-transparent"> Digital Future</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Talk to our security experts about protecting your infrastructure, 
                implementing AI solutions, or building enterprise software.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center soft-glow flex-shrink-0">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email Us</div>
                  <a href="mailto:contact@ryttechcorp.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@ryttechcorp.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center soft-glow flex-shrink-0">
                  <Phone className="w-5 h-5 text-background" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Call Us</div>
                  <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 7291034330
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center soft-glow flex-shrink-0">
                  <MapPin className="w-5 h-5 text-background" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Visit Us</div>
                  <p className="text-muted-foreground">
                    New Delhi<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-card p-6 rounded-xl border border-border-neon/30">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-neon animate-pulse" />
                <span className="font-semibold">Typical response time: Under 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-card p-8 lg:p-10 rounded-2xl border border-border-neon/30">
           <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Work Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium">
                  Company Name
                </label>
                <Input
                  id="companyName"
                  placeholder="Acme Corp"
                  value={formData.companyName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your security needs..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-premium neon-glow hover:scale-105 transition-transform duration-200 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
