"use client";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Users, Calendar, FileText, BarChart3, ShieldCheck, Download, CheckCircle2, WifiOff, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { GuaranteeBadge } from "@/components/GuaranteeBadge"; // ✅

export default function ToMoPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const whatsappNumber = "250796581584";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? "مرحباً، أريد طلب نظام ToMo" : "Hello, I want to order ToMo System")}`;

  const features = [
    { icon: <Users size={24} />, title: t.tomoPage.f1Title, desc: t.tomoPage.f1Desc },
    { icon: <Calendar size={24} />, title: t.tomoPage.f2Title, desc: t.tomoPage.f2Desc },
    { icon: <FileText size={24} />, title: t.tomoPage.f3Title, desc: t.tomoPage.f3Desc },
    { icon: <BarChart3 size={24} />, title: t.tomoPage.f4Title, desc: t.tomoPage.f4Desc },
    { icon: <ShieldCheck size={24} />, title: t.tomoPage.f5Title, desc: t.tomoPage.f5Desc },
    { icon: <WifiOff size={24} />, title: t.tomoPage.f6Title, desc: t.tomoPage.f6Desc },
  ];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 space-y-6">
            <Link href="/products" className="text-textMuted hover:text-primary flex items-center gap-2 transition mb-4">
              <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} /> {t.products.back}
            </Link>
            <h1 className="text-5xl font-black text-primary">{t.tomoPage.title}</h1>
            <p className="text-2xl text-textMain font-semibold">{t.tomoPage.subtitle}</p>
            <p className="text-lg text-textMuted leading-relaxed">{t.tomoPage.desc}</p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={20} /> {t.tomoPage.buyNow}
              </a>
            </div>

            {/* ✅ شارة الضمان */}
            <GuaranteeBadge pageKey="tomoPage" />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 bg-surface p-4 rounded-3xl border border-primary/30 shadow-2xl relative">
            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center border border-primary/20 overflow-hidden relative">
              <img src="/tomo-preview.png" alt="ToMo Interface" className="w-full h-full object-contain p-4 absolute inset-0 z-10" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="text-center absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                <Stethoscope size={80} className="text-primary mx-auto mb-4 animate-float" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ قسم "اقرأ المزيد" */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-textMain">{t.tomoPage.readMoreTitle}</h2>
          <p className="text-lg text-textMuted text-center leading-relaxed">{t.tomoPage.readMoreDesc}</p>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-textMain">{t.tomoPage.featuresTitle} <span className="text-primary">{t.tomoPage.featuresHighlight}</span></h2>
            <p className="text-textMuted">{t.tomoPage.featuresDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="card">
                <div className="text-primary mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-textMain">{feature.title}</h3>
                <p className="text-textMuted">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}