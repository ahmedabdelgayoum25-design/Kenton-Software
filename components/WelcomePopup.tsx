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
    // 1. تحديد وقت التحية
    const hour = new Date().getHours();
    const isRtl = lang === 'ar';

    if (hour >= 5 && hour < 12) {
      setGreeting(isRtl ? "صباح الخير! ☀️" : "Good Morning! ☀️");
    } else if (hour >= 12 && hour < 17) {
      setGreeting(isRtl ? "نهارك سعيد! 🌤️" : "Good Afternoon! 🌤️");
    } else {
      setGreeting(isRtl ? "مساء الخير! 🌙" : "Good Evening! 🌙");
    }

    // 2. إظهار الرسالة بعد ثانية واحدة
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // 3. إخفاء الرسالة تلقائياً بعد 6 ثوانٍ
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [lang]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm"
        >
          <div className="bg-surface border-2 border-primary/30 rounded-3xl p-6 shadow-2xl shadow-primary/20 relative overflow-hidden">
            {/* زر الإغلاق */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* خلفية متدرجة خفيفة */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

            <div className="relative z-0 flex flex-col items-center text-center">
              {/* ✅ قطة متحركة فقط (بدون أيقونات طقس) */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                className="text-6xl mb-4"
              >
                🐱
              </motion.div>
              
              <h2 className="text-2xl font-bold text-white mb-2">{greeting}</h2>
              <p className="text-gray-400 text-sm">
                {lang === 'ar' 
                  ? "مرحباً بك في Kenton Software" 
                  : "Welcome to Kenton Software"}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}