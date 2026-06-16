import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Lang } from '@/lib/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: Record<Lang, string>) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ky',
  setLang: () => {},
  t: (obj) => obj.ky,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('eldik-lang') as Lang | null;
    return saved || 'ky';
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('eldik-lang', newLang);
  }, []);

  const t = useCallback((obj: Record<Lang, string>) => obj[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
