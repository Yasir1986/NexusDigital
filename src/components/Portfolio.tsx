
import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO } from '../../constants';

const PortfolioItem: React.FC<{ item: typeof PORTFOLIO[0], index: number }> = ({ item, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`group cursor-pointer transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-3xl mb-6 bg-slate-100 dark:bg-slate-800/50 aspect-[4/3]">
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        <img 
          src={item.image} 
          alt={item.title} 
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 ${
            isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'
          }`}
        />
        
        {isLoaded && (
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
            <div className="w-14 h-14 rounded-full bg-white text-slate-950 flex items-center justify-center text-xl translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
              ↗
            </div>
          </div>
        )}
      </div>

      <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {item.title}
        </h4>
        <div className="flex">
          <span className="inline-block px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest shadow-sm">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [headerInView, setHeaderInView] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h2 className="text-indigo-600 dark:text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Our Latest Craft</h3>
          </div>
          <p className="max-w-md text-slate-600 dark:text-slate-400 text-base md:text-lg font-light leading-relaxed">
            We don't just build products; we architect digital legacies. Explore our recent ventures across diverse platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {PORTFOLIO.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
