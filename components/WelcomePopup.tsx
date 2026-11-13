"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLangStore } from "@/store/langStore";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [greeting, setGreeting] = useState("");
  const { lang } = useLangStore();

  useEffect(() => {
    const hour = new Date().getHours();
    const isRtl = lang === 'ar';

    if (hour >= 5 && hour < 12) {
      setGreeting(isRtl ? "صباح الخير!" : "Good Morning!");
    } else if (hour >= 12 && hour < 17) {
      setGreeting(isRtl ? "نهارك سعيد!" : "Good Afternoon!");
    } else {
      setGreeting(isRtl ? "مساء الخير!" : "Good Evening!");
    }

    const showTimer = setTimeout(() => setIsVisible(true), 1000);
    const hideTimer = setTimeout(() => setIsVisible(false), 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [lang]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[85%] max-w-xs"
        >
          {/* ✅ بطاقة صغيرة وأنيقة */}
          <div className="bg-surface/95 backdrop-blur-md border border-primary/30 rounded-2xl p-4 shadow-xl shadow-primary/20 relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors z-10"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3">
              {/* ✅ قطة مبتسمة مع حركة خفيفة */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="text-4xl shrink-0"
              >
                😺
              </motion.div>
              
              <div className="flex-1">
                <h2 className="text-sm font-bold text-white leading-tight">{greeting}</h2>
                <p className="text-[11px] text-gray-400">
                  {lang === 'ar' ? "مرحباً بك في Kenton" : "Welcome to Kenton"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}