import { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Heart } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;

    try {
      const response = await fetch('https://formspree.io/f/xaqpdpge', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Form submission failed');

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-white">
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={32} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            Merci pour votre demande !
          </h3>
          <p className="text-secondary">
            Je vous contacterai très prochainement pour convenir d'un rendez-vous.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nom_complet" className="block text-primary font-medium mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              id="nom_complet"
              name="nom_complet"
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
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="telephone" className="block text-primary font-medium mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="date_horaire" className="block text-primary font-medium mb-2">
              Date et horaire souhaité *
            </label>
            <input
              type="datetime-local"
              id="date_horaire"
              name="date_horaire"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-primary font-medium mb-2">
              Message (optionnel)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Parlez-moi un peu de votre situation ou de vos attentes..."
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
  );
}
