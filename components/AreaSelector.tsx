import React from 'react';
import { BodyArea } from '../types';
import { CheckCircle2, Sparkles, Smile, User } from 'lucide-react';

interface AreaSelectorProps {
  selectedArea: BodyArea | null;
  onSelect: (area: BodyArea) => void;
}

const AreaSelector: React.FC<AreaSelectorProps> = ({ selectedArea, onSelect }) => {
  const areas = [
    { 
      id: BodyArea.AXILA, 
      label: 'Feminino e Masculino',
      title: 'Axilas',
      desc: 'Livre-se dos pêlos indesejados e clareie a região.',
      icon: Sparkles,
      // Imagem fornecida para axilas
      imageUrl: 'https://media.istockphoto.com/id/935751700/pt/foto/close-up-of-female-armpit.jpg?s=612x612&w=0&k=20&c=nn7uyA6WgpDQGuC1RUbs26AtuwJu7wqfNKKRINvQ98I='
    },
    { 
      id: BodyArea.BUCO, 
      label: 'Feminino',
      title: 'Buço',
      desc: 'Pele lisinha e rosto mais harmônico sem dor.',
      icon: Smile,
      // Imagem fornecida para buço
      imageUrl: 'https://blog.creamy.com.br/wp-content/uploads/2022/02/depilacao-do-buco2.jpg'
    },
    { 
      id: BodyArea.BARBA, 
      label: 'Masculino',
      title: 'Faixa de Barba',
      desc: 'Definição perfeita e fim da foliculite.',
      icon: User,
      // Imagem fornecida para barba
      imageUrl: 'https://blog.newoldman.com.br/wp-content/uploads/2024/08/Cuidados-Com-a-Barba-2.png'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {areas.map((area) => (
        <button
          key={area.id}
          onClick={() => onSelect(area.id)}
          className={`relative group overflow-hidden rounded-2xl transition-all duration-300 border-2 text-left h-full min-h-[320px] flex flex-col bg-white
            ${selectedArea === area.id 
              ? 'border-sorelle-gold shadow-xl scale-[1.02] ring-2 ring-sorelle-gold/20' 
              : 'border-transparent shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}
        >
          {/* Aumentei a altura da área da imagem para h-48 para destacar mais */}
          <div className={`relative h-48 w-full shrink-0 flex items-center justify-center transition-colors duration-500 overflow-hidden bg-gray-100`}>
            
            {area.imageUrl ? (
               <img 
                 src={area.imageUrl} 
                 alt={area.title}
                 className={`w-full h-full object-cover transition-transform duration-700
                    ${selectedArea === area.id ? 'scale-110 opacity-100' : 'group-hover:scale-110 opacity-90'}`}
               />
            ) : (
                <area.icon 
                className={`w-16 h-16 transition-all duration-500
                    ${selectedArea === area.id ? 'text-sorelle-gold scale-110' : 'text-sorelle-dark/30 group-hover:text-sorelle-dark/50 group-hover:scale-110'}`} 
                strokeWidth={1.5}
                />
            )}
            
            <div className="absolute top-3 left-3 z-20">
                 <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm transition-colors
                   ${selectedArea === area.id ? 'bg-sorelle-gold text-white' : 'bg-white/90 text-gray-600 backdrop-blur-sm'}`}>
                    {area.label}
                 </span>
            </div>
            
            {selectedArea === area.id && (
              <div className="absolute bottom-3 right-3 z-20 animate-in fade-in zoom-in duration-300">
                <div className="bg-white rounded-full p-1 shadow-sm">
                   <CheckCircle2 className="w-5 h-5 text-sorelle-gold" />
                </div>
              </div>
            )}
          </div>
          
          <div className="p-5 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
            </div>
            
            <div className={`mt-4 w-full py-2.5 rounded-lg text-center font-bold text-xs transition-colors uppercase tracking-wide
              ${selectedArea === area.id ? 'bg-sorelle-gold text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-sorelle-gold group-hover:text-white'}`}>
              {selectedArea === area.id ? 'Selecionado' : 'Quero este'}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default AreaSelector;