import { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import { ContactPageContent } from '../components/ContactPageContent'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contatti - Web Agency Carpi',
  description: 'Contatta Brux Studio per il tuo progetto web. Web agency a Carpi (MO) specializzata in sviluppo siti web, e-commerce e consulenza digitale. Preventivo gratuito.',
  keywords: ['contatti brux studio', 'web agency carpi contatti', 'alessandro bruini contatti', 'preventivo sito web carpi', 'consulenza web modena'],
  alternates: {
    canonical: 'https://bruxstudio.it/contact',
  },
}

export default function Contact() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contatti - Brux Studio",
            "url": "https://bruxstudio.it/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Brux Studio",
              "email": "alessandro@bruxstudio.it",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Carpi",
                "addressRegion": "Modena",
                "addressCountry": "IT",
                "postalCode": "41012"
              }
            }
          })
        }}
      />
      <Navigation />
      <main className="pt-20 sm:pt-22 md:pt-24">
        <ContactPageContent />
      </main>
    </>
  )
}
