import { motion } from 'motion/react';
import { 
  Monitor, 
  Eye, 
  Share2, 
  RefreshCw, 
  Briefcase, 
  Tag, 
  UserPlus, 
  TrendingUp,
  Building2,
  Store,
  User,
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  MessageSquare,
  Car,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const problems = [
  'Vorrebbero vendere servizi di mobilità',
  'Non hanno una struttura commerciale',
  'Non conoscono fornitori, processi e flussi',
  'Non vogliono investire mesi in sviluppo e test'
];

const whatItIncludes = [
  {
    title: 'Sito e presenza online',
    text: 'Vetrina digitale personalizzabile. Brand, colori e identità tua. Struttura pensata per la conversione. Non un sito vetrina. Un punto di ingresso al business.',
    icon: LayoutTemplate,
  },
  {
    title: 'Gestione contatti e richieste',
    text: 'Lead tracciate. Richieste organizzate. Nessun contatto perso. Sai sempre chi ti ha scritto e perché.',
    icon: MessageSquare,
  },
  {
    title: 'Servizi di mobilità pronti',
    text: 'Noleggio lungo termine. Breve termine. E-mobility e servizi collegati. Non devi creare il prodotto. Devi solo venderlo.',
    icon: Car,
  },
  {
    title: 'Piattaforma operativa inclusa',
    text: 'CRM. Gestione offerte. Flusso chiaro dalla richiesta alla chiusura. Lavori come una struttura, anche se parti da solo.',
    icon: Settings,
  }
];

const idealFor = [
  'Sei un imprenditore digitale',
  'Hai un’attività locale e vuoi ampliare i servizi',
  'Lavori nel marketing, consulenza o vendite',
  'Vuoi creare un business scalabile senza struttura complessa'
];

const whyChoose = [
  'Un ecosistema già funzionante',
  'Un modello testato',
  'Supporto operativo',
  'Possibilità di crescita nel tempo'
];

const steps = [
  {
    step: '01',
    title: 'Attivi la tua vetrina digitale'
  },
  {
    step: '02',
    title: 'Personalizzi brand e servizi'
  },
  {
    step: '03',
    title: 'Inizi a ricevere richieste'
  },
  {
    step: '04',
    title: 'Gestisci tutto dalla piattaforma Wapoo'
  }
];

export default function DigitalShowcasePage() {
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
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Vetrine Digitali Wapoo</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] font-display font-black text-white leading-none tracking-tighter mb-8 sm:mb-12 uppercase drop-shadow-[0_0_30px_rgba(63,94,247,0.3)]"
            >
              La Tua Vetrina Digitale
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-sm sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-12 sm:mb-16 leading-relaxed font-light uppercase tracking-[0.1em] sm:tracking-widest"
            >
              Con Wapoo puoi creare una vetrina online, vendere servizi di mobilità e gestire clienti e trattative senza dover costruire tutto da zero.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                to="/contatti" 
                className="btn-primary group relative overflow-hidden inline-flex"
              >
                <span className="relative z-10">Crea la tua vetrina digitale</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <a 
                href="#scopri" 
                className="btn-outline group relative overflow-hidden"
              >
                <span className="relative z-10">Scopri come funziona</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      </section>

      {/* IL PROBLEMA & LA SOLUZIONE */}
      <section id="scopri" className="py-32 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {/* Problema */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary p-16 group hover:bg-white transition-all duration-700"
            >
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-8 group-hover:text-primary transition-colors duration-500">Il Problema</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-none tracking-tighter uppercase mb-12 group-hover:text-primary transition-colors duration-500">
                Entrare nel noleggio è complesso <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Farlo da soli è rischioso</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest mb-8 group-hover:text-primary/70 transition-colors duration-500">
                Molti imprenditori digitali, professionisti o attività locali:
              </p>
              <ul className="space-y-6 mb-12">
                {problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0 group-hover:bg-primary transition-colors duration-500" />
                    <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">{problem}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-white/5 border-l-2 border-accent group-hover:bg-primary/5 group-hover:border-primary transition-all duration-500">
                <p className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                  Il risultato? <br/>
                  <span className="text-accent group-hover:text-primary">L'idea resta un'idea.</span>
                </p>
              </div>
            </motion.div>

            {/* Soluzione */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary p-16 group hover:bg-white transition-all duration-700"
            >
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-8 group-hover:text-primary transition-colors duration-500">La Soluzione Wapoo</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-none tracking-tighter uppercase mb-12 group-hover:text-primary transition-colors duration-500">
                Una vetrina pronta <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Collegata a un sistema reale</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest mb-8 group-hover:text-primary/70 transition-colors duration-500">
                Con Wapoo non crei solo un sito. Crei una vetrina digitale collegata a una piattaforma operativa che ti permette di:
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors duration-500" />
                  <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">Acquisire contatti</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors duration-500" />
                  <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">Gestire richieste e preventivi</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors duration-500" />
                  <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">Vendere servizi di mobilità reali</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors duration-500" />
                  <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">Lavorare in modo ordinato e professionale</span>
                </li>
              </ul>
              <div className="p-6 bg-accent/10 border-l-2 border-accent group-hover:bg-primary/10 group-hover:border-primary transition-all duration-500">
                <p className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                  Senza inventarti nulla. <br/>
                  <span className="text-accent group-hover:text-primary">Il sistema è già pronto.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COSA INCLUDE */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Funzionalità</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
              Cosa Include <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>La Vetrina</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {whatItIncludes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary p-12 group hover:bg-white transition-all duration-700"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-none flex items-center justify-center text-accent mb-12 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <item.icon size={24} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PER CHI E' LA VETRINA & PERCHE' SCEGLIERE WAPOO */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {/* Per chi è */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary p-16 group hover:bg-white transition-all duration-700"
            >
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-8 group-hover:text-primary transition-colors duration-500">Target</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-none tracking-tighter uppercase mb-12 group-hover:text-primary transition-colors duration-500">
                Per Chi È <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>La Vetrina Wapoo</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest mb-8 group-hover:text-primary/70 transition-colors duration-500">
                Ideale se:
              </p>
              <ul className="space-y-6 mb-12">
                {idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors duration-500" />
                    <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-white/5 border-l-2 border-accent group-hover:bg-primary/5 group-hover:border-primary transition-all duration-500">
                <p className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                  <span className="text-accent group-hover:text-primary">Non è per chi cerca un progetto improvvisato o occasionale.</span>
                </p>
              </div>
            </motion.div>

            {/* Perché Scegliere */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary p-16 group hover:bg-white transition-all duration-700"
            >
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-8 group-hover:text-primary transition-colors duration-500">Differenza</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-none tracking-tighter uppercase mb-12 group-hover:text-primary transition-colors duration-500">
                Perché Scegliere <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Wapoo</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest mb-8 group-hover:text-primary/70 transition-colors duration-500">
                Perché non sei solo davanti a un sito. Wapoo ti offre:
              </p>
              <ul className="space-y-6 mb-12">
                {whyChoose.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0 group-hover:bg-primary transition-colors duration-500" />
                    <span className="text-sm font-light uppercase tracking-widest text-slate-300 group-hover:text-primary/80 transition-colors duration-500">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-accent/10 border-l-2 border-accent group-hover:bg-primary/10 group-hover:border-primary transition-all duration-500">
                <p className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">
                  Oggi parti con una vetrina. <br/>
                  <span className="text-accent group-hover:text-primary">Domani puoi diventare agente, team leader o agenzia.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Onboarding</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
              Come <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Funziona</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest mt-6">
              Parti in pochi step. Nessuna competenza tecnica richiesta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary p-12 relative overflow-hidden group hover:bg-white transition-all duration-700"
              >
                <div className="text-[8rem] font-display font-black text-white/5 absolute -top-10 -right-10 group-hover:text-primary/5 transition-colors duration-700 pointer-events-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-accent/20 rounded-none flex items-center justify-center text-accent mb-12 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <span className="font-black text-lg">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-display font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-primary border border-white/5 p-12 md:p-24 text-center relative overflow-hidden group hover:bg-white transition-all duration-700">
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-none uppercase tracking-tighter group-hover:text-primary transition-colors duration-500"
              >
                Trasforma Una Vetrina <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>In Un Vero Business</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto mb-12"
              >
                <p className="text-sm text-slate-400 leading-relaxed font-light uppercase tracking-widest mb-6 group-hover:text-primary/70 transition-colors duration-500">
                  Se vuoi entrare nel mondo della mobilità con:
                </p>
                <ul className="flex flex-col items-center gap-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent group-hover:text-primary transition-colors duration-500" />
                    <span className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">Un sistema pronto</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent group-hover:text-primary transition-colors duration-500" />
                    <span className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">Costi sostenibili</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent group-hover:text-primary transition-colors duration-500" />
                    <span className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-500">Possibilità di crescita reale</span>
                  </li>
                </ul>
              </motion.div>

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
                  Crea la tua vetrina digitale con Wapoo
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
