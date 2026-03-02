import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/common/ScrollToTop";
import { TranslationProvider } from "@/contexts/TranslationContext";
import WhatsAppChatbot from "@/components/layout/WhatsAppChatbot";

// Lazy loading pages for better performance
const Home = lazy(() => import("@/pages/Home"));
const Serraria = lazy(() => import("@/pages/Serraria"));
const Chapas = lazy(() => import("@/pages/Chapas"));
const Recortado = lazy(() => import("@/pages/Recortado"));
const Contact = lazy(() => import("@/pages/Contact"));
const Catalogo = lazy(() => import("@/pages/Catalogo"));
const Sobre = lazy(() => import("@/pages/Sobre"));
const Privacidade = lazy(() => import("@/pages/Privacidade"));
const Termos = lazy(() => import("@/pages/Termos"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-16 h-16 border-4 border-brand/20 border-t-brand rounded-full animate-spin" />
  </div>
);

export default function App() {
  const enableChatbot = import.meta.env.VITE_ENABLE_CHATBOT !== 'false';
  return (
    <TranslationProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/serraria" element={<Serraria />} />
              <Route path="/chapas" element={<Chapas />} />
              <Route path="/recortado" element={<Recortado />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/termos" element={<Termos />} />
            </Routes>
          </Suspense>
        </Layout>
        {enableChatbot && <WhatsAppChatbot />}
      </Router>
    </TranslationProvider>
  );
}
