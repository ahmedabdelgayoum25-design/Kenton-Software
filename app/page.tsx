"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WelcomeModal } from "@/components/WelcomeModal";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <main className="min-h-screen bg-background text-textMain">
      <WelcomeModal />
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 max-w-3xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t.home.heroSubtitle}
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-textMain">{t.home.heroTitle}</h1>
          <p className="text-xl text-textMuted">{t.home.heroSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link href="/products" className="btn-primary">
              {t.home.exploreProducts} <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
            </Link>
            <Link href="/services" className="btn-secondary">
              {t.home.exploreServices}
            </Link>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}