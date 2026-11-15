"use client";
import { useLangStore } from "@/store/langStore";
import { useState, useEffect } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isRtl = lang === 'ar';
  
  const email = "kentonsoftware@gmail.com";
  const whatsappNumber = "250796581584";
  const phoneNumber = "+250796581584";

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={40} />
              <span className="text-xl font-black text-white">Kenton Software</span>
            </div>
            <p className="text-gray-400 text-sm">
              {isRtl ? "نظام إدارة متجرك بالكامل." : "Complete store management system."}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{isRtl ? "تواصل معنا" : "Contact Us"}</h3>
            <div className="space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm">
                <Mail size={16} />
                {email}
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm">
                <MessageCircle size={16} />
                {whatsappNumber}
              </a>
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm">
                <Phone size={16} />
                {phoneNumber}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{isRtl ? "روابط سريعة" : "Quick Links"}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-primary transition-colors">{isRtl ? "الرئيسية" : "Home"}</a></li>
              <li><a href="/#products" className="text-gray-400 hover:text-primary transition-colors">{isRtl ? "المنتجات" : "Products"}</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary transition-colors">{isRtl ? "من نحن" : "About Us"}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            {isRtl ? "جميع الحقوق محفوظة Kenton Software" : "All rights reserved Kenton Software"}
          </p>
        </div>
      </div>
    </footer>
  );
}