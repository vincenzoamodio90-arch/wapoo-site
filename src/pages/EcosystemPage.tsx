import { motion } from 'motion/react';
import { 
  FileText, 
  Users, 
  BarChart3, 
  Palette,
  Car,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Gestione offerte e contratti',
    text: 'Preventivi ordinati. Storico clienti sempre disponibile. Flussi chiari dall’offerta alla chiusura. Meno errori, più velocità.',
    icon: FileText,
  },
  {
    title: 'Gestione rete agenti',
    text: 'Ruoli (agente, team leader, sub-agente). Assegnazione lead. Monitoraggio performance. Sai sempre chi sta lavorando e come.',
    icon: Users,
  },
  {
    title: 'Dashboard commerciale',
    text: 'Numeri chiari. Attività tracciate. Visione reale del business. Decidi sui dati, non sulle sensazioni.',
    icon: BarChart3,
  },
  {
    title: 'White-label e personalizzazione',
    text: 'Logo e colori della tua agenzia. Dominio dedicato. Struttura adattata al tuo modello. La piattaforma è tua, non “in affitto”.',
    icon: Palette,
  },
  {
    title: 'Servizi di mobilità integrati',
    text: 'Noleggio lungo termine. Breve termine. E-mobility e servizi futuri. Un solo sistema, più opportunità di vendita.',
    icon: Car,
  }
];

const problems = [
  'Fogli Excel scollegati',
  'CRM generici non pensati per il noleggio',
  'Gestione manuale di agenti e collaboratori',
  'Poca visibilità su performance e marginalità'
];

const idealFor = [
  'Hai un’agenzia o concessionaria già attiva',
  'Lavori con agenti o collaboratori',
  'Vuoi crescere senza perdere controllo',
  'Cerchi una struttura digitale solida, non improvvisata'
];

const whyChoose = [
  'Pensata specificamente per il noleggio',
  'Progettata per la crescita della rete',
  'Modulare e scalabile',
  'Orientata al business, non solo alla gestione'
];

const steps = [
  {
    step: '01',
    title: 'Analizziamo il tuo modello di business'
  },
  {
    step: '02',
    title: 'Configuriamo la piattaforma su misura'
  },
  {
    step: '03',
    title: 'Inizi a usarla e a far crescere la rete'
  }
];

