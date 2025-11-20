import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm py-2 shadow-md border-sorelle-gold/20' 
          : 'bg-transparent py-4 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center md:justify-between items-center">
        <div className="flex items-center gap-2">
           <img 
             src="/logo.png" 
             alt="Clínica Sorelle" 
             className="h-12 md:h-16 w-auto object-contain"
             onError={(e) => {
               // Fallback if image fails to load
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
               e.currentTarget.nextElementSibling?.classList.add('flex');
             }}
           />
           {/* Fallback text in case logo image is missing */}
           <div className="hidden flex-col justify-center">
              <h1 className="font-serif text-2xl font-bold text-sorelle-dark leading-none">
                Sorelle
              </h1>
              <span className="text-[0.5rem] tracking-widest uppercase text-sorelle-gold">
                Clínica de Estética
              </span>
           </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <a href="#location" className="hover:text-sorelle-gold transition-colors">Localização</a>
            <a 
              href="#selection" 
              className="bg-sorelle-gold text-white px-5 py-2 rounded-full hover:bg-sorelle-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Resgatar Presente
            </a>
        </div>
      </div>
    </header>
  );
};