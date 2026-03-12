import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Attivi la piattaforma',
    description: 'Accedi a Wapoo e scegli il modello più adatto a te.',
  },
  {
    number: '02',
    title: 'Personalizzi il tuo business',
    description: 'Configuri servizi, ruoli, rete e branding.',
  },
  {
    number: '03',
    title: 'Vendi e fai crescere la rete',
    description: 'Gestisci clienti, agenti e opportunità in modo ordinato.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Come Funziona</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
            Parti Oggi. <br className="hidden sm:block" />
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Cresci Nel Tempo.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-primary p-12 group card-invert-hover relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-6xl font-display font-black text-white/10 group-hover:text-accent/20 transition-colors duration-500 mb-8">
                  {step.number}
                </div>
                
                <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter transition-colors duration-500">
                  {step.title}
                </h4>
                
                <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest transition-colors duration-500">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
