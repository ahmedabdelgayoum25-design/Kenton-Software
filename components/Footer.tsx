"use client";
import Link from "next/link";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
// ✅ استخدام أيقونات عامة ومتوفرة دائماً
import { Globe, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const { lang } = useLangStore();
  const t = translations[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-black text-primary">Kenton</span>
              <span className="text-2xl font-bold text-white">Software</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              {lang === 'ar' 
                ? "نقدم حلولاً برمجية متكاملة واحترافية لإدارة الأعمال. نركز على الجودة، السرعة، والأمان."
                : "We provide integrated and professional software solutions for business management. Focused on quality, speed, and security."}
            </p>
            <div className="flex gap-4 pt-2">
              {/* ✅ استخدام أيقونات بديلة آمنة */}
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><ExternalLink size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">{lang === 'ar' ? "روابط سريعة" : "Quick Links"}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-primary transition-colors">{t.nav.products}</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">{lang === 'ar' ? "تواصل معنا" : "Contact Us"}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>info@kenton.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span dir="ltr">+250 788 123 456</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>{lang === 'ar' ? "كيغالي، رواندا" : "Kigali, Rwanda"}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Kenton Software. {lang === 'ar' ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-primary transition-colors">{lang === 'ar' ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
            <Link href="#" className="hover:text-primary transition-colors">{lang === 'ar' ? "شروط الخدمة" : "Terms of Service"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}