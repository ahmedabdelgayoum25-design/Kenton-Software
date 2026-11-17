"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export function ContactSection() {
  const { lang } = useLangStore();
  const t = translations[lang];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-textMain mb-4">{t.contact.title}</h2>
        {/* ✅ تم استخدام subtitle بدلاً من desc */}
        <p className="text-textMuted mb-12">{t.contact.subtitle}</p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4 w-full md:w-auto">
            <Mail className="text-primary" size={24} />
            <a href={`mailto:${t.footer.email}`} className="text-textMuted hover:text-primary transition-colors">
              {t.footer.email}
            </a>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4 w-full md:w-auto">
            <Phone className="text-primary" size={24} />
            <a href={`tel:${t.footer.phone}`} className="text-textMuted hover:text-primary transition-colors" dir="ltr">
              {t.footer.phone}
            </a>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4 w-full md:w-auto">
            <MapPin className="text-primary" size={24} />
            <span className="text-textMuted">{t.footer.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}