"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, FileText } from "lucide-react";
import { useLangStore } from "@/store/langStore";

interface RequestSystemPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestSystemPopup({ isOpen, onClose }: RequestSystemPopupProps) {
  const { lang } = useLangStore();
  const isRtl = lang === 'ar';
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const whatsappNumber = "250796581584";

  const handleSubmit = () => {
    if (!name.trim() || !description.trim()) return;

    const message = isRtl
      ? `مرحباً، أنا ${name}.\nأريد نظاماً بالمواصفات التالية:\n${description}`
      : `Hello, I am ${name}.\nI want a system with the following specifications:\n${description}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    // إعادة تعيين الحقول وإغلاق النافذة
    setName("");
    setDescription("");
    onClose();
  };

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
            className="bg-surface rounded-3xl border border-primary/30 shadow-2xl w-full max-w-lg p-6 md:p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-primary mb-2">
                {isRtl ? "اطلب نظامك الخاص" : "Request Your Custom System"}
              </h2>
              <p className="text-gray-400 text-sm">
                {isRtl ? "صف النظام الذي تريده وسنتواصل معك عبر واتساب." : "Describe the system you want and we'll contact you via WhatsApp."}
              </p>
            </div>

            <div className="space-y-5">
              {/* حقل الاسم */}
              <div>
                <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <User size={16} className="text-primary" />
                  {isRtl ? "اسمك" : "Your Name"}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isRtl ? "أدخل اسمك" : "Enter your name"}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* حقل وصف النظام */}
              <div>
                <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <FileText size={16} className="text-primary" />
                  {isRtl ? "وصف النظام المطلوب" : "System Description"}
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={isRtl ? "مثال: أريد نظام إدارة صيدلية يدعم المخزون والمبيعات والفواتير..." : "Example: I want a pharmacy management system that supports inventory, sales, and invoices..."}
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* زر الإرسال */}
              <button
                onClick={handleSubmit}
                disabled={!name.trim() || !description.trim()}
                className="w-full bg-primary text-black py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isRtl ? "إرسال الطلب عبر واتساب" : "Send via WhatsApp"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}