import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { ContactForm } from '../components/ContactForm';
import { Compass, Heart, Target, Video, Users, MessageCircle, Sparkles } from 'lucide-react';

export function IndividualCoaching() {

  const situations = [
    { icon: Target, title: 'Prendre une décision', description: 'Clarifier vos choix avec confiance' },
    { icon: Compass, title: 'Gérer une transition', description: 'Naviguer les changements de vie' },
    { icon: Users, title: 'Améliorer vos relations', description: 'Créer des liens authentiques' },
    { icon: MessageCircle, title: 'Mieux communiquer', description: 'Exprimer votre vérité' },
    { icon: Heart, title: 'Oser être soi-même', description: 'Assumer votre authenticité' },
    { icon: Sparkles, title: 'Retrouver estime et alignement', description: 'Reconnecter à votre essence' },
  ];

  return (
    <>
      <Hero fullscreen={false}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Coaching
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          Chaque personne est unique. Votre accompagnement aussi.
        </p>
      </Hero>

      <Section background="white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Osez vous révéler
          </h2>
          <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
            Le coaching est un espace pour vous écouter, explorer vos envies profondes et libérer votre potentiel.
            Grâce à un accompagnement personnalisé, vous apprenez à mieux vous comprendre, à prendre des décisions alignées et à avancer avec confiance dans votre vie personnelle et professionnelle.
            Osez vous révéler, évoluer et créer la vie qui vous ressemble.
          </p>
        </div>
      </Section>

      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Situations Accompagnées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {situations.map((situation, index) => {
                const Icon = situation.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-accent rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {situation.title}
                      </h3>
                      <p className="text-secondary leading-relaxed">
                        {situation.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/miley-guinn-rodt43ikxwu-unsplash.jpg"
                alt="Coaching personnel"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Tarif Coaching Individuel
            </h2>
            <p className="text-xl text-secondary">
              Un accompagnement personnalisé pour votre transformation
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="bg-gradient-to-br from-accent to-white p-8 border-b-4 border-primary">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Heart size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary text-center mb-2">
                  Séance de Coaching
                </h3>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">80€</p>
                  <p className="text-sm text-secondary">par séance</p>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4 text-secondary">
                  <li className="flex items-start">
                    <Target size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Séances d'1h à 1h30</span>
                  </li>
                  <li className="flex items-start">
                    <Video size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>En visio ou en présentiel</span>
                  </li>
                  <li className="flex items-start">
                    <Compass size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <Heart size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Espace bienveillant et confidentiel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="primary">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Passez à l'action dès aujourd'hui
            </h2>
            <p className="text-xl font-light">
              Prenez rendez-vous pour un accompagnement personnalisé et recevez des clés concrètes pour avancer avec confiance et clarté dans votre vie.
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
