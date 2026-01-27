import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Heart, Award, Users, Lightbulb, Handshake, TrendingUp } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const values = [
    { icon: Heart, title: 'Respect', description: 'De soi et des autres' },
    { icon: Handshake, title: 'Tolérance', description: 'Accueillir la différence' },
    { icon: Lightbulb, title: 'Autonomie', description: 'Développer son pouvoir personnel' },
    { icon: Users, title: 'Partage', description: 'Créer du lien authentique' },
    { icon: Award, title: 'Altruisme', description: 'Contribuer au bien commun' },
    { icon: TrendingUp, title: 'Réussite', description: 'Alignée avec ses valeurs' },
  ];

  const timeline = [
    {
      title: 'Direction d\'établissements',
      description: '30 ans d\'expérience en leadership et management',
    },
    {
      title: 'Coach certifié',
      description: 'Coaching individuel, d\'équipe et de performance',
    },
    {
      title: 'Engagement humain',
      description: 'Un parcours dédié à l\'accompagnement de l\'humain et à sa transformation',
    },
    {
      title: 'Analyste en Design Humain',
      description: 'Expert en système de connaissance de soi',
    },
  ];

  return (
    <>
      <Hero fullscreen={false}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          À Propos
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          30 ans d'expérience au service de votre transformation
        </p>
      </Hero>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://image.noelshack.com/fichiers/2025/52/6/1766861358-img-8279-1.jpeg"
                alt="Coach professionnel"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Une Approche Humaine et Authentique
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                Forte de 30 années d'expérience en direction d'établissements et en coaching,
                je mets mon expertise au service de votre développement.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Mon parcours m'a permis d'accompagner des centaines de personnes dans leur
                transformation, en alliant expertise professionnelle et dimension humaine profonde.
              </p>
            </div>
          </div>

          <div className="bg-accent p-8 md:p-12 rounded-2xl mb-16 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Mon Parcours Professionnel
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h4>
                  <p className="text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Mes Valeurs Fondamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white rounded-xl p-3 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {value.title}
                      </h3>
                      <p className="text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/katharina-roehler-cbp_xq6_y8s-unsplash.jpg"
                alt="Valeurs et méditation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/instagram.jpg"
                alt="Méditation et bien-être"
                className="rounded-2xl shadow-2xl w-3/4 max-w-md"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Une Dimension Personnelle Profonde
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                Au-delà de mon expertise professionnelle, je nourris ma pratique
                par une dimension personnelle riche et profonde.
              </p>
              <ul className="space-y-4 text-lg text-secondary">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Pratique régulière du <strong className="text-primary">yoga</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Ancrage dans la <strong className="text-primary">méditation</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Envie d'En Savoir Plus ?
          </h2>
          <p className="text-xl font-light">
            Rencontrons-nous pour explorer comment je peux vous accompagner
          </p>
          <Button
            size="lg"
            onClick={() => {
              onNavigate('pricing');
              setTimeout(() => {
                const element = document.getElementById('passer-action');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
          >
            Prendre rendez-vous
          </Button>
        </div>
      </Section>
    </>
  );
}
