import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { JOBS_DATA } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    gdpr: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form would go here
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, gdpr: e.target.checked }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zzs-dark mb-6">Připraveni zachraňovat?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Napište nám, zavolejte, nebo rovnou pošlete životopis. Rádi vás poznáme a zodpovíme veškeré dotazy.
            </p>

            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-red-100 p-3 rounded-full text-zzs-red mr-4">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Napište nám</p>
                  <a href="mailto:kariera@zzszk.cz" className="text-lg font-bold text-zzs-dark hover:text-zzs-red">kariera@zzszk.cz</a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-red-100 p-3 rounded-full text-zzs-red mr-4">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Zavolejte nám</p>
                  <a href="tel:+420577056935" className="text-lg font-bold text-zzs-dark hover:text-zzs-red">+420 577 056 935</a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-red-100 p-3 rounded-full text-zzs-red mr-4">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Kde nás najdete</p>
                  <span className="text-lg font-bold text-zzs-dark">Peroutkovo nábřeží 434, 760 01 Zlín</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-zzs-dark mb-2">Děkujeme za zájem!</h3>
                <p className="text-gray-600">Vaši zprávu jsme přijali. Ozveme se vám co nejdříve.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-zzs-red font-bold underline hover:text-red-800"
                >
                  Poslat další zprávu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-zzs-dark mb-4">Kontaktní formulář</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zzs-red focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zzs-red focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zzs-red focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Pozice o kterou máte zájem</label>
                  <select
                    id="position"
                    name="position"
                    value={formState.position}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zzs-red focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Vyberte pozici...</option>
                    {JOBS_DATA.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                    <option value="other">Jiná / Obecný dotaz</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Zpráva</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Napište nám něco o sobě..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zzs-red focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="gdpr"
                    required
                    checked={formState.gdpr}
                    onChange={handleCheckbox}
                    className="mt-1 h-4 w-4 text-zzs-red border-gray-300 rounded focus:ring-zzs-red"
                  />
                  <label htmlFor="gdpr" className="ml-2 block text-sm text-gray-600">
                    Souhlasím se zpracováním osobních údajů pro účely náborového řízení.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-white font-bold text-lg shadow-md transition-all ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-zzs-red hover:bg-red-700 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Odesílám...' : 'Odeslat přihlášku'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;