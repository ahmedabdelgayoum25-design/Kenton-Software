"use client";
import { useEffect } from "react";
import { useLangStore } from "@/store/langStore";

export default function DirectionProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useLangStore();

  useEffect(() => {
    // ✅ تحديث اتجاه الصفحة ولغتها عند تغيير اللغة
    const htmlElement = document.documentElement;
    htmlElement.lang = lang;
    htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return <>{children}</>;
}