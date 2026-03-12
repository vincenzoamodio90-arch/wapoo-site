import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Agenzie', href: '/ecosistema' },
  { name: 'Agente', href: '/piattaforma' },
  { name: 'Vetrine', href: '/brumly' },
  { name: 'Partner', href: '/partner' },
  { name: 'Chi siamo', href: '/chi-siamo' },
  { name: 'Contatti', href: '/contatti' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src="/images/wapooblu-logoo" 
            alt="Wapooblu-Logoo" 
            className="h-10 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-white hover:tracking-[0.3em] ${
                location.pathname === link.href ? 'text-accent' : 'text-white/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contatti" className="btn-primary py-3 px-6 text-[10px] tracking-[0.3em]">
            Inizia Ora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0f1c]/95 backdrop-blur-md border-b border-white/10 p-8 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-black uppercase tracking-[0.3em] flex items-center justify-between group py-2 transition-colors ${
                    location.pathname === link.href ? 'text-accent' : 'text-white'
                  }`}
                >
                  {link.name}
                  <ChevronRight size={14} className={`${location.pathname === link.href ? 'text-accent' : 'text-slate-500'} group-hover:text-accent transition-colors`} />
                </Link>
              ))}
              <Link
                to="/contatti"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center mt-4 text-[10px] tracking-[0.3em]"
              >
                Inizia Ora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
