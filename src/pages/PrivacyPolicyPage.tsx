import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
                <h2 className="text-2xl font-bold text-white mb-4">Informativa sulla Privacy</h2>
                <p>
                  Ai sensi del Regolamento UE 2016/679 (GDPR), la presente informativa descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web Wapoo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Titolare del trattamento</h2>
                <p>
                  Wapoo S.r.l.<br />
                  Corso Pietro Giannone 44<br />
                  81100 Caserta – Italia
                </p>
                <p className="mt-4">
                  Email: <a href="mailto:info@wapoo.it" className="text-accent hover:underline">info@wapoo.it</a><br />
                  Telefono: <a href="tel:+393396147241" className="text-accent hover:underline">+39 339 614 7241</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Tipologia di dati raccolti</h2>
                <p className="mb-4">Durante l'utilizzo del sito possono essere raccolti i seguenti dati personali:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Messaggio inviato tramite il modulo di contatto</li>
                  <li>Dati tecnici di navigazione (indirizzo IP, browser, dispositivo)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Finalità del trattamento</h2>
                <p className="mb-4">I dati raccolti vengono utilizzati per:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>rispondere alle richieste inviate tramite il modulo contatti</li>
                  <li>fornire informazioni sui servizi Wapoo</li>
                  <li>migliorare il funzionamento del sito web</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Conservazione dei dati</h2>
                <p>
                  I dati personali saranno conservati per il tempo necessario a soddisfare la richiesta dell'utente o per adempiere agli obblighi di legge.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Diritti dell'utente</h2>
                <p>
                  L’utente può richiedere in qualsiasi momento l’accesso, la modifica o la cancellazione dei propri dati personali contattando:
                </p>
                <p className="mt-4">
                  <a href="mailto:info@wapoo.it" className="text-accent hover:underline font-medium">info@wapoo.it</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
