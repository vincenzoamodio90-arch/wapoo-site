import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import AgenciesDealershipsPage from './pages/EcosystemPage';
import BecomeAgentPage from './pages/PlatformPage';
import DigitalShowcasePage from './pages/BrumlyPage';
import PricingPage from './pages/PartnerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

// Page Wrapper for animations
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/ecosistema" element={<PageWrapper><AgenciesDealershipsPage /></PageWrapper>} />
          <Route path="/piattaforma" element={<PageWrapper><BecomeAgentPage /></PageWrapper>} />
          <Route path="/brumly" element={<PageWrapper><DigitalShowcasePage /></PageWrapper>} />
          <Route path="/partner" element={<PageWrapper><PricingPage /></PageWrapper>} />
          <Route path="/chi-siamo" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/contatti" element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="/grazie" element={<PageWrapper><ThankYouPage /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
          <Route path="/cookie" element={<PageWrapper><CookiePolicyPage /></PageWrapper>} />
          <Route path="/termini" element={<PageWrapper><TermsConditionsPage /></PageWrapper>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="min-h-screen flex flex-col relative">
        {/* Global Fixed Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ParticlesBackground />
        </div>
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
