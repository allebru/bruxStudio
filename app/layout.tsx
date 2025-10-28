import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://bruxstudio.it'),
  title: {
    default: 'Brux Studio | Web Agency Carpi - Sviluppo Siti Web Professionali',
    template: '%s | Brux Studio'
  },
  description: 'Brux Studio - Web Agency a Carpi (MO) di Alessandro Bruini. Sviluppo siti web professionali, e-commerce, applicazioni web innovative. 4+ anni esperienza, 50+ progetti completati.',
  keywords: ['brux studio', 'web agency carpi', 'sviluppo siti web modena', 'alessandro bruini', 'web developer carpi', 'e-commerce', 'applicazioni web', 'siti professionali', 'web agency emilia romagna', 'siti web carpi', 'sviluppo web italia'],
  authors: [{ name: 'Alessandro Bruini', url: 'https://bruxstudio.it' }],
  creator: 'Alessandro Bruini',
  publisher: 'Brux Studio',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://bruxstudio.it',
    siteName: 'Brux Studio',
    title: 'Brux Studio | Web Agency Carpi - Sviluppo Siti Web Professionali',
    description: 'Web Agency a Carpi specializzata in sviluppo siti web professionali, e-commerce e applicazioni web innovative.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Brux Studio - Web Agency Carpi',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brux Studio | Web Agency Carpi',
    description: 'Web Agency a Carpi specializzata in sviluppo siti web professionali, e-commerce e applicazioni web innovative.',
    images: ['/images/logo.png'],
    creator: '@brux_studio',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://bruxstudio.it',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': '338202CE7361FCB8951F217B7AA01171',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#030213" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Brux Studio",
              "url": "https://bruxstudio.it",
              "logo": "https://bruxstudio.it/images/logo.png",
              "description": "Web Agency specializzata in sviluppo siti web professionali a Carpi, Modena",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Carpi",
                "addressRegion": "MO",
                "postalCode": "41012",
                "addressCountry": "IT"
              },
              "founder": {
                "@type": "Person",
                "name": "Alessandro Bruini",
                "jobTitle": "Web Developer & Founder"
              },
              "sameAs": [
                "https://instagram.com/brux_studio",
                "https://facebook.com/brux Studio"
              ]
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Brux Studio",
              "url": "https://bruxstudio.it",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://bruxstudio.it/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>

        {/* Google Tag Manager */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}

        {/* Google Analytics */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
