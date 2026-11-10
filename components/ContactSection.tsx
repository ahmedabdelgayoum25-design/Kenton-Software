"use client";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
        <p className="text-gray-400 mb-12">{t.contact.desc}</p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-[#111] p-6 rounded-xl border border-white/5 flex items-center gap-4 w-full md:w-auto">
            <Phone className="text-primary" size={24} />
            <div className="text-right">
              <p className="text-xs text-gray-500">{t.contact.phone}</p>
              <p className="text-white font-semibold" dir="ltr">+250 796581584</p>
            </div>
          </div>
          <div className="bg-[#111] p-6 rounded-xl border border-white/5 flex items-center gap-4 w-full md:w-auto">
            <MapPin className="text-primary" size={24} />
            <div className="text-right">
              <p className="text-xs text-gray-500">{t.contact.location}</p>
              <p className="text-white font-semibold">{t.contact.locationValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}