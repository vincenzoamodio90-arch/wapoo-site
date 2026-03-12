import { motion } from 'motion/react';
import { FileText, Users, Network, Zap, Palette } from 'lucide-react';

const services = [
  {
    title: 'Gestione offerte e contratti',
    description: 'Preventivi chiari, flussi ordinati, meno errori.',
    icon: FileText,
    color: 'bg-blue-500',
  },
  {
    title: 'CRM clienti e lead',
    description: 'Ogni contatto è tracciato, ogni opportunità seguita.',
    icon: Users,
    color: 'bg-indigo-500',
  },
  {
    title: 'Rete agenti e team',
    description: 'Ruoli, performance, commissioni sotto controllo.',
    icon: Network,
    color: 'bg-violet-500',
  },
  {
    title: 'Servizi di mobilità integrati',
    description: 'Noleggio lungo e breve termine, e-mobility e moduli futuri.',
    icon: Zap,
    color: 'bg-emerald-500',
  },
  {
    title: 'Personalizzazione e white-label',
    description: 'Logo, colori, dominio e struttura su misura del tuo business.',
    icon: Palette,
    color: 'bg-cyan-500',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="servizi">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Cosa puoi fare con Wapoo</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white leading-tight drop-shadow-lg">
              Tutto ciò che serve per vendere mobilità, in un <span className="text-accent">unico ecosistema</span>.
            </h3>
          </div>
          <p className="text-slate-400 max-w-md font-light">
            Dalla consulenza allo sviluppo, offriamo un set completo di strumenti per trasformare la tua azienda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:border-accent/30 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-current/20`}>
                <service.icon size={32} />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-2">
                {service.title}
              </h4>
              <p className="text-slate-400 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
    </section>
  );
}
