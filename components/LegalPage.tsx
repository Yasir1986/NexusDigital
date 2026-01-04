
import React, { useEffect } from 'react';
import { View } from '../types';

interface LegalPageProps {
  type: View;
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          date: 'Last updated: March 2024',
          sections: [
            {
              heading: '1. Information We Collect',
              content: 'We collect information that you provide directly to us, such as when you create an account, request an estimate, or communicate with us. This may include your name, email address, company details, and project requirements.'
            },
            {
              heading: '2. How We Use Your Information',
              content: 'We use the information we collect to provide, maintain, and improve our services, including our AI-powered estimation tools and design studio. We also use it to communicate with you about your projects and provide customer support.'
            },
            {
              heading: '3. Data Security',
              content: 'We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet transmission is ever fully secure or error-free.'
            },
            {
              heading: '4. Third-Party Services',
              content: 'Our services utilize Google Gemini API and Google Imagen. Use of these services is subject to Google\'s privacy policies and terms of service. We do not sell your personal information to third parties.'
            }
          ]
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          date: 'Last updated: March 2024',
          sections: [
            {
              heading: '1. Acceptance of Terms',
              content: 'By accessing or using NexusDigital services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.'
            },
            {
              heading: '2. Services Provided',
              content: 'NexusDigital provides web development, hosting, mobile app creation, and game development services. We also provide AI-assisted tools for estimation and visualization. These tools are provided "as is" and estimations are ballpark figures only.'
            },
            {
              heading: '3. Intellectual Property',
              content: 'Unless otherwise indicated, all content on our website is our proprietary property. The images generated in our AI Studio are subject to the usage terms of the underlying model providers.'
            },
            {
              heading: '4. Limitation of Liability',
              content: 'In no event shall NexusDigital be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.'
            }
          ]
        };
      case 'cookies':
        return {
          title: 'Cookie Settings',
          date: 'Last updated: March 2024',
          sections: [
            {
              heading: '1. What are Cookies?',
              content: 'Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies and similar technologies for storing and honoring your preferences and settings.'
            },
            {
              heading: '2. Essential Cookies',
              content: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or filling in forms.'
            },
            {
              heading: '3. Performance & Analytics',
              content: 'We use cookies to collect information about how you interact with our website, which helps us understand user behavior and improve our service offerings.'
            },
            {
              heading: '4. Managing Your Preferences',
              content: 'Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our services.'
            }
          ]
        };
      default:
        return null;
    }
  };

  const data = getContent();
  if (!data) return null;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <span>←</span> Back to Home
        </button>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
            {data.title}
          </h1>
          <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">
            {data.date}
          </p>
        </header>

        <div className="space-y-12">
          {data.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {section.heading}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-black/5 dark:border-white/5 text-center">
          <p className="text-slate-500 text-sm mb-6 italic">
            Questions about our {data.title.toLowerCase()}? Contact us at hello@nexusdigital.io
          </p>
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
