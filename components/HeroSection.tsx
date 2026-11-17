"use client";
import { motion } from "framer-motion";
import { ArrowRight, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export function HeroSection() {
  const { lang } = useLangStore();
  const t = translations[lang];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-3xl"
      >
        {/* ✅ الشارة الخضراء */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
          <MonitorSmartphone size={14} />
          {t.home.badge}
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-textMain mb-6 leading-tight">
          {t.home.heroTitle}
        </h1>

        <p className="text-xl text-textMuted mb-8 leading-relaxed">
          {t.home.heroSubtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/products" className="btn-primary">
            {t.home.exploreProducts} <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
          </Link>
          <Link href="/services" className="btn-secondary">
            {t.home.exploreServices}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}