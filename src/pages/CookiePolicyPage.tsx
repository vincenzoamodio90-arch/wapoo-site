import { motion } from 'motion/react';

export default function CookiePolicyPage() {
  return (
    <div className="bg-transparent">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-transparent">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-tight tracking-tight drop-shadow-lg"
            >
              Cookie Policy
            </motion.h1>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </section>

      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-modern p-8 md:p-12"
          >
            <div className="text-lg text-slate-300 leading-relaxed space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Informativa sui Cookie</h2>
                <p>
                  Il sito Wapoo utilizza cookie per migliorare l’esperienza di navigazione degli utenti.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Cosa sono i cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che i siti web salvano nel browser dell’utente durante la navigazione.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Tipologie di cookie utilizzati</h2>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-white">Cookie tecnici</strong><br />
                    Necessari per il corretto funzionamento del sito.
                  </li>
                  <li>
                    <strong className="text-white">Cookie analitici</strong><br />
                    Utilizzati per analizzare il traffico del sito e migliorare i servizi offerti.
                  </li>
                  <li>
                    <strong className="text-white">Cookie di terze parti</strong><br />
                    Alcuni servizi esterni come social network o mappe possono installare cookie durante la navigazione.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Gestione dei cookie</h2>
                <p className="mb-4">
                  L’utente può gestire o disabilitare i cookie direttamente dalle impostazioni del proprio browser.
                </p>
                <p>
                  La disabilitazione dei cookie potrebbe compromettere alcune funzionalità del sito.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
