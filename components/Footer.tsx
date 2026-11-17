"use client";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { lang } = useLangStore();
  const t = translations[lang];

  return (
    <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-black text-primary">Kenton</span>
              <span className="text-2xl font-bold text-textMain">Software</span>
            </Link>
            <p className="text-textMuted max-w-sm">
              {lang === 'ar' ? "نقدم حلولاً برمجية متكاملة واحترافية لإدارة الأعمال. نركز على الجودة، السرعة، والأمان." : "We provide integrated and professional software solutions for business management."}
            </p>
          </div>
          <div>
            <h4 className="text-textMain font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-textMuted hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/products" className="text-textMuted hover:text-primary transition-colors">{t.nav.products}</Link></li>
              <li><Link href="/services" className="text-textMuted hover:text-primary transition-colors">{t.nav.services}</Link></li>
              <li><Link href="/about" className="text-textMuted hover:text-primary transition-colors">{t.nav.about}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-textMain font-bold mb-4">{t.footer.contactUs}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-textMuted">
                <Mail size={16} />
                {/* ✅ زر البريد الإلكتروني يوجه مباشرة */}
                <a href={`mailto:${t.footer.email}`} className="hover:text-primary transition-colors">{t.footer.email}</a>
              </li>
              <li className="flex items-center gap-2 text-textMuted">
                <Phone size={16} />
                <a href={`tel:${t.footer.phone}`} className="hover:text-primary transition-colors" dir="ltr">{t.footer.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-textMuted">
                <MapPin size={16} />
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-textMuted text-sm">&copy; {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}