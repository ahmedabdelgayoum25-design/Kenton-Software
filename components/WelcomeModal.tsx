"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import Link from "next/link";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLangStore();
  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-surface border border-primary/30 rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-black/20 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] rounded-full bg-primary blur-3xl"></div>
              <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] rounded-full bg-primary blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
                <span className="text-4xl font-black">K</span>
              </div>
              <h2 className="text-3xl font-bold text-white">{t.welcome.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{t.welcome.desc}</p>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all mt-4"
              >
                {t.welcome.button}
                <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}