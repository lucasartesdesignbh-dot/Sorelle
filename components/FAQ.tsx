import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Como funcionam as 3 sessões grátis?",
    answer: "É um presente exclusivo da Clínica Sorelle. Você escolhe uma das áreas participantes (Axila, Buço ou Faixa de Barba) e ganha o tratamento inicial completo para conhecer nossa tecnologia e atendimento, totalmente sem custos."
  },
  {
    question: "O laser dói?",
    answer: "Trabalhamos com tecnologia de ponta que possui ponteira resfriada (Cryo), tornando a aplicação muito confortável e praticamente indolor, além de proteger a sua pele."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Para um resultado definitivo, recomendamos um protocolo médio de 10 sessões. Com as 3 sessões grátis, você já perceberá uma grande diferença na diminuição e afinamento dos pelos."
  },
  {
    question: "Quais os cuidados pré-sessão?",
    answer: "A região a ser depilada deve ser raspada com lâmina (gilete) no dia anterior ou no dia da sessão. Evite exposição solar intensa na área 15 dias antes do procedimento."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white border-t border-sorelle-gold/10" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-sorelle-dark mb-4">
            Dúvidas Frequentes
          </h2>
          <div className="w-24 h-1 bg-sorelle-gold mx-auto rounded-full opacity-50" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 overflow-hidden bg-white ${
                openIndex === index 
                  ? 'border-sorelle-gold shadow-md' 
                  : 'border-gray-100 hover:border-sorelle-gold/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-sorelle-dark' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                  openIndex === index 
                    ? 'bg-sorelle-gold text-white rotate-180' 
                    : 'bg-sorelle-light text-sorelle-dark hover:bg-sorelle-gold hover:text-white'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
