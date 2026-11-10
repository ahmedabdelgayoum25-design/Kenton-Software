"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, DollarSign } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export default function RequestPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const phoneNumber = "+250796581584"; // الرقم بدون مسافات لاستخدامه في الروابط

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <section className="py-20 px-4 max-w-2xl mx-auto">
        <Link href="/" className="text-gray-400 hover:text-primary flex items-center gap-2 transition mb-8">
          <ArrowLeft size={18} className={lang === 'ar' ? 'rotate-180' : ''} /> {t.requestPage.backHome}
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="bg-surface p-8 rounded-3xl border border-primary/20 shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <DollarSign className="text-primary" size={40} />
          </div>

          <h1 className="text-3xl font-bold text-primary mb-4">{t.requestPage.title}</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">{t.requestPage.desc}</p>

          {/* بطاقة السعر */}
          <div className="bg-black/50 border border-primary/30 rounded-2xl p-6 mb-8">
            <p className="text-sm text-gray-400 mb-2">{t.requestPage.priceLabel}</p>
            <p className="text-4xl font-black text-white">{t.requestPage.priceValue}</p>
          </div>

          {/* قسم التواصل */}
          <div className="space-y-4">
            <p className="text-gray-300 font-medium">{t.requestPage.contactLabel}</p>
            
            <div className="text-2xl font-bold text-primary tracking-wider" dir="ltr">
              {t.requestPage.phoneNumber}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {/* زر واتساب */}
              <a 
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً، أريد شراء تطبيق من Kenton Software' : 'Hello, I want to purchase an application from Kenton Software')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)]"
              >
                <MessageCircle size={20} /> {t.requestPage.whatsappBtn}
              </a>

              {/* زر الاتصال */}
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 bg-transparent border border-primary/50 text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary/10 transition-all"
              >
                <Phone size={20} /> {t.requestPage.callBtn}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}