
import React, { useState, useEffect } from 'react';
import { View } from '../types';

interface NavbarProps {
  onHome: () => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onHome, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress for the bar
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScrollHeight) * 100;
      setScrollProgress(currentProgress);

      // Only run scroll spy on home view
      if (currentView === 'home') {
        const sections = ['services', 'portfolio', 'studio', 'estimator', 'contact', 'testimonials'];
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
        
        if (window.scrollY < 100) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // If not on home, go home first
    if (currentView !== 'home') {
      onHome();
      // Wait for next tick to scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'studio', label: 'AI Studio' },
    { id: 'estimator', label: 'AI Estimator' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen || currentView !== 'home' ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-black/5 dark:border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div onClick={(e) => { e.preventDefault(); onHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }} className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer relative z-[60]">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm font-black text-white">N</div>
          NEXUS<span className="text-indigo-500">DIGITAL</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(e, link.id)}
              className={`transition-all duration-300 relative py-1 ${
                currentView === 'home' && activeSection === link.id ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {link.label}
              {currentView === 'home' && activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full animate-in fade-in zoom-in duration-300"></span>
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-[60]">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-600 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all duration-500"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <span className="text-xl rotate-0 transition-transform duration-500">☀️</span>
            ) : (
              <span className="text-xl rotate-180 transition-transform duration-500">🌙</span>
            )}
          </button>
          
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden sm:block bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Get Started
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 transition-all active:scale-90"
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar - Pinned to the bottom of the Navbar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200/20 dark:bg-white/5 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 transition-transform duration-100 ease-out origin-left shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        ></div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed inset-x-0 top-0 pt-24 pb-12 bg-white dark:bg-slate-950 border-b border-black/5 dark:border-white/5 shadow-2xl transition-all duration-500 ease-in-out z-50 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-6 px-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-xl font-bold transition-colors ${
                currentView === 'home' && activeSection === link.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-6 border-t border-black/5 dark:border-white/5">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-block w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-500/20 active:scale-95 transition-transform"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
