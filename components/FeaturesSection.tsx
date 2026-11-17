"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Headphones, Code } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

export function FeaturesSection() {
  const { lang } = useLangStore();
  const t = translations[lang];

  const features = [
    { icon: <Shield size={24} />, title: t.features.f1Title, desc: t.features.f1Desc },
    { icon: <Zap size={24} />, title: t.features.f2Title, desc: t.features.f2Desc },
    { icon: <Headphones size={24} />, title: t.features.f3Title, desc: t.features.f3Desc },
    { icon: <Code size={24} />, title: t.features.f4Title, desc: t.features.f4Desc },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-textMain mb-4">{t.features.title}</h2>
          <p className="text-textMuted">{t.features.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all"
            >
              <div className="text-primary mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-textMain">{feature.title}</h3>
              <p className="text-textMuted text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}