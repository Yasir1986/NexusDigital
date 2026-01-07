
import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../../constants';
import { Service } from '../../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-indigo-600 dark:text-indigo-500 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">Full-Stack Capability</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`glass p-6 md:p-8 rounded-3xl group border-black/5 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-white/20 transition-all duration-700 hover:-translate-y-2 cursor-pointer shadow-sm dark:shadow-none ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
              onClick={() => setSelectedService(service)}
            >
              <div 
                className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 shadow-xl shadow-indigo-500/10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 animate-float-slow ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  transitionDelay: `${(index * 100) + 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {service.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs md:text-sm line-clamp-2">
                {service.description}
              </p>
              <button 
                className="mt-4 md:mt-6 flex items-center text-[10px] md:text-xs font-bold text-indigo-600 dark:text-indigo-500 uppercase tracking-widest transition-all group-hover:translate-x-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
              >
                Learn More <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="absolute inset-0 bg-slate-950/40 dark:bg-slate-950/80 backdrop-blur-xl"
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-[32px] md:rounded-[40px] border border-black/10 dark:border-white/10 shadow-2xl p-6 md:p-12 animate-in zoom-in-95 duration-300 bg-white dark:bg-slate-950">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 md:top-10 md:right-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all active:scale-90 z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/3">
                <div className={`w-16 h-16 md:w-24 md:h-24 rounded-[24px] md:rounded-[32px] bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-3xl md:text-5xl shadow-2xl shadow-indigo-500/20 mb-4 md:mb-8`}>
                  {selectedService.icon}
                </div>
                <h4 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
                  {selectedService.title}
                </h4>
                <div className="space-y-3">
                  <h5 className="text-[10px] md:text-xs font-bold text-indigo-600 dark:text-indigo-500 uppercase tracking-widest">Key Features</h5>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-xs md:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="space-y-4 md:space-y-6">
                  <h5 className="text-[10px] md:text-xs font-bold text-indigo-600 dark:text-indigo-500 uppercase tracking-widest">In-Depth Overview</h5>
                  <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {selectedService.detailedDescription}
                  </p>
                  
                  <div className="pt-4 md:pt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        const element = document.getElementById('estimator');
                        if (element) {
                          window.scrollTo({
                            top: element.offsetTop - 80,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="px-4 py-3 md:px-6 md:py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl md:rounded-2xl font-bold transition-all text-xs md:text-sm shadow-lg shadow-indigo-600/20"
                    >
                      Estimate This Project
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        const element = document.getElementById('contact');
                        if (element) {
                          window.scrollTo({
                            top: element.offsetTop - 80,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="px-4 py-3 md:px-6 md:py-4 bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white rounded-xl md:rounded-2xl font-bold transition-all text-xs md:text-sm"
                    >
                      Talk to an Expert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
