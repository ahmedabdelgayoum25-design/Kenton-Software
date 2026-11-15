import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LangStore {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      // ✅ اللغة الافتراضية الآن هي الإنجليزية
      lang: 'en',
      setLang: (lang) => set({ lang }),
    }),
    {
      name: 'kenton-lang-storage',
    }
  )
);