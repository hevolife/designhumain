import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'human-design', label: 'Design Humain' },
    { id: 'individual', label: 'Coaching' },
    { id: 'pricing', label: 'Tarifs' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingClick = () => {
    onNavigate('pricing');
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById('passer-action');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-left transition-all duration-300 hover:scale-105 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <div className="text-xl md:text-2xl font-bold tracking-wide">
              LAURENCE MALLARONI
            </div>
            <div className="text-xs md:text-sm font-medium opacity-90">
              Design Humain & Coaching
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  currentPage === item.id
                    ? isScrolled
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-accent border-b-2 border-accent'
                    : isScrolled
                    ? 'text-secondary hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="accent"
              size="sm"
              onClick={handleBookingClick}
            >
              Prendre rendez-vous
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-2xl border-t border-gray-100 animate-fade-in-up">
          <div className="container mx-auto px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-6 py-3 rounded-xl transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-accent text-primary font-bold shadow-md scale-105'
                    : 'text-secondary hover:bg-gray-100 hover:scale-105 font-semibold'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="accent"
              fullWidth
              onClick={handleBookingClick}
            >
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
