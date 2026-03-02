import { useState, useEffect, useMemo, useCallback } from 'react';
import { X, Send, Phone, CreditCard, FileText, HelpCircle, CheckCircle2, Clock, MessageCircle, Settings, Package, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/contexts/i18nContext';

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
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentFlow, setCurrentFlow] = useState<'welcome' | 'name_input' | 'menu' | 'sales_submenu' | 'sector' | 'direct'>('welcome');
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [footerOffset, setFooterOffset] = useState(0);

  const WHATSAPP_NUMBER = '+5528999851446';
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isWeekday = day >= 1 && day <= 5;
  const isFriday = day === 5;
  const online = isWeekday && ((isFriday && hour >= 7 && hour < 16) || (!isFriday && hour >= 7 && hour < 17));

  const sectors: Sector[] = useMemo(() => [
    {
      name: t('whatsapp.sectors.sales'),
      number: '+5528999851446',
      icon: <Phone className="h-5 w-5" />,
      description: t('whatsapp.sectors.sales.desc')
    },
    {
      name: t('whatsapp.sectors.financial'),
      number: '+5528999466989',
      icon: <CreditCard className="h-5 w-5" />,
      description: t('whatsapp.sectors.financial.desc')
    },
    {
      name: t('whatsapp.sectors.invoice'),
      number: '+5528999238885',
      icon: <FileText className="h-5 w-5" />,
      description: t('whatsapp.sectors.invoice.desc')
    },
    {
      name: t('whatsapp.sectors.others'),
      number: '+5528999851446',
      icon: <HelpCircle className="h-5 w-5" />,
      description: t('whatsapp.sectors.others.desc')
    }
  ], [t]);

  const salesSectors = [
    { name: t('whatsapp.sales.sawmill'), number: '+5528999057492' },
    { name: t('whatsapp.sales.slabs'), number: '+5528999851446' },
    { name: t('whatsapp.sales.cut'), number: '+5528999511643' }
  ];

  const startConversation = useCallback(() => {
    const welcomeMessage: Message = {
      id: '1',
      text: t('whatsapp.messages.welcome'),
      isBot: true,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    setCurrentFlow('name_input');
  }, [t]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const name = inputValue.trim();
    setUserName(name);
    setInputValue('');

    const userMessage: Message = {
      id: Date.now().toString(),
      text: name,
      isBot: false,
      timestamp: new Date()
    };

    const menuMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: t('whatsapp.messages.menu', { name }),
      isBot: true,
      options: sectors.map(s => s.name),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, menuMessage]);
    setCurrentFlow('menu');
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);

    if (option === t('whatsapp.sectors.sales')) {
      const salesMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: t('whatsapp.messages.salesSubmenu'),
        isBot: true,
        options: salesSectors.map(s => s.name),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, salesMessage]);
      setCurrentFlow('sales_submenu');
      return;
    }

    const sector = sectors.find(s => s.name === option);
    
    if (sector) {
      processSectorSelection(sector);
    }
  };

  const handleSalesOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      isBot: false,
      timestamp: new Date()
    };

    const salesSector = salesSectors.find(s => s.name === option);
    const sector: Sector = {
      name: t('whatsapp.messages.salesTitle', { option }),
      number: salesSector ? salesSector.number : '+5528999851446',
      icon: <Phone className="h-5 w-5" />,
      description: t('whatsapp.messages.salesDesc', { option })
    };

    setMessages(prev => [...prev, userMessage]);
    processSectorSelection(sector);
  };

  const processSectorSelection = (sector: Sector) => {
    const sectorMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: t('whatsapp.messages.redirect', { sector: sector.name, description: sector.description }),
      isBot: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, sectorMessage]);
    setCurrentFlow('sector');
    setSelectedSector(sector);
    
    // Auto-open WhatsApp after 2 seconds
    setTimeout(() => {
      window.open(`https://wa.me/${sector.number.replace(/\D/g, '')}?text=Ol%C3%A1%2C%20me%20chamo%20${encodeURIComponent(userName)}%2C%20venho%20do%20site%20e%20gostaria%20de%20falar%20com%20o%20setor%20de%20${encodeURIComponent(sector.name)}`, '_blank');
    }, 2000);
  };

  const handleDirectWhatsApp = (message?: string, targetNumber?: string) => {
    const text = message || t('whatsapp.messages.default', { name: userName || 'Visitante' });
    const encoded = encodeURIComponent(text);
    const number = (targetNumber || WHATSAPP_NUMBER).replace(/\D/g, '');
    window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen, messages.length, startConversation]);

  useEffect(() => {
    const updateOffset = () => {
      const footer = document.querySelector('footer');
      if (!footer) {
        setFooterOffset(0);
        return;
      }
      const rect = footer.getBoundingClientRect();
      const overlap = Math.max(0, window.innerHeight - rect.top);
      setFooterOffset(overlap);
    };
    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });
    window.addEventListener('resize', updateOffset);
    return () => {
      window.removeEventListener('scroll', updateOffset);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed right-4 w-96 h-[500px] bg-white rounded-xl shadow-2xl border z-50 flex flex-col" 
          style={{ bottom: 80 + footerOffset }}
        >
          {/* Header */}
          <div className="text-white p-4 rounded-t-xl flex items-center justify-between" style={{background: 'linear-gradient(90deg, #128C7E 0%, #25D366 100%)'}}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:'#25D366'}}>
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">{t('whatsapp.header.title')}</h3>
                <div className="flex items-center text-xs text-green-100">
                  {online ? (
                    <>
                      <CheckCircle2 className="h-3 w-3 text-emerald-300 mr-1" />
                      <span>{t('whatsapp.status.online')}</span>
                    </>
                  ) : (
                    <>
                      <Clock className="h-3 w-3 text-amber-300 mr-1" />
                      <span>{t('whatsapp.status.offline')}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label={t('whatsapp.accessibility.close')}
              className="p-1 hover:bg-green-700 rounded"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-lg ${
                  message.isBot 
                    ? 'bg-white text-slate-800 shadow-sm rounded-tl-none' 
                    : 'bg-green-600 text-white shadow-sm rounded-tr-none'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-[10px] opacity-70 mt-1 text-right">
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Name Input */}
            {currentFlow === 'name_input' && (
              <form onSubmit={handleNameSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t('whatsapp.input.placeholder')}
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}

            {/* Options */}
            {currentFlow === 'menu' && messages.length > 0 && messages[messages.length - 1].options && (
              <div className="space-y-2 pt-2">
                {messages[messages.length - 1].options?.map((option) => {
                  const sector = sectors.find(s => s.name === option);
                  return (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="w-full p-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-left transition-colors shadow-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          option === 'Vendas' ? 'bg-green-100 text-green-600' :
                          option === 'Financeiro' ? 'bg-brandLight/20 text-brand' :
                          option === 'Nota Fiscal' ? 'bg-purple-100 text-purple-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {sector?.icon}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 text-sm">{option}</p>
                          <p className="text-xs text-slate-500">{sector?.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Sales Submenu Options */}
            {currentFlow === 'sales_submenu' && messages.length > 0 && messages[messages.length - 1].options && (
              <div className="space-y-2 pt-2">
                {messages[messages.length - 1].options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSalesOptionClick(option)}
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-left transition-colors shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-100 text-green-600">
                        {option === 'Serraria' ? <Settings className="h-5 w-5" /> :
                         option === 'Chapas' ? <Package className="h-5 w-5" /> :
                         <Scissors className="h-5 w-5" />}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 text-sm">{option}</p>
                        <p className="text-xs text-slate-500">
                          {option === 'Serraria' ? 'Blocos e serrados' :
                           option === 'Chapas' ? 'Chapas polidas e brutas' :
                           'Peças sob medida'}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Sector redirect button */}
            {currentFlow === 'sector' && (
              <div className="text-center p-4">
                <button
                  onClick={() => handleDirectWhatsApp(undefined, selectedSector?.number)}
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {t('whatsapp.buttons.open')}
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t bg-white rounded-b-xl flex justify-center">
            <button
              onClick={startConversation}
              className="text-xs text-slate-400 hover:text-slate-600 flex items-center"
            >
              {t('whatsapp.buttons.restart')}
            </button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t('whatsapp.accessibility.toggle')}
          className="fixed right-4 text-white p-4 rounded-full shadow-lg transition-all z-40 hover:scale-110"
          style={{
            bottom: 16 + footerOffset,
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
            background: '#25D366'
          }}
        >
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path fill="#fff" d="M16 3C9.383 3 4 8.383 4 15c0 2.386.701 4.611 1.902 6.496L5 29l7.654-2.012A11.957 11.957 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22a9.93 9.93 0 0 1-5.047-1.382l-.36-.213-4.033 1.06.999-3.938-.235-.372A9.928 9.928 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.233-7.82c-.29-.145-1.708-.842-1.97-.936-.263-.096-.455-.145-.646.146-.191.29-.74.936-.906 1.127-.166.191-.337.218-.627.073-.29-.145-1.225-.451-2.332-1.438-.862-.768-1.444-1.716-1.611-2.006-.167-.29-.018-.447.126-.592.13-.13.29-.337.435-.5.145-.163.193-.28.29-.471.096-.19.048-.363-.024-.508-.073-.145-.646-1.559-.884-2.132-.232-.558-.468-.482-.646-.49l-.553-.01c-.19 0-.5.073-.763.363-.263.29-1.003.981-1.003 2.392s1.028 2.773 1.172 2.962c.145.19 2.027 3.091 4.91 4.333.686.296 1.222.473 1.639.606.687.218 1.314.187 1.809.114.551-.082 1.708-.696 1.949-1.367.241-.672.241-1.245.168-1.367-.073-.123-.263-.2-.553-.345z"/>
        </svg>
        {/* Pulse Effect */}
        <span className="absolute top-0 left-0 w-full h-full rounded-full animate-ping opacity-75 bg-[#25D366]" style={{ animationDuration: '2s' }}></span>
        </button>
    </>
  );
}
