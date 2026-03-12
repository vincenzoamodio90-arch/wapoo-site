import { motion } from 'motion/react';
import { Leaf, Zap, Globe2, Cpu } from 'lucide-react';

export default function Future() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-6">Mobilità, Oggi E Domani</h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
              Un Ecosistema Che <br className="hidden sm:block" />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Cresce Con Il Mercato</span>
            </h3>
            
            <div className="space-y-6 text-slate-400 text-sm leading-relaxed font-light uppercase tracking-widest">
              <p>
                Wapoo nasce per il noleggio, ma guarda oltre.
              </p>
              <p>
                Mobilità sostenibile, nuovi servizi, marketplace e automazione sono parte della roadmap.
              </p>
              <p className="text-white font-bold">
                Non devi cambiare piattaforma quando cresci:<br />
                <span className="text-accent">cresce con te.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 grid grid-cols-2 gap-px bg-white/5 border border-white/5"
          >
            {[
              { icon: Leaf, label: 'Sostenibilità' },
              { icon: Zap, label: 'Nuovi Servizi' },
              { icon: Globe2, label: 'Marketplace' },
              { icon: Cpu, label: 'Automazione' }
            ].map((item, index) => (
              <div key={index} className="bg-primary p-10 flex flex-col items-center justify-center text-center group hover:bg-white transition-all duration-700">
                <item.icon size={32} className="text-accent mb-6 group-hover:text-primary transition-colors duration-500" />
                <span className="text-xs font-black text-white uppercase tracking-widest group-hover:text-primary transition-colors duration-500">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
