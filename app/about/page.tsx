"use client";
import { motion } from "framer-motion";
import { Heart, Eye, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-black mb-6">{t.aboutPage.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{t.aboutPage.desc}</p>
        </motion.div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 rounded-2xl border border-primary/20 text-center">
            <Target size={40} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t.aboutPage.m1}</h2>
            <p className="text-gray-400">{t.aboutPage.m1Desc}</p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-primary/20 text-center">
            <Eye size={40} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t.aboutPage.m2}</h2>
            <p className="text-gray-400">{t.aboutPage.m2Desc}</p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-primary/20 text-center">
            <Heart size={40} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t.aboutPage.m3}</h2>
            <p className="text-gray-400">{t.aboutPage.m3Desc}</p>
          </div>
        </div>
      </section>
    </main>
  );
}