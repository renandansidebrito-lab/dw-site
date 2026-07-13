import { ReactNode, useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import ModernNavigation from "@/components/ModernNavigation";
import Footer from "./Footer";
import { useTranslation } from "@/contexts/i18nContext";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const showConstructionNotice = import.meta.env.VITE_SHOW_CONSTRUCTION_NOTICE === "true";
  const [showNotice, setShowNotice] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    try {
      const seen = localStorage.getItem('dw_site_construction_notice');
      if (showConstructionNotice && !seen) setShowNotice(true);
      const cookie = localStorage.getItem('dw_cookie_consent');
      if (!cookie) setShowCookies(true);
    } catch {
      void 0;
      setShowNotice(showConstructionNotice);
      setShowCookies(true);
    }
  }, [showConstructionNotice]);

  const dismissNotice = () => {
    try { localStorage.setItem('dw_site_construction_notice', 'true'); } catch { void 0; }
    setShowNotice(false);
  };
  const acceptCookies = () => {
    try { localStorage.setItem('dw_cookie_consent', 'accepted'); } catch { void 0; }
    setShowCookies(false);
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
              <h3 className="text-lg font-semibold text-slate-800">{t('notice.site.title')}</h3>
            </div>
            <p className="text-slate-600 mb-6">{t('notice.site.message')}</p>
            <div className="text-right">
              <button onClick={dismissNotice} className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand2">{t('notice.site.ok')}</button>
            </div>
          </div>
        </div>
      )}
      <ModernNavigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {showCookies && (
        <div
          data-cookie-banner="true"
          className="fixed bottom-3 left-3 right-3 z-40 md:bottom-4 md:left-4 md:right-4"
        >
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur md:flex-row md:items-center md:justify-between md:px-4">
              <p className="text-sm leading-5 text-slate-700 md:pr-4">
                {t('cookies.message')}{' '}
                <Link to="/privacidade" className="font-semibold text-brand underline-offset-2 hover:underline">
                  {t('footer.privacy')}
                </Link>
              </p>
              <div className="flex items-center gap-3">
                <button onClick={acceptCookies} className="whitespace-nowrap rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand2">
                  {t('cookies.accept')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
