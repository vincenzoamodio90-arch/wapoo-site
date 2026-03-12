import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5 text-white pt-24 pb-12 mt-12 grid-lines">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center group">
              <img 
                src="/images/wapoobianco-logoo" 
                alt="Wapoobianco-logoo" 
                className="h-10 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed font-light uppercase tracking-widest">
              L'ecosistema digitale per la mobilità, il software e l'automazione. Innovazione al servizio del tuo business.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Linkedin, href: "https://it.linkedin.com/company/wapoo-srl" },
                { Icon: Instagram, href: "https://www.instagram.com/explore/locations/261882140843294/wapoo/" },
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-11 h-11 rounded-none bg-white/5 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 border border-white/5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Rapidi */}
          <div>
            <h4 className="font-display font-black text-sm mb-8 uppercase tracking-[0.3em] text-accent">
              Link rapidi
            </h4>
            <ul className="space-y-4 text-slate-400 text-xs uppercase tracking-widest font-light">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/ecosistema" className="hover:text-white hover:translate-x-1 transition-all inline-block">Agenzie & Concessionarie</Link></li>
              <li><Link to="/piattaforma" className="hover:text-white hover:translate-x-1 transition-all inline-block">Diventa Agente</Link></li>
              <li><Link to="/brumly" className="hover:text-white hover:translate-x-1 transition-all inline-block">Vetrine Digitali</Link></li>
              <li><Link to="/partner" className="hover:text-white hover:translate-x-1 transition-all inline-block">Prezzi & Modelli</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-white hover:translate-x-1 transition-all inline-block">Chi siamo</Link></li>
              <li><Link to="/contatti" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contatti</Link></li>
            </ul>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-display font-black text-sm mb-8 uppercase tracking-[0.3em] text-accent">
              Servizi
            </h4>
            <ul className="space-y-4 text-slate-400 text-xs uppercase tracking-widest font-light">
              <li><Link to="/ecosistema" className="hover:text-white hover:translate-x-1 transition-all inline-block">Gestione noleggio</Link></li>
              <li><Link to="/ecosistema" className="hover:text-white hover:translate-x-1 transition-all inline-block">Vetrine digitali</Link></li>
              <li><Link to="/ecosistema" className="hover:text-white hover:translate-x-1 transition-all inline-block">Canali di vendita</Link></li>
              <li><Link to="/ecosistema" className="hover:text-white hover:translate-x-1 transition-all inline-block">Supporto tecnologico</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display font-black text-sm mb-8 uppercase tracking-[0.3em] text-accent">
              Contacts
            </h4>
            <ul className="space-y-6 text-slate-400 text-xs uppercase tracking-widest font-light">
              <li className="flex items-start gap-4">
                <a href="https://maps.app.goo.gl/Y7FdCxhff2fB9Z6n9" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mt-1">
                  <MapPin size={18} className="text-accent" />
                </a>
                <span>Corso Pietro Giannone 44<br />81100 Caserta</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:info@wapoo.it" className="hover:text-white transition-colors">info@wapoo.it</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+393396147241" className="hover:text-white transition-colors">+39 339 614 7241</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">
          <p>© {new Date().getFullYear()} Wapoo Srl. Tutti i diritti riservati.</p>
          <div className="flex gap-10">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/termini" className="hover:text-white transition-colors">Termini e Condizioni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
