"use client";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLangStore } from "@/store/langStore";

export function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isRtl = lang === "ar";
  const whatsappNumber = "250796581584";
  const message = isRtl ? "مرحباً، أريد الاستفسار عن خدماتكم" : "Hello, I want to inquire about your services";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse"
      title={isRtl ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
    >
      <MessageCircle size={32} />
    </a>
  );
}