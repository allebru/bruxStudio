import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Clock, CheckCircle, Instagram, Facebook, Users, MessageCircle, Calendar, ExternalLink, Star } from 'lucide-react';
import { trackContact } from './SEOAnalytics';

export function ContactPage() {
  const handleEmailClick = () => {
    // Safe tracking call
    try {
      trackContact();
    } catch (error) {
      console.log('Tracking error:', error);
    }
    
    const subject = "Richiesta informazioni - Brux Studio";
    const body = `Ciao Alessandro,

sono interessato/a a un progetto web e vorrei ricevere maggiori informazioni.

Dettagli del progetto:
- Tipo di progetto: [Sito web aziendale / E-commerce / Web app / Altro]
- Budget indicativo: [Specificare se possibile]
- Tempistiche: [Quando vorresti iniziare?]
- Descrizione: [Racconta brevemente il tuo progetto]

Grazie per la tua disponibilità!

Cordiali saluti,
[Il tuo nome]`;
    
    window.location.href = `mailto:alessandro@bruxstudio.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handlePhoneClick = () => {
    // Safe tracking call
    try {
      trackContact();
    } catch (error) {
      console.log('Tracking error:', error);
    }
    window.location.href = "tel:+393703062285";
  };

  const handleWhatsAppClick = () => {
    // Safe tracking call
    try {
      trackContact();
    } catch (error) {
      console.log('Tracking error:', error);
    }
    const message = "Ciao Alessandro! Sono interessato/a a un progetto web. Possiamo parlarne?";
    window.open(`https://wa.me/393703062285?text=${encodeURIComponent(message)}`, "_blank");
  };

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Professionale",
      subtitle: "alessandro@bruxstudio.it",
      description: "Il modo migliore per descrivere il tuo progetto in dettaglio",
      action: "Scrivi una Email",
      onClick: handleEmailClick,
      highlight: true
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      subtitle: "+39 370 306 2285",
      description: "Chat rapida per consulenze immediate e domande veloci",
      action: "Apri WhatsApp",
      onClick: handleWhatsAppClick,
      highlight: true
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Chiamata Telefonica",
      subtitle: "+39 370 306 2285",
      description: "Telefonata diretta per discutere il progetto",
      action: "Chiama Ora",
      onClick: handlePhoneClick,
      highlight: false
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Sede",
      content: "Carpi (MO), Italia",
      description: "Emilia-Romagna"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Orari di Lavoro",
      content: "Lun-Ven 9:00-18:00",
      description: "Weekend su appuntamento"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Tempo di Risposta",
      content: "Entro 24 ore",
      description: "Giorni lavorativi"
    }
  ];

  const socialMedia = [
    {
      icon: <Instagram className="h-5 w-5" />,
      platform: "Instagram",
      handle: "@brux_studio",
      url: "https://instagram.com/brux_studio",
      color: "text-pink-600 hover:text-pink-700",
      description: "Progetti e behind-the-scenes"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      platform: "Facebook", 
      handle: "brux Studio",
      url: "https://facebook.com/brux-Studio",
      color: "text-blue-600 hover:text-blue-700",
      description: "Aggiornamenti e news"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Primo Contatto",
      description: "Ci scrivi o ci chiami per raccontarci la tua idea"
    },
    {
      number: "02", 
      title: "Consulenza Gratuita",
      description: "30 minuti di consulenza senza impegno per capire le tue esigenze"
    },
    {
      number: "03",
      title: "Proposta Personalizzata",
      description: "Ti inviamo un preventivo dettagliato con tempistiche e costi"
    },
    {
      number: "04",
      title: "Sviluppo del Progetto",
      description: "Iniziamo a lavorare insieme seguendo la metodologia BRUX"
    }
  ];

  const projectTypes = [
    { name: "Siti Web Aziendali", description: "Presenza digitale professionale" },
    { name: "E-commerce", description: "Negozi online performanti" },
    { name: "Web Applications", description: "Applicazioni web su misura" },
    { name: "Landing Pages", description: "Pagine di conversione efficaci" },
    { name: "Restyling", description: "Rinnovamento siti esistenti" },
    { name: "Consulenza Tecnica", description: "Supporto e ottimizzazione" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-4xl lg:text-5xl">Iniziamo a Collaborare</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hai un progetto digitale in mente? Contattami direttamente per una consulenza gratuita 
            e scopriamo insieme come trasformarlo in realtà.
          </p>
        </div>

        {/* Main Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-border ${
                method.highlight ? 'ring-2 ring-primary/20 border-primary/30' : ''
              }`}
              onClick={method.onClick}
            >
              {method.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg">
                  Consigliato
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {method.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription className="text-base font-medium">
                  {method.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  {method.description}
                </p>
                <Button 
                  className={`w-full bg-primary hover:bg-primary/90 px-4 py-3 min-w-0 ${
                    method.action === 'Apri WhatsApp' 
                      ? 'text-white hover:text-white' 
                      : 'text-primary-foreground'
                  }`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    method.onClick();
                  }}
                >
                  <span className={`whitespace-nowrap flex-1 text-center ${
                    method.action === 'Apri WhatsApp' ? 'text-white' : ''
                  }`}>
                    {method.action}
                  </span>
                  <ExternalLink className={`ml-2 h-4 w-4 flex-shrink-0 ${
                    method.action === 'Apri WhatsApp' ? 'text-white' : ''
                  }`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Informazioni di Contatto</CardTitle>
                <CardDescription>
                  Tutti i dettagli per raggiungermi facilmente.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-1">{info.title}</h3>
                      <p className="text-foreground mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Project Types */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Progetti che Realizzo</CardTitle>
                <CardDescription>
                  Specializzazioni e servizi offerti da Brux Studio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {projectTypes.map((project, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{project.name}</p>
                        <p className="text-xs text-muted-foreground">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Process */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Come Lavoriamo Insieme</CardTitle>
                <CardDescription>
                  Il processo step-by-step per il tuo progetto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Cosa Aspettarsi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Risposta entro 24 ore lavorative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Consulenza gratuita di 30 minuti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Preventivo dettagliato e personalizzato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Piano di progetto con metodologia BRUX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Supporto continuo durante tutto il progetto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Nessun impegno fino alla firma del contratto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Seguimi sui Social
                </CardTitle>
                <CardDescription>
                  Resta aggiornato sui progetti e le novità del settore.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className={`${social.color} transition-colors`}>
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{social.platform}</p>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                      <p className="text-xs text-muted-foreground">{social.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-primary text-primary-foreground border-primary">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl lg:text-3xl mb-4">Pronto a Iniziare?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Non aspettare oltre. Contattami oggi stesso per una consulenza gratuita 
                e scopri come posso aiutarti a realizzare il tuo progetto digitale.
              </p>
              <div className="flex flex-col gap-4 justify-center items-center max-w-lg mx-auto">
                <Button 
                  size="lg"
                  variant="secondary"
                  onClick={handleEmailClick}
                  className="w-full bg-white text-primary hover:bg-white/90 px-8 py-4 min-w-0"
                >
                  <Mail className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Scrivi una Email</span>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="w-full border-white text-black hover:bg-white hover:text-black px-8 py-4 min-w-0"
                >
                  <MessageCircle className="mr-3 h-5 w-5 flex-shrink-0 text-black" />
                  <span className="whitespace-nowrap text-black">Chatta su WhatsApp</span>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-6">
                Disponibile Lun-Ven 9:00-18:00 • Consulenza gratuita di 30 minuti
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}