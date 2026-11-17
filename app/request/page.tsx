"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/BackButton"; // ✅

export default function RequestPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => { router.push("/"); }, 3000);
  };

  return (
    <main className="min-h-screen bg-background text-textMain pt-20">
      <div className="max-w-2xl mx-auto px-4 pt-8">
        <BackButton /> {/* ✅ زر الرجوع */}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-primary mb-4">{t.requestPage.title}</h1>
          <p className="text-textMuted mb-8 leading-relaxed">{t.requestPage.subtitle}</p>

          {status === "success" && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-500 p-4 rounded-xl mb-6">
              {t.requestPage.success}
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl mb-6">
              {t.requestPage.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-textMain">{t.requestPage.name}</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-surface border border-primary/20 text-textMain focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-textMain">{t.requestPage.email}</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-surface border border-primary/20 text-textMain focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-textMain">{t.requestPage.phone}</label>
              <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-surface border border-primary/20 text-textMain focus:outline-none focus:border-primary" dir="ltr" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-textMain">{t.requestPage.message}</label>
              <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-surface border border-primary/20 text-textMain focus:outline-none focus:border-primary resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full">
              <Send size={18} /> {t.requestPage.send}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}