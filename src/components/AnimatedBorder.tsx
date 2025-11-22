import { ReactNode } from 'react';

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
}

const AnimatedBorder = ({ children, className = '' }: AnimatedBorderProps) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-neon rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient-x" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;
