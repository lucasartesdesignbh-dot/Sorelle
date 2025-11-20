import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AreaSelector from './components/AreaSelector';
import LeadForm from './components/LeadForm';
import { BodyArea, UserFormData } from './types';
import { Gift, Check, Star, ShieldCheck, Clock } from 'lucide-react';

const WHATSAPP_NUMBER = '5531972380101';

function App() {
  const [selectedArea, setSelectedArea] = useState<BodyArea | null>(null);
  const [showForm, setShowForm] = useState(false);
  
  // Refs for scrolling
  const formSectionRef = useRef<HTMLDivElement>(null);

  const handleAreaSelect = (area: BodyArea) => {
    setSelectedArea(area);
    setShowForm(true);
    
    // Smooth scroll to form after a tiny delay
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleFormSubmit = (data: UserFormData) => {
    if (!selectedArea) return;

    const message = `Olá! Vim pelo site e ganhei o brinde das 3 sessões grátis.\n\n*Nome:* ${data.name}\n*Telefone:* ${data.phone}\n*Área Escolhida:* ${selectedArea}\n\nGostaria de agendar minha avaliação.`;
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION WITH SELECTOR */}
        <section className="relative min-h-screen md:min-h-[85vh] flex items-center bg-sorelle-bg overflow-hidden pt-28 pb-12">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-[#F9F4E8] -skew-x-6 translate-x-1/4 z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sorelle-gold/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              
              {/* Text Content (Left) */}
              <div className="w-full lg:w-5/12 text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sorelle-gold/10 text-sorelle-dark font-bold text-xs uppercase tracking-wider animate-fade-in">
                  <Gift className="w-4 h-4 text-sorelle-gold" />
                  Exclusivo Clínica Sorelle
                </div>
                
                <h1 className="font-serif text-5xl lg:text-7xl text-gray-800 leading-none">
                  <span className="text-sorelle-gold font-bold block text-[120px] lg:text-[160px] leading-[0.8] font-serif">3</span>
                  Sessões <br />
                  <span className="italic font-light">Grátis</span>
                </h1>
                
                <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                  Escolha uma região ao lado e experimente a liberdade da <strong>Depilação a Laser</strong> na unidade Savassi.
                </p>

                <div className="hidden lg:flex items-center gap-4 pt-4 opacity-70">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ShieldCheck className="w-5 h-5 text-sorelle-gold" />
                    <span>Tecnologia Segura</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                     <Clock className="w-5 h-5 text-sorelle-gold" />
                     <span>Rápido</span>
                  </div>
                </div>
              </div>

              {/* Selection Area (Right - Replaces Image) */}
              <div className="w-full lg:w-7/12 relative" id="selection">
                <div className="bg-white/50 backdrop-blur-sm p-4 md:p-6 rounded-3xl border border-white/60 shadow-xl">
                  <div className="text-center mb-6 lg:mb-8">
                    <h3 className="font-serif text-2xl font-bold text-gray-800">
                       Seu presente está a um clique
                    </h3>
                    <p className="text-sm text-gray-500">
                      Selecione a área que deseja ganhar:
                    </p>
                  </div>
                  <AreaSelector 
                    selectedArea={selectedArea} 
                    onSelect={handleAreaSelect} 
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST INDICATORS (Mobile Only) */}
        <section className="bg-white py-8 border-y border-sorelle-gold/10 lg:hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 gap-4">
             <div className="flex items-center gap-4">
               <div className="p-2 bg-sorelle-light rounded-full text-sorelle-gold">
                 <ShieldCheck className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-gray-800 text-sm">Tecnologia Segura</h4>
                 <p className="text-xs text-gray-500">Aprovado pela ANVISA</p>
               </div>
             </div>
          </div>
        </section>

        {/* FORM SECTION (Appears below hero when selected) */}
        {showForm && (
          <section 
            ref={formSectionRef}
            className="py-20 bg-sorelle-dark relative overflow-hidden"
          >
             {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            {/* Gold Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sorelle-gold/30 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
                
                <div className="text-white space-y-6 text-center md:text-left max-w-sm">
                   <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm font-bold border border-green-500/20">
                      <Check className="w-4 h-4" />
                      Brinde Reservado!
                   </div>
                   <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
                     Confirme seus dados
                   </h2>
                   <p className="text-white/80">
                     Você escolheu ganhar 3 sessões de: <br/>
                     <strong className="text-sorelle-gold text-2xl block mt-2 border-l-4 border-sorelle-gold pl-4 bg-white/5 py-2 rounded-r-lg">
                       {selectedArea}
                     </strong>
                   </p>
                </div>

                <div className="w-full max-w-md">
                   <LeadForm onSubmit={handleFormSubmit} />
                </div>

              </div>
            </div>
          </section>
        )}
        
      </main>
      <Footer />
    </div>
  );
}

export default App;