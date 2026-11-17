"use client";
import { motion } from "framer-motion";
import { Stethoscope, BookOpen, Store, ArrowRight, Laptop, Smartphone, Headphones } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";
import { BackButton } from "@/components/BackButton";

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  const systems = [
    { id: "tomo", name: "ToMo System", desc: t.tomoPage.subtitle, icon: <Stethoscope size={32} />, href: "/products/tomo", color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: "kuma", name: "Kuma System", desc: t.kumaPage.subtitle, icon: <Store size={32} />, href: "/products/kuma", color: "text-green-500", bg: "bg-green-500/10" },
    { id: "zebra", name: "ZeBrA System", desc: t.zebraPage.subtitle, icon: <BookOpen size={32} />, href: "/products/zebra", color: "text-purple-500", bg: "bg-purple-500/10" },
    { id: "matrix", name: "mAtReX System", desc: t.matrixPage.subtitle, icon: <Store size={32} />, href: "/products/matrix", color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  const accessories = [
    { id: "laptop", title: t.accessories.laptop, desc: t.accessories.laptopDesc, icon: <Laptop size={32} />, color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { id: "phone", title: t.accessories.phone, desc: t.accessories.phoneDesc, icon: <Smartphone size={32} />, color: "text-pink-500", bg: "bg-pink-500/10" },
    { id: "other", title: t.accessories.other, desc: t.accessories.otherDesc, icon: <Headphones size={32} />, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  ];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <BackButton />
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">{t.products.title}</h1>
          <p className="text-xl text-textMuted">{t.products.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {systems.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card group">
              <div className={`w-16 h-16 rounded-xl ${product.bg} ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>{product.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-textMain">{product.name}</h3>
              <p className="text-textMuted mb-6">{product.desc}</p>
              <Link href={product.href} className="btn-secondary w-full text-sm">{t.products.readMore} <ArrowRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} /></Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16 mt-20">
          <h2 className="text-4xl font-black mb-4">{t.accessories.title}</h2>
          <p className="text-xl text-textMuted">{t.accessories.subtitle}</p>
          <p className="text-lg text-textMuted mt-2 max-w-2xl mx-auto">{t.accessories.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          {accessories.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card text-center group">
              <div className={`w-20 h-20 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-textMain">{item.title}</h3>
              <p className="text-textMuted mb-6">{item.desc}</p>
              <button disabled className="btn-secondary w-full text-sm opacity-50 cursor-not-allowed">
                {t.accessories.comingSoon}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}