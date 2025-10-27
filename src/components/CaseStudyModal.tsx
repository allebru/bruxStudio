import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Calendar, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: React.ReactNode;
  imageUrl?: string; // Fallback for click functionality
  technologies: string[];
  category: string;
  year: string;
  client: string;
  website: string;
}

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  const getCaseStudyDetails = (projectId: number) => {
    switch (projectId) {
      case 1:
        return {
          challenge: "Il cliente aveva bisogno di una piattaforma e-commerce completa per il lancio del suo brand di moda italiana, con gestione ordini, pagamenti e un'esperienza utente premium.",
          solution: "Abbiamo sviluppato una soluzione e-commerce su misura utilizzando React per il frontend e Node.js per il backend, integrata con Stripe per i pagamenti e PostgreSQL per la gestione dati.",
          results: [
            "150% aumento delle vendite online",
            "Tempo di caricamento sotto i 2 secondi",
            "95% customer satisfaction rate",
            "Zero downtime durante il lancio"
          ],
          timeline: "1 settimana",
          team: "1 Lead Developer, 1 UI/UX Designer",
          features: [
            "Catalogo prodotti dinamico",
            "Sistema di pagamenti integrato",
            "Dashboard amministrativa",
            "Gestione inventario automatica",
            "Sistema di recensioni",
            "Analytics avanzate"
          ]
        };
      case 2:
        return {
          challenge: "L'associazione Token Club con sede a Carpi e Giaveno necessitava di un sito web professionale e giovane come loro pur mantenendo un budget basso",
          solution: "Utilizzo di React e Typescript per creare un sito multi pagina che rispecchiasse la loro Prospettiva di Gioco, obbiettivo raggiunto",
          results: [
            "25% conversion rate",
            "500+ lead qualificati",
            "95% mobile performance score",
            "Lancio di successo"
          ],
          timeline: "2 giorni",
          team: "1 Developer",
          features: [
            "SEO Ottimizzata",
            "Sito Web Professionale",
          ]
        };
      case 3:
        return {
          challenge: "Guida turistica Sud Africana aveva bisogno di un portfolio online professionale per showcasare i progetti e attrarre nuovi clienti, con focus su SEO e performance.",
          solution: "Sito web responsivo Mobile Driven, ottimizzazione SEO avanzata e sistema di gallerie per foto panoramiche.",
          results: [
            "200% aumento visite organiche",
            "50+ nuovi contatti qualificati",
            "Posizionamento top 3 su Google",
            "Mobile-first perfect score"
          ],
          timeline: "5 giorni",
          team: "1 Full-stack Developer, 1 SEO Specialist",
          features: [
            "Portfolio progetti interattivo",
            "Blog aziendale",
            "Form contatti avanzato",
            "Ottimizzazione SEO completa",
            "Design responsive",
            "Analytics integrato"
          ]
        };
      case 4:
        return {
          challenge: "Sakura Comics & Games richiedeva un sito web Vlog dove poter pubblicare i propri contenuti",
          solution: "Sviluppo di sito web funzionale alla diffusione di pagine informative e contenuti multimediali",
          results: [
            "90% riduzione Caricamento media",
            "SEO Responsive",
            "Interfaccia user-friendly"
          ],
          timeline: "1 settimana",
          team: "1 full stack developer",
          features: [
            "Grafica super ottimizzata",
            "Tema Giappone mantenuto",
            "Facile visualizzazione dei contenuti"
          ]
        };
      case 5:
        return {
          challenge: "Termo Tech necessitava di una landing page per pubblicizzare i propri prodotti e il proprio lavoro",
          solution: "Landing page mobile driven con SEO ottimizzato per la diffusione di informazioni tecnico meccaniche",
          results: [
            "100% aumento visite organiche",
            "50+ nuovi contatti qualificati",
            "Posizionamento top 3 su Google",
            "Mobile-first perfect score"
          ],
          timeline: "1 settimana", 
          team: "1 web developer",
          features: [
            "Gestione pratiche digitali",
            "Workflow personalizzabili",
            "Sistema di notifiche",
            "Reportistica avanzata",
            "Sicurezza enterprise"
          ]
        };
      case 6:
        return {
          challenge: "Scuola di teatro necessitava di una landing page per comunicare i propri aggiornamenti e condividere foto e video dei propri spettacoli",
          solution: "Landing page moderna con React e TypeScript, animazioni Motion, ottimizzazione conversioni e integrazione analytics completa.",
          results: [
            "25% conversion rate",
            "500+ lead qualificati",
            "95% mobile performance score",
            "Lancio di successo"
          ],
          timeline: "3 giorni",
          team: "1 Frontend Developer",
          features: [
            "Design conversion-focused",
            "Animazioni interattive",
            "A/B testing integrato",
            "Analytics avanzate",
            "Form lead ottimizzati",
            "Performance excellence"
          ]
        };
      default:
        return {
          challenge: "Progetto complesso che richiedeva soluzioni innovative.",
          solution: "Approccio metodico e tecnologie all'avanguardia.",
          results: ["Risultati eccellenti", "Cliente soddisfatto"],
          timeline: "Variabile",
          team: "Team specializzato",
          features: ["Funzionalità avanzate"]
        };
    }
  };

  const details = getCaseStudyDetails(project.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base">
            Case Study Completo - {project.client} ({project.year})
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div 
            className="relative rounded-lg overflow-hidden group cursor-pointer"
            onClick={() => window.open(project.website, '_blank', 'noopener,noreferrer')}
          >
            <div className="w-full h-64 transition-transform duration-300 group-hover:scale-105">
              {React.isValidElement(project.image) ? (
                React.cloneElement(project.image as React.ReactElement<{className?: string; style?: React.CSSProperties}>, {
                  className: "w-full h-64 object-cover",
                  style: { width: '100%', height: '16rem', objectFit: 'cover' as const }
                })
              ) : (
                <ImageWithFallback
                  src={project.imageUrl || ''}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/90 px-4 py-2 rounded-lg flex items-center gap-2 text-primary">
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">Visita il sito web</span>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white/90 text-primary">
                {project.year}
              </Badge>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{details.timeline}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{details.team}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-primary" />
                  Categoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{project.category}</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">La Sfida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">{details.challenge}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">La Soluzione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">{details.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Tecnologie Utilizzate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Funzionalità Principali</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Risultati Ottenuti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {details.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              onClick={() => window.location.hash = 'contact'}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Inizia il tuo progetto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Chiudi Case Study
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}