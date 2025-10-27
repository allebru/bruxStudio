import { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import { PortfolioPage } from '../components/PortfolioPage'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Portfolio - Progetti Web Innovativi',
  description: 'Portfolio Brux Studio: progetti web innovativi realizzati a Carpi. Sviluppo siti web professionali, e-commerce, applicazioni web e soluzioni digitali personalizzate.',
  keywords: ['portfolio web developer', 'progetti siti web carpi', 'brux studio portfolio', 'sviluppo web modena', 'e-commerce carpi', 'applicazioni web', 'casi studio web agency'],
  alternates: {
    canonical: 'https://bruxstudio.it/portfolio',
  },
  openGraph: {
    title: 'Portfolio - Brux Studio | Progetti Web Innovativi',
    description: 'Portfolio dei progetti web realizzati da Brux Studio a Carpi. Siti web professionali, e-commerce e applicazioni innovative.',
    url: 'https://bruxstudio.it/portfolio',
    type: 'website',
  },
}

export default function Portfolio() {
  return (
    <>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio - Brux Studio",
            "description": "Portfolio dei progetti web realizzati da Brux Studio a Carpi",
            "url": "https://bruxstudio.it/portfolio",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Brux Studio",
              "url": "https://bruxstudio.it"
            }
          })
        }}
      />
      <Navigation />
      <main className="pt-20 sm:pt-22 md:pt-24">
        <PortfolioPage />
      </main>
    </>
  )
}
