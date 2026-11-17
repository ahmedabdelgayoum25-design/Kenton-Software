import { create } from "zustand";
import { persist } from "zustand/middleware";

// ✅ تعريف نوع الثيم (يجب أن يطابق الأسماء المستخدمة في ThemeSwitcher)
export type Theme = "dark" | "light" | "royal" | "emerald";

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