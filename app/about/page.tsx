"use client";
import { motion } from "framer-motion";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";
import { Target, Eye } from "lucide-react";
import { BackButton } from "@/components/BackButton";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <BackButton />
        <section className="py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-black mb-6">{t.aboutPage.title}</h1>
            <p className="text-xl text-textMuted leading-relaxed">{t.aboutPage.desc}</p>
          </motion.div>
        </section>
        <section className="py-20 bg-surface rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="bg-background p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.aboutPage.mission}</h3>
              <p className="text-textMuted">{t.aboutPage.missionDesc}</p>
            </div>
            <div className="bg-background p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.aboutPage.vision}</h3>
              <p className="text-textMuted">{t.aboutPage.visionDesc}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}