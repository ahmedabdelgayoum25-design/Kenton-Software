"use client";
import { motion } from "framer-motion";
import { Pill, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";

export default function ProductsSection() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  const products = [
    { id: 1, title: t.products.matrixTitle, description: t.products.matrixDesc, icon: <Pill size={28} className="text-primary" />, path: "/products/matrix" },
    { id: 2, title: t.products.zebraTitle, description: t.products.zebraDesc, icon: <BookOpen size={28} className="text-primary" />, path: "/products/zebra" },
  ];

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t.products.title}</h2>
          <p className="text-gray-400">{t.products.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{product.description}</p>
              <Link href={product.path} className="text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                {t.products.readMore} <ArrowLeft size={16} className={lang === 'ar' ? '' : 'rotate-180'} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}