import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Zap, Shield, Layout, Users, Plus, HelpCircle } from 'lucide-react';

const starterFeatures = [
  'Accesso alla piattaforma Wapoo',
  'Gestione clienti e offerte',
  'Servizi di mobilità attivi',
  'Supporto base',
  'Ambiente pronto all’uso'
];

const proFeatures = [
  'Tutto il piano Starter',
  'Gestione rete agenti e ruoli',
  'Dashboard avanzata',
  'Personalizzazione base (brand / flussi)',
  'Supporto dedicato'
];

const enterpriseFeatures = [
  'Tutto il piano Pro',
  'White-label completo',
  'Dominio e branding dedicati',
  'Moduli avanzati e integrazioni',
  'Supporto e setup personalizzato'
];

const extraModules = [
  'Academy & formazione',
  'Marketplace servizi',
  'Automazioni avanzate',
  'Moduli AI (in roadmap / attivi)',
  'Lead & marketing tools'
];

const howYouEarn = [
  'Vendere servizi di mobilità',
  'Costruire una rete commerciale',
  'Ottenere margini sui contratti',
  'Scalare senza moltiplicare i costi'
];

const faqs = [
  {
    q: 'Serve un investimento iniziale elevato?',
    a: 'No. I piani sono pensati per partire in modo sostenibile.'
  },
  {
    q: 'Posso cambiare piano nel tempo?',
    a: 'Sì. Cresci quando vuoi, senza blocchi.'
  },
  {
    q: 'Wapoo è vincolante?',
    a: 'No. Rimani perché ti conviene, non perché sei obbligato.'
  },
  {
    q: 'Serve competenza tecnica?',
    a: 'No. La piattaforma è pensata per chi fa business, non sviluppo.'
  }
];

