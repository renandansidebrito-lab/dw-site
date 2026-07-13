import { useEffect, useState, type ReactNode } from 'react';
import { translations } from './translations';
import { type Language } from '@/types/i18n';
import { TranslationContext } from './i18nContext';

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLanguage = window.localStorage.getItem('dw_language');
      return savedLanguage === 'en' || savedLanguage === 'es' || savedLanguage === 'pt'
        ? savedLanguage
        : 'pt';
    } catch {
      return 'pt';
    }
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    try {
      window.localStorage.setItem('dw_language', nextLanguage);
    } catch {
      // Browsers may block storage; language still works for the current visit.
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  }, [language]);

  const t = (key: string, params?: Record<string, string | number>): string => {
    const dict = translations[language] as Record<string, string>;
    const base = translations.pt as Record<string, string>;
    let text = dict[key] ?? base[key] ?? key;

    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(new RegExp(`{${paramKey}}`, 'g'), String(value));
      });
    }

    return text;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
