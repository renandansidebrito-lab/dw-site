import { ReactNode, useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem('dw_site_construction_notice');
      if (!seen) setShowNotice(true);
    } catch {
      void 0;
      setShowNotice(true);
    }
  }, []);

  const dismissNotice = () => {
    try { localStorage.setItem('dw_site_construction_notice', 'true'); } catch { void 0; }
    setShowNotice(false);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {showNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center mr-3">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Site em construção</h3>
            </div>
            <p className="text-slate-600 mb-6">Estamos ajustando alguns conteúdos e seções. Obrigado pela compreensão!</p>
            <div className="text-right">
              <button onClick={dismissNotice} className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand2">Entendi</button>
            </div>
          </div>
        </div>
      )}
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
