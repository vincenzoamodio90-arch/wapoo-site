import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyWapoo() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-6">Perché Wapoo È Diversa</h2>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[0.9] uppercase tracking-tighter">
                Non È Solo <br className="hidden sm:block" />
                <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Un Software</span>
              </h3>
            </div>
            <p className="text-slate-400 text-sm uppercase tracking-widest max-w-xs font-light leading-relaxed">
              Non è solo un network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-primary p-12 hover:bg-white group transition-all duration-700">
              <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                Wapoo non è
              </h4>
              <ul className="space-y-4 text-slate-400 text-sm leading-relaxed font-light uppercase tracking-[0.15em] group-hover:text-primary/70 transition-colors duration-500">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  Un CRM generico
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  Un semplice comparatore
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  Una rete commerciale improvvisata
                </li>
              </ul>
            </div>
            
            <div className="bg-primary p-12 hover:bg-white group transition-all duration-700">
              <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                È una piattaforma che unisce tecnologia, servizi e persone, permettendo di:
              </h4>
              <ul className="space-y-4 text-slate-400 text-sm leading-relaxed font-light uppercase tracking-[0.15em] group-hover:text-primary/70 transition-colors duration-500">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-accent" />
                  Partire da zero o evolvere una struttura esistente
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-accent" />
                  Digitalizzare il processo commerciale
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-accent" />
                  Costruire un business replicabile e scalabile
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
