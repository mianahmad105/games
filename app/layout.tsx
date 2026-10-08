import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { site } from "@/lib/site";
import "./globals.css";

const logoFont = Nunito({ subsets: ["latin"], weight: ["800"], variable: "--font-logo" });

export const metadata: Metadata = {
  title: { default: `${site.name} — Free HTML5 Games`, template: `%s — ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={logoFont.variable}>
      <body>
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
