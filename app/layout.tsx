import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/WelcomeModal";
import DirectionProvider from "@/components/DirectionProvider";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Kenton Software | حلول برمجية متكاملة",
  description: "Kenton Software تقدم تطبيقات سطح مكتب وأنظمة ويب احترافية",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-background text-textMain`}>
        <DirectionProvider>
          <WelcomeModal />
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </DirectionProvider>
      </body>
    </html>
  );
}