import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-primary border border-white/5 p-12 md:p-24 text-center relative overflow-hidden group hover:bg-white transition-all duration-700">
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white mb-8 leading-none uppercase tracking-tighter group-hover:text-primary transition-colors duration-500"
            >
              Costruisci Il Tuo Business <br className="hidden sm:block" />
              <span className="text-transparent stroke-white stroke-1 group-hover:stroke-primary" style={{ WebkitTextStroke: '1px' }}>Nella Mobilità Digitale</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light uppercase tracking-widest group-hover:text-primary/70 transition-colors duration-500"
            >
              Che tu sia un’agenzia, un agente o un imprenditore digitale, Wapoo ti dà gli strumenti per partire, organizzarti e scalare.
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
  );
}
