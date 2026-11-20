"use client";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Headphones, Package, ArrowRight, Sparkles } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";
import { BackButton } from "@/components/BackButton";

export default function AccessoriesPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  const isRtl = lang === "ar";

  const accessories = [
    {
      id: "laptop",
      title: isRtl ? "إكسسوارات اللابتوب" : "Laptop Accessories",
      desc: isRtl 
        ? "شواحن، حقائب، فأرات، لوحات مفاتيح، قواعد تبريد، وكل ما يحتاجه اللابتوب."
        : "Chargers, bags, mice, keyboards, cooling pads, and everything your laptop needs.",
      icon: <Laptop size={36} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/15",
      border: "border-cyan-500/20"
    },
    {
      id: "phone",
      title: isRtl ? "إكسسوارات الهواتف" : "Phone Accessories",
      desc: isRtl 
        ? "شواحن سريعة، حافظات، واقيات شاشة، سماعات أذن، وكل ما يحتاجه هاتفك."
        : "Fast chargers, cases, screen protectors, earphones, and everything for your phone.",
      icon: <Smartphone size={36} />,
      color: "text-pink-400",
      bg: "bg-pink-500/15",
      border: "border-pink-500/20"
    },
    {
      id: "other",
      title: isRtl ? "إلكترونيات أخرى" : "Other Electronics",
      desc: isRtl 
        ? "سماعات بلوتوث، ساعات ذكية، أجهزة قابلة للارتداء، ومنتجات مختارة بعناية."
        : "Bluetooth headphones, smartwatches, wearable devices, and carefully selected products.",
      icon: <Headphones size={36} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/15",
      border: "border-yellow-500/20"
    },
  ];

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-20">
        <BackButton />

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            {isRtl ? "قريباً جداً" : "Coming Very Soon"}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {isRtl ? "الإكسسوارات والإلكترونيات" : "Accessories & Electronics"}
          </h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            {isRtl 
              ? "منتجات مختارة بعناية ومستوردة مباشرة من الصين بأعلى جودة."
              : "Carefully selected products imported directly from China with high quality."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {accessories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`card group relative overflow-hidden border ${item.border}`}
            >
              <div className={`w-20 h-20 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-textMain">{item.title}</h3>
              <p className="text-textMuted mb-8 leading-relaxed">{item.desc}</p>
              
              <div className="mt-auto">
                <button 
                  disabled 
                  className="w-full py-3 rounded-xl border border-white/10 text-textMuted text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Package size={16} />
                  {isRtl ? "قريباً..." : "Coming Soon..."}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-10 text-center">
          <h3 className="text-2xl font-bold mb-3">
            {isRtl ? "هل تريد معرفة متى تتوفر المنتجات؟" : "Want to know when products are available?"}
          </h3>
          <p className="text-textMuted mb-6 max-w-lg mx-auto">
            {isRtl 
              ? "تواصل معنا عبر واتساب وسنخبرك فور توفر أي منتج."
              : "Contact us on WhatsApp and we will notify you as soon as any product is available."}
          </p>
          <a
            href={`https://wa.me/250796581584?text=${encodeURIComponent(
              isRtl ? "مرحباً، أريد معرفة متى تتوفر الإكسسوارات والإلكترونيات" : "Hello, I want to know when accessories and electronics will be available"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold"
          >
            {isRtl ? "تواصل معنا" : "Contact Us"}
            <ArrowRight size={18} className={isRtl ? "rotate-180" : ""} />
          </a>
        </div>
      </div>
    </main>
  );
}