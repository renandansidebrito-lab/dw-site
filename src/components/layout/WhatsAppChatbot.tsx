import { useState, useEffect } from 'react';
import { X, Send, Phone, CreditCard, FileText, HelpCircle, CheckCircle2, Clock } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  options?: string[];
  timestamp: Date;
}

interface Sector {
  name: string;
  number: string;
  icon: React.ReactNode;
  description: string;
}

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentFlow, setCurrentFlow] = useState<'menu' | 'sector' | 'direct'>('menu');
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);

  const WHATSAPP_NUMBER = '+5528999851446';
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isWeekday = day >= 1 && day <= 5;
  const isFriday = day === 5;
  const online = isWeekday && ((isFriday && hour >= 7 && hour < 16) || (!isFriday && hour >= 7 && hour < 17));

  const sectors: Sector[] = [
    {
      name: 'Vendas',
      number: '+5528999851446',
      icon: <Phone className="h-5 w-5" />,
      description: 'Orçamentos e vendas de materiais'
    },
    {
      name: 'Financeiro',
      number: '+5528999851446',
      icon: <CreditCard className="h-5 w-5" />,
      description: 'Pagamentos, boletos e financeiro'
    },
    {
      name: 'Nota Fiscal',
      number: '+5528999851446',
      icon: <FileText className="h-5 w-5" />,
      description: 'Emissão de NF-e e documentos fiscais'
    },
    {
      name: 'Outros Assuntos',
      number: '+5528999851446',
      icon: <HelpCircle className="h-5 w-5" />,
      description: 'Dúvidas gerais e suporte'
    }
  ];

  const startConversation = () => {
    const welcomeMessage: Message = {
      id: '1',
      text: 'Olá! 👋 Bem-vindo à DW Granitos & Marmores!\n\nCom qual setor você gostaria de falar?',
      isBot: true,
      options: sectors.map(s => s.name),
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    setCurrentFlow('menu');
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      isBot: false,
      timestamp: new Date()
    };

    const sector = sectors.find(s => s.name === option);
    
    if (sector) {
      const sectorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Perfeito! Você escolheu falar com o setor de *${sector.name}*.\n\n${sector.description}\n\nVou te redirecionar para o WhatsApp deste setor. Clique no botão abaixo para iniciar a conversa:`,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage, sectorMessage]);
      setCurrentFlow('sector');
      setSelectedSector(sector);
      
      // Auto-open WhatsApp after 2 seconds
      setTimeout(() => {
        window.open(`https://wa.me/${sector.number.replace(/\D/g, '')}?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20de%20falar%20com%20o%20setor%20de%20${encodeURIComponent(sector.name)}`, '_blank');
      }, 2000);
    }
  };

  const handleDirectWhatsApp = (message?: string, targetNumber?: string) => {
    const text = message || 'Olá! Venho do site e gostaria de mais informações.';
    const encoded = encodeURIComponent(text);
    const number = (targetNumber || WHATSAPP_NUMBER).replace(/\D/g, '');
    window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-xl shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="text-white p-4 rounded-t-xl flex items-center justify-between" style={{background: 'linear-gradient(90deg, #128C7E 0%, #25D366 100%)'}}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:'#25D366'}}>
                <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">
                  <path fill="#fff" d="M16 3C9.383 3 4 8.383 4 15c0 2.386.701 4.611 1.902 6.496L5 29l7.654-2.012A11.957 11.957 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22a9.93 9.93 0 0 1-5.047-1.382l-.36-.213-4.033 1.06.999-3.938-.235-.372A9.928 9.928 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.233-7.82c-.29-.145-1.708-.842-1.97-.936-.263-.096-.455-.145-.646.146-.191.29-.74.936-.906 1.127-.166.191-.337.218-.627.073-.29-.145-1.225-.451-2.332-1.438-.862-.768-1.444-1.716-1.611-2.006-.167-.29-.018-.447.126-.592.13-.13.29-.337.435-.5.145-.163.193-.28.29-.471.096-.19.048-.363-.024-.508-.073-.145-.646-1.559-.884-2.132-.232-.558-.468-.482-.646-.49l-.553-.01c-.19 0-.5.073-.763.363-.263.29-1.003.981-1.003 2.392s1.028 2.773 1.172 2.962c.145.19 2.027 3.091 4.91 4.333.686.296 1.222.473 1.639.606.687.218 1.314.187 1.809.114.551-.082 1.708-.696 1.949-1.367.241-.672.241-1.245.168-1.367-.073-.123-.263-.2-.553-.345z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">DW Granitos</h3>
                <div className="flex items-center text-xs text-green-100">
                  {online ? (
                    <>
                      <CheckCircle2 className="h-3 w-3 text-emerald-300 mr-1" />
                      <span>Online agora</span>
                    </>
                  ) : (
                    <>
                      <Clock className="h-3 w-3 text-amber-300 mr-1" />
                      <span>Fora do horário</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-green-700 rounded"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.isBot 
                    ? 'bg-slate-100 text-slate-800 rounded-bl-none' 
                    : 'bg-green-600 text-white rounded-br-none'
                }`} style={message.isBot ? undefined : { background: '#25D366' }}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Options */}
            {currentFlow === 'menu' && messages.length > 0 && messages[messages.length - 1].options && (
              <div className="space-y-2">
                {messages[messages.length - 1].options?.map((option) => {
                  const sector = sectors.find(s => s.name === option);
                  return (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="w-full p-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-left transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          option === 'Vendas' ? 'bg-green-100 text-green-600' :
                          option === 'Financeiro' ? 'bg-brandLight text-brand' :
                          option === 'Nota Fiscal' ? 'bg-purple-100 text-purple-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {sector?.icon}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{option}</p>
                          <p className="text-xs text-slate-600">{sector?.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Ações rápidas e redirecionamento */}
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => handleDirectWhatsApp('Olá! Gostaria de solicitar um orçamento.', sectors.find(s => s.name === 'Vendas')?.number)}
                className="w-full p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-left text-sm"
              >
                Pedir orçamento
              </button>
              <button
                onClick={() => handleDirectWhatsApp('Olá! Pode me enviar o catálogo de materiais?', sectors.find(s => s.name === 'Vendas')?.number)}
                className="w-full p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-left text-sm"
              >
                Catálogo de materiais
              </button>
              <button
                onClick={() => handleDirectWhatsApp('Olá! Gostaria de falar com o setor de Vendas.', sectors.find(s => s.name === 'Vendas')?.number)}
                className="w-full p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-left text-sm"
              >
                Falar com Vendas
              </button>
            </div>

            {/* Sector redirect button */}
            {currentFlow === 'sector' && (
              <div className="text-center p-4">
                <button
                  onClick={() => handleDirectWhatsApp(undefined, selectedSector?.number)}
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Abrir WhatsApp
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-slate-50 rounded-b-xl">
            <button
              onClick={startConversation}
              className="w-full text-xs text-slate-600 hover:text-slate-800"
            >
              Reiniciar conversa
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 text-white p-4 rounded-full shadow-lg transition-all z-40"
          style={{
          animation: 'pulse 2s infinite',
          boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.6)',
          background: '#25D366'
          }}
        >
        <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
          <path fill="#fff" d="M16 3C9.383 3 4 8.383 4 15c0 2.386.701 4.611 1.902 6.496L5 29l7.654-2.012A11.957 11.957 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22a9.93 9.93 0 0 1-5.047-1.382l-.36-.213-4.033 1.06.999-3.938-.235-.372A9.928 9.928 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.233-7.82c-.29-.145-1.708-.842-1.97-.936-.263-.096-.455-.145-.646.146-.191.29-.74.936-.906 1.127-.166.191-.337.218-.627.073-.29-.145-1.225-.451-2.332-1.438-.862-.768-1.444-1.716-1.611-2.006-.167-.29-.018-.447.126-.592.13-.13.29-.337.435-.5.145-.163.193-.28.29-.471.096-.19.048-.363-.024-.508-.073-.145-.646-1.559-.884-2.132-.232-.558-.468-.482-.646-.49l-.553-.01c-.19 0-.5.073-.763.363-.263.29-1.003.981-1.003 2.392s1.028 2.773 1.172 2.962c.145.19 2.027 3.091 4.91 4.333.686.296 1.222.473 1.639.606.687.218 1.314.187 1.809.114.551-.082 1.708-.696 1.949-1.367.241-.672.241-1.245.168-1.367-.073-.123-.263-.2-.553-.345z"/>
        </svg>
        </button>
    </>
  );
}
