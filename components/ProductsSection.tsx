"use client";
import { motion } from "framer-motion";
import { Pill, BookOpen, Store, Stethoscope, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export function ProductsSection() {
  const { lang } = useLangStore();
  const t = translations[lang];

  const products = [
    { id: 1, title: t.products.tomoTitle, description: t.products.tomoDesc, icon: <Stethoscope size={28} className="text-primary" />, path: "/products/tomo" },
    { id: 2, title: t.products.kumaTitle, description: t.products.kumaDesc, icon: <Store size={28} className="text-primary" />, path: "/products/kuma" },
    { id: 3, title: t.products.zebraTitle, description: t.products.zebraDesc, icon: <BookOpen size={28} className="text-primary" />, path: "/products/zebra" },
    { id: 4, title: t.products.matrixTitle, description: t.products.matrixDesc, icon: <Pill size={28} className="text-primary" />, path: "/products/matrix" },
  ];

  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-textMain">{t.products.title}</h2>
          <p className="text-xl text-textMuted">{t.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-textMain">{product.title}</h3>
              <p className="text-textMuted mb-4">{product.description}</p>
              <Link href={product.path} className="text-primary font-medium hover:underline flex items-center justify-center gap-1">
                {t.products.readMore} <ArrowRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}