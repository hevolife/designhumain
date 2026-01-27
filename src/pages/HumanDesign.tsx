import { useState } from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Quote } from '../components/Quote';
import { Brain, Compass, Heart, Lightbulb, Star, Zap, BookOpen, Users, Baby, ArrowRight, MapPin, Sparkles, Target, Sprout } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { ContactRequest } from '../types/database';

interface HumanDesignProps {
  onNavigate?: (page: string) => void;
}

export function HumanDesign({ onNavigate }: HumanDesignProps = {}) {
  const [formData, setFormData] = useState<ContactRequest>({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    message: '',
    coaching_type: 'human-design',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const features = [
    {
      icon: Brain,
      title: 'Système Précis',
      description: 'Basé sur votre date, heure et lieu de naissance',
      image: 'https://images.pexels.com/photos/8923173/pexels-photo-8923173.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Compass,
      title: 'Blueprint Unique',
      description: 'Révèle votre configuration énergétique personnelle',
      image: 'https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Lightbulb,
      title: 'Connaissance Profonde',
      description: 'Comprendre comment vous fonctionnez vraiment',
      image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Heart,
      title: 'Acceptation de Soi',
      description: 'Cesser de lutter contre votre nature',
      image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Zap,
      title: 'Décisions Alignées',
      description: 'Prendre des décisions en accord avec votre design',
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Star,
      title: 'Expérimentation',
      description: 'Vivre votre design plutôt que de l\'intellectualiser',
      image: 'https://images.pexels.com/photos/3771136/pexels-photo-3771136.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_date: '',
        message: '',
        coaching_type: 'human-design',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Hero fullscreen={false}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Design Humain
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          Explorer votre fonctionnement naturel et vos clés d'alignement
        </p>
      </Hero>

      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Qu'est-ce que le Design Humain ?
            </h2>
            <p className="text-xl text-secondary leading-relaxed">
              Le Design Humain est un système révolutionnaire de connaissance de soi,
              une synthèse entre sagesses ancestrales et sciences modernes.
            </p>
            <p className="text-xl text-secondary leading-relaxed">
              Basé sur votre date, heure et lieu de naissance, il révèle votre
              configuration énergétique unique : comment vous êtes conçu pour interagir
              avec le monde, prendre des décisions et vivre votre vie de manière alignée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/57.jpg"
                alt="Design Humain"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Un Outil Puissant de Transformation
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                Le Design Humain vous offre un manuel d'instructions pour votre vie.
                Il répond aux questions :
              </p>
              <ul className="space-y-3 text-lg text-secondary">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Qui suis-je vraiment ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Comment prendre des décisions justes pour moi ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Quelle est ma stratégie de vie ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Comment interagir avec les autres ?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Les Bénéfices du Design Humain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Système précis</h3>
                  <p className="text-secondary leading-relaxed">
                    Basé sur votre date, heure et lieu de naissance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Révélation de votre fonctionnement naturel</h3>
                  <p className="text-secondary leading-relaxed">
                    Comprendre comment votre énergie est faite pour circuler
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Clarté sur vos forces et vos défis</h3>
                  <p className="text-secondary leading-relaxed">
                    Mettre des mots sur ce qui vous rend unique
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                  <Target size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Alignement personnel</h3>
                  <p className="text-secondary leading-relaxed">
                    Cesser de forcer et commencer à vous respecter tel·le que vous êtes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                  <Zap size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Décisions alignées</h3>
                  <p className="text-secondary leading-relaxed">
                    Prendre des décisions en accord avec votre autorité intérieure
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                  <Sprout size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Expérimentation</h3>
                  <p className="text-secondary leading-relaxed">
                    Vivre votre design plutôt que de l'intellectualiser
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/image.png"
                alt="Design Humain - Découverte de soi"
                className="rounded-2xl shadow-2xl w-3/4 max-w-md"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              L'Invitation à l'Expérimentation
            </h2>
            <p className="text-xl text-secondary leading-relaxed">
              Le Design Humain n'est pas une croyance, c'est une expérience.
              Il ne s'agit pas de l'intellectualiser, mais de le vivre.
            </p>
            <p className="text-xl text-secondary leading-relaxed">
              C'est en l'expérimentant dans la durée que vous constaterez des transformations profondes.
            </p>
          </div>

          <Quote text="Le Design Humain ne vous dit pas quoi faire. Il vous aide à être qui vous êtes." />

          <div className="bg-accent p-8 md:p-12 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              En tant qu'Analyste certifiée
            </h3>
            <p className="text-lg text-primary leading-relaxed mb-6">
              Je vous accompagne dans la découverte et l'intégration de votre Design Humain.
              Mon approche allie précision technique et dimension humaine profonde.
            </p>
            <p className="text-lg text-primary leading-relaxed mb-6">
              Au-delà de la lecture de votre carte, je vous aide à comprendre comment
              vivre concrètement votre design au quotidien, dans vos relations, votre
              travail et vos décisions.
            </p>
            <p className="text-lg text-primary leading-relaxed">
              Je vous transmets des clés simples et applicables pour que vous puissiez
              expérimenter votre design dans la vraie vie, pas à pas, et en faire un
              véritable soutien dans votre quotidien.
            </p>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Mes Accompagnements
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Choisissez l'accompagnement qui vous correspond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="bg-gradient-to-br from-accent to-white p-8 border-b-4 border-primary">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary text-center mb-2">
                  Séances par Étape
                </h3>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">90€</p>
                  <p className="text-sm text-secondary">par séance</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-secondary leading-relaxed mb-6 flex-grow">
                  Un parcours progressif en 2 voire 3 étapes pour découvrir votre design : bases essentielles, centres et canaux, puis profil complet.
                </p>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => onNavigate?.('pricing')}
                  className="mt-auto group"
                >
                  Voir les détails
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="bg-gradient-to-br from-accent to-white p-8 border-b-4 border-primary">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary text-center mb-2">
                  Analyses Complémentaires
                </h3>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">130€</p>
                  <p className="text-sm text-secondary">par séance</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-secondary leading-relaxed mb-6 flex-grow">
                  Approfondissez avec la croix d'incarnation, analyses relationnelles, révolution solaire, cycles de vie, analyses familiales, stratégie nutritionnelle et environnement type.
                </p>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => onNavigate?.('pricing')}
                  className="mt-auto group"
                >
                  Voir les détails
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="bg-gradient-to-br from-accent to-white p-8 border-b-4 border-primary">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Baby size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary text-center mb-2">
                  Analyses Enfants
                </h3>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">80€</p>
                  <p className="text-sm text-secondary">par séance</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-secondary leading-relaxed mb-6 flex-grow">
                  Comprenez le fonctionnement unique de votre enfant et accompagnez-le dans le respect de sa nature authentique.
                </p>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => onNavigate?.('pricing')}
                  className="mt-auto group"
                >
                  Voir les détails
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Découvrez votre profil unique
          </h2>
          <p className="text-xl text-secondary mb-8">
            Explorez votre schéma énergétique et comprenez vos forces et fonctionnements naturels.
          </p>
          <Button
            size="lg"
            onClick={() => window.open('https://jovianarchive.com/pages/get-your-human-design-chart?srsltid=AfmBOopd6uWZNHXPdVcEburAFkBBdEJjKrS1wVPJyF81wBQze4zkgIuB', '_blank')}
          >
            Découvrir mon design humain
          </Button>
        </div>
      </Section>

      <Section background="primary">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Passez à l'action et vivez votre design
            </h2>
            <p className="text-xl font-light">
              Prenez rendez-vous pour un accompagnement personnalisé et recevez des clés concrètes pour appliquer votre Design Humain au quotidien.
            </p>
          </div>

          <Card className="bg-white">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Merci pour votre demande !
                </h3>
                <p className="text-secondary">
                  Je vous contacterai très prochainement pour organiser votre lecture
                  de Design Humain.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-primary font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-primary font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-primary font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="preferred_date" className="block text-primary font-medium mb-2">
                    Date/horaire souhaité (optionnel)
                  </label>
                  <input
                    type="text"
                    id="preferred_date"
                    name="preferred_date"
                    value={formData.preferred_date || ''}
                    onChange={handleChange}
                    placeholder="Ex: Semaine prochaine, matin de préférence"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-primary font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Merci d'indiquer votre date de naissance, heure et lieu de naissance, ainsi que vos questions ou attentes..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Prendre rendez-vous'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </>
  );
}
