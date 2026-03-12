import { motion } from 'motion/react';
import { Building2, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const targets = [
  {
    title: 'Agenzie e Concessionarie',
    description: 'Gestisci il tuo backoffice, coordina la rete commerciale e aumenta le vendite senza moltiplicare i costi.',
    icon: Building2,
    cta: 'Scopri la soluzione per le agenzie',
    link: '/ecosistema'
  },
  {
    title: 'Agenti e Consulenti',
    description: 'Lavora in autonomia, accedi a servizi e fornitori, traccia tutto e costruisci il tuo business personale.',
    icon: Users,
    cta: 'Diventa agente Wapoo',
    link: '/piattaforma'
  },
  {
    title: 'Vetrine digitali e Brand locali',
    description: 'Crea una vetrina online, genera lead e vendi servizi di mobilità senza struttura tecnica.',
    icon: Globe,
    cta: 'Crea la tua vetrina digitale',
    link: '/brumly'
  }
];

export default function Ecosystem() {
  return (
    <section className="py-24 bg-transparent overflow-hidden relative grid-lines">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Per Chi È Wapoo</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
            Una Sola Piattaforma. <br className="hidden sm:block" />
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Più Modelli Di Business.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {targets.map((target, index) => (
            <motion.div
              key={target.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-primary p-12 group card-invert-hover relative overflow-hidden flex flex-col"
            >
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-accent/20 rounded-none flex items-center justify-center text-accent mb-10 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <target.icon size={32} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>
                
                <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter transition-colors duration-500">
                  {target.title}
                </h4>
                
                <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest mb-12 transition-colors duration-500">
                  {target.description}
                </p>
              </div>
              
              <div className="relative z-10 mt-auto pt-8 border-t border-white/10 group-hover:border-primary/10 transition-colors duration-500">
                <Link 
                  to={target.link}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent transition-colors duration-500"
                >
                  {target.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
}
