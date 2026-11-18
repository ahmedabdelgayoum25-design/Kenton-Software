"use client";
import { useEffect, useState } from "react";
import { WelcomeModal } from "@/components/WelcomeModal";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection"; // ✅
import { Footer } from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-textMain">
      <WelcomeModal />
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <TestimonialsSection /> {/* ✅ القسم هنا */}
      </div>
      <Footer />
    </main>
  );
}