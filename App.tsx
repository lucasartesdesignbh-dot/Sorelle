
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { PromotionView } from './components/PromotionView';
import { ServiceDetailView } from './components/ServiceDetailView';
import { ViewState } from './types';
import { SERVICES } from './constants/services';

function App() {
  const [view, setView] = useState<ViewState>('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.view) {
        setView(event.state.view);
      } else {
        setView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial history state if not present
    if (!window.history.state) {
      window.history.replaceState({ view: 'home' }, '');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (newView: ViewState) => {
    // If the view is an object (detail), we compare serviceIds
    const isSameView = typeof newView === 'string' && typeof view === 'string' 
      ? newView === view 
      : false;

    if (isSameView) return;

    setView(newView);
    // Push state to browser history
    window.history.pushState({ view: newView }, '');
    
    // Force immediate scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderView = () => {
    if (view === 'promotion') {
      return <PromotionView onNavigate={handleNavigate} />;
    }
    
    if (typeof view === 'object' && view.type === 'detail') {
      const service = SERVICES.find(s => s.id === view.serviceId);
      if (service) {
        return <ServiceDetailView service={service} onNavigate={handleNavigate} />;
      }
    }

    return <HomeView onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-sorelle-bg">
      <Header onNavigate={handleNavigate} currentView={view} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
