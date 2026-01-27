import { Heart, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Laurence Mallaroni</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Accompagnement vers plus de conscience, d'alignement et d'autonomie.
            </p>
            <div className="inline-flex items-center space-x-2 bg-accent text-primary px-5 py-2.5 rounded-full font-semibold shadow-lg">
              <Heart size={20} />
              <span>30 ans d'expérience</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Navigation</h4>
            <nav className="space-y-3">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'individual', label: 'Coaching' },
                { id: 'human-design', label: 'Design Humain' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="bg-accent text-primary p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} />
                </div>
                <span className="text-white/90">laurence.mallaroni@hotmail.fr</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-accent text-primary p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} />
                </div>
                <span className="text-white/90">+33 (0)6 58 12 21 01</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p className="font-medium">© 2025 Laurence Mallaroni. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
