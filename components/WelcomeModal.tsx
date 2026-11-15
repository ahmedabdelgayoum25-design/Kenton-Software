"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MessageCircle, Phone, CheckCircle2, ArrowRight, Monitor, Shield, Zap, Headphones } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";
import Logo from "./Logo";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLangStore();
  const isRtl = lang === 'ar';
  const t = translations[lang];

  useEffect(() => {
    const hasSeen = localStorage.getItem('kenton_welcome_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('kenton_welcome_seen', 'true');
    setIsOpen(false);
  };

  const email = "kentonsoftware@gmail.com";
  const whatsappNumber = "250796581584";
  const phoneNumber = "+250796581584";

  const features = [
    { icon: <Monitor size={20} />, text: t.welcome.feature1 },
    { icon: <Shield size={20} />, text: t.welcome.feature2 },
    { icon: <Zap size={20} />, text: t.welcome.feature3 },
    { icon: <Headphones size={20} />, text: t.welcome.feature4 },
  ];

  const reasons = [
    t.welcome.reason1,
    t.welcome.reason2,
    t.welcome.reason3,
    t.welcome.reason4,
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] rounded-3xl border border-primary/30 shadow-2xl shadow-primary/20 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="bg-gradient-to-br from-primary/20 to-transparent p-8 text-center border-b border-primary/20">
              <div className="flex justify-center mb-4">
                <Logo size={80} />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                {t.welcome.title}
              </h1>
              <p className="text-gray-400 text-lg">
                {t.welcome.subtitle}
              </p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {t.welcome.whoWeAre}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {t.welcome.whoWeAreDesc}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {t.welcome.whatWeOffer}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="text-primary">{feature.icon}</div>
                      <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {t.welcome.whyChooseUs}
                </h2>
                <ul className="space-y-2">
                  {reasons.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-400">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center gap-2 bg-primary text-black px-4 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all text-sm"
                >
                  <Mail size={18} />
                  {t.welcome.email}
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-black px-4 py-3 rounded-xl font-bold hover:bg-green-400 transition-all text-sm"
                >
                  <MessageCircle size={18} />
                  {t.welcome.whatsapp}
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-xl font-bold hover:bg-blue-400 transition-all text-sm"
                >
                  <Phone size={18} />
                  {t.welcome.call}
                </a>
              </div>

              <button
                onClick={handleClose}
                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold transition-all border border-white/10"
              >
                {t.welcome.getStarted}
                <ArrowRight size={18} className={isRtl ? 'rotate-180' : ''} />
              </button>
            </div>

            <div className="bg-black/50 p-4 text-center border-t border-white/10">
              <p className="text-xs text-gray-500">
                {t.footer.rights}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}