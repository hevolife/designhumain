import { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
  fullscreen?: boolean;
  background?: 'primary' | 'secondary';
  backgroundImage?: string;
  className?: string;
}

export function Hero({ children, fullscreen = false, background = 'primary', backgroundImage, className = '' }: HeroProps) {
  const backgroundStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  };

  const heightStyle = fullscreen ? 'min-h-screen' : 'min-h-[35vh]';

  return (
    <div className={`${heightStyle} text-white flex items-center justify-center relative ${className}`}>
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </>
      ) : (
        <div className={`absolute inset-0 ${backgroundStyles[background]}`} />
      )}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center animate-fade-in relative z-10">
        {children}
      </div>
    </div>
  );
}
