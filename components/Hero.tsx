
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleManualScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  // Calculate dynamic values for the scroll-reactive overlay
  const scrollProgress = Math.min(scrollY / 800, 1);
  const dynamicOpacity = 0.15 + (scrollProgress * 0.45);
  const hueShift = scrollProgress * 40;

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Immersive Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-40 transition-opacity duration-1000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-and-code-2248-large.mp4" type="video/mp4" />
        </video>
        
        {/* Parallax & Idle Animation System */}
        <div className="absolute inset-0 z-10">
          
          {/* Layer 1: Ultra Deep Gradient */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `translate3d(0, ${scrollY * 0.03}px, 0)` }}
          >
            <div className="w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px] md:blur-[160px] animate-pulse duration-[10s]"></div>
          </div>

          {/* Layer 2: Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{ 
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              transform: `translate3d(0, ${scrollY * 0.08}px, 0)`
            }}
          ></div>

          {/* Dynamic Scroll-Reactive Tint Overlay with Idle Breathing */}
          <div 
            className="absolute inset-0 transition-colors duration-200 pointer-events-none animate-tint-breathe"
            style={{ 
              backgroundColor: `hsla(${240 + hueShift}, 70%, 15%, ${dynamicOpacity})`,
              mixBlendMode: 'multiply'
            }}
          ></div>

          {/* Layer 3: Mid-depth Glowing Orbs */}
          <div 
            className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[60px] md:blur-[100px] animate-orb-drift"
            style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
          ></div>
          
          {/* Layer 4: Opposite Mid-depth Orb */}
          <div 
            className="absolute bottom-1/4 -right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[70px] md:blur-[120px] animate-orb-drift-reverse"
            style={{ transform: `translate3d(0, ${scrollY * -0.22}px, 0)` }}
          ></div>

          {/* Layer 5: Fast Foreground Particles */}
          <div 
            className="absolute inset-0 opacity-10 dark:opacity-20"
            style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {[...Array(15)].map((_, i) => (
                <circle
                  key={i}
                  cx={`${Math.random() * 100}%`}
                  cy={`${Math.random() * 100}%`}
                  r={Math.random() * 2 + 1}
                  fill="currentColor"
                  className="text-indigo-300 dark:text-indigo-400 animate-float"
                  style={{
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${10 + Math.random() * 10}s`
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Static Color Tint Overlay (Base Layer) with Idle Animation */}
          <div className="absolute inset-0 bg-indigo-900/5 dark:bg-black/10 animate-hue-rotate pointer-events-none"></div>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_white_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_rgb(2,6,23)_100%)] opacity-40"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 text-[10px] md:text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-6 md:mb-8 tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen Digital Solutions
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 leading-[1.1] tracking-tight drop-shadow-sm">
          We Architect the <br className="hidden sm:block" />
          <span className="gradient-text">Future of Digital</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-10 leading-relaxed font-light px-2 drop-shadow-sm">
          NexusDigital transforms bold ideas into award-winning digital experiences. From high-performance web systems to immersive mobile gaming.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <a 
            href="#portfolio" 
            onClick={(e) => handleManualScroll(e, 'portfolio')}
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/5 text-sm md:text-base"
          >
            View Our Work
          </a>
          <a 
            href="#estimator" 
            onClick={(e) => handleManualScroll(e, 'estimator')}
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-slate-100/80 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-all backdrop-blur-md shadow-lg shadow-black/5 text-sm md:text-base"
          >
            Project Estimator
          </a>
        </div>

        <div className="mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-4 md:gap-16 opacity-30 grayscale invert dark:invert-0 transition-opacity hover:opacity-50 text-[10px] sm:text-sm md:text-xl font-bold italic tracking-tighter">
          <div>CLOUDFLARE</div>
          <div>VERCEL</div>
          <div>GOOGLE</div>
          <div>STRIPE</div>
          <div>AWS</div>
        </div>
      </div>

      <style>{`
        @keyframes orb-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.1); }
        }
        @keyframes orb-drift-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, 20px) scale(1.05); }
        }
        @keyframes tint-breathe {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.95; }
        }
        @keyframes hue-rotate {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(15deg); }
        }
        .animate-orb-drift {
          animation: orb-drift 12s infinite ease-in-out;
        }
        .animate-orb-drift-reverse {
          animation: orb-drift-reverse 15s infinite ease-in-out;
        }
        .animate-tint-breathe {
          animation: tint-breathe 8s infinite ease-in-out;
        }
        .animate-hue-rotate {
          animation: hue-rotate 10s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
