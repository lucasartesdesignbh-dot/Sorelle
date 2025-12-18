
import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5531997380101?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm py-2 shadow-md border-sorelle-gold/20' 
          : 'bg-transparent py-4 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
           <img 
             src="https://static.wixstatic.com/media/775113_c7691fec6e9b405c88d8a9b80c26a3ca~mv2.png" 
             alt="Clínica Sorelle" 
             className="h-20 md:h-28 w-auto object-contain block"
           />
        </button>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <button 
              onClick={() => onNavigate('home')}
              className={`${currentView === 'home' ? 'text-sorelle-gold' : 'text-gray-600'} hover:text-sorelle-gold transition-colors`}
            >
              Início
            </button>
            <button 
              onClick={() => onNavigate('promotion')}
              className={`${currentView === 'promotion' ? 'text-sorelle-gold' : 'text-gray-600'} hover:text-sorelle-gold transition-colors`}
            >
              3 Sessões Grátis
            </button>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-[#25D366] transition-colors"
            >
              Fale Conosco
            </a>

            <button 
              onClick={() => onNavigate('promotion')}
              className="bg-sorelle-gold text-white px-5 py-2 rounded-full hover:bg-sorelle-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Resgatar Presente
            </button>
        </div>

        {/* Mobile menu simple version - only promo button */}
        <div className="md:hidden">
          <button 
            onClick={() => onNavigate('promotion')}
            className="bg-sorelle-gold text-white text-xs px-4 py-2 rounded-full font-bold"
          >
            PRESENTE
          </button>
        </div>
      </div>
    </header>
  );
};
