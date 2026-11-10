"use client";
import { motion } from "framer-motion";
import { ArrowLeft, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background pt-16">
      <div className="max-w-5xl mx-auto px-4 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-8">
            <MonitorSmartphone size={14} className="text-primary" /> {t.hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#products" className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center gap-2">
              {t.hero.btnExplore} <ArrowLeft size={18} className={lang === 'ar' ? '' : 'rotate-180'} />
            </Link>
            <Link href="/#contact" className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition flex items-center justify-center">
              {t.hero.btnContact}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}