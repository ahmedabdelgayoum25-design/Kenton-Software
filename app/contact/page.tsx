"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";
import { BackButton } from "@/components/BackButton"; // ✅

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const whatsappNumber = "250796581584";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? "مرحباً، أريد الاستفسار عن خدماتكم" : "Hello, I want to inquire about your services")}`;

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <BackButton /> {/* ✅ زر الرجوع */}

        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">{t.contact.title}</h1>
          <p className="text-xl text-textMuted">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card text-center p-6">
            <Mail size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-textMain">{t.contact.email}</h3>
            <a href={`mailto:${t.footer.email}`} className="text-textMuted hover:text-primary transition-colors">{t.footer.email}</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card text-center p-6">
            <Phone size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-textMain">{t.contact.phone}</h3>
            <a href={`tel:${t.footer.phone}`} className="text-textMuted hover:text-primary transition-colors" dir="ltr">{t.footer.phone}</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card text-center p-6">
            <MapPin size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-textMain">{t.contact.address}</h3>
            <span className="text-textMuted">{t.footer.address}</span>
          </motion.div>
        </div>

        <div className="text-center pb-20">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex">
            <Send size={20} />
            {lang === 'ar' ? "تواصل عبر الواتساب" : "Contact via WhatsApp"}
          </a>
        </div>
      </div>
    </main>
  );
}