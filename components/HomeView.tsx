
import React from 'react';
import { SERVICES } from '../constants/services';
import { ViewState } from '../types';
import { ChevronRight, MapPin, Phone, Instagram } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const whatsappLink = "https://wa.me/5531997380101?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-sorelle-bg pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20"
            alt="Fundo"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sorelle-bg" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <h1 className="font-serif text-5xl md:text-8xl text-sorelle-dark leading-tight">
            Sua Beleza em <br/>
            <span className="italic font-light">Equilíbrio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Bem-vinda à Clínica Sorelle. Referência em estética avançada na Savassi, Belo Horizonte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const el = document.getElementById('services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-sorelle-dark text-white px-8 py-4 rounded-full font-bold hover:bg-sorelle-gold transition-all shadow-xl"
            >
              Nossos Procedimentos
            </button>
            <button 
              onClick={() => onNavigate('promotion')}
              className="bg-white border-2 border-sorelle-gold text-sorelle-gold px-8 py-4 rounded-full font-bold hover:bg-sorelle-gold hover:text-white transition-all shadow-xl"
            >
              Ganhe 3 Sessões de Laser
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sorelle-gold font-bold uppercase tracking-widest text-sm">Especialidades</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mt-2 mb-4">Procedimentos Realizados</h2>
            <div className="w-20 h-1 bg-sorelle-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="group relative bg-sorelle-bg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-sorelle-gold/10 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-sorelle-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => onNavigate({ type: 'detail', serviceId: service.id })}
                    className="flex items-center gap-2 text-sorelle-gold font-bold group/btn"
                  >
                    SAIBA MAIS 
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Info Section */}
      <section className="py-20 bg-sorelle-light/30 border-y border-sorelle-gold/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <a 
              href="https://maps.google.com/?q=R.+Alagoas,+1314+-+Savassi,+Belo+Horizonte+-+MG" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-sorelle-gold mb-6 group-hover:bg-sorelle-gold group-hover:text-white transition-all">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-xl mb-2">Endereço</h4>
              <p className="text-gray-600 text-sm">Shopping 5ª Avenida<br/>R. Alagoas, 1314 - Savassi, BH</p>
            </a>

            <a 
              href="tel:+5531997380101" 
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-sorelle-gold mb-6 group-hover:bg-sorelle-gold group-hover:text-white transition-all">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-xl mb-2">Telefone</h4>
              <p className="text-gray-600 text-sm">(31) 99738-0101<br/>Clique para ligar</p>
            </a>

            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <h4 className="font-serif font-bold text-xl mb-2">WhatsApp</h4>
              <p className="text-gray-600 text-sm">Fale diretamente conosco<br/>Inicie uma conversa</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
