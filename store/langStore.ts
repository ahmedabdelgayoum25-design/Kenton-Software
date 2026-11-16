import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LangState {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
}

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: "en", // اللغة الافتراضية
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "kenton-lang-storage",
    }
  )
);