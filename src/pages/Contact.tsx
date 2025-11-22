import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
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
    <PageBackground>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="py-24 lg:py-32 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-border-neon/30 mb-6">
                <span className="text-sm font-medium text-neon">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Let's Secure Your
                <span className="gradient-premium bg-clip-text text-transparent"> Digital Future</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Talk to our security experts about protecting your infrastructure, 
                implementing AI solutions, or building enterprise software.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Info */}
                <div className="space-y-6">
                  <Card className="glass-card p-6 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center soft-glow flex-shrink-0">
                        <Mail className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:contact@ryttechcorp.com" className="text-muted-foreground hover:text-neon transition-colors">
                          contact@ryttechcorp.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="glass-card p-6 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center soft-glow flex-shrink-0">
                        <Phone className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <a href="tel:+1234567890" className="text-muted-foreground hover:text-neon transition-colors">
                        +91 7291034330
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="glass-card p-6 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center soft-glow flex-shrink-0">
                        <MapPin className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Office</h3>
                        <p className="text-muted-foreground">
                        New Delhi<br />
                        India
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* Right Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass-card p-8 rounded-xl">
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
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageBackground>
  );
};

export default Contact;

