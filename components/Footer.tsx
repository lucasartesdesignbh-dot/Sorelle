import React, { useState } from 'react';
import { MapPin, Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-sorelle-light text-sorelle-text pt-16 pb-8 border-t border-sorelle-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            {/* Logo Logic: Try to load image, fallback to styled text if it fails */}
            {!imgError ? (
              <img 
                src="/logo.png" 
                alt="Clínica Sorelle" 
                className="h-24 w-auto mb-6 object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="mb-6 flex flex-col items-center md:items-start">
                 <div className="flex items-center gap-2 mb-1">
                    {/* Simple CSS Butterfly Icon Shape */}
                    <div className="w-8 h-8 text-sorelle-gold">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 3c-1.5 0-2.5 1.5-2.5 3 0-1.5-1-3-2.5-3C4 3 2 5.5 2 9c0 3.5 3 5.5 6 5.5 1 0 2-.5 2.5-1 .5.5 1.5 1 2.5 1 3 0 6-2 6-5.5 0-3.5-2-6-5-6-1.5 0-2.5 1.5-2.5 3z" opacity="0.8"/>
                        <path d="M12 21c1.5 0 2.5-1.5 2.5-3 0 1.5 1 3 2.5 3 3 0 5-2.5 5-6 0-3.5-3-5.5-6-5.5-1 0-2 .5-2.5 1-.5-.5-1.5-1-2.5-1-3 0-6 2-6 5.5 0 3.5 2 6 5 6 1.5 0 2.5-1.5 2.5-3z" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-sorelle-dark">Clínica</span>
                      <span className="font-serif text-3xl font-bold text-sorelle-gold">Sorelle</span>
                    </div>
                 </div>
                 <span className="text-[10px] tracking-widest uppercase text-sorelle-dark/70 border-t border-sorelle-gold/30 pt-1 w-full text-center md:text-left">
                   Depilação a Laser e Estética
                 </span>
              </div>
            )}

            <p className="text-sorelle-dark/80 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Referência em Depilação a Laser e Estética Avançada. Tecnologia de ponta para sua beleza e bem-estar em Belo Horizonte.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left" id="location">
            <h3 className="font-serif font-bold text-xl mb-6 text-sorelle-dark border-b border-sorelle-gold/30 pb-2 inline-block md:block">Localização</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start gap-3 justify-center md:justify-start group">
                <MapPin className="w-5 h-5 text-sorelle-gold shrink-0 group-hover:animate-bounce" />
                <span className="text-left">
                  <strong className="text-sorelle-dark">Shopping 5ª Avenida</strong><br />
                  R. Alagoas, 1314 - Savassi<br />
                  Belo Horizonte - MG<br />
                  <a 
                    href="https://maps.google.com/?q=R.+Alagoas,+1314+-+Savassi,+Belo+Horizonte+-+MG" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sorelle-dark font-bold hover:text-sorelle-gold hover:underline mt-1 inline-block transition-colors"
                  >
                    Ver no mapa
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                 <Phone className="w-5 h-5 text-sorelle-gold shrink-0" />
                 <span>(31) 97238-0101</span>
              </li>
            </ul>
          </div>

          {/* Social / Hours */}
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-xl mb-6 text-sorelle-dark border-b border-sorelle-gold/30 pb-2 inline-block md:block">Horários & Social</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                <strong className="text-sorelle-dark">Segunda a Sexta:</strong><br />
                09:00 às 19:00
              </p>
              <p>
                <strong className="text-sorelle-dark">Sábado:</strong><br />
                09:00 às 14:00
              </p>
              
              <div className="pt-4 flex justify-center md:justify-start gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-sorelle-gold text-white p-3 rounded-full hover:bg-sorelle-dark transition-colors shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-sorelle-gold/10 pt-8">
          <p className="text-xs text-sorelle-dark/60">
            © {new Date().getFullYear()} Clínica Sorelle. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};