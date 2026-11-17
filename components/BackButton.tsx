"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLangStore } from "@/store/langStore";

export function BackButton() {
  const router = useRouter();
  const { lang } = useLangStore();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-textMuted hover:text-primary transition-colors mb-6"
    >
      {/* ✅ السهم يشير للخارج (يسار في الإنجليزية، يمين في العربية) */}
      <ArrowLeft size={18} className={lang === 'ar' ? '' : 'rotate-180'} />
      <span>{lang === 'ar' ? 'رجوع' : 'Back'}</span>
    </button>
  );
}