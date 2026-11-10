"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Code2, Menu, X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { lang, toggleLang } = useLangStore();
  
  // لتجنب مشاكل Hydration مع Next.js
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="text-primary" size={24} />
            <span className="text-xl font-bold text-white">Kenton</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition">{t.nav.home}</Link>
            <Link href="/#products" className="text-sm text-gray-400 hover:text-white transition">{t.nav.products}</Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition">{t.nav.about}</Link>
            <Link href="/#contact" className="text-sm text-gray-400 hover:text-white transition">{t.nav.contact}</Link>
            
            <button onClick={toggleLang} className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition">
              <Globe size={16} /> {t.nav.langBtn}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLang} className="text-gray-400"><Globe size={20} /></button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-sm text-gray-300 hover:text-white">{t.nav.home}</Link>
            <Link href="/#products" className="block text-sm text-gray-300 hover:text-white">{t.nav.products}</Link>
            <Link href="/about" className="block text-sm text-gray-300 hover:text-white">{t.nav.about}</Link>
            <Link href="/#contact" className="block text-sm text-gray-300 hover:text-white">{t.nav.contact}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}