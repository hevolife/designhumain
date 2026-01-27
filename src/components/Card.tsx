import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  image?: string;
  imageAlt?: string;
}

export function Card({ children, className = '', hover = true, onClick, image, imageAlt = '' }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${hoverStyles} ${clickableStyles} ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}
