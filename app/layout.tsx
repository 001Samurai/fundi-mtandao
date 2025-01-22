import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from 'react';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


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

export const metadata: Metadata = {
  title: {
    default: "Fundi wa Mtandao - Web Development & Digital Marketing Services",
    template: "%s | Fundi wa Mtandao"
  },
  description: "Professional web development and digital marketing services to help your business grow online. Custom websites, website management, e-commerce solutions, M-pesa integration, SEO & analytics, social media marketing and digital strategies.",
  keywords: ["web development", "web design", "digital marketing", "M-pesa integration", "social media marketing","social media management", "SEO", "web design", "Kenya", "Mombasa"],
  authors: [{ name: "David Machua" }],
  creator: "David Machua",
  publisher: "Fundi wa Mtandao",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fundi-wa-mtandao.co.ke',
    siteName: 'Fundi wa Mtandao',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Fundi wa Mtandao - Web Development & Digital Marketing Services'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@fundi-wa-mtandao',
    images: ['/images/twitter-image.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider> 
    <html lang="en">
      <head>
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
      </ClerkProvider>
  );
}