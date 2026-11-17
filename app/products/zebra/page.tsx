"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, GraduationCap, CreditCard, Download, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { GuaranteeBadge } from "@/components/GuaranteeBadge";

export default function ZebraPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const whatsappNumber = "250796581584";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? "مرحباً، أريد طلب نظام ZeBrA" : "Hello, I want to order ZeBrA System")}`;

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 space-y-6">
            <Link href="/products" className="text-textMuted hover:text-primary flex items-center gap-2 transition mb-4">
              <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} /> {t.products.back}
            </Link>
            <h1 className="text-5xl font-black text-primary">{t.zebraPage.title}</h1>
            <p className="text-2xl text-textMain font-semibold">{t.zebraPage.subtitle}</p>
            <p className="text-lg text-textMuted leading-relaxed">{t.zebraPage.desc}</p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={20} /> {t.zebraPage.buyNow}
              </a>
            </div>

            <GuaranteeBadge pageKey="zebraPage" />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 bg-surface p-4 rounded-3xl border border-primary/30 shadow-2xl relative">
            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center border border-primary/20 overflow-hidden relative">
              <img src="/zebra-preview.png" alt="ZeBrA Interface" className="w-full h-full object-contain p-4 absolute inset-0 z-10" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="text-center absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                <BookOpen size={80} className="text-primary mx-auto mb-4 animate-float" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-textMain">{t.zebraPage.readMoreTitle}</h2>
          <p className="text-lg text-textMuted text-center leading-relaxed">{t.zebraPage.readMoreDesc}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-textMain">{t.zebraPage.featuresTitle} <span className="text-primary">{t.zebraPage.featuresHighlight}</span></h2>
            <p className="text-textMuted">{t.zebraPage.featuresDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Users size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-textMain">{t.zebraPage.f1Title}</h3>
              <p className="text-textMuted">{t.zebraPage.f1Desc}</p>
            </div>
            <div className="card text-center">
              <GraduationCap size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-textMain">{t.zebraPage.f2Title}</h3>
              <p className="text-textMuted">{t.zebraPage.f2Desc}</p>
            </div>
            <div className="card text-center">
              <CreditCard size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-textMain">{t.zebraPage.f3Title}</h3>
              <p className="text-textMuted">{t.zebraPage.f3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}