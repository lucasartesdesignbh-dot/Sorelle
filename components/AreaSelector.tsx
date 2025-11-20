import React from 'react';
import { BodyArea } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface AreaSelectorProps {
  selectedArea: BodyArea | null;
  onSelect: (area: BodyArea) => void;
}

const AreaSelector: React.FC<AreaSelectorProps> = ({ selectedArea, onSelect }) => {
  const areas = [
    { 
      id: BodyArea.AXILA, 
      label: 'Feminino',
      title: 'Axilas',
      desc: 'Livre-se dos pêlos indesejados e clareie a região.',
      // Image: Woman raising arm / smooth underarm
      img: 'https://images.unsplash.com/photo-1541535508458-9407416f5d5f?q=80&w=500&auto=format&fit=crop' 
    },
    { 
      id: BodyArea.BUCO, 
      label: 'Feminino',
      title: 'Buço',
      desc: 'Pele lisinha e rosto mais harmônico sem dor.',
      // Image: Close up of female face/lips
      img: 'https://images.unsplash.com/photo-1587776539483-9b95821155cb?q=80&w=500&auto=format&fit=crop' 
    },
    { 
      id: BodyArea.BARBA, 
      label: 'Masculino',
      title: 'Faixa de Barba',
      desc: 'Definição perfeita e fim da foliculite.',
      // Image: Man with beard
      img: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=500&auto=format&fit=crop' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {areas.map((area) => (
        <button
          key={area.id}
          onClick={() => onSelect(area.id)}
          className={`relative group overflow-hidden rounded-2xl transition-all duration-300 border-2 text-left h-full min-h-[320px] flex flex-col
            ${selectedArea === area.id 
              ? 'border-sorelle-gold shadow-2xl scale-[1.02] ring-2 ring-sorelle-gold/20' 
              : 'border-transparent shadow-lg hover:shadow-xl hover:-translate-y-1 bg-white'
            }`}
        >
          <div className="relative h-48 w-full overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img 
              src={area.img} 
              alt={area.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-3 left-3 z-20">
                 <span className="bg-white/90 backdrop-blur text-sorelle-dark text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {area.label}
                 </span>
            </div>
            {selectedArea === area.id && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-sorelle-gold/40 backdrop-blur-[2px]">
                <CheckCircle2 className="w-12 h-12 text-white drop-shadow-lg animate-bounce" />
              </div>
            )}
          </div>
          
          <div className="p-4 bg-white relative z-10 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-1">{area.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{area.desc}</p>
            </div>
            
            <div className={`mt-3 w-full py-2 rounded text-center font-bold text-xs transition-colors uppercase tracking-wide
              ${selectedArea === area.id ? 'bg-sorelle-gold text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-sorelle-gold group-hover:text-white'}`}>
              {selectedArea === area.id ? 'Selecionado' : 'Quero este'}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default AreaSelector;