import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Navigation } from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Users, Target, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chi Siamo - Alessandro Bruini Web Developer',
  description: 'Alessandro Bruini, founder di Brux Studio: web developer 25enne di Carpi con 4+ anni di esperienza in sviluppo web, e-commerce e applicazioni innovative.',
  keywords: ['alessandro bruini', 'brux studio founder', 'web developer carpi', 'programmatore modena'],
  alternates: {
    canonical: 'https://bruxstudio.it/about',
  },
}

export default function About() {
  const experiences = [
    {
      title: "Programmatore Informatico",
      company: "EOS Solutions",
      location: "Carpi (Emilia-Romagna)",
      period: "Marzo 2023 – Giugno 2025",
      description: "Sviluppo e personalizzazione di software gestionali su piattaforma Microsoft Business Central. Fornisco supporto tecnico diretto ai clienti e collaboro con il team per soluzioni su misura.",
      technologies: ["Microsoft Business Central", "SQL", "C++", "Gestionale ERP"]
    },
    {
      title: "Programmatore Informatico",
      company: "SO.SEL S.p.A",
      location: "Modena (Emilia-Romagna)",
      period: "Luglio 2021 – Marzo 2023",
      description: "Sviluppatore web utilizzando il framework Web2Py e linguaggio Python. Coinvolto in progetti personalizzati per clienti pubblici e privati.",
      technologies: ["Python", "Web2Py", "JavaScript", "PostgreSQL"]
    },
    {
      title: "Sviluppatore Software",
      company: "Nexion Engineering",
      location: "Correggio (IT)",
      period: "Settembre 2020 – Aprile 2021",
      description: "Junior developer nel reparto Porting: aggiornamento di sistemi diagnostici per auto con tecniche moderne. Utilizzo di C, C++ e occasionalmente Pascal.",
      technologies: ["C", "C++", "Pascal", "Sistemi Embedded"]
    },
    {
      title: "Stagista Sviluppatore",
      company: "DIREQ",
      location: "Carpi (IT)",
      period: "Giugno 2020 – Luglio 2020",
      description: "Attività di sviluppo backend in JavaScript, Node.js, SQL e Java durante il tirocinio.",
      technologies: ["JavaScript", "Node.js", "Java", "SQL"]
    }
  ]

  const skills = [
    { category: "Frontend", technologies: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Java", "C++", "C"] },
    { category: "Database", technologies: ["SQL", "PostgreSQL", "Microsoft SQL Server"] },
    { category: "Frameworks", technologies: ["Web2Py", "Microsoft Business Central", "Express.js"] },
    { category: "Tools", technologies: ["Git", "Visual Studio", "VS Code", "Postman"] }
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Orientamento ai Risultati",
      description: "Ogni progetto è finalizzato al raggiungimento degli obiettivi del cliente, con metriche di successo chiare e misurabili."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborazione",
      description: "Lavoro in partnership con i clienti, garantendo trasparenza e comunicazione costante durante tutto il processo."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Qualità",
      description: "Utilizzo le migliori pratiche di sviluppo e tecnologie all'avanguardia per garantire soluzioni robuste e scalabili."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passione",
      description: "La tecnologia è la mia passione. Ogni progetto è un'opportunità per innovare e creare valore."
    }
  ]

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold">Chi Siamo</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                La storia, l&apos;esperienza e la passione che guidano Brux Studio
                nella creazione di soluzioni digitali innovative.
              </p>
            </div>

            {/* Alessandro Profile */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Alessandro Bruini</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Founder & Lead Developer di Brux Studio
                  </p>

                  <div className="space-y-4 text-base leading-relaxed">
                    <p>
                      Sono un programmatore informatico appassionato di tecnologia e innovazione,
                      con base a Carpi (MO). Mi sono diplomato all&apos;Istituto Tecnico Industriale
                      Leonardo da Vinci, specializzandomi in informatica.
                    </p>
                    <p>
                      Durante gli anni ho sviluppato non solo competenze tecniche solide in diversi
                      linguaggi e tecnologie, ma anche una forte predisposizione al lavoro di squadra,
                      alla comunicazione con i clienti e alla risoluzione di problemi.
                    </p>
                    <p>
                      Grazie all&apos;esperienza maturata in ambito aziendale, oggi unisco conoscenze
                      teoriche e pratiche per contribuire attivamente a progetti di sviluppo software
                      che fanno la differenza.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Età</p>
                      <p className="font-medium">25 anni</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Sede</p>
                      <p className="font-medium">Carpi (MO)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Esperienza</p>
                      <p className="font-medium">4+ anni</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Formazione</p>
                      <p className="font-medium">ITIS Informatica</p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact">Lavoriamo insieme</Link>
                </Button>
              </div>

              <div className="relative">
                <Image
                  src='/images/io.webp'
                  alt="Alessandro Bruini - Founder Brux Studio"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Experience Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Esperienza Professionale</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg">{exp.company}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-sm">
                            {exp.period}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-base leading-relaxed">{exp.description}</p>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Tecnologie utilizzate:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Competenze Tecniche</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                  <Card key={index} className="border border-border">
                    <CardHeader>
                      <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Values Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">I Nostri Valori</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="border border-border text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        {value.icon}
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Formazione</h2>
              <Card className="border border-border max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-xl">Diploma di Scuola Superiore in Informatica</CardTitle>
                  <CardDescription className="text-lg">ITIS Leonardo da Vinci, Carpi (MO)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">
                    Percorso di studi tecnico-informatico che ha fornito le basi solide per la
                    comprensione dei sistemi informatici, programmazione e tecnologie digitali.
                    Durante il corso ho sviluppato competenze pratiche e teoriche che costituiscono
                    il fondamento della mia carriera professionale.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            <div className="text-center bg-muted/30 rounded-lg p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Vuoi conoscere meglio la nostra metodologia?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scopri il framework strategico BRUX che utilizziamo per garantire
                il successo di ogni progetto.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/methodology">Scopri la Metodologia</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
