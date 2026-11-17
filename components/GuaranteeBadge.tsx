"use client";
import { ShieldCheck } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";

interface GuaranteeBadgeProps {
  pageKey: "tomoPage" | "kumaPage" | "zebraPage" | "matrixPage";
}

export function GuaranteeBadge({ pageKey }: GuaranteeBadgeProps) {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];
  // @ts-ignore
  const pageData = t[pageKey] as any;

  return (
    <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-xl p-4 mt-6">
      <ShieldCheck size={32} className="text-primary shrink-0" />
      <div>
        <h4 className="font-bold text-textMain">{pageData.guaranteeTitle}</h4>
        <p className="text-sm text-textMuted">{pageData.guaranteeDesc}</p>
      </div>
    </div>
  );
}