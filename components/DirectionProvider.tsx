"use client";
import { useEffect, useState } from "react";
import { useLangStore } from "@/store/langStore";

export function DirectionProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useLangStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      
      // تغيير الخط بناءً على اللغة
      if (lang === "ar") {
        document.body.style.fontFamily = "var(--font-cairo), sans-serif";
      } else {
        document.body.style.fontFamily = "var(--font-inter), sans-serif";
      }
    }
  }, [lang, mounted]);

  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}