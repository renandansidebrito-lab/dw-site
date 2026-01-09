import { useState, useEffect } from "react";
import { MessageCircle, X, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import "@/styles/whatsapp-animations.css";

export default function WhatsAppFloat() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    // Mostra o botão após 3 segundos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const WHATSAPP_NUMBER = "+5528999851446";

  const openWhatsApp = (message?: string) => {
    const text = message || 'Olá, venho do site e gostaria de falar com a equipe.';
    const encoded = encodeURIComponent(text);
    const phone = WHATSAPP_NUMBER.replace(/\D/g, '');
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, "_blank");
  };

  const mensagens = t('whatsapp.messages');

  const [mensagemAtual, setMensagemAtual] = useState(0);

  useEffect(() => {
    // Rotaciona as mensagens a cada 4 segundos
    const interval = setInterval(() => {
      setMensagemAtual((prev) => (prev + 1) % mensagens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mensagens.length]);

  // Horário de atendimento (Seg-Qui 7-17, Sex 7-16)
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isWeekday = day >= 1 && day <= 5;
  const isFriday = day === 5;
  const online = isWeekday && ((isFriday && hour >= 7 && hour < 16) || (!isFriday && hour >= 7 && hour < 17));

  const quickActions = [
    { label: 'Pedir orçamento', message: 'Olá! Gostaria de solicitar um orçamento.' },
    { label: 'Catálogo de materiais', message: 'Olá! Pode me enviar o catálogo de materiais?' },
    { label: 'Falar com Vendas', message: 'Olá! Gostaria de falar com o setor de Vendas.' }
  ];

  return (
    <>
      {/* Botão Flutuante */}
      {showButton && !isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Balão de mensagem */}
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs mb-2 animate-bounce">
            <p className="text-sm text-slate-700">{mensagens[mensagemAtual]}</p>
            <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
            title="Fale conosco no WhatsApp"
            >
            <MessageCircle size={28} />
          </button>
        </div>
      )}

      {/* Pop-up WhatsApp melhorado */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-[360px] border animate-slide-up">
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between rounded-t-xl bg-gradient-to-r from-green-600 to-green-500 text-white">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">DW Granitos</h3>
                  <div className="flex items-center text-xs">
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
              <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4" />
                </div>
                <p className="text-sm text-slate-700">
                  {t('whatsapp.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 mb-3">
                {quickActions.map((qa) => (
                  <button
                    key={qa.label}
                    onClick={() => openWhatsApp(qa.message)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm text-slate-700 flex items-center justify-between"
                  >
                    <span>{qa.label}</span>
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => openWhatsApp()}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>{t('whatsapp.startChat')}</span>
              </button>

              <div className="mt-3 text-center">
                <p className="text-xs text-slate-500">
                  {t('whatsapp.schedule')} {t('whatsapp.schedule.detail')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sem estilos inline: usamos classes de whatsapp-animations.css */}
    </>
  );
}
