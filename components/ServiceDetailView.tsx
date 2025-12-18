
import React, { useEffect } from 'react';
import { Service, ViewState } from '../types';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ServiceDetailViewProps {
  service: Service;
  onNavigate: (view: ViewState) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onNavigate('home');
  };

  const whatsappLink = `https://wa.me/5531997380101?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20procedimento%20de%20${encodeURIComponent(service.title)}.`;

  return (
    <div className="pt-32 pb-24 animate-fade-in bg-white min-h-screen">
      <div className="container mx-auto px-6">
        {/* Botão VOLTAR PARA INÍCIO - Área de clique melhorada e z-index forçado */}
        <div className="mb-10 relative z-20">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-sorelle-gold/80 hover:text-sorelle-gold font-bold transition-all group focus:outline-none p-2 -ml-2 rounded-lg hover:bg-sorelle-gold/5"
            aria-label="Voltar para a página inicial"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-widest text-sm uppercase">VOLTAR PARA INÍCIO</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="rounded-3xl overflow-hidden shadow-2xl lg:sticky lg:top-32 border border-sorelle-gold/10">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-auto object-cover max-h-[600px]"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sorelle-gold font-bold uppercase tracking-widest text-sm">Procedimento Estético</span>
              <h1 className="font-serif text-4xl md:text-6xl text-sorelle-dark">{service.title}</h1>
              <div className="w-24 h-1 bg-sorelle-gold rounded-full" />
            </div>

            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="bg-sorelle-light/20 p-8 rounded-3xl border border-sorelle-gold/10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-sorelle-dark">Por que fazer na Sorelle?</h3>
              <ul className="space-y-4">
                {[
                  'Tecnologia de última geração',
                  'Profissionais altamente qualificados',
                  'Atendimento personalizado e exclusivo',
                  'Ambiente climatizado e confortável na Savassi'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-sorelle-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-sorelle-dark text-white text-center py-5 rounded-full font-bold text-lg hover:bg-sorelle-gold transition-all shadow-xl mt-8"
              >
                AGENDAR CONSULTA VIA WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
