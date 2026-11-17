"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLangStore();
  const t = translations[lang];

  useEffect(() => {
    // إظهار الرسالة مرة واحدة فقط لكل زائر
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasVisited", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ type: "spring", duration: 0.5 }} className="relative bg-surface border border-primary/30 rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl overflow-hidden">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 text-textMuted hover:text-primary bg-black/20 rounded-full transition-colors"><X size={20} /></button>
            <div className="relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary"><span className="text-4xl font-black">K</span></div>
              <h2 className="text-3xl font-bold text-textMain">{t.welcome.title}</h2>
              <p className="text-textMuted text-lg leading-relaxed">{t.welcome.desc}</p>
              
              {/* ✅ قائمة الخدمات */}
              <div className="text-start space-y-2 bg-black/20 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-textMain"><CheckCircle2 size={16} className="text-primary" /> {t.welcome.feature1}</div>
                <div className="flex items-center gap-2 text-textMain"><CheckCircle2 size={16} className="text-primary" /> {t.welcome.feature2}</div>
                <div className="flex items-center gap-2 text-textMain"><CheckCircle2 size={16} className="text-primary" /> {t.welcome.feature3}</div>
              </div>

              <button onClick={() => setIsOpen(false)} className="btn-primary w-full mt-4">
                {t.welcome.button} <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}