import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Lightbulb, Target, Handshake, Zap, Code, Megaphone, PenTool, Briefcase } from 'lucide-react';

const values = [
  {
    title: 'Innovazione',
    text: 'Cerchiamo costantemente soluzioni all\'avanguardia per i nostri clienti.',
    icon: Lightbulb,
  },
  {
    title: 'Risultati',
    text: 'Focalizziamo ogni progetto sul raggiungimento di obiettivi concreti e misurabili.',
    icon: Target,
  },
  {
    title: 'Partnership',
    text: 'Costruiamo relazioni durature basate su fiducia e crescita reciproca.',
    icon: Handshake,
  },
  {
    title: 'Efficienza',
    text: 'Ottimizziamo ogni processo per massimizzare il valore per i nostri clienti.',
    icon: Zap,
  },
];

const team = [
  {
    title: 'Team Sviluppo',
    role: 'Software Engineers & Developers',
    text: 'Esperti in tecnologie web, mobile e cloud.',
    icon: Code,
  },
  {
    title: 'Team Marketing',
    role: 'Digital Marketing Specialists',
    text: 'Professionisti di SEO, social media e advertising.',
    icon: Megaphone,
  },
  {
    title: 'Team Design',
    role: 'UX/UI Designers',
    text: 'Creativi specializzati in esperienze utente memorabili.',
    icon: PenTool,
  },
  {
    title: 'Team Business',
    role: 'Business Analysts & Consultants',
    text: 'Consulenti per strategie digitali vincenti.',
    icon: Briefcase,
  },
];

export default function AboutPage() {
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
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 block">Company</span>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[8rem] font-display font-black text-white mb-8 leading-none tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(63,94,247,0.3)]">
              Chi Siamo
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-12 sm:mb-16 font-light uppercase tracking-[0.1em] sm:tracking-widest">
              Trasformiamo idee in realtà digitali che fanno crescere il tuo business
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-8">La Nostra Missione</h2>
            <div className="space-y-8 text-xl md:text-3xl font-display font-black text-white leading-tight uppercase tracking-tighter">
              <p>
                Wapoo nasce con l'obiettivo di democratizzare l'accesso alle tecnologie digitali più avanzate, rendendo la trasformazione digitale accessibile a tutte le aziende, dalle startup alle grandi imprese.
              </p>
              <p className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                Creiamo un ecosistema integrato dove software, marketing, automazione e mobilità lavorano in sinergia per massimizzare i risultati dei nostri clienti.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Principi</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase mb-6">
              I Nostri <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Valori</span>
            </h3>
            <p className="text-lg text-slate-400 font-light uppercase tracking-widest">
              Principi che guidano ogni nostra decisione e azione
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary p-10 group hover:bg-white transition-all duration-700"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-none flex items-center justify-center text-accent mb-10 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <value.icon size={24} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Persone</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase mb-6">
              Il Nostro <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Team</span>
            </h3>
            <p className="text-lg text-slate-400 font-light uppercase tracking-widest">
              Professionisti appassionati e competenti al tuo servizio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {team.map((member, index) => (
              <motion.div
                key={member.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary p-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 group hover:bg-white transition-all duration-700"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-none flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <member.icon size={32} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">{member.title}</h4>
                  <p className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-4">{member.role}</p>
                  <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500">{member.text}</p>
                </div>
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
                Vuoi Far Parte <br />
                <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Del Nostro Successo?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-slate-400 mb-12 leading-relaxed font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500"
              >
                Contattaci per scoprire come possiamo aiutarti a crescere
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
                  Contattaci Ora
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
