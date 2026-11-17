import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "dark" | "light" | "royal" | "emerald";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "kenton-theme-storage",
    }
  )
);