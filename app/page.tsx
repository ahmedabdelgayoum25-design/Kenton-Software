"use client";
import { useEffect, useState } from "react";
import { WelcomeModal } from "@/components/WelcomeModal";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-textMain">
      <WelcomeModal />
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <BackButton />
        </div>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
      </div>
      <Footer />
    </main>
  );
}