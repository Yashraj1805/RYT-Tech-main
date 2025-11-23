import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Solutions", href: "/#services", isHash: true },
    { label: "Resources", href: "/resources", isHash: false },
    { label: "Blog", href: "/#blog", isHash: true },
    { label: "Contact", href: "/#contact", isHash: true },
  ];

  const handleNavClick = (href: string, isHash: boolean) => {
    if (isHash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          if (typeof document !== 'undefined') {
            const element = document.querySelector(href.replace('/', ''));
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        if (typeof document !== 'undefined') {
          const element = document.querySelector(href.replace('/', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src="/assets/logo/logo.png" 
              alt="RYT TechCorp Logo - Enterprise AI, Cybersecurity & Software Solutions" 
              width={200}
              height={60}
              className="h-14 md:h-16 w-auto" 
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isHash)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              className="gradient-premium soft-glow hover:scale-105 transition-transform duration-200"
              onClick={() => navigate('/contact')}
              aria-label="Go to contact form"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-up">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isHash)}
                className="block w-full text-left py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              className="w-full gradient-premium soft-glow"
              onClick={() => navigate('/contact')}
              aria-label="Go to contact form"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
