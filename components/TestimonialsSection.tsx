"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, PlusCircle, X, Send } from "lucide-react";
import { useLangStore } from "@/store/langStore";
import { translations } from "@/data/translations";

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLangStore();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [hoverRating, setHoverRating] = useState(0);

  const t = translations[lang];

  useEffect(() => {
    setMounted(true);
    const savedReviews = localStorage.getItem("kenton-reviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("kenton-reviews", JSON.stringify(reviews));
    }
  }, [reviews, mounted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) {
      setStatus("error");
      return;
    }
    const newReview: Review = {
      name: form.name,
      rating: form.rating,
      text: form.text,
      date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB'),
    };
    setReviews([newReview, ...reviews]);
    setForm({ name: "", rating: 5, text: "" });
    setStatus("success");
    setTimeout(() => {
      setIsModalOpen(false);
      setStatus("idle");
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-textMain">{t.testimonials.title}</h2>
          <p className="text-xl text-textMuted mb-8">{t.testimonials.subtitle}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary inline-flex"
          >
            <PlusCircle size={20} /> {t.testimonials.addReview}
          </button>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center py-12 text-textMuted">
             <p>{t.testimonials.noReviews}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"} />
                  ))}
                </div>
                <p className="text-textMuted mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-textMain">{review.name}</h4>
                    <p className="text-sm text-textMuted">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }} 
              className="relative bg-surface border border-primary/30 rounded-3xl p-8 max-w-lg w-full shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 text-textMuted hover:text-primary bg-white/5 rounded-full transition-colors">
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-bold text-textMain mb-6 text-center">{t.testimonials.addReview}</h3>
              
              {status === "success" && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-500 p-4 rounded-xl mb-6 text-center animate-pulse">
                  {t.testimonials.success}
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl mb-6 text-center">
                  {t.testimonials.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-textMain">{t.testimonials.yourName}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-primary/20 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={lang === 'ar' ? "أدخل اسمك" : "Enter your name"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-textMain">{t.testimonials.yourRating}</label>
                  <div className="flex gap-2 justify-center bg-background/50 p-4 rounded-xl border border-primary/10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setForm({ ...form, rating: star })}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-all hover:scale-125 focus:outline-none"
                      >
                        <Star
                          size={32}
                          className={
                            star <= (hoverRating || form.rating) 
                              ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" 
                              : "text-gray-600"
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-textMain">{t.testimonials.yourReview}</label>
                  <textarea
                    rows={4}
                    required
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-primary/20 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder={lang === 'ar' ? "اكتب رأيك هنا..." : "Write your review here..."}
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  <Send size={20} /> {t.testimonials.submit}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}