import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { DirectionProvider } from "@/components/DirectionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kenton-software.vercel.app"), // ✅ رابط موقعك
  title: "Kenton Software | Integrated Software Solutions",
  description: "Kenton Software provides professional, fast, and secure desktop applications.",
  openGraph: {
    title: "Kenton Software | Integrated Software Solutions",
    description: "Kenton Software provides professional, fast, and secure desktop applications.",
    url: "https://kenton-software.vercel.app",
    siteName: "Kenton Software",
    locale: "ar_AR",
    type: "website",
    // ✅ لا نحتاج لكتابة مسار الصورة هنا لأن Next.js سيجدها تلقائياً في مجلد app
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenton Software | Integrated Software Solutions",
    description: "Kenton Software provides professional, fast, and secure desktop applications.",
    // ✅ لا نحتاج لكتابة مسار الصورة هنا أيضاً
  },
  icons: {
    icon: "/icon.png", // الأيقونة الصغيرة (إذا كانت موجودة)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} antialiased`}>
        <DirectionProvider>
          {children}
        </DirectionProvider>
      </body>
    </html>
  );
}