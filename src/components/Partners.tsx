import { motion } from 'motion/react';

const partners = [
  {
    name: 'Avis',
    description: 'Leader mondiale nel noleggio auto, partner per servizi di mobilità integrata.',
    logo: '/images/avis-logo',
  },
  {
    name: 'Platum',
    description: 'Innovazione nella mobilità elettrica e soluzioni sostenibili per la città.',
    logo: '/images/platum-logo',
  },
];

export default function Partners() {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">PARTNER</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white">I nostri partner strategici</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-[2.5rem] bg-white/5 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-48 h-28 flex-shrink-0 bg-white/5 rounded-2xl p-6 shadow-sm flex items-center justify-center overflow-hidden">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-w-[140px] h-auto object-contain transition-transform duration-300 ease group-hover:scale-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-white mb-1">{partner.name}</h4>
                <p className="text-slate-300 leading-relaxed">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
