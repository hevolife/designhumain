import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary';
  id?: string;
}

export function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-primary text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
