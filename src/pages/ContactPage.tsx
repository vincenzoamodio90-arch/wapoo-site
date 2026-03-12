import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function ContactPage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) return;
    
    setFormState('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/grazie');
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div className="bg-transparent">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden bg-transparent grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] font-display font-black text-white leading-none tracking-tighter mb-8 sm:mb-12 uppercase drop-shadow-[0_0_30px_rgba(63,94,247,0.3)]"
            >
              Contatta Wapoo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-sm sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-12 sm:mb-16 leading-relaxed font-light uppercase tracking-[0.1em] sm:tracking-widest"
            >
              Siamo qui per rispondere alle tue domande e aiutarti a far crescere il tuo business.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines" id="scrivici">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
            
            {/* Contact Information */}
            <div className="bg-primary p-12 md:p-20 group hover:bg-white transition-all duration-700">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Informazioni</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-12 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                I Nostri <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Recapiti</span>
              </h3>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-none flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">Sede Legale</h4>
                    <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500">
                      Corso Pietro Giannone 44<br />
                      81100 Caserta (CE)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-none flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">Email</h4>
                    <a href="mailto:info@wapoo.it" className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest hover:text-accent transition-colors duration-300 group-hover:text-primary/70">
                      info@wapoo.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-none flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">Telefono</h4>
                    <a href="tel:+393396147241" className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest hover:text-accent transition-colors duration-300 group-hover:text-primary/70">
                      +39 339 614 7241
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary p-12 md:p-20 relative">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Scrivici</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-12 uppercase tracking-tighter">
                Invia Un <br />
                <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Messaggio</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Nome</label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-accent transition-colors rounded-none font-light"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Telefono</label>
                    <input 
                      required
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-accent transition-colors rounded-none font-light"
                      placeholder="Il tuo telefono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Email</label>
                  <input 
                    required
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-accent transition-colors rounded-none font-light"
                    placeholder="La tua email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Messaggio</label>
                  <textarea 
                    required
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-accent transition-colors rounded-none font-light resize-none"
                    placeholder="Come possiamo aiutarti?"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    required
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 rounded-none border-white/10 bg-white/5 text-accent focus:ring-accent"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  />
                  <label htmlFor="privacy" className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">
                    Accetto la <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <button 
                  disabled={formState === 'loading'}
                  type="submit"
                  className="btn-primary w-full group relative overflow-hidden disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formState === 'loading' ? 'Invio in corso...' : 'Invia Messaggio'}
                    {formState !== 'loading' && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                {formState === 'error' && (
                  <p className="text-red-500 text-xs text-center font-black uppercase tracking-[0.2em] mt-4">
                    Si è verificato un errore. Riprova più tardi.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.437936666107!2d14.331268676644026!3d41.07724307134012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba50171a06f33%3A0x8670104764831200!2sCorso%20Pietro%20Giannone%2C%2044%2C%2081100%20Caserta%20CE!5e0!3m2!1sit!2sit!4v1709825412345!5m2!1sit!2sit" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none border-t border-white/5 bg-gradient-to-t from-primary/50 to-transparent" />
      </section>
    </div>
  );
}
