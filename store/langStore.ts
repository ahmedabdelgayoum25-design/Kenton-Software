import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'ar' | 'en';

interface LangState {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: 'ar',
      setLang: (lang) => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        set({ lang });
      },
      toggleLang: () => set((state) => {
        const newLang = state.lang === 'ar' ? 'en' : 'ar';
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
        return { lang: newLang };
      }),
    }),
    { name: 'kenton-lang' } // حفظ اللغة في الذاكرة المحلية
  )
);