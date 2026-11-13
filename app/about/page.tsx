"use client";
import { motion } from "framer-motion";
import { ArrowRight, Pill, BookOpen, Store } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const products = [
    {
      id: "matrix",
      title: t.products.matrixTitle,
      desc: t.products.matrixDesc,
      icon: <Pill size={40} />,
      price: "150 FRw",
      href: "/products/matrix",
    },
    {
      id: "zebra",
      title: t.products.zebraTitle,
      desc: t.products.zebraDesc,
      icon: <BookOpen size={40} />,
      price: "150 FRw",
      href: "/products/zebra",
    },
    {
      id: "kuma",
      title: t.products.kumaTitle,
      desc: t.products.kumaDesc,
      icon: <Store size={40} />,
      price: "150 FRw",
      href: "/products/kuma",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-textMain">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            {t.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">{t.hero.desc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#products" className="bg-primary text-black px-8 py-3 rounded-xl font-bold shadow-glow hover:bg-opacity-90 transition-all flex items-center gap-2">
              {t.hero.btnExplore} <ArrowRight size={20} className={isRtl ? 'rotate-180' : ''} />
            </Link>
            <Link href="#contact" className="border border-primary/50 text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary/10 transition-all">
              {t.hero.btnContact}
            </Link>
          </div>
        </motion.div>
      </section>

      <section id="products" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.products.title}</h2>
            <p className="text-gray-400">{t.products.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-surface p-6 rounded-2xl border border-primary/10 hover:border-primary/50 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-400 mb-6">{product.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-primary font-black text-xl">{product.price}</span>
                  <Link href={product.href} className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    {t.products.readMore} <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}