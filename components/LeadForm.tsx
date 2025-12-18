import React, { useState } from 'react';
import { UserFormData } from '../types';
import { Send, Smartphone, User } from 'lucide-react';

interface LeadFormProps {
  onSubmit: (data: UserFormData) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || phone.length < 10) {
      setError('Por favor, preencha todos os campos corretamente.');
      return;
    }
    setError('');
    
    // Dispara o evento de Lead do Pixel se estiver disponível
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }

    onSubmit({ name, phone });
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-sorelle-gold/20 relative overflow-hidden">
        {/* Decorative gold accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sorelle-gold to-yellow-300" />
        
        <div className="text-center mb-6">
          <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">
            Finalizar Agendamento
          </h3>
          <p className="text-gray-600 text-sm">
            Informe seus dados para receber o voucher via WhatsApp e agendar seu horário.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Seu Nome</label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sorelle-gold z-10 group-focus-within:text-sorelle-dark transition-colors" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Maria Silva"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-sorelle-gold focus:ring-2 focus:ring-sorelle-gold/20 outline-none transition-all relative z-0 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Seu WhatsApp</label>
            <div className="relative group">
              <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sorelle-gold z-10 group-focus-within:text-sorelle-dark transition-colors" />
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={handleChangePhone}
                placeholder="(31) 99999-9999"
                maxLength={15}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-sorelle-gold focus:ring-2 focus:ring-sorelle-gold/20 outline-none transition-all relative z-0 shadow-sm"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs text-center bg-red-50 p-2 rounded">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-sorelle-gold hover:bg-sorelle-dark text-white font-bold py-4 rounded-lg shadow-lg shadow-sorelle-gold/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-4 group"
          >
            <span>AGENDAR SESSÕES GRÁTIS</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-left text-[10px] text-gray-400 mt-4 leading-tight">
            *Ao clicar, você será redirecionado para o WhatsApp da clínica para confirmar o agendamento.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;