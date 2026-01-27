interface QuoteProps {
  text: string;
  className?: string;
}

export function Quote({ text, className = '' }: QuoteProps) {
  return (
    <div className={`relative bg-accent text-primary p-8 md:p-10 rounded-2xl italic text-lg md:text-xl font-light shadow-lg border-l-4 border-secondary ${className}`}>
      <div className="absolute top-4 left-6 text-6xl text-secondary opacity-20 font-serif">"</div>
      <div className="relative z-10 pl-8">
        {text}
      </div>
    </div>
  );
}
