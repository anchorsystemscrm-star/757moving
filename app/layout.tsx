import type { Metadata } from "next";

import { LocalBusinessSchema } from "@/components/local-business-schema";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: siteConfig.keywords,
  category: "Home Services",
  formatDetection: {
    email: true,
    address: false,
    telephone: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="page-noise">
        <LocalBusinessSchema />
        <SiteHeader />
        <main className="min-h-screen pt-[72px] pb-24 lg:pb-0">{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}

