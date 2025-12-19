
import React from 'react';
import { SERVICES } from '../constants/services';
import { ViewState } from '../types';
import { ChevronRight, MapPin, Phone, Sparkles } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const whatsappLink = "https://wa.me/5531972380101?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-10"
            alt="Fundo Sorelle"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-sorelle-gold/10 text-sorelle-gold font-bold text-xs uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-4 h-4" />
            Exclusividade na Savassi
          </div>
          <h1 className="font-serif text-6xl md:text-9xl text-sorelle-dark leading-[0.9] tracking-tighter">
            Beleza em Sua <br/>
            <span className="italic font-light">Melhor Versão</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Bem-vinda à Clínica Sorelle. Onde a ciência da estética avançada encontra o cuidado que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <button 
              onClick={() => {
                const el = document.getElementById('services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-sorelle-dark text-white px-10 py-5 rounded-full font-bold hover:bg-sorelle-gold transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Explorar Procedimentos
            </button>
            <button 
              onClick={() => onNavigate('promotion')}
              className="bg-white border-2 border-sorelle-gold text-sorelle-gold px-10 py-5 rounded-full font-bold hover:bg-sorelle-gold hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Resgatar 3 Sessões Grátis
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-sorelle-gold" />
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-sorelle-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-sorelle-gold font-bold uppercase tracking-[0.3em] text-xs">Menu de Experiências</span>
            <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mt-4 mb-6">Nossos Procedimentos</h2>
            <div className="w-24 h-1 bg-sorelle-gold/30 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 flex flex-col h-full"
              >
                {/* Foto Clicável */}
                <div 
                  className="h-72 overflow-hidden relative cursor-pointer"
                  onClick={() => onNavigate({ type: 'detail', serviceId: service.id })}
                >
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase bg-sorelle-gold/90 px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      Ver detalhes
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <h3 
                    className="font-serif text-2xl font-bold text-sorelle-dark mb-4 cursor-pointer hover:text-sorelle-gold transition-colors"
                    onClick={() => onNavigate({ type: 'detail', serviceId: service.id })}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => onNavigate({ type: 'detail', serviceId: service.id })}
                    className="flex items-center gap-3 text-sorelle-gold font-black text-xs uppercase tracking-widest group/btn"
                  >
                    <span>Saiba Detalhes</span>
                    <div className="w-8 h-px bg-sorelle-gold group-hover/btn:w-12 transition-all" />
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Info Section */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <a 
              href="https://maps.google.com/?q=R.+Alagoas,+1314+-+Savassi,+Belo+Horizonte+-+MG" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-sorelle-light rounded-2xl flex items-center justify-center text-sorelle-gold mb-8 group-hover:bg-sorelle-gold group-hover:text-white transition-all transform group-hover:rotate-6">
                <MapPin className="w-10 h-10" />
              </div>
              <h4 className="font-serif font-bold text-2xl mb-3 text-sorelle-dark">Onde Estamos</h4>
              <p className="text-gray-500 leading-relaxed">Shopping 5ª Avenida<br/>R. Alagoas, 1314 - Savassi, BH</p>
            </a>

            <a 
              href="tel:+5531972380101" 
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-sorelle-light rounded-2xl flex items-center justify-center text-sorelle-gold mb-8 group-hover:bg-sorelle-gold group-hover:text-white transition-all transform group-hover:-rotate-6">
                <Phone className="w-10 h-10" />
              </div>
              <h4 className="font-serif font-bold text-2xl mb-3 text-sorelle-dark">Atendimento</h4>
              <p className="text-gray-500 leading-relaxed">(31) 97238-0101<br/>Toque para ligar</p>
            </a>

            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-[#E7F9EE] rounded-2xl flex items-center justify-center text-[#25D366] mb-8 group-hover:bg-[#25D366] group-hover:text-white transition-all transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <h4 className="font-serif font-bold text-2xl mb-3 text-sorelle-dark">WhatsApp</h4>
              <p className="text-gray-500 leading-relaxed">Tire suas dúvidas<br/>Agende em segundos</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
