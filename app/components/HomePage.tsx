'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Zap, Users, ArrowRight } from 'lucide-react';

export function HomePage() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Sviluppo Web",
      description: "Siti web moderni e performanti realizzati con le tecnologie più avanzate"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Design Responsive",
      description: "Progetti ottimizzati per tutti i dispositivi, dal mobile al desktop"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Performance",
      description: "Ottimizzazione delle prestazioni per velocità e SEO eccellenti"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Consulenza",
      description: "Supporto completo dalla strategia all'implementazione"
    }
  ];

  const stats = [
    { number: "5", label: "Anni di Esperienza" },
    { number: "10+", label: "Progetti Completati" },
    { number: "100%", label: "Clienti Soddisfatti" },
    { number: "24/7", label: "Supporto Tecnico" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-muted overflow-hidden py-12 sm:py-16 lg:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="absolute top-10 right-4 sm:top-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-primary/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-accent/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold">
                  Trasformiamo le tue
                  <span className="text-primary block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">idee digitali</span>
                  in realtà
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Web agency specializzata nello sviluppo di siti web professionali e applicazioni innovative.
                  Da Carpi, serviamo clienti in tutta Italia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
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
                  className="w-full sm:w-auto hover:scale-105 transition-all duration-300"
                >
                  <Link href="/portfolio">
                    Vedi i nostri lavori
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-xl sm:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
              {/* Orbital Ring Animations */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-primary/20 rounded-full animate-spin hidden sm:block" style={{animationDuration: '20s'}}></div>
                <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border border-accent/30 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                <div className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border border-primary/10 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 lg:-top-12 lg:-right-12 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-primary/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
              <div className="absolute -top-4 -left-8 sm:-top-6 sm:-left-12 lg:-top-8 lg:-left-16 w-3 h-3 sm:w-4 sm:h-4 bg-accent/30 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-10 lg:-right-10 w-4 h-4 sm:w-5 sm:h-5 bg-primary/15 rounded-full animate-bounce" style={{animationDuration: '3.5s', animationDelay: '2s'}}></div>
              <div className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-8 lg:-bottom-12 lg:-left-12 w-2 h-2 sm:w-3 sm:h-3 bg-accent/25 rounded-full animate-bounce" style={{animationDuration: '4.5s', animationDelay: '0.5s'}}></div>

              {/* Pulsing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl sm:blur-3xl scale-125 sm:scale-150 animate-pulse" style={{animationDuration: '4s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-primary/8 rounded-full blur-xl sm:blur-2xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>

              {/* Main Logo Container */}
              <div className="relative bg-gradient-to-br from-white via-white to-accent/10 rounded-full shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 border border-border/20 backdrop-blur-sm group hover:scale-105 aspect-square flex items-center justify-center w-full">
                <div className="absolute inset-4 sm:inset-6 bg-gradient-to-br from-primary/5 to-transparent rounded-full"></div>

                <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72">
                  <Image
                    src='/logo.png'
                    alt="Brux Studio - Virtual Bear Logo"
                    fill
                    className="object-contain drop-shadow-lg sm:drop-shadow-2xl group-hover:drop-shadow-xl sm:group-hover:drop-shadow-3xl transition-all duration-500 group-hover:scale-110"
                    priority
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 256px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">I nostri servizi</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Offriamo soluzioni complete per la tua presenza digitale,
              dalla strategia alla realizzazione tecnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Pronto a iniziare il tuo progetto?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e scopri come possiamo
              aiutarti a raggiungere i tuoi obiettivi digitali.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contact">
                Richiedi una consulenza
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
