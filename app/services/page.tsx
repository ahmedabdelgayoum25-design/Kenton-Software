"use client";
import { motion } from "framer-motion";
import { Monitor, FileText, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
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
  const isRtl = lang === "ar";
  const whatsappNumber = "250796581584";
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    isRtl ? "مرحباً، أريد طلب خدمة تقنية" : "Hello, I want to order a tech service"
  )}`;

  const services = [
    { icon: <Monitor size={32} />, title: t.services?.installWindows || "Windows Installation", desc: t.services?.installWindowsDesc || "Install all Windows versions with drivers.", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: <FileText size={32} />, title: t.services?.installOffice || "Microsoft Office Installation", desc: t.services?.installOfficeDesc || "Full Office suite with activation.", color: "text-orange-500", bg: "bg-orange-500/10" },
    { icon: <ShieldCheck size={32} />, title: t.services?.activation || "Windows & Office Activation", desc: t.services?.activationDesc || "Genuine and guaranteed activation.", color: "text-green-500", bg: "bg-green-500/10" },
    { icon: <CheckCircle2 size={32} />, title: t.services?.maintenance || "PC Maintenance & Optimization", desc: t.services?.maintenanceDesc || "Clean, optimize and remove viruses.", color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <BackButton />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.services?.title || "Software Services"}</h1>
          <p className="text-xl text-textMuted">{t.services?.subtitle || "We provide integrated tech solutions for your devices."}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4, delay: index * 0.1 }} 
              className="card flex flex-col items-center text-center p-8"
            >
              <div className={`w-20 h-20 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-textMain">{service.title}</h3>
              <p className="text-textMuted mb-8 flex-1">{service.desc}</p>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp w-full flex items-center justify-center gap-2"
              >
                {t.services?.orderService || "Order Service"} 
                <ArrowRight size={18} className={isRtl ? "rotate-180" : ""} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Request Box */}
        <div className="rounded-3xl border border-primary/30 bg-surface/50 p-8 md:p-10 text-center mb-20">
          <MessageCircle size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">
            {isRtl ? "تحتاج خدمة مخصصة؟" : "Need a custom service?"}
          </h3>
          <p className="text-textMuted mb-6 max-w-xl mx-auto">
            {isRtl 
              ? "اكتب لنا مباشرة عبر واتساب وسنرد عليك في أقرب وقت." 
              : "Message us directly on WhatsApp and we will reply as soon as possible."}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold"
          >
            <MessageCircle size={20} />
            {isRtl ? "تواصل معنا الآن" : "Contact us now"}
          </a>
        </div>
      </div>
    </main>
  );
}