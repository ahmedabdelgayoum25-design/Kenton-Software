"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { Globe } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { lang, setLang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="group-hover:scale-110 transition-transform">
              <Logo size={40} />
            </div>
            <span className="text-xl font-black text-white hidden sm:block">
              Kenton Software
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors font-medium">{t.nav.home}</Link>
            <Link href="/#products" className="text-gray-300 hover:text-primary transition-colors font-medium">{t.nav.products}</Link>
            <Link href="/about" className="text-gray-300 hover:text-primary transition-colors font-medium">{t.nav.about}</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-primary transition-colors font-medium">{t.nav.contact}</Link>
          </div>

          <button onClick={toggleLang} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-bold text-white">
            <Globe size={18} />
            {t.nav.langBtn}
          </button>
        </div>
      </div>
    </nav>
  );
}