export default function AgenciesDealershipsPage() {
  return (
    <div className="bg-transparent">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden bg-transparent grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Agenzie & Concessionarie</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] font-display font-black text-white leading-none tracking-tighter mb-8 sm:mb-12 uppercase drop-shadow-[0_0_30px_rgba(63,94,247,0.3)]"
            >
              La Piattaforma Organizzata
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-sm sm:text-lg md:text-xl text-slate-400 max-w-3xl mb-12 sm:mb-16 leading-relaxed font-light uppercase tracking-[0.1em] sm:tracking-widest"
            >
              Wapoo digitalizza il tuo backoffice, coordina la rete commerciale e ti permette di scalare il business del noleggio senza aumentare la complessità.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <Link 
                to="/contatti" 
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10">Richiedi una demo per la tua agenzia</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <a 
                href="#soluzioni" 
                className="btn-outline group relative overflow-hidden"
              >
                <span className="relative z-10">Scopri cosa puoi fare con Wapoo</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      </section>

      {/* IL PROBLEMA & LA SOLUZIONE */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines" id="soluzioni">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Problema */}
            <div className="bg-primary p-12 hover:bg-white group transition-all duration-700">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-6">Il Problema</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                Il noleggio cresce. <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Le strutture spesso no.</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light uppercase tracking-widest mb-8 group-hover:text-primary/70 transition-colors duration-500">
                Molte agenzie lavorano ancora con:
              </p>
              <ul className="space-y-4 text-slate-400 text-sm leading-relaxed font-light uppercase tracking-[0.15em] group-hover:text-primary/70 transition-colors duration-500 mb-8">
                {problems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <AlertCircle size={16} className="text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-white/10 group-hover:border-primary/10 transition-colors duration-500">
                <p className="text-white font-black uppercase tracking-widest group-hover:text-primary transition-colors duration-500">
                  Il risultato? <br />
                  <span className="text-accent">Tempo perso, errori, difficoltà a scalare.</span>
                </p>
              </div>
            </div>

            {/* Soluzione */}
            <div className="bg-primary p-12 hover:bg-white group transition-all duration-700">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-6">La Soluzione Wapoo</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                Un'unica piattaforma <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Per governare tutto</span>
              </h3>
              <div className="space-y-6 text-slate-400 text-sm leading-relaxed font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500">
                <p>
                  Wapoo nasce per semplificare e strutturare il lavoro delle agenzie di noleggio e delle concessionarie che vogliono evolvere.
                </p>
                <p className="text-white font-black group-hover:text-primary transition-colors duration-500">
                  Non aggiunge complessità.<br />
                  <span className="text-accent">La elimina.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COSA PUOI FARE CON WAPOO */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Funzionalità</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
              Cosa Puoi Fare <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Con Wapoo</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary p-12 group hover:bg-white transition-all duration-700 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent/20 rounded-none flex items-center justify-center text-accent mb-10 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <feature.icon size={32} className="transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  
                  <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                    {feature.title}
                  </h4>
                  
                  <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PER CHI È DAVVERO WAPOO & PERCHÉ SCEGLIERE WAPOO */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Per chi è */}
            <div className="bg-primary p-12 hover:bg-white group transition-all duration-700">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-6">Target</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                Per Chi È <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Davvero Wapoo</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light uppercase tracking-widest mb-8 group-hover:text-primary/70 transition-colors duration-500">
                Wapoo è ideale se:
              </p>
              <ul className="space-y-4 text-slate-400 text-sm leading-relaxed font-light uppercase tracking-[0.15em] group-hover:text-primary/70 transition-colors duration-500 mb-8">
                {idealFor.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-white/10 group-hover:border-primary/10 transition-colors duration-500">
                <p className="text-white font-black uppercase tracking-widest group-hover:text-primary transition-colors duration-500">
                  Non è per chi vuole solo <br />
                  <span className="text-accent">"fare qualche preventivo ogni tanto".</span>
                </p>
              </div>
            </div>

            {/* Perché scegliere */}
            <div className="bg-primary p-12 hover:bg-white group transition-all duration-700">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-6">Vantaggi</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                Perché Scegliere <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Wapoo</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light uppercase tracking-widest mb-8 group-hover:text-primary/70 transition-colors duration-500">
                Perché non è un software generico
              </p>
              <ul className="space-y-4 text-slate-400 text-sm leading-relaxed font-light uppercase tracking-[0.15em] group-hover:text-primary/70 transition-colors duration-500 mb-8">
                {whyChoose.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-white/10 group-hover:border-primary/10 transition-colors duration-500">
                <p className="text-white font-black uppercase tracking-widest group-hover:text-primary transition-colors duration-500">
                  Wapoo è un abilitatore,<br />
                  <span className="text-accent">non un semplice strumento.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COME SI PARTE */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Come Si Parte</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
              Attivazione Semplice, <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Crescita Graduale</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-12">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary p-12 group hover:bg-white transition-all duration-700 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-6xl font-display font-black text-white/10 group-hover:text-accent/20 transition-colors duration-500 mb-8">
                    {item.step}
                  </div>
                  
                  <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-white font-black uppercase tracking-widest text-lg">
              Nessun salto nel buio. <span className="text-accent">Tutto è progressivo.</span>
            </p>
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
                Porta Ordine, Controllo <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>E Crescita Nella Tua Agenzia</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500"
              >
                <p className="mb-4">Se stai cercando una piattaforma che ti permetta di:</p>
                <ul className="flex flex-col items-center gap-2 mb-6">
                  <li>• lavorare meglio</li>
                  <li>• vendere di più</li>
                  <li>• crescere in modo strutturato</li>
                </ul>
                <p className="text-white font-bold group-hover:text-primary transition-colors duration-500">Wapoo è la soluzione giusta.</p>
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
