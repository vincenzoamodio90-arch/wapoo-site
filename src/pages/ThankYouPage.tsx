import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="pt-20 min-h-[80vh] flex items-center justify-center bg-white/5">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10"
        >
          <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
            Grazie per averci contattato!
          </h1>
          <div className="space-y-2 text-xl text-slate-300 mb-12">
            <p>Il tuo messaggio è stato inviato correttamente.</p>
            <p>Ti risponderemo il prima possibile.</p>
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white/5 text-white font-bold rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Torna alla Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
