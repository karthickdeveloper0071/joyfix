import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joy Fix - Custom CRM, ERP & E-commerce Development | Import Export Software Solutions",
  description: "Joy Fix develops fully customized CRM systems, ERP solutions, e-commerce websites, invoice management & shipment tracking software using React, Java Spring, Node.js, AWS & .NET for import-export businesses in Malaysia, Singapore, UK & USA.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
  keywords: "custom CRM development, ERP software, e-commerce website development, invoice management system, shipment tracking software, import export software, React development, Java Spring, Node.js, AWS, .NET development, Malaysia software development, Singapore software company",
  authors: [{ name: "Joy Fix Software Solutions" }],
  creator: "Joy Fix",
  publisher: "Joy Fix",
  openGraph: {
    title: "Joy Fix - Custom CRM, ERP & E-commerce Development",
    description: "Professional custom software development for import-export businesses. CRM, ERP, e-commerce, invoice & shipment management systems.",
    url: "https://joyfix.com",
    siteName: "Joy Fix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy Fix - Custom Software Development",
    description: "Custom CRM, ERP & E-commerce solutions for import-export businesses",
    creator: "@joyfix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Joy Fix",
              "description": "Custom CRM, ERP & E-commerce Development Company",
              "url": "https://joyfix.com",
              "logo": "https://joyfix.com/logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 8825537674",
                "contactType": "customer service",
                "availableLanguage": ["English", "Tamil"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": ["MY", "SG", "GB", "US"]
              },
              "sameAs": [
                "https://linkedin.com/company/joyfix",
                "https://twitter.com/joyfix"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": ["India","Malaysia", "Singapore", "United Kingdom", "United States"]
              },
              "knowsAbout": [
                "Custom CRM Development",
                "ERP Software Solutions", 
                "E-commerce Website Development",
                "Invoice Management Systems",
                "Shipment Tracking Software",
                "React Development",
                "Java Spring Development",
                "Node.js Development",
                "AWS Cloud Services",
                ".NET Development"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
