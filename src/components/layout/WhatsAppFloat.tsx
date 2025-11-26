import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
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

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5528999999999", "_blank");
  };

  const mensagens = t('whatsapp.messages');

  const [mensagemAtual, setMensagemAtual] = useState(0);

  useEffect(() => {
    // Rotaciona as mensagens a cada 4 segundos
    const interval = setInterval(() => {
      setMensagemAtual((prev) => (prev + 1) % mensagens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Botão Flutuante */}
      {showButton && !isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Balão de mensagem */}
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs mb-2" style={{animation: 'bounce 2s infinite'}}>
            <p className="text-sm text-slate-700">{mensagens[mensagemAtual]}</p>
            <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
            title="Fale conosco no WhatsApp"
            style={{
              animation: 'pulse 2s infinite',
              boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)'
            }}
          >
            <MessageCircle size={28} />
          </button>
        </div>
      )}

      {/* Modal/Pop-up do WhatsApp */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full mb-4" style={{animation: 'slide-up 0.3s ease-out'}}>
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <MessageCircle className="text-green-500" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{t('whatsapp.title')}</h3>
                  <p className="text-sm text-green-100">{t('whatsapp.subtitle')}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <MessageCircle className="text-green-500" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{t('whatsapp.chat')}</h4>
                <p className="text-slate-600 text-sm mb-4">
                  {t('whatsapp.description')}
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>{t('whatsapp.startChat')}</span>
                </button>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  {t('whatsapp.close')}
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500">
                  {t('whatsapp.schedule')} <br />
                  {t('whatsapp.schedule.detail')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos para animação do botão pulsante */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
      `}</style>
    </>
  );
}