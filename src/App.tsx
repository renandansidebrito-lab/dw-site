import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Serraria from "@/pages/Serraria";
import Chapas from "@/pages/Chapas";
import Recortado from "@/pages/Recortado";
import Contact from "@/pages/Contact";
import Catalogo from "@/pages/Catalogo";
import Layout from "@/components/layout/Layout";
import WhatsAppChatbot from "@/components/layout/WhatsAppChatbot";
import ScrollToTop from "@/components/common/ScrollToTop";
import { TranslationProvider } from "@/contexts/TranslationContext";

export default function App() {
  return (
    <TranslationProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/serraria" element={<Serraria />} />
            <Route path="/chapas" element={<Chapas />} />
            <Route path="/recortado" element={<Recortado />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/catalogo" element={<Catalogo />} />
          </Routes>
        </Layout>
        <WhatsAppChatbot />
      </Router>
    </TranslationProvider>
  );
}
