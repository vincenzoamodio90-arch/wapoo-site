import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden bg-transparent grid-lines">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Vertical Label Accent */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8">
            <span className="text-vertical text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Innovation</span>
            <div className="w-px h-32 bg-white/10" />
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8">
            <div className="w-px h-32 bg-white/10" />
            <span className="text-vertical text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Wapoo Ecosistema</span>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">La Piattaforma Digitale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-display font-black text-white leading-none tracking-tighter mb-8 sm:mb-12 uppercase drop-shadow-[0_0_30px_rgba(63,94,247,0.3)]"
          >
            Noleggio & Mobilità
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm sm:text-lg md:text-xl text-slate-400 max-w-3xl mb-12 sm:mb-16 leading-relaxed font-light uppercase tracking-[0.1em] sm:tracking-widest"
          >
            Gestisci offerte, clienti, agenti e servizi di mobilità da un’unica piattaforma. Wapoo trasforma il noleggio in un business digitale, scalabile e organizzato.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Link 
              to="/contatti" 
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Richiedi una demo</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link 
              to="/piattaforma" 
              className="btn-outline group relative overflow-hidden"
            >
              <span className="relative z-10">Scopri come funziona</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-transparent to-primary pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
}
