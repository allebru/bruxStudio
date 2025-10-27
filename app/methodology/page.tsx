import { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Metodologia - Framework Strategico BRUX',
  description: 'Metodologia BRUX: framework strategico innovativo per sviluppo web. BRIEF, RESEARCH, UNCOVER, eXECUTION - approccio partnership-based per progetti di successo.',
  keywords: ['metodologia brux', 'framework sviluppo web', 'strategia web development', 'brief research uncover execution'],
  alternates: {
    canonical: 'https://bruxstudio.it/methodology',
  },
}

export default function Methodology() {
  return (
    <>
      <Script
        id="methodology-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Metodologia BRUX - Framework Strategico",
            "description": "Il framework strategico BRUX per lo sviluppo web professionale",
            "author": {
              "@type": "Person",
              "name": "Alessandro Bruini"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Brux Studio"
            },
            "url": "https://bruxstudio.it/methodology"
          })
        }}
      />
      <Navigation />
      <main className="pt-20 sm:pt-22 md:pt-24">
        <div className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold">Metodologia BRUX</h1>
              <p className="text-xl text-muted-foreground">
                Un approccio strutturato per il successo dei progetti web
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">B.R.U.X Framework</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Brief • Research • Uncover • eXecution
                </p>
              </div>

              <div className="grid gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">1. BRIEF - Partnership Discovery</h3>
                  <p>Fase di scoperta e allineamento strategico per creare le basi di una partnership di successo.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">2. RESEARCH - Market Intelligence</h3>
                  <p>Ricerca approfondita del mercato e della concorrenza per identificare opportunità uniche.</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">3. UNCOVER - Strategic Insights</h3>
                  <p>Scoperta delle insights strategiche che guideranno lo sviluppo della soluzione.</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">4. eXECUTION - Collaborative Implementation</h3>
                  <p>Implementazione collaborativa con feedback continui e ottimizzazione basata sui dati.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
