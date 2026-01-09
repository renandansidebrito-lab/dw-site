import React, { useState, ReactNode } from 'react';
import { translations } from './translations';
import { Language } from '@/types/i18n';
import { TranslationContext } from './i18nContext';

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const dict = translations[language] as Record<string, string>;
    return dict[key] ?? key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
