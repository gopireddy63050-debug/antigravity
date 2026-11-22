import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { FoodCursor } from '@/components/ui/FoodCursor';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { FloatingActions } from '@/components/ui/FloatingActions';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  referrer: 'strict-origin-when-cross-origin',
  authors: [{ name: siteConfig.brand.name, url: 'https://slvfoodcourt.com' }],
  creator: siteConfig.brand.name,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: 'https://slvfoodcourt.com',
    siteName: siteConfig.brand.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/logo/slv-logo.svg',
        width: 800,
        height: 600,
        alt: siteConfig.brand.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  icons: {
    icon: '/assets/logo/slv-logo.svg',
    shortcut: '/assets/logo/slv-logo.svg',
    apple: '/assets/logo/slv-logo.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#CB1D1D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Security and Privacy Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-slv-charcoal text-white font-sans antialiased selection:bg-slv-red selection:text-white min-h-screen flex flex-col justify-between">
        <SmoothScrollProvider>
          {/* Custom Food Cursor for desktop */}
          <FoodCursor />

          {/* Sticky Brand Navigation */}
          <Navbar />

          {/* Main Website Page Content */}
          <div className="flex-1 w-full">
            {children}
          </div>

          {/* Quick Floating Action Triggers: WhatsApp Share & Privacy Guarantee */}
          <FloatingActions />

          {/* Brand Footer */}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
