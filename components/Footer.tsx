import React from 'react';
import { MapPin, Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sorelle-light text-sorelle-text pt-16 pb-8 border-t border-sorelle-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="https://static.wixstatic.com/media/775113_c7691fec6e9b405c88d8a9b80c26a3ca~mv2.png" 
              alt="Clínica Sorelle" 
              className="h-48 w-auto mb-6 object-contain block"
            />

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