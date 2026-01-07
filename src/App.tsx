
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import VisualGenerator from './components/VisualGenerator';
import ProjectEstimator from './components/ProjectEstimator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import AboutPage from './components/AboutPage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <Portfolio />
            <VisualGenerator />
            <Testimonials />
            <ProjectEstimator />
            <Contact />
          </>
        );
      case 'about':
        return <AboutPage onBack={() => setCurrentView('home')} />;
      case 'privacy':
      case 'terms':
      case 'cookies':
        return <LegalPage type={currentView} onBack={() => setCurrentView('home')} />;
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen">
      <Navbar onHome={() => setCurrentView('home')} currentView={currentView} />
      {renderContent()}
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </main>
  );
};

export default App;
