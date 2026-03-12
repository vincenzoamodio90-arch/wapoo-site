import { motion } from 'motion/react';

export default function FutureMobility() {
  return (
    <section className="py-24 bg-transparent text-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Mobilità, oggi e domani</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-8 drop-shadow-lg">
            Un ecosistema che cresce con il mercato.
          </h3>
          <div className="space-y-6 text-lg text-slate-400 font-light">
            <p>
              Wapoo nasce per il noleggio, ma guarda oltre.
            </p>
            <p>
              Mobilità sostenibile, nuovi servizi, marketplace e automazione sono parte della roadmap.
            </p>
            <p className="font-semibold text-white text-xl mt-8">
              Non devi cambiare piattaforma quando cresci: <br />
              cresce con te.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
}
