import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { DirectionProvider } from "@/components/DirectionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kenton-software.vercel.app"),
  title: "Kenton Software | Integrated Software Solutions",
  description: "Kenton Software provides professional, fast, and secure desktop applications.",
  openGraph: {
    title: "Kenton Software | Integrated Software Solutions",
    description: "Kenton Software provides professional, fast, and secure desktop applications.",
    url: "https://kenton-software.vercel.app",
    siteName: "Kenton Software",
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenton Software | Integrated Software Solutions",
    description: "Kenton Software provides professional, fast, and secure desktop applications.",
  },
  icons: {
    icon: "/icon.png",
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