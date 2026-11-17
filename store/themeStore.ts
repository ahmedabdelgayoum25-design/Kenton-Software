import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "dark" | "light" | "blue" | "emerald"; // ✅ blue

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "emerald", // ✅ الثيم الافتراضي (الزمردي)
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "kenton-theme-storage",
    }
  )
);