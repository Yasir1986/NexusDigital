
import React, { useEffect } from 'react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Years Experience', value: '12+' },
    { label: 'Projects Delivered', value: '450+' },
    { label: 'Gaming Titles', value: '25+' },
    { label: 'Global Uptime', value: '99.9%' },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mb-8 md:mb-12 hover:translate-x-[-4px] transition-transform text-sm md:text-base"
        >
          <span>←</span> Back to Home
        </button>

        <header className="mb-12 md:mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-tight">
            Architecting the <br className="hidden sm:block" />
            <span className="gradient-text">Digital Frontier.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl font-light">
            NexusDigital began as a small collective of visionary engineers and designers. Today, we are a global agency setting the standard for premium web services and interactive experiences.
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="glass p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-black/5 dark:border-white/5 text-center">
              <div className="text-2xl md:text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-1 md:mb-2">{stat.value}</div>
              <div className="text-[9px] md:text-xs uppercase tracking-widest font-bold text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-16 md:space-y-24">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 md:mb-6">A Decade of Evolution</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm md:text-lg leading-relaxed">
                <p>
                  Since 2012, we have navigated the rapidly shifting landscapes of the digital world. What started with custom web portals evolved into mobile application dominance, and eventually, high-fidelity game development.
                </p>
                <p>
                  Our journey is defined by a relentless pursuit of performance. We master technology to ensure our clients—from agile startups to Fortune 500—stay ahead.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] sm:aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden glass border border-black/10 dark:border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-indigo-600 rounded-[20px] md:rounded-3xl flex items-center justify-center text-white text-2xl md:text-4xl font-black shadow-2xl">
                12y
              </div>
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-white/5 rounded-[32px] md:rounded-[48px] p-8 md:p-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8 md:mb-12 text-center">Sector Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 text-center sm:text-left">
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400">Web & Cloud Systems</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Headless architectures, serverless computing, and enterprise hosting. 100% reliability for high-traffic platforms.
                </p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400">Mobile Innovation</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  FinTech and HealthTech apps with over 50 million total downloads across iOS and Android.
                </p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400">Game Design & UX</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Bringing gaming-level polish to enterprise products. Responsive and delightful interactions.
                </p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400">Strategic Hosting</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Managed solutions with global CDNs and AI security to protect and accelerate digital assets.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6">Partner with the Pioneers</h2>
          <button 
            onClick={onBack}
            className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-xl shadow-indigo-600/20 active:scale-95 text-sm md:text-base"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
