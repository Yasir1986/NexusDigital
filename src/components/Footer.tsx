
import React from 'react';
import { View } from '../../types';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-12 md:py-20 bg-white dark:bg-slate-950 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-20">
          <div className="col-span-1 md:col-span-1">
            <div 
              onClick={() => onNavigate('home')} 
              className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 cursor-pointer"
            >
              NEXUS<span className="text-indigo-500">DIGITAL</span>
            </div>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
              Premium digital solutions for the next generation of business. We build, host, and scale your vision.
            </p>
            <div className="flex gap-3 md:gap-4">
              {['𝕏', 'in', 'ig', 'fb'].map((icon) => (
                <div 
                  key={icon} 
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-xs md:text-sm text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-600 hover:scale-110 hover:-rotate-12 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300 cursor-pointer active:scale-90"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-slate-900 dark:text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Services</h5>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-500">
              <li onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Web Development</li>
              <li onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Mobile Apps</li>
              <li onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Mobile Games</li>
              <li onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Cloud Hosting</li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 dark:text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Company</h5>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-500">
              <li onClick={() => onNavigate('about')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">About Us</li>
              <li onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Portfolio</li>
              <li onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Careers</li>
              <li onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 dark:text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Newsletter</h5>
            <p className="text-xs md:text-sm text-slate-500 mb-4 md:mb-6">Get digital trends in your inbox.</p>
            <div className="flex bg-slate-50 dark:bg-white/5 rounded-lg p-1 border border-black/5 dark:border-white/5 focus-within:border-indigo-500/50 transition-colors">
              <input type="email" placeholder="Email" className="bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white text-xs px-3 w-full" />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 md:px-4 py-2 rounded-md text-[10px] md:text-xs font-bold transition-all active:scale-95">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-slate-400 dark:text-slate-600 text-center md:text-left">
          <div>© 2024 NexusDigital Agency. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <span onClick={() => onNavigate('privacy')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span onClick={() => onNavigate('terms')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span onClick={() => onNavigate('cookies')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
