"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, FileText, ShieldCheck, Download, CheckCircle2 } from "lucide-react";
import { useLangStore } from "@/store/langStore";

interface SoftwarePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SoftwarePopup({ isOpen, onClose }: SoftwarePopupProps) {
  const { lang } = useLangStore();
  const isRtl = lang === 'ar';

  const services = [
    {
      id: 1,
      title: isRtl ? "تثبيت ويندوز 7" : "Windows 7 Installation",
      desc: isRtl ? "تثبيت ويندوز 7 مع التنشيط الكامل." : "Install Windows 7 with full activation.",
      price: "15,000 FRw",
      icon: <Monitor size={32} />,
    },
    {
      id: 2,
      title: isRtl ? "تثبيت ويندوز 8 / 8.1" : "Windows 8 / 8.1 Installation",
      desc: isRtl ? "تثبيت ويندوز 8 / 8.1 مع التنشيط الكامل." : "Install Windows 8 / 8.1 with full activation.",
      price: "18,000 FRw",
      icon: <Monitor size={32} />,
    },
    {
      id: 3,
      title: isRtl ? "تثبيت ويندوز 10" : "Windows 10 Installation",
      desc: isRtl ? "تثبيت ويندوز 10 مع التنشيط الكامل." : "Install Windows 10 with full activation.",
      price: "20,000 FRw",
      icon: <Monitor size={32} />,
    },
    {
      id: 4,
      title: isRtl ? "تثبيت ويندوز 11" : "Windows 11 Installation",
      desc: isRtl ? "تثبيت ويندوز 11 مع التنشيط الكامل." : "Install Windows 11 with full activation.",
      price: "25,000 FRw",
      icon: <Monitor size={32} />,
    },
    {
      id: 5,
      title: isRtl ? "حزمة Microsoft Office (كاملة)" : "Microsoft Office (Full Package)",
      desc: isRtl ? "تثبيت Word, Excel, PowerPoint, Access مع التنشيط." : "Install Word, Excel, PowerPoint, Access with activation.",
      price: "30,000 FRw",
      icon: <FileText size={32} />,
    },
    {
      id: 6,
      title: isRtl ? "حزمة Office 365" : "Office 365 Package",
      desc: isRtl ? "تثبيت Office 365 مع التنشيط والتفعيل عبر الإنترنت." : "Install Office 365 with activation and online setup.",
      price: "40,000 FRw",
      icon: <FileText size={32} />,
    },
    {
      id: 7,
      title: isRtl ? "برامج الحماية (Antivirus)" : "Antivirus Software",
      desc: isRtl ? "تثبيت برامج الحماية مع التنشيط." : "Install antivirus software with activation.",
      price: "10,000 FRw",
      icon: <ShieldCheck size={32} />,
    },
    {
      id: 8,
      title: isRtl ? "برامج التصميم (Adobe, AutoCAD)" : "Design Software (Adobe, AutoCAD)",
      desc: isRtl ? "تثبيت برامج التصميم والهندسة مع التنشيط." : "Install design and engineering software with activation.",
      price: "35,000 FRw",
      icon: <Download size={32} />,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface rounded-3xl border border-primary/30 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
          >
            {/* زر الإغلاق */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-primary mb-2">
                {isRtl ? "خدمات السوفت وير" : "Software Services"}
              </h2>
              <p className="text-gray-400">
                {isRtl ? "اختر الخدمة التي تريدها" : "Choose the service you need"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-background p-4 rounded-2xl border border-white/10 hover:border-primary/50 transition-all flex items-start gap-4 group"
                >
                  <div className="text-primary bg-primary/10 p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-1">{service.title}</h3>
                    <p className="text-gray-400 text-xs mb-3">{service.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-black">{service.price}</span>
                      <button className="bg-primary text-black px-3 py-1 rounded-lg text-xs font-bold hover:bg-opacity-90 transition-all flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        {isRtl ? "اطلب" : "Order"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}