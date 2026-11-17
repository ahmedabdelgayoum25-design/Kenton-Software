"use client";
import { useThemeStore, Theme } from "@/store/themeStore";
import { Palette } from "lucide-react";

// ✅ قائمة الثيمات (يجب أن تطابق الأسماء في themeStore)
const themes: { id: Theme; name: string; color: string }[] = [
  { id: "dark", name: "داكن", color: "bg-black" },
  { id: "light", name: "فاتح", color: "bg-white" },
  { id: "royal", name: "أزرق", color: "bg-blue-600" }, // ✅ royal
  { id: "emerald", name: "أخضر", color: "bg-emerald-500" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="relative group">
      <button className="p-2 rounded-lg bg-surface border border-white/10 text-textMain hover:border-primary transition-colors">
        <Palette size={20} />
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-surface border border-white/10 rounded-xl p-2 flex gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`w-8 h-8 rounded-full ${t.color} border-2 ${theme === t.id ? 'border-primary' : 'border-transparent'}`}
            title={t.name}
          />
        ))}
      </div>
    </div>
  );
}