import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        navigate('/grazie');
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <section className="py-24 bg-white/5" id="contatti">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Contattaci</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-8">
              Parliamo del tuo <span className="text-accent">prossimo</span> progetto.
            </h3>
            <p className="text-slate-300 text-lg mb-12 max-w-lg">
              Siamo pronti ad aiutarti a scalare il tuo business. Compila il form o usa i nostri recapiti diretti.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Sede Operativa', text: 'Corso Pietro Giannone 44, 81100 Caserta', href: 'https://maps.app.goo.gl/Y7FdCxhff2fB9Z6n9' },
                { icon: Mail, title: 'Email', text: 'info@wapoo.it', href: 'mailto:info@wapoo.it' },
                { icon: Phone, title: 'Telefono', text: '+39 339 614 7241', href: 'tel:+393396147241' },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-start gap-6 group"
                >
                  <a 
                    href={item.href}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 rounded-2xl bg-white/5 shadow-sm flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    <item.icon size={24} />
                  </a>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-primary/5 border border-slate-100"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-4">Messaggio Inviato!</h4>
                <p className="text-slate-300 mb-8">Grazie per averci contattato. Ti risponderemo entro 24 ore.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="btn-primary"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-wider ml-1">Nome</label>
                    <input
                      required
                      type="text"
                      placeholder="Mario Rossi"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-slate-100 focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-wider ml-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="mario@azienda.it"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-slate-100 focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-wider ml-1">Telefono</label>
                    <input
                      type="tel"
                      placeholder="+39 333 123 4567"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-slate-100 focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-wider ml-1">Azienda</label>
                    <input
                      type="text"
                      placeholder="Wapoo Srl"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-slate-100 focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 uppercase tracking-wider ml-1">Messaggio</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Come possiamo aiutarti?"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-slate-100 focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  disabled={formState === 'loading'}
                  type="submit"
                  className="w-full btn-primary py-5 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {formState === 'loading' ? 'Invio in corso...' : (
                    <>
                      Invia Messaggio <Send size={20} />
                    </>
                  )}
                </button>
                {formState === 'error' && (
                  <p className="text-red-500 text-sm text-center font-medium">
                    Si è verificato un errore. Riprova più tardi.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
