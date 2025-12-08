import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from 'react';
import {
  ClerkProvider
} from '@clerk/nextjs'
import { DefaultStructuredData } from "@/components/StructuredData";
import { siteConfig, generateMetadata as generateSEOMetadata } from "@/lib/seo";


const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = generateSEOMetadata({
  title: "Fundi wa Mtandao - Web Development & Digital Marketing Services in Kenya",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  url: "/",
  type: "website"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider> 
    <html lang="en">
      <head>
        {/* Preload Critical Resources */}
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS Prefetch & Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fundi-mtandao.vercel.app" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <DefaultStructuredData />
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
        <WhatsAppButton 
          phoneNumber="254707211023" 
          message="Hello! I'm interested in your services."
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
      </ClerkProvider>
  );
}