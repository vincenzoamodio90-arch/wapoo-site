import { motion } from 'motion/react';

export default function TermsConditionsPage() {
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
              Termini e Condizioni
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
                <h2 className="text-2xl font-bold text-white mb-4">Condizioni di utilizzo del sito</h2>
                <p>
                  L'accesso e l'utilizzo del sito web Wapoo implicano l'accettazione delle presenti condizioni.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Proprietà intellettuale</h2>
                <p className="mb-4">
                  Tutti i contenuti presenti sul sito, inclusi testi, loghi, grafica e immagini, sono di proprietà di Wapoo o dei rispettivi titolari e sono protetti dalle normative sul diritto d'autore.
                </p>
                <p>
                  È vietata la riproduzione, distribuzione o utilizzo dei contenuti senza autorizzazione.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Limitazione di responsabilità</h2>
                <p className="mb-4">
                  Wapoo si impegna a mantenere le informazioni del sito aggiornate e corrette, tuttavia non garantisce l’assenza di errori o omissioni.
                </p>
                <p>
                  L’utilizzo delle informazioni presenti sul sito avviene sotto la responsabilità dell’utente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Link esterni</h2>
                <p>
                  Il sito può contenere collegamenti a siti web esterni. Wapoo non è responsabile per i contenuti o le politiche di privacy di tali siti.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Modifiche ai termini</h2>
                <p>
                  Wapoo si riserva il diritto di modificare in qualsiasi momento i presenti Termini e Condizioni.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