export default function PricingPage() {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden bg-transparent grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[800px] mx-auto text-center"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 block">Prezzi & Modelli Wapoo</span>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-display font-black text-white mb-8 leading-none tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(63,94,247,0.3)]">
              Un Modello Flessibile
            </h1>
            
            <h2 className="text-base sm:text-xl md:text-2xl font-display font-black text-white mb-6 uppercase tracking-[0.1em] sm:tracking-widest">
              Pensato per crescere con te
            </h2>
            
            <p className="text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-12 sm:mb-16 font-light uppercase tracking-[0.1em] sm:tracking-widest">
              Con Wapoo non paghi per funzioni inutili. <br className="hidden sm:block" />
              Parti semplice, aggiungi valore man mano che il tuo business cresce.
            </p>
            
            <Link 
              to="/contatti" 
              className="btn-primary group relative overflow-hidden inline-flex"
            >
              <span className="relative z-10">Richiedi una demo personalizzata</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      </section>

      {/* Section: Modello Giusto */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-8">Il Principio</h2>
              <h3 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-none uppercase tracking-tighter">
                Non esiste un prezzo unico. <br />
                <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Esiste un modello giusto.</span>
              </h3>
              <div className="space-y-8 text-sm text-slate-400 leading-relaxed font-light uppercase tracking-widest">
                <p>
                  Wapoo è una piattaforma modulare. Questo significa che:
                </p>
                <ul className="space-y-4">
                  {[
                    'non tutti partono dallo stesso punto',
                    'non tutti hanno gli stessi obiettivi',
                    'non tutti usano Wapoo allo stesso modo'
                  ].map((item, index) => (
                    <motion.li 
                      key={item} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 font-black text-white"
                    >
                      <div className="w-8 h-8 rounded-none bg-accent/20 flex items-center justify-center text-accent">
                        <CheckCircle2 size={16} />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <div className="p-6 bg-white/5 border-l-2 border-accent">
                  <p className="text-sm font-black uppercase tracking-widest text-white">
                    Per questo i piani sono <br/>
                    <span className="text-accent">progressivi e adattabili.</span>
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-px bg-white/5 border border-white/5"
            >
              {[
                { label: 'Modulare', icon: Zap },
                { label: 'Sicuro', icon: Shield },
                { label: 'Scalabile', icon: Layout },
                { label: 'Collaborativo', icon: Users },
              ].map((item, index) => (
                <motion.div 
                  key={item.label} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary p-12 flex flex-col items-center text-center group hover:bg-white transition-all duration-700"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-none flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <item.icon size={32} className="transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <span className="font-black text-white text-lg uppercase tracking-widest group-hover:text-primary transition-colors duration-500">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            
            {/* STARTER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary border border-white/5 p-12 relative overflow-hidden group hover:bg-white transition-all duration-700 flex flex-col"
            >
              <div className="relative z-10 flex-grow">
                <div className="mb-12">
                  <h3 className="text-3xl font-display font-black text-white mb-2 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">Starter</h3>
                  <p className="text-slate-400 text-xs font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500 min-h-[60px]">
                    Ideale per agenti singoli, nuove attività, vetrine digitali in fase di avvio.
                  </p>
                </div>
                
                <div className="space-y-8 mb-16">
                  <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Cosa include</h4>
                  <ul className="space-y-6">
                    {starterFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4 text-white text-xs font-black uppercase tracking-widest group-hover:text-primary transition-colors duration-500">
                        <div className="w-6 h-6 rounded-none bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                          <CheckCircle2 size={12} />
                        </div>
                        <span className="mt-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-12 p-6 bg-white/5 border-l-2 border-accent group-hover:bg-primary/5 group-hover:border-primary transition-all duration-500">
                  <p className="text-xs font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                    Perché sceglierlo: <br/>
                    <span className="text-accent group-hover:text-primary font-light">Parti subito senza struttura complessa.</span>
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <Link to="/contatti" className="btn-primary w-full flex items-center justify-center group-hover:bg-primary group-hover:text-white text-xs">
                  Inizia con Starter
                </Link>
              </div>
            </motion.div>

            {/* PRO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary border border-white/5 p-12 relative overflow-hidden group hover:bg-white transition-all duration-700 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              <div className="relative z-10 flex-grow">
                <div className="mb-12">
                  <h3 className="text-3xl font-display font-black text-white mb-2 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">Pro</h3>
                  <p className="text-slate-400 text-xs font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500 min-h-[60px]">
                    Ideale per agenzie strutturate, concessionarie, team di agenti.
                  </p>
                </div>
                
                <div className="space-y-8 mb-16">
                  <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Cosa include</h4>
                  <ul className="space-y-6">
                    {proFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4 text-white text-xs font-black uppercase tracking-widest group-hover:text-primary transition-colors duration-500">
                        <div className="w-6 h-6 rounded-none bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                          <CheckCircle2 size={12} />
                        </div>
                        <span className="mt-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-12 p-6 bg-white/5 border-l-2 border-accent group-hover:bg-primary/5 group-hover:border-primary transition-all duration-500">
                  <p className="text-xs font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                    Perché sceglierlo: <br/>
                    <span className="text-accent group-hover:text-primary font-light">Hai controllo reale del tuo business.</span>
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <Link to="/contatti" className="btn-primary w-full flex items-center justify-center group-hover:bg-primary group-hover:text-white text-xs">
                  Richiedi demo Pro
                </Link>
              </div>
            </motion.div>

            {/* ENTERPRISE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-primary border border-white/5 p-12 relative overflow-hidden group hover:bg-white transition-all duration-700 flex flex-col"
            >
              <div className="relative z-10 flex-grow">
                <div className="mb-12">
                  <h3 className="text-3xl font-display font-black text-white mb-2 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">Enterprise</h3>
                  <p className="text-slate-400 text-xs font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500 min-h-[60px]">
                    Ideale per network, agenzie primarie, brand che vogliono scalare.
                  </p>
                </div>
                
                <div className="space-y-8 mb-16">
                  <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Cosa include</h4>
                  <ul className="space-y-6">
                    {enterpriseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4 text-white text-xs font-black uppercase tracking-widest group-hover:text-primary transition-colors duration-500">
                        <div className="w-6 h-6 rounded-none bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                          <CheckCircle2 size={12} />
                        </div>
                        <span className="mt-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-12 p-6 bg-white/5 border-l-2 border-accent group-hover:bg-primary/5 group-hover:border-primary transition-all duration-500">
                  <p className="text-xs font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                    Perché sceglierlo: <br/>
                    <span className="text-accent group-hover:text-primary font-light">Wapoo diventa la tua piattaforma proprietaria.</span>
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <Link to="/contatti" className="btn-primary w-full flex items-center justify-center group-hover:bg-primary group-hover:text-white text-xs">
                  Parla con il team Wapoo
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Moduli Extra & Come Guadagni */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
            
            {/* Moduli Extra */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary p-16 group hover:bg-white transition-all duration-700"
            >
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-8 group-hover:text-primary transition-colors duration-500">Moduli Extra</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-none tracking-tighter uppercase mb-12 group-hover:text-primary transition-colors duration-500">
                Paghi solo <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Ciò che ti serve</span>
              </h3>
              <ul className="space-y-6 mb-12">
                {extraModules.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Plus size={18} className="text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors duration-500" />
                    <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-white/5 border-l-2 border-accent group-hover:bg-primary/5 group-hover:border-primary transition-all duration-500">
                <p className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                  <span className="text-accent group-hover:text-primary">I moduli si attivano solo quando servono.</span>
                </p>
              </div>
            </motion.div>

            {/* Come Guadagni */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary p-16 group hover:bg-white transition-all duration-700"
            >
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-8 group-hover:text-primary transition-colors duration-500">Come Guadagni</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-none tracking-tighter uppercase mb-12 group-hover:text-primary transition-colors duration-500">
                Non è solo un costo <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>È un modello di guadagno</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest mb-8 group-hover:text-primary/70 transition-colors duration-500">
                Con Wapoo puoi:
              </p>
              <ul className="space-y-6 mb-12">
                {howYouEarn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0 group-hover:bg-primary transition-colors duration-500" />
                    <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-accent/10 border-l-2 border-accent group-hover:bg-primary/10 group-hover:border-primary transition-all duration-500">
                <p className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                  Il valore non è l'abbonamento, <br/>
                  <span className="text-accent group-hover:text-primary">è il business che costruisci sopra.</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">FAQ</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
              Domande <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Frequenti</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary p-12 group hover:bg-white transition-all duration-700"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-none flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <HelpCircle size={24} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                  {faq.q}
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-primary border border-white/5 p-12 md:p-24 text-center relative overflow-hidden group hover:bg-white transition-all duration-700">
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-none uppercase tracking-tighter group-hover:text-primary transition-colors duration-500"
              >
                Scegli Il Modello Giusto <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Per Il Tuo Percorso</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-slate-400 mb-12 leading-relaxed font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500"
              >
                Non sei sicuro del piano più adatto? <br/>
                Parliamone: capiamo insieme da dove partire.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <Link 
                  to="/contatti" 
                  className="btn-primary group-hover:bg-primary group-hover:text-white"
                >
                  Richiedi una demo personalizzata
                </Link>
              </motion.div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-accent/5 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />
          </div>
        </div>
      </section>
    </div>
  );
}
