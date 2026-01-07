
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-2xl transition-all hover:bg-indigo-500 hover:scale-110 active:scale-90"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-100"></div>
        <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-sm"></div>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="relative z-10 h-5 w-5 transition-transform group-hover:-translate-y-1"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 rounded-full bg-indigo-500/30 blur-md opacity-0 transition-opacity group-hover:opacity-100"></div>
      </button>
    </div>
  );
};

export default ScrollToTop;
