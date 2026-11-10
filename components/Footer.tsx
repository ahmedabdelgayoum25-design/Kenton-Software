"use client";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const t = translations[lang];

  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="text-primary" size={20} />
          <span className="text-white font-bold">Kenton Software</span>
        </div>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} {t.footer.rights}</p>
      </div>
    </footer>
  );
}