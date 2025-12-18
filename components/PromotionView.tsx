
import React, { useState, useRef } from 'react';
import AreaSelector from './AreaSelector';
import LeadForm from './LeadForm';
import { FAQ } from './FAQ';
import { BodyArea, UserFormData, ViewState } from '../types';
import { Gift, Check, ShieldCheck, Clock, ArrowLeft } from 'lucide-react';

const WHATSAPP_NUMBER = '5531997380101';

interface PromotionViewProps {
  onNavigate: (view: ViewState) => void;
}

export const PromotionView: React.FC<PromotionViewProps> = ({ onNavigate }) => {
  const [selectedArea, setSelectedArea] = useState<BodyArea | null>(null);
  const [showForm, setShowForm] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const handleAreaSelect = (area: BodyArea) => {
    setSelectedArea(area);
    setShowForm(true);
    // Pequeno delay para garantir que o render do formulário começou
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  const handleFormSubmit = (data: UserFormData) => {
    if (!selectedArea) return;
    const message = `Olá! Vim pelo site e gostaria de resgatar minhas 3 sessões grátis.\n\n*Nome:* ${data.name}\n*Telefone:* ${data.phone}\n*Área Escolhida:* ${selectedArea}\n\nPodemos agendar minha avaliação?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="animate-fade-in bg-sorelle-bg min-h-screen">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-12">
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-[#F9F4E8] -skew-x-6 translate-x-1/4 z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sorelle-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-10">
            <button 
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 text-sorelle-gold/80 hover:text-sorelle-gold font-bold transition-all group p-2 -ml-2 rounded-lg hover:bg-sorelle-gold/5"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="tracking-widest text-sm uppercase">VOLTAR PARA INÍCIO</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-5/12 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sorelle-gold/10 text-sorelle-dark font-bold text-xs uppercase tracking-wider">
                <Gift className="w-4 h-4 text-sorelle-gold" />
                Presente Exclusivo
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl text-gray-800 leading-none">
                <span className="text-sorelle-gold font-bold block text-[100px] lg:text-[140px] leading-[0.8] font-serif">3</span>
                Sessões <br />
                <span className="italic font-light">Grátis</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                Escolha uma das regiões e descubra a tecnologia que vai transformar sua relação com os pelos. Válido para a unidade Savassi.
              </p>
              <div className="hidden lg:flex items-center gap-6 pt-4 opacity-70">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <ShieldCheck className="w-5 h-5 text-sorelle-gold" />
                  <span>Tecnologia Segura</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                   <Clock className="w-5 h-5 text-sorelle-gold" />
                   <span>Rápido e Indolor</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 relative" id="selection">
              <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-[2.5rem] border border-white/80 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl font-bold text-gray-800">Escolha onde quer começar</h3>
                  <div className="w-12 h-0.5 bg-sorelle-gold/30 mx-auto mt-2" />
                </div>
                <AreaSelector selectedArea={selectedArea} onSelect={handleAreaSelect} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <section ref={formSectionRef} className="py-24 bg-sorelle-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center justify-center">
              <div className="text-white space-y-6 text-center md:text-left max-w-md">
                 <div className="inline-flex items-center gap-2 bg-white/10 text-sorelle-gold px-4 py-1.5 rounded-full text-sm font-bold border border-white/10 backdrop-blur-sm">
                    <Check className="w-4 h-4" />
                    Brinde Selecionado
                 </div>
                 <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Quase lá!</h2>
                 <p className="text-white/80 text-lg">
                   Você selecionou 3 sessões de <strong>{selectedArea}</strong>. <br/>
                   Preencha os dados para receber seu voucher exclusivo via WhatsApp.
                 </p>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xs text-white/60 italic">
                      *O agendamento final será realizado diretamente com nossa equipe de recepção após o envio do formulário.
                    </p>
                 </div>
              </div>
              <div className="w-full max-w-md">
                 <LeadForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </section>
      )}
      <FAQ />
    </div>
  );
};
