'use client'

import Link from 'next/link'
import { Navigation } from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, Target, Eye, Cog, ArrowRight, CheckCircle, Users, BarChart3, Lightbulb } from 'lucide-react'

export default function MethodologyClient() {
  const phases = [
    {
      id: "brief",
      title: "BRIEF",
      subtitle: "Partnership Discovery",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-blue-600",
      description: "La fase di scoperta e allineamento strategico dove creiamo le basi per una partnership di successo.",
      activities: [
        "Analisi obiettivi condivisi",
        "Definizione success metrics comuni",
        "Assessment readiness per partnership",
        "Alignment su vision e valori"
      ],
      deliverables: ["Brief strategico", "KPI e metriche condivise", "Partnership roadmap"],
      duration: "1-2 settimane"
    },
    {
      id: "research",
      title: "RESEARCH",
      subtitle: "Market Intelligence",
      icon: <Search className="h-8 w-8 text-white" />,
      color: "bg-green-600",
      description: "Ricerca approfondita del mercato e della concorrenza per identificare opportunità uniche.",
      activities: [
        "Competitive analysis approfondita",
        "Identificazione opportunity gaps",
        "Best practices benchmarking",
        "Trend analysis per futuro-proofing"
      ],
      deliverables: ["Market research report", "Competitive analysis", "Trend insights"],
      duration: "1-3 settimane"
    },
    {
      id: "uncover",
      title: "UNCOVER",
      subtitle: "Strategic Insights",
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      color: "bg-purple-600",
      description: "Fase di scoperta delle insights strategiche che guideranno lo sviluppo della soluzione.",
      activities: [
        "Partnership potential assessment",
        "Hidden opportunities identification",
        "Differentiation strategy development",
        "Growth pathway definition"
      ],
      deliverables: ["Strategic insights report", "Differentiation strategy", "Growth plan"],
      duration: "1-2 settimane"
    },
    {
      id: "execution",
      title: "eXECUTION",
      subtitle: "Collaborative Implementation",
      icon: <Cog className="h-8 w-8 text-white" />,
      color: "bg-orange-600",
      description: "Implementazione collaborativa con feedback continui e ottimizzazione basata sui dati.",
      activities: [
        "Agile development con feedback continui",
        "Quality assurance shared",
        "Performance monitoring real-time",
        "Optimization based su dati condivisi"
      ],
      deliverables: ["Soluzione finale", "Documentazione tecnica", "Piano di mantenimento"],
      duration: "4-12 settimane"
    }
  ]

  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Risultati Misurabili",
      description: "Ogni progetto ha KPI chiari e misurabili definiti sin dall'inizio"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Partnership Vera",
      description: "Lavoriamo insieme come partner, non come fornitori esterni"
    },
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "Trasparenza Totale",
      description: "Comunicazione costante e accesso completo al processo di sviluppo"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Data-Driven",
      description: "Decisioni basate su dati reali e metriche di performance"
    }
  ]

  const successFactors = [
    "Comunicazione continua e trasparente",
    "Feedback loops frequenti e strutturati",
    "Methodology agile e flessibile",
    "Focus su ROI e business impact",
    "Partnership mindset su entrambi i lati",
    "Commitment a lungo termine"
  ]

  return (
    <>
      <Navigation />
      <main className="pt-20 sm:pt-22 md:pt-24">
        <div className="min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Framework Strategico
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">Metodologia BRUX</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un approccio strutturato e partnership-based che garantisce il successo 
                di ogni progetto attraverso collaborazione, dati e risultati misurabili.
              </p>
            </div>

            {/* BRUX Overview */}
            <div className="mb-20">
              <Card className="border border-border bg-gradient-to-r from-primary/5 to-primary/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">B.R.U.X</CardTitle>
                  <CardDescription className="text-lg">
                    Brief • Research • Uncover • eXecution
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base leading-relaxed max-w-4xl mx-auto">
                    Il framework BRUX è stato sviluppato per massimizzare il valore di ogni partnership. 
                    Ogni fase è progettata per costruire fiducia, generare insights actionable e 
                    consegnare risultati che superano le aspettative.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Phases */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Le Quattro Fasi del Framework</h2>
              <div className="space-y-12">
                {phases.map((phase, index) => (
                  <div key={phase.id} className="relative">
                    {/* Connection Line */}
                    {index < phases.length - 1 && (
                      <div className="absolute left-8 top-24 w-0.5 h-12 bg-border hidden lg:block"></div>
                    )}
                    
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      {/* Phase Icon & Title */}
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 ${phase.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            {phase.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{phase.title}</h3>
                            <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {phase.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Phase Content */}
                      <div className="lg:col-span-9">
                        <Card className="border border-border">
                          <CardHeader>
                            <CardDescription className="text-base leading-relaxed">
                              {phase.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-sm font-bold mb-3 text-muted-foreground">Attività Principali</h4>
                                <ul className="space-y-2">
                                  {phase.activities.map((activity, actIndex) => (
                                    <li key={actIndex} className="flex items-start gap-2 text-sm">
                                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span>{activity}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-bold mb-3 text-muted-foreground">Deliverables</h4>
                                <ul className="space-y-2">
                                  {phase.deliverables.map((deliverable, delIndex) => (
                                    <li key={delIndex} className="flex items-start gap-2 text-sm">
                                      <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span>{deliverable}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Vantaggi del Framework BRUX</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border border-border text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Success Factors */}
            <section className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Fattori di Successo</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Il framework BRUX funziona grazie a questi elementi chiave che 
                    garantiscono una partnership di successo e risultati eccellenti.
                  </p>
                  <ul className="space-y-4">
                    {successFactors.map((factor, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-base">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Card className="border border-border bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-2xl">Partnership di Valore</CardTitle>
                    <CardDescription className="text-primary-foreground/80 text-base">
                      Non siamo solo un fornitore, siamo il tuo partner tecnologico per la crescita.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-sm opacity-80">Progetti di successo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">24h</div>
                        <div className="text-sm opacity-80">Tempo di risposta</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">4+</div>
                        <div className="text-sm opacity-80">Anni di esperienza</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">∞</div>
                        <div className="text-sm opacity-80">Supporto continuo</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center bg-muted/30 rounded-lg p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto a sperimentare il framework BRUX?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Iniziamo con una consulenza gratuita per capire come il nostro approccio 
                può accelerare il successo del tuo progetto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Inizia il tuo progetto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  asChild
                >
                  <Link href="/portfolio">
                    Vedi i risultati
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
