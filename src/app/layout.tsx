import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"
import Whatsapp from "@/components/Whatsapp";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
import ClientCursor from "@/components/ClientCursor";
import { SmartEngagementManager } from "@/components/ui/smart-engagement-manager";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Manprit Dev - SaaS-Focused Full-Stack Developer",
    template: "%s | Manprit Dev"
  },
  description: "Hire Manprit Kaur, a SaaS-focused full-stack developer in India. Build scalable web apps, Chrome extensions, desktop apps, and AI-powered products with React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "hire full stack developer",
    "freelance full stack developer india",
    "saaS developer india",
    "software development services",
    "mobile app development",
    "web app development",
    "chrome extension developer",
    "desktop app development",
    "ionic app developer",
    "PWA development",
    "AI integration services",
    "custom software development",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "Mohali developer",
    "Punjab software developer"
  ],
  authors: [{ name: "Manprit Kaur" }],
  creator: "Manprit Dev",
  publisher: "Manprit Dev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://manprit.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Manprit Dev - SaaS-Focused Full-Stack Developer",
    description: "Hire a full-stack developer for SaaS, web apps, desktop apps, Chrome extensions, and AI integration. Open to freelance and product collaborations.",
    url: 'https://manprit.dev',
    siteName: 'Manprit Dev',
    images: [
      {
        url: '/image/logo.png',
        width: 1200,
        height: 630,
        alt: 'Manprit Dev Portfolio',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Manprit Dev - SaaS-Focused Full-Stack Developer",
    description: "Hire Manprit Kaur for full-stack product development, SaaS engineering, and scalable web/mobile solutions.",
    images: ['/image/logo.png'],
    creator: '@manpritdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/image/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/image/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/image/logo.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/image/logo.png',
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Personal Portfolio',
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Manprit Kaur",
              "jobTitle": "Full Stack Developer",
              "description": "SaaS-focused full-stack developer with 12+ years of experience building production-ready web apps, desktop apps, Ionic apps, and Chrome extensions.",
              "url": "https://manprit.dev",
              "logo": "https://manprit.dev/image/logo.png",
              "image": "https://manprit.dev/image/logo.png",
              "telephone": "+91-8264874761",
              "email": "mnprt312@gmail.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "mnprt312@gmail.com",
                "telephone": "+91-8264874761",
                "availableLanguage": ["English", "Hindi", "Punjabi"],
                "areaServed": "Worldwide"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mohali",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/Manprit312",
                "https://www.linkedin.com/in/manprit-k-b164a01b0/"
              ],
              "knowsAbout": [
                "React.js",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Electron.js",
                "Chrome Extensions",
                "Ionic Apps",
                "Progressive Web Apps",
                "SaaS Product Development"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Development Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web App Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chrome Extension Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desktop App Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ionic App Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PWA Development" } }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${poppins.className} antialiased cursor-none bg-white text-slate-800`}
      >
        <ClientCursor />
        <SmartEngagementManager />
        {children}
        <Chat />
        <Whatsapp />
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
