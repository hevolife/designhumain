import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Quote } from '../components/Quote';
import { Heart, Brain, Target, Compass, TrendingUp, Smile } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      id: 'human-design',
      icon: Brain,
      title: 'Design Humain',
      description: 'Explorer votre fonctionnement naturel et vos clés d\'alignement.',
      image: '/andriyko-podilnyk-mafaet-ncuu-unsplash.jpg',
    },
    {
      id: 'individual',
      icon: Heart,
      title: 'Coaching',
      description: 'Vous accompagner à incarner pleinement qui vous êtes.',
      image: '/foram-gamit-zcwsqeznrlg-unsplash.jpg',
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Prendre des décisions alignées',
      description: 'Apprenez à écouter votre boussole intérieure et à faire des choix qui résonnent avec votre véritable nature. Fini les hésitations et les regrets, place à la clarté et à la confiance.'
    },
    {
      icon: Compass,
      title: 'Trouver votre direction authentique',
      description: 'Découvrez votre chemin unique en vous reconnectant à votre essence profonde. Identifiez vos valeurs fondamentales et vivez une vie qui vous ressemble vraiment.'
    },
    {
      icon: TrendingUp,
      title: 'Améliorer vos relations',
      description: 'Transformez vos interactions en comprenant mieux vos dynamiques relationnelles. Développez une communication authentique et créez des liens plus profonds et harmonieux.'
    },
    {
      icon: Smile,
      title: 'Retrouver estime et confiance',
      description: 'Reconnectez-vous à votre valeur intrinsèque et développez une confiance solide en vos capacités. Libérez-vous des schémas limitants et osez être pleinement vous-même.'
    },
  ];

  return (
    <>
      <Hero fullscreen backgroundImage="/hot-air-balloon-8869138_1920.jpg"> 
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            Incarnez qui vous êtes vraiment
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light animate-slide-up">
            Un accompagnement en Design Humain pour vous aider à vous écouter, vous comprendre et vivre en accord avec qui vous êtes profondément.
          </p>
          <div className="text-2xl md:text-3xl text-accent font-semibold animate-scale-in">
            Bienvenue ! Vous êtes au bon endroit.
          </div>
          <div className="pt-4">
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
              className="text-lg md:text-xl"
            >
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </Hero>

      <Section background="white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Mon rôle
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
            Vous guider à la rencontre de vous-même, pour que vous puissiez prendre des décisions alignées, honorer votre énergie et avancer avec plus de clarté, de paix et de justesse.
          </p>
          <Quote text="Quand vous osez être pleinement vous-même, votre vie commence à vous ressembler." />
        </div>
      </Section>

      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Mes accompagnements
          </h2>
          <p className="text-xl text-secondary">
            Deux chemins pour vous reconnecter à l'essentiel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                onClick={() => onNavigate(service.id)}
                className="text-center cursor-pointer group"
                image={service.image}
                imageAlt={service.title}
              >
                <div className="flex justify-center mb-6 -mt-10">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                    <Icon size={40} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary text-lg leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Des Transformations Concrètes
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Un accompagnement qui vous permet d'évoluer sur tous les aspects de votre vie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-accent to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-accent/30"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex items-start space-x-5 mb-4">
                    <div className="bg-white rounded-2xl p-4 shadow-md flex-shrink-0">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary pt-2">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-secondary text-base md:text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <Quote text="La transformation ne commence pas par changer ce que vous faites, mais par comprendre qui vous êtes vraiment." />
          </div>
        </div>
      </Section>

      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Votre moment, c'est maintenant!
          </h2>
          <Button
            size="lg"
            onClick={() => onNavigate('individual')}
            className="text-lg md:text-xl"
          >
            Prenez rendez-vous
          </Button>
        </div>
      </Section>
    </>
  );
}
