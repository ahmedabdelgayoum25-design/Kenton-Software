"use client";
import { motion } from "framer-motion";
import { Stethoscope, BookOpen, Store, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  const products = [
    {
      id: "tomo",
      name: "ToMo System",
      desc: lang === 'ar' ? "نظام إدارة العيادات المتكامل" : "Comprehensive Clinic Management System",
      icon: <Stethoscope size={32} />,
      href: "/products/tomo",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      id: "kuma",
      name: "Kuma System",
      desc: lang === 'ar' ? "نظام إدارة المتاجر المتكامل" : "Integrated Store Management System",
      icon: <Store size={32} />,
      href: "/products/kuma",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      id: "zebra",
      name: "ZeBrA System",
      desc: lang === 'ar' ? "نظام إدارة المدارس الشامل" : "Comprehensive School Management System",
      icon: <BookOpen size={32} />,
      href: "/products/zebra",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      id: "matrix",
      name: "mAtReX System",
      desc: lang === 'ar' ? "نظام إدارة الصيدليات المتكامل" : "Integrated Pharmacy Management System",
      icon: <Store size={32} />,
      href: "/products/matrix",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">{t.products.title}</h1>
          <p className="text-xl text-gray-400">{t.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl border border-white/5 hover:border-primary/50 transition-all overflow-hidden group"
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl ${product.bg} ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
                <p className="text-gray-400 mb-6">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">150 FRw</span>
                  <Link href={product.href} className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                    {t.products.readMore} <ArrowRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}