import { motion } from 'motion/react';
import { FileText, Users, Network, Car, Palette } from 'lucide-react';

const features = [
  {
    title: 'Gestione offerte e contratti',
    text: 'Preventivi chiari, flussi ordinati, meno errori.',
    icon: FileText
  },
  {
    title: 'CRM clienti e lead',
    text: 'Ogni contatto è tracciato, ogni opportunità seguita.',
    icon: Users
  },
  {
    title: 'Rete agenti e team',
    text: 'Ruoli, performance, commissioni sotto controllo.',
    icon: Network
  },
  {
    title: 'Servizi di mobilità integrati',
    text: 'Noleggio lungo e breve termine, e-mobility e moduli futuri.',
    icon: Car
  },
  {
    title: 'Personalizzazione e white-label',
    text: 'Logo, colori, dominio e struttura su misura del tuo business.',
    icon: Palette
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden grid-lines">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-4">Cosa Puoi Fare Con Wapoo</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
            Tutto Ciò Che Serve <br className="hidden sm:block" />
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Per Vendere Mobilità</span>
          </h3>
          <p className="text-sm sm:text-lg text-slate-400 font-light uppercase tracking-[0.1em] sm:tracking-widest mt-6 sm:mt-8">
            in un unico ecosistema
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-primary p-12 group card-invert-hover relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/20 rounded-none flex items-center justify-center text-accent mb-10 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <feature.icon size={32} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>
                
                <h4 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tighter transition-colors duration-500">
                  {feature.title}
                </h4>
                
                <p className="text-slate-400 leading-relaxed text-sm font-light uppercase tracking-widest transition-colors duration-500">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
