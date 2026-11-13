"use client";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useState, useEffect } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <footer className="bg-black py-8 border-t border-white/10 text-center text-gray-500 text-sm">
      {/* ✅ النص يتغير حسب اللغة المختارة */}
      <p>{t.footer.rights}</p>
    </footer>
  );
}