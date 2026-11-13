import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";
import DirectionProvider from "@/components/DirectionProvider"; // ✅ استيراد المكون

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Kenton Software | حلول برمجية متكاملة",
  description: "Kenton Software تقدم تطبيقات سطح مكتب وأنظمة ويب احترافية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ✅ القيم الافتراضية (سيتم تحديثها بواسطة DirectionProvider)
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-background text-textMain`}>
        <DirectionProvider>
          <WelcomePopup />
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </DirectionProvider>
      </body>
    </html>
  );
}