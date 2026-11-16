"use client";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { lang, setLang } = useLangStore();
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/about", label: t.nav.about },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-primary">Kenton</span>
            <span className="text-xl font-bold text-white">Software</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition-colors font-medium">{link.label}</Link>
            ))}
            <button onClick={toggleLang} className="flex items-center gap-2 bg-surface border border-white/10 px-4 py-2 rounded-lg text-white hover:border-primary transition-colors">
              <Globe size={18} /> {lang === "ar" ? "English" : "عربي"}
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/10 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-gray-300 hover:text-primary py-2 font-medium" onClick={() => setIsOpen(false)}>{link.label}</Link>
          ))}
          <button onClick={toggleLang} className="flex items-center gap-2 bg-background w-full px-4 py-2 rounded-lg text-white mt-2">
            <Globe size={18} /> {lang === "ar" ? "English" : "عربي"}
          </button>
        </div>
      )}
    </nav>
  );
}