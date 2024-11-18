import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from 'react';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Fundi Mtandao - Web Development & Digital Marketing Services",
    template: "%s | Fundi Mtandao"
  },
  description: "Professional web development and digital marketing services to help your business grow online. Custom websites, SEO, and digital strategies.",
  keywords: ["web development", "digital marketing", "SEO", "web design", "Kenya", "Mombasa"],
  authors: [{ name: "David Machua" }],
  creator: "David Machua",
  publisher: "Fundi Mtandao",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fundi-mtandao.vercel.app',
    siteName: 'Fundi Mtandao',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Fundi Mtandao - Web Development & Digital Marketing Services'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Fundi-Mtandao',
    images: ['/images/twitter-image.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="./fonts/GeistVF.woff"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="./fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fundi-mtandao.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >

        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}