import { useState, type ReactNode } from 'react';
import { translations } from './translations';
import { type Language } from '@/types/i18n';
import { TranslationContext } from './i18nContext';

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

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
