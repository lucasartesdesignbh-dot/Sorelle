
import React, { useState } from 'react';
import { UserFormData } from '../types';
import { Send, Smartphone, User, Loader2 } from 'lucide-react';

interface LeadFormProps {
  onSubmit: (data: UserFormData) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      if (numbers.length > 2) {
        if (numbers.length <= 6) {
          return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        }
        if (numbers.length <= 10) {
          return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
        }
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
      }
      return numbers;
    }
    return value.slice(0, 15);
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (name.trim().length < 3) {
      setError('Por favor, informe seu nome completo.');
      return;
    }
    if (cleanPhone.length < 10) {
      setError('Por favor, informe um WhatsApp válido.');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulação de processamento para UX
    setTimeout(() => {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead');
      }
      onSubmit({ name, phone });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-sorelle-gold/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sorelle-gold via-yellow-200 to-sorelle-gold" />
        
        <div className="text-center mb-8">
          <h3 className="font-serif text-3xl font-bold text-gray-800 mb-2">
            Resgate seu Voucher
          </h3>
          <p className="text-gray-500 text-sm">
            Nossa equipe entrará em contato em instantes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nome Completo</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sorelle-gold/60 group-focus-within:text-sorelle-gold transition-colors" />
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Maria de Souza"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 placeholder-gray-300 focus:border-sorelle-gold focus:bg-white focus:ring-4 focus:ring-sorelle-gold/10 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Seu WhatsApp</label>
            <div className="relative group">
              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sorelle-gold/60 group-focus-within:text-sorelle-gold transition-colors" />
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={handleChangePhone}
                placeholder="(31) 99999-9999"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 placeholder-gray-300 focus:border-sorelle-gold focus:bg-white focus:ring-4 focus:ring-sorelle-gold/10 outline-none transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="animate-bounce bg-red-50 text-red-500 text-xs font-bold text-center p-3 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sorelle-gold hover:bg-sorelle-dark text-white font-bold py-5 rounded-xl shadow-xl shadow-sorelle-gold/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mt-4 disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>AGENDAR AGORA</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-4 opacity-40">
            <div className="h-px w-8 bg-gray-300"></div>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">🔒 Ambiente Seguro</p>
            <div className="h-px w-8 bg-gray-300"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
