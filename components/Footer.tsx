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

                <a 
                  href="https://wa.me/5531997380101?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-colors shadow-md"
                  aria-label="WhatsApp"
                >
                   <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-current" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
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