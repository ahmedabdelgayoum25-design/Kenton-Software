"use client";
import { motion } from "framer-motion";
import { Monitor, FileText, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";
import { BackButton } from "@/components/BackButton";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const whatsappNumber = "250796581584";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? "مرحباً، أريد طلب خدمة تقنية" : "Hello, I want to order a tech service")}`;

  const services = [
    { icon: <Monitor size={32} />, title: t.services.installWindows, desc: t.services.installWindowsDesc, color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: <FileText size={32} />, title: t.services.installOffice, desc: t.services.installOfficeDesc, color: "text-orange-500", bg: "bg-orange-500/10" },
    { icon: <ShieldCheck size={32} />, title: t.services.activation, desc: t.services.activationDesc, color: "text-green-500", bg: "bg-green-500/10" },
    { icon: <CheckCircle2 size={32} />, title: t.services.maintenance, desc: t.services.maintenanceDesc, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <BackButton />
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">{t.services.title}</h1>
          <p className="text-xl text-textMuted">{t.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card flex flex-col items-center text-center p-8">
              <div className={`w-20 h-20 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}>{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-textMain">{service.title}</h3>
              <p className="text-textMuted mb-8 flex-1">{service.desc}</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">{t.services.orderService} <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}