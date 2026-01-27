import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { ContactForm } from '../components/ContactForm';
import { Users, Baby, BookOpen, CircleDot, Shield, Star, Sparkles, Video, MapPin } from 'lucide-react';

export function Pricing() {
  return (
    <>
      <Hero fullscreen={false}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Tarifs
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          Découvrez mes accompagnements personnalisés, pour mieux vous connaître, évoluer et vivre en accord avec qui vous êtes vraiment
        </p>
      </Hero>

      <Section background="white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Un Accompagnement Sur-Mesure
          </h2>
          <p className="text-xl text-secondary leading-relaxed">
            Chaque personne est unique, avec son histoire, ses talents, ses blessures et ses aspirations.
            Mon accompagnement s'adapte à qui vous êtes vraiment.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <div className="flex items-center space-x-3 bg-accent px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-white rounded-full p-2 shadow-md">
                <Video size={24} className="text-primary" />
              </div>
              <span className="text-primary font-semibold">Séances en visio</span>
            </div>
            <div className="flex items-center space-x-3 bg-accent px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-white rounded-full p-2 shadow-md">
                <MapPin size={24} className="text-primary" />
              </div>
              <span className="text-primary font-semibold">Séances en présentiel</span>
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Mes Accompagnements Design Humain
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Des analyses personnalisées pour vous guider dans la découverte et l'intégration de votre design unique
            </p>
            <p className="text-lg text-primary mt-4 font-semibold">
              Laurence Mallaroni - Analyste Design Humain Certifiée
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-accent">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-accent to-white p-4 rounded-2xl shadow-lg">
                    <BookOpen size={40} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      Les Séances pour Aller Vers Soi
                    </h3>
                    <p className="text-secondary text-lg mt-1">
                      Un parcours progressif pour se découvrir et s'aligner
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 mb-8">
                <div className="bg-gradient-to-br from-accent/30 to-white p-6 rounded-2xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Séance express : 90€</h4>
                  <p className="text-secondary leading-relaxed">
                    Une séance unique pour explorer rapidement votre Design Humain et recevoir des clés concrètes pour le quotidien.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-accent/30 to-white p-6 rounded-2xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Séance approfondie : 90€ / séance</h4>
                  <p className="text-secondary leading-relaxed mb-4">
                    Un parcours en 2 ou 3 séances pour aller plus loin dans la compréhension de vous-même :
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl mb-8">
                <p className="text-primary text-base leading-relaxed">
                  Chaque séance est enregistrée et envoyée pour que vous puissiez la revoir à tout moment.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-4 border-accent pb-6">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">Étape 1 : Les Bases Essentielles</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Votre type énergétique et votre mode de fonctionnement</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Votre stratégie pour interagir et cultiver les opportunités</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Votre autorité intérieure, guide pour vos décisions</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Votre définition et votre circulation d'énergie</span>
                    </li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-4 border-accent pb-6">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">Étape 2 : Comprendre vos mécanismes</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Centres définis et non définis : forces et zones de sensibilité</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Canaux : vos dons naturels et talents uniques</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Comment éviter les pièges du mental et mieux vous soutenir</span>
                    </li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-4 border-accent pb-6">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">Étape 3 : Se connaître en profondeur</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Votre profil et votre manière d'être au monde</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">L'harmonisation de vos éléments énergétiques</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Conseils pour le bien-être et l'authenticité</span>
                    </li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-4 border-accent/50">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold shadow-lg">
                    +
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">Étapes suivantes :</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Sparkles size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Analyse fine de vos potentiels</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Identifier et comprendre vos peurs pour les dépasser</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">Exercices et questionnements spécifiques pour intégrer votre design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-accent">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-accent to-white p-4 rounded-2xl shadow-lg">
                    <Users size={40} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      Les Analyses Complémentaires
                    </h3>
                    <p className="text-secondary text-lg mt-1">
                      Approfondissez votre connaissance de vous-même
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-white px-6 py-3 rounded-2xl shadow-lg">
                  <p className="text-3xl font-bold">130€</p>
                  <p className="text-sm opacity-90">par séance</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/30 to-white p-6 rounded-2xl mb-8">
                <p className="text-primary text-lg font-semibold">
                  Séances enregistrées et envoyées
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">Croix d'Incarnation</h5>
                      <p className="text-secondary">Mission de vie</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">Analyse Relationnelle</h5>
                      <p className="text-secondary">Couple, parents-enfants, associés, amis - Ce qui nous attire et les risques d'incompréhension voire de conflits - Les clés pour vivre ensemble</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">Révolution Solaire</h5>
                      <p className="text-secondary">Les défis et les opportunités de l'année - À réaliser environ 3 mois avant la date de votre anniversaire</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">Le Retour de Saturne</h5>
                      <p className="text-secondary">Autour de 28 et de 56 ans</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      5
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">L'Opposition d'Uranus</h5>
                      <p className="text-secondary">Les changements qui peuvent provoquer la « crise de la quarantaine » - Autour de 40 ans</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      6
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">Le Retour de Chiron</h5>
                      <p className="text-secondary">Les potentiels de sagesse - À partir de 50 ans</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      7
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">Stratégie nutritionnelle</h5>
                      <p className="text-secondary">Votre manière unique de bien vous nourrir</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      8
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">Environnement type</h5>
                      <p className="text-secondary">L'environnement dans lequel vous vous épanouissez le mieux</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      9
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg mb-2">Analyse Familiale</h5>
                      <p className="text-secondary">Comprendre le fonctionnement de sa famille et la place qu'on y occupe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-accent">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-accent to-white p-4 rounded-2xl shadow-lg">
                    <Baby size={40} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      Les Analyses Pour Les Enfants
                    </h3>
                    <p className="text-secondary text-lg mt-1">
                      De la naissance à 12 ans
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-white px-6 py-3 rounded-2xl shadow-lg">
                  <p className="text-3xl font-bold">80€</p>
                  <p className="text-sm opacity-90">par séance</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/30 to-white p-6 rounded-2xl mb-8">
                <p className="text-primary text-lg font-semibold">
                  Séances enregistrées et envoyées
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-gradient-to-r from-accent/30 to-white p-6 rounded-2xl">
                  <Shield size={28} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-primary text-lg mb-2">Comprendre son Enfant et l'Aider à Grandir</h5>
                    <p className="text-secondary leading-relaxed">
                      Découvrez le fonctionnement unique de votre enfant, ses besoins profonds et comment l'accompagner dans le respect de sa nature authentique.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-r from-accent/30 to-white p-6 rounded-2xl">
                  <Star size={28} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-primary text-lg mb-2">Un Magnifique Cadeau de Naissance !</h5>
                    <p className="text-secondary leading-relaxed">
                      Offrez à un nouveau-né le cadeau d'une vie alignée dès le départ. Une analyse précieuse pour les parents qui souhaitent accompagner leur enfant dans le respect de son design unique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="primary" id="passer-action">
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
