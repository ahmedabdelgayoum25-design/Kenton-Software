"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, GraduationCap, School, CreditCard, Wallet, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export default function ZebraPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 space-y-6">
            <Link href="/" className="text-gray-400 hover:text-primary flex items-center gap-2 transition mb-4">
              <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} /> {t.nav.home}
            </Link>
            <h1 className="text-5xl font-black text-primary">{t.zebraPage.title}</h1>
            <p className="text-2xl text-gray-300 font-semibold">{t.zebraPage.subtitle}</p>
            <p className="text-lg text-gray-400 leading-relaxed">{t.zebraPage.desc}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-primary text-black px-8 py-3 rounded-xl font-bold shadow-glow hover:bg-opacity-90 transition-all flex items-center gap-2">
                <Download size={20} /> {t.zebraPage.download}
              </a>
              <Link href="/#contact" className="border border-primary/50 text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary/10 transition-all">
                {t.zebraPage.quote}
              </Link>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 bg-surface p-4 rounded-3xl border border-primary/30 shadow-2xl relative">
            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center border border-primary/20">
              <div className="text-center">
                <BookOpen size={80} className="text-primary mx-auto mb-4 animate-float" />
                <p className="text-primary font-bold">{t.zebraPage.appInterface}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t.zebraPage.featuresTitle} {t.zebraPage.featuresHighlight}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-6 rounded-xl border border-white/5">
              <Users className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-white font-bold">{t.zebraPage.f1Title}</h3>
              <p className="text-xs text-gray-400 mt-2">{t.zebraPage.f1Desc}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-white/5">
              <GraduationCap className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-white font-bold">{t.zebraPage.f2Title}</h3>
              <p className="text-xs text-gray-400 mt-2">{t.zebraPage.f2Desc}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-white/5">
              <CreditCard className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-white font-bold">{t.zebraPage.f3Title}</h3>
              <p className="text-xs text-gray-400 mt-2">{t.zebraPage.f3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}