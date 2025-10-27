import { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
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
        <div className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold">Contattaci</h1>
              <p className="text-xl text-muted-foreground">
                Inizia il tuo progetto web con Brux Studio
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4">Informazioni di Contatto</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:alessandro@bruxstudio.it" className="text-primary hover:underline">
                      alessandro@bruxstudio.it
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Telefono / WhatsApp</h3>
                    <a href="tel:+393703062285" className="text-primary hover:underline">
                      +39 370 306 2285
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sede</h3>
                    <p className="text-muted-foreground">Carpi (MO), Italia</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Orari</h3>
                    <p className="text-muted-foreground">Lun-Ven 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
