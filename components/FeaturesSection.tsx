"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Headphones, Code } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  const features = [
    { icon: <Shield size={24} />, title: t.features.f1Title, desc: t.features.f1Desc },
    { icon: <Zap size={24} />, title: t.features.f2Title, desc: t.features.f2Desc },
    { icon: <Headphones size={24} />, title: t.features.f3Title, desc: t.features.f3Desc },
    { icon: <Code size={24} />, title: t.features.f4Title, desc: t.features.f4Desc },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t.features.title}</h2>
          <p className="text-gray-400">{t.features.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-[#111] p-6 rounded-xl border border-white/5">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}