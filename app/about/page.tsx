import { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Chi Siamo - Alessandro Bruini Web Developer',
  description: 'Alessandro Bruini, founder di Brux Studio: web developer 25enne di Carpi con 4+ anni di esperienza in sviluppo web, e-commerce e applicazioni innovative.',
  keywords: ['alessandro bruini', 'brux studio founder', 'web developer carpi', 'programmatore modena'],
  alternates: {
    canonical: 'https://bruxstudio.it/about',
  },
}

export default function About() {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Chi Siamo - Brux Studio",
            "url": "https://bruxstudio.it/about",
            "mainEntity": {
              "@type": "Person",
              "name": "Alessandro Bruini",
              "jobTitle": "Web Developer & Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "Brux Studio"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Carpi",
                "addressRegion": "Modena",
                "addressCountry": "IT"
              },
              "email": "alessandro@bruxstudio.it",
              "knowsAbout": ["Web Development", "JavaScript", "React", "Node.js", "E-commerce", "SEO"]
            }
          })
        }}
      />
      <Navigation />
      <main className="pt-20 sm:pt-22 md:pt-24">
        <div className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold">Chi Siamo</h1>
              <p className="text-xl text-muted-foreground">
                La storia e l'esperienza dietro Brux Studio
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Alessandro Bruini - Founder & Lead Developer</h2>
              <p>
                Sono un programmatore informatico appassionato di tecnologia e innovazione,
                con base a Carpi (MO). Con oltre 4 anni di esperienza nello sviluppo web,
                ho fondato Brux Studio per offrire soluzioni digitali innovative e di qualità.
              </p>
              <p>
                Mi sono diplomato all'Istituto Tecnico Industriale Leonardo da Vinci,
                specializzandomi in informatica. Durante gli anni ho sviluppato competenze
                in diversi linguaggi e tecnologie, lavorando su progetti per aziende e
                pubbliche amministrazioni.
              </p>
              <h3>Esperienza</h3>
              <ul>
                <li>4+ anni di sviluppo web professionale</li>
                <li>Specializzato in React, Node.js, e sviluppo full-stack</li>
                <li>Esperienza con Microsoft Business Central, Python, C++</li>
                <li>50+ progetti completati con successo</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
