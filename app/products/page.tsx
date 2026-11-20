"use client";
import { motion } from "framer-motion";
import { Stethoscope, BookOpen, Store, ArrowRight, Filter, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";
import { BackButton } from "@/components/BackButton";
import RequestSystemPopup from "@/components/RequestSystemPopup";

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const { lang } = useLangStore();
  
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const isRtl = lang === "ar";

  const systems = [
    { id: "tomo", name: "ToMo System", desc: t.tomoPage?.subtitle || "Comprehensive Clinic Management", icon: <Stethoscope size={32} />, href: "/products/tomo", color: "text-blue-500", bg: "bg-blue-500/10", category: "medical" },
    { id: "matrix", name: "mAtReX System", desc: t.matrixPage?.subtitle || "Integrated Pharmacy Management", icon: <Store size={32} />, href: "/products/matrix", color: "text-orange-500", bg: "bg-orange-500/10", category: "medical" },
    { id: "kuma", name: "Kuma System", desc: t.kumaPage?.subtitle || "Integrated Store Management", icon: <Store size={32} />, href: "/products/kuma", color: "text-green-500", bg: "bg-green-500/10", category: "retail" },
    { id: "zebra", name: "ZeBrA System", desc: t.zebraPage?.subtitle || "Comprehensive School Management", icon: <BookOpen size={32} />, href: "/products/zebra", color: "text-purple-500", bg: "bg-purple-500/10", category: "education" },
  ];

  const filters = [
    { id: "all", label: isRtl ? "الكل" : "All" },
    { id: "medical", label: isRtl ? "أنظمة طبية" : "Medical" },
    { id: "retail", label: isRtl ? "أنظمة محلات" : "Retail / Stores" },
    { id: "education", label: isRtl ? "أنظمة مدارس" : "Schools" },
  ];

  const filteredSystems = activeFilter === "all" ? systems : systems.filter(s => s.category === activeFilter);

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-20">
        <BackButton />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.products?.title || "Our Products & Services"}</h1>
          <p className="text-xl text-textMuted">{t.products?.subtitle || "Browse our collection of professional systems."}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeFilter === filter.id ? "bg-primary text-black" : "bg-surface border border-white/10 text-textMuted hover:border-primary/50"
              }`}
            >
              {filter.id === "all" && <Filter size={16} />}
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {filteredSystems.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="card group">
              <div className={`w-16 h-16 rounded-xl ${product.bg} ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>{product.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-textMain">{product.name}</h3>
              <p className="text-textMuted mb-6">{product.desc}</p>
              <Link href={product.href} className="btn-secondary w-full text-sm flex items-center justify-center gap-2">
                {t.products?.readMore || "Read More"} <ArrowRight size={16} className={isRtl ? "rotate-180" : ""} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ===== Custom System Request Section ===== */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface to-background p-8 md:p-12 mb-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6"><MessageCircle size={32} /></div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">{isRtl ? "ما لقيت النظام المناسب؟" : "Didn't find the right system?"}</h2>
            <p className="text-textMuted text-lg max-w-2xl mx-auto mb-8">{isRtl ? "أخبرنا بما تحتاجه بالضبط وسنقوم بتصميم نظام مخصص يناسب نشاطك التجاري." : "Tell us exactly what you need and we will design a custom system for your business."}</p>
            <button onClick={() => setIsPopupOpen(true)} className="btn-whatsapp inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-2xl">
              <MessageCircle size={22} /> {isRtl ? "اطلب نظامك الخاص الآن" : "Request Your Custom System"}
            </button>
          </div>
        </div>
      </div>

      <RequestSystemPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
  );
}