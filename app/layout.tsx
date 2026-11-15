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
  description: "Kenton Software تقدم تطبيقات سطح مكتب وأنظمة ويب احترافية، سريعة، وآمنة.",
  keywords: ["Kenton Software", "برمجة", "تطبيقات", "أنظمة", "إدارة متاجر", "كوما", "ماتريكس", "زيبرا"],
  authors: [{ name: "Kenton Software" }],
  creator: "Kenton Software",
  // ✅ إعدادات الأيقونة (Favicon) لجميع الأجهزة
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Kenton Software | حلول برمجية متكاملة",
    description: "Kenton Software تقدم تطبيقات سطح مكتب وأنظمة ويب احترافية.",
    siteName: "Kenton Software",
    locale: "ar_AR",
    type: "website",
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