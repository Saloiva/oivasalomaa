import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { L, Lang } from "@/content/portfolio";

const STORAGE_KEY = "portfolio-lang";

type LangContextValue = { lang: Lang; setLang: (lang: Lang) => void; t: (text: L) => string };

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Finnish is rendered on the server; a saved English choice is applied after hydration.
  const [lang, setLangState] = useState<Lang>("fi");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "fi") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback((text: L) => text[lang], [lang]);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
