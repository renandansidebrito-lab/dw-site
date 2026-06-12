import { useState, useEffect, useMemo, useCallback } from "react";
import { X, Send, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/contexts/i18nContext";
import { institutionalContent } from "@/data/institutionalContent";
import { buildWhatsAppUrl } from "@/data/company";

type ChatMessage = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

export default function WhatsAppChatbot() {
  const { language, t } = useTranslation();
  const content = institutionalContent[language];
  const intents = content.whatsappIntents;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState("");
  const [footerOffset, setFooterOffset] = useState(0);
  const [cookieBannerOffset, setCookieBannerOffset] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  const [stage, setStage] = useState<"name" | "menu" | "done">("name");
  const [selectedIntentId, setSelectedIntentId] = useState<string | null>(null);

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isFriday = day === 5;
  const isWeekday = day >= 1 && day <= 5;
  const online = isWeekday && ((isFriday && hour >= 7 && hour < 16) || (!isFriday && hour >= 7 && hour < 17));

  const staticCopy = useMemo(() => ({
    header: language === "en" ? "WhatsApp Service" : language === "es" ? "Atención por WhatsApp" : "Atendimento por WhatsApp",
    online: language === "en" ? "Online now" : language === "es" ? "En línea" : "Online agora",
    offline: language === "en" ? "Outside business hours" : language === "es" ? "Fuera del horario" : "Fora do horário",
    welcome:
      language === "en"
        ? "Hello. I can direct you to the right DW Granitos department. What is your name?"
        : language === "es"
          ? "Hola. Puedo dirigirle al sector correcto de DW Granitos. ¿Cuál es su nombre?"
          : "Olá. Posso direcionar você para o setor certo da DW Granitos. Qual é o seu nome?",
    menu:
      language === "en"
        ? (name: string) => `Nice to meet you, ${name}. Choose the subject you want to handle on WhatsApp.`
        : language === "es"
          ? (name: string) => `Mucho gusto, ${name}. Elija el asunto que desea tratar por WhatsApp.`
          : (name: string) => `Prazer, ${name}. Escolha o assunto que deseja tratar pelo WhatsApp.`,
    redirect:
      language === "en"
        ? (label: string) => `Perfect. I am opening WhatsApp for "${label}" with a suggested message.`
        : language === "es"
          ? (label: string) => `Perfecto. Estoy abriendo WhatsApp para "${label}" con un mensaje sugerido.`
          : (label: string) => `Perfeito. Estou abrindo o WhatsApp para "${label}" com uma mensagem sugerida.`,
    placeholder: t("whatsapp.input.placeholder"),
    open: language === "en" ? "Open WhatsApp" : language === "es" ? "Abrir WhatsApp" : "Abrir WhatsApp",
    restart: language === "en" ? "Restart service" : language === "es" ? "Reiniciar atención" : "Reiniciar atendimento",
    nameSuffix:
      language === "en"
        ? (name: string) => ` My name is ${name}.`
        : language === "es"
          ? (name: string) => ` Mi nombre es ${name}.`
          : (name: string) => ` Meu nome é ${name}.`,
  }), [language, t]);

  const startConversation = useCallback(() => {
    setMessages([
      {
        id: "welcome",
        text: staticCopy.welcome,
        isBot: true,
        timestamp: new Date(),
      },
    ]);
    setInputValue("");
    setUserName("");
    setSelectedIntentId(null);
    setStage("name");
  }, [staticCopy.welcome]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen, messages.length, startConversation]);

  useEffect(() => {
    const updateOffset = () => {
      setViewportWidth(window.innerWidth);

      const footer = document.querySelector("footer");
      if (!footer) {
        setFooterOffset(0);
      } else {
        const rect = footer.getBoundingClientRect();
        setFooterOffset(Math.max(0, window.innerHeight - rect.top));
      }

      const cookieBanner = document.querySelector('[data-cookie-banner="true"]') as HTMLElement | null;
      if (!cookieBanner) {
        setCookieBannerOffset(0);
        return;
      }

      const styles = window.getComputedStyle(cookieBanner);
      const bottom = Number.parseFloat(styles.bottom || "0");
      const gap = window.innerWidth < 768 ? 12 : 16;
      setCookieBannerOffset(cookieBanner.getBoundingClientRect().height + bottom + gap);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);
    const observer = new MutationObserver(updateOffset);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
      observer.disconnect();
    };
  }, []);

  const handleNameSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const name = inputValue.trim();
    setUserName(name);
    setInputValue("");
    setStage("menu");
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-user`, text: name, isBot: false, timestamp: new Date() },
      { id: `${Date.now()}-bot`, text: staticCopy.menu(name), isBot: true, timestamp: new Date() },
    ]);
  };

  const handleIntentClick = (intentId: string) => {
    const selectedIntent = intents.find((item) => item.id === intentId);
    if (!selectedIntent) return;

    const personalizedMessage = userName
      ? `${selectedIntent.message}${staticCopy.nameSuffix(userName)}`
      : selectedIntent.message;

    setSelectedIntentId(intentId);
    setStage("done");
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-choice`, text: selectedIntent.label, isBot: false, timestamp: new Date() },
      { id: `${Date.now()}-reply`, text: staticCopy.redirect(selectedIntent.label), isBot: true, timestamp: new Date() },
    ]);

    setTimeout(() => {
      window.open(buildWhatsAppUrl(selectedIntent.number, personalizedMessage), "_blank");
    }, 800);
  };

  const selectedIntent = intents.find((item) => item.id === selectedIntentId) ?? intents[0];
  const isMobile = viewportWidth < 768;
  const mobileCookieLift = isMobile && cookieBannerOffset > 0 ? 24 : 0;
  const buttonBottom = (isMobile ? 12 : 16) + footerOffset + cookieBannerOffset + mobileCookieLift;
  const panelBottom = (isMobile ? 76 : 80) + footerOffset + cookieBannerOffset + mobileCookieLift;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            className="fixed right-3 z-50 flex h-[min(520px,calc(100vh-2rem))] w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:right-4 md:w-[min(24rem,calc(100vw-2rem))]"
            style={{ bottom: panelBottom }}
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-[#128C7E] to-[#25D366] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{staticCopy.header}</h3>
                  <div className="flex items-center text-xs text-green-100">
                    {online ? (
                      <>
                        <CheckCircle2 className="mr-1 h-3 w-3 text-emerald-200" />
                        <span>{staticCopy.online}</span>
                      </>
                    ) : (
                      <>
                        <Clock className="mr-1 h-3 w-3 text-amber-200" />
                        <span>{staticCopy.offline}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label={t("whatsapp.accessibility.close")}
                className="rounded p-1 transition hover:bg-black/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                      message.isBot
                        ? "rounded-tl-none bg-white text-slate-800"
                        : "rounded-tr-none bg-green-600 text-white"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <p className="mt-1 text-right text-[10px] opacity-70">
                      {message.timestamp.toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {stage === "name" && (
                <form onSubmit={handleNameSubmit} className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder={staticCopy.placeholder}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="rounded-xl bg-green-600 p-3 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}

              {stage === "menu" && (
                <div className="space-y-2 pt-2">
                  {intents.map((intent) => (
                    <button
                      key={intent.id}
                      onClick={() => handleIntentClick(intent.id)}
                      className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-green-300 hover:bg-green-50"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                          <MessageCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">{intent.label}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">{intent.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {stage === "done" && (
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-800">{selectedIntent.label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{selectedIntent.description}</p>
                  <a
                    href={buildWhatsAppUrl(selectedIntent.number, userName ? `${selectedIntent.message}${staticCopy.nameSuffix(userName)}` : selectedIntent.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    {staticCopy.open}
                    <Send className="ml-2 h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            <div className="border-t bg-white p-3 text-center">
              <button onClick={startConversation} className="text-xs text-slate-500 transition hover:text-slate-700">
                {staticCopy.restart}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("whatsapp.accessibility.toggle")}
        className="fixed right-3 z-40 rounded-full p-3.5 text-white shadow-lg transition-all hover:scale-110 md:right-4 md:p-4"
        style={{
          bottom: buttonBottom,
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
          background: "#25D366",
        }}
      >
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path fill="#fff" d="M16 3C9.383 3 4 8.383 4 15c0 2.386.701 4.611 1.902 6.496L5 29l7.654-2.012A11.957 11.957 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22a9.93 9.93 0 0 1-5.047-1.382l-.36-.213-4.033 1.06.999-3.938-.235-.372A9.928 9.928 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.233-7.82c-.29-.145-1.708-.842-1.97-.936-.263-.096-.455-.145-.646.146-.191.29-.74.936-.906 1.127-.166.191-.337.218-.627.073-.29-.145-1.225-.451-2.332-1.438-.862-.768-1.444-1.716-1.611-2.006-.167-.29-.018-.447.126-.592.13-.13.29-.337.435-.5.145-.163.193-.28.29-.471.096-.19.048-.363-.024-.508-.073-.145-.646-1.559-.884-2.132-.232-.558-.468-.482-.646-.49l-.553-.01c-.19 0-.5.073-.763.363-.263.29-1.003.981-1.003 2.392s1.028 2.773 1.172 2.962c.145.19 2.027 3.091 4.91 4.333.686.296 1.222.473 1.639.606.687.218 1.314.187 1.809.114.551-.082 1.708-.696 1.949-1.367.241-.672.241-1.245.168-1.367-.073-.123-.263-.2-.553-.345z" />
        </svg>
        <span className="absolute left-0 top-0 h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" style={{ animationDuration: "2s" }}></span>
      </button>
    </>
  );
}
