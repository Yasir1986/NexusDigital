
import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
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

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-slate-900/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-indigo-600 dark:text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">What Our Partners Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`glass p-8 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-1000 group flex flex-col h-full bg-white dark:bg-transparent shadow-sm dark:shadow-none ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <div className="flex items-center gap-1 text-indigo-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>

              <div className="mb-8 relative">
                <span className="absolute -top-4 -left-2 text-6xl text-indigo-600/10 dark:text-indigo-500/10 font-serif leading-none">“</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic relative z-10">
                  {testimonial.content}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full border-2 border-indigo-100 dark:border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors"
                />
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold leading-none mb-1">{testimonial.author}</h4>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                    {testimonial.role} @ <span className="text-indigo-600 dark:text-indigo-400/80">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 pt-12 border-t border-black/5 dark:border-white/5 flex flex-wrap justify-center items-center gap-12 grayscale dark:invert-0 invert opacity-30 hover:opacity-100 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           <span className="text-2xl font-black tracking-widest text-slate-900 dark:text-white">STELLAR</span>
           <span className="text-2xl font-black tracking-widest text-slate-900 dark:text-white">NEONPLAY</span>
           <span className="text-2xl font-black tracking-widest text-slate-900 dark:text-white">GLOBAL</span>
           <span className="text-2xl font-black tracking-widest text-slate-900 dark:text-white">QUANTUM</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
