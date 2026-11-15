import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/WelcomeModal";
import DirectionProvider from "@/components/DirectionProvider";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Kenton Software | Integrated Software Solutions",
  description: "Kenton Software provides professional, fast, and secure desktop applications.",
  keywords: ["Kenton Software", "Software", "Desktop Apps", "Management Systems"],
  authors: [{ name: "Kenton Software" }],
  creator: "Kenton Software",
  // ✅ استخدام الاسم الجديد للأيقونة لإجبار المتصفح على تحديثها
  icons: {
    icon: [
      { url: "/kenton-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/kenton-icon.svg",
    shortcut: "/kenton-icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Kenton Software | Integrated Software Solutions",
    description: "Kenton Software provides professional, fast, and secure desktop applications.",
    siteName: "Kenton Software",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenton Software",
    description: "Integrated Software Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
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