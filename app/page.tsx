import { Metadata } from 'next'
import { Navigation } from './components/Navigation'
import { HomePage } from './components/HomePage'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Brux Studio | Web Agency Carpi - Sviluppo Siti Web Professionali',
  description: 'Brux Studio - Web Agency a Carpi (MO) di Alessandro Bruini. Sviluppo siti web professionali, e-commerce, applicazioni web innovative. 4+ anni esperienza, 50+ progetti completati.',
  alternates: {
    canonical: 'https://bruxstudio.it',
  },
  openGraph: {
    title: 'Brux Studio | Web Agency Carpi - Sviluppo Siti Web Professionali',
    description: 'Web Agency a Carpi specializzata in sviluppo siti web professionali, e-commerce e applicazioni web innovative.',
    url: 'https://bruxstudio.it',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Brux Studio",
            "image": "https://bruxstudio.it/og-image.jpg",
            "description": "Web Agency specializzata in sviluppo siti web professionali a Carpi, Modena",
            "@id": "https://bruxstudio.it",
            "url": "https://bruxstudio.it",
            "telephone": "+39-XXX-XXXXXXX",
            "email": "alessandro@bruxstudio.it",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via principale",
              "addressLocality": "Carpi",
              "addressRegion": "MO",
              "postalCode": "41012",
              "addressCountry": "IT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 44.7828,
              "longitude": 10.8834
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://instagram.com/brux_studio",
              "https://facebook.com/brux Studio"
            ],
            "founder": {
              "@type": "Person",
              "name": "Alessandro Bruini",
              "jobTitle": "Web Developer & Founder",
              "email": "alessandro@bruxstudio.it"
            },
            "areaServed": [
              "Carpi", "Modena", "Emilia-Romagna", "Italia"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servizi Web",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sviluppo Siti Web",
                    "description": "Sviluppo siti web professionali e responsive"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce",
                    "description": "Sviluppo negozi online e piattaforme e-commerce"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Applicazioni Web",
                    "description": "Sviluppo applicazioni web personalizzate"
                  }
                }
              ]
            }
          })
        }}
      />
      <Navigation />
      <main className="pt-20 sm:pt-22 md:pt-24">
        <HomePage />
      </main>
    </>
  )
}
