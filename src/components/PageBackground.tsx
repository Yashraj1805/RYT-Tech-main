import { ReactNode } from 'react';
import AmbientLight from '@/components/AmbientLight';

type PageBackgroundProps = {
  children: ReactNode;
};

const PageBackground = ({ children }: PageBackgroundProps) => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <AmbientLight />
    <div className="relative z-10">{children}</div>
  </div>
);

export default PageBackground;


