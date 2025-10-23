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
    default: "BharatAI Software - Premium Digital Solutions & Software Development",
    template: "%s | BharatAI Software"
  },
  description: "Transform your ideas into powerful digital experiences with BharatAI Software. We specialize in mobile app development, web development, e-commerce solutions, blockchain development, AI solutions, and custom software development.",
  keywords: [
    "software development",
    "mobile app development",
    "web development",
    "e-commerce solutions",
    "blockchain development",
    "AI solutions",
    "custom software",
    "digital transformation",
    "React development",
    "Next.js development",
    "Node.js development",
    "Python development",
    "cloud solutions",
    "DevOps services",
    "UI/UX design",
    "API development",
    "database design",
    "progressive web apps",
    "cross-platform development",
    "enterprise software"
  ],
  authors: [{ name: "BharatAI Software Team" }],
  creator: "BharatAI Software",
  publisher: "BharatAI Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://miladosoftware.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BharatAI Software - Premium Digital Solutions & Software Development",
    description: "Transform your ideas into powerful digital experiences with cutting-edge technology solutions. Expert team delivering mobile apps, web platforms, and enterprise software.",
    url: 'https://miladosoftware.com',
    siteName: 'BharatAI Software',
    images: [
      {
        url: '/image/logo.png',
        width: 1200,
        height: 630,
        alt: 'BharatAI Software - Premium Digital Solutions',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BharatAI Software - Premium Digital Solutions",
    description: "Transform your ideas into powerful digital experiences with cutting-edge technology solutions.",
    images: ['/image/logo.png'],
    creator: '@miladosoftware',
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
  classification: 'Software Development Company',
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
              "@type": "Organization",
              "name": "BharatAI Software",
              "description": "Premium digital solutions and software development company specializing in mobile apps, web development, and enterprise software.",
              "url": "https://miladosoftware.com",
              "logo": "https://miladosoftware.com/image/logo.png",
              "image": "https://miladosoftware.com/image/logo.png",
              "telephone": "+1-555-123-4567",
              "email": "hello@miladosoftware.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Tech Street",
                "addressLocality": "Digital City",
                "addressRegion": "DC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/miladosoftware",
                "https://linkedin.com/company/miladosoftware",
                "https://github.com/miladosoftware"
              ],
              "foundingDate": "2019",
              "numberOfEmployees": "50+",
              "areaServed": "Worldwide",
              "serviceType": [
                "Mobile App Development",
                "Web Development",
                "E-commerce Solutions",
                "Blockchain Development",
                "AI Solutions",
                "Custom Software Development",
                "Digital Marketing",
                "Support & Maintenance"
              ]
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
