"use client";
import { motion } from "framer-motion";
import { useLangStore } from "@/store/langStore";
import { useEffect, useState } from "react";

export function VideoSection() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isRtl = lang === "ar";

  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-textMain">
            {isRtl ? "شاهد كيف نساعدك" : "See How We Help You"}
          </h2>
          <p className="text-xl text-textMuted">
            {isRtl ? "فيديو قصير يشرح خدماتنا وأنظمتنا." : "A short video explaining our services and systems."}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl aspect-[9/16] max-w-sm mx-auto"
        >
          {/* ✅ تم تحديث معرف الفيديو هنا */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/UwxX27J_IiQ" 
            title="Kenton Software Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-textMuted">
            {isRtl ? "هل أنت مستعد للبدء؟" : "Ready to get started?"}
          </p>
          <a href="/products" className="btn-primary inline-flex mt-4">
            {isRtl ? "استكشف منتجاتنا" : "Explore Our Products"}
          </a>
        </div>
      </div>
    </section>
  );
}