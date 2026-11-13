"use client";
import { motion } from "framer-motion";
import { Heart, Eye, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  // ✅ تم إزالة استيراد ContactSection و FeaturesSection لحل مشكلة البناء
  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Link href="/" className="text-gray-400 hover:text-primary flex items-center gap-2 transition mb-4 justify-center">
            <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} /> {t.nav.home}
          </Link>
          <h1 className="text-5xl font-black text-primary mb-4">{t.aboutPage.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.aboutPage.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-surface p-8 rounded-2xl border border-white/5 text-center">
            <Heart className="text-primary mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4">{t.aboutPage.m1}</h2>
            <p className="text-gray-400">{t.aboutPage.m1Desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-surface p-8 rounded-2xl border border-white/5 text-center">
            <Eye className="text-primary mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4">{t.aboutPage.m2}</h2>
            <p className="text-gray-400">{t.aboutPage.m2Desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-surface p-8 rounded-2xl border border-white/5 text-center">
            <Target className="text-primary mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4">{t.aboutPage.m3}</h2>
            <p className="text-gray-400">{t.aboutPage.m3Desc}</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}