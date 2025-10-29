'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Filter, Eye, Calendar, Users, TrendingUp, Code, Palette, Database, Smartphone } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Demo E-commerce Moda Italiana",
      description: "Piattaforma e-commerce completa per brand di moda con sistema di gestione ordini, pagamenti integrati e dashboard amministrativa.",
      imageUrl: "/images/Maison_elegant.webp",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "ecommerce",
      year: "2025",
      client: "Confidenziale",
      website: "https://www.maisonelegant.bruxstudio.it"
    },
    {
      id: 2,
      title: "Demo Sito Web Associazione APS",
      description: "Sito web multi pagina per Associazione Italiana dedicata ai giochi da tavolo",
      imageUrl: "/images/tokenclub.webp",
      technologies: ["React", "Typescript", "SEO"],
      category: "website",
      year: "2025",
      client: "Token Club",
      website: "https://tokenclub.it"
    },
    {
      id: 3,
      title: "Sito Web Guida Turistica",
      description: "Portfolio professionale per guida turistica con form contatti ottimizzato SEO.",
      imageUrl: "/images/ubunye.webp",
      technologies: ["HTML5", "CSS3", "React", "SEO"],
      category: "website",
      year: "2025",
      client: "Ubunye Tours",
      website: "https://ubunyetours.co.za"
    },
    {
      id: 4,
      title: "Demo Sito Web Vlog",
      description: "Demo per Vlog a tema Giappone",
      imageUrl: "/images/sakura.webp",
      technologies: ["React", "Typescript", "SEO", "International"],
      category: "website",
      year: "2025",
      client: "Sakura Comics & Games",
      website: "https://www.sakuracomics.bruxstudio.it"
    },
    {
      id: 5,
      title: "Demo Sito Web Studio Ingegneristico",
      description: "Demo Landing Page per Studio Termoenergetico",
      imageUrl: "/images/termo.webp",
      technologies: ["React", "Figma", "Javascript", "SEO"],
      category: "website",
      year: "2025",
      client: "TermoTech",
      website: "https://www.Termotech.bruxstudio.it"
    },
    {
      id: 6,
      title: "Landing Page Scuola di Teatro",
      description: "Landing page per scuola di teatro, ottimizzata SEO",
      imageUrl: "/images/teatro.webp",
      technologies: ["React", "TypeScript", "Tailwind CSS", "SEO"],
      category: "website",
      year: "2025",
      client: "Scuola di teatro Eden",
      website: "https://www.teatroedencarpi.bruxstudio.it/"
    }
  ];

  const categories = [
    { id: 'all', label: 'Tutti i progetti', icon: <Code className="h-4 w-4" /> },
    { id: 'website', label: 'Siti Web', icon: <Palette className="h-4 w-4" /> },
    { id: 'webapp', label: 'Web App', icon: <Database className="h-4 w-4" /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <Smartphone className="h-4 w-4" /> }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'website': return <Palette className="h-5 w-5" />;
      case 'webapp': return <Database className="h-5 w-5" />;
      case 'ecommerce': return <Smartphone className="h-5 w-5" />;
      default: return <Code className="h-5 w-5" />;
    }
  };

  const getProjectStats = (projectId: number) => {
    const statsMap: Record<number, { duration: string; team: string; impact: string }> = {
      1: { duration: "1 settimana", team: "1 sviluppatore", impact: "+150% vendite" },
      2: { duration: "2 giorni", team: "1 sviluppatore", impact: "-70% tempi" },
      3: { duration: "5 giorni", team: "1 sviluppatore", impact: "+200% visite" },
      4: { duration: "1 settimana", team: "1 sviluppatore", impact: "-90% tempi diag." },
      5: { duration: "1 settimana", team: "1 sviluppatore", impact: "-80% elaborazione" },
      6: { duration: "3 giorni", team: "1 sviluppatore", impact: "25% conversioni" }
    };
    return statsMap[projectId] || { duration: "N/A", team: "N/A", impact: "N/A" };
  };

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleOpenCaseStudy = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alcuni dei progetti che abbiamo realizzato con passione e competenza.
            Ogni progetto è unico e studiato su misura per le esigenze del cliente.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Filter className="h-4 w-4" />
            Filtra per categoria:
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full flex items-center gap-2 px-4 py-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'shadow-lg scale-105'
                    : 'hover:scale-102 hover:shadow-md'
                }`}
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const stats = getProjectStats(project.id);
            return (
              <Card
                key={project.id}
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-0 shadow-lg bg-gradient-to-br from-card to-card/80"
              >
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-52 group-hover:scale-110 transition-transform duration-700">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-primary">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/95 text-primary font-medium">
                      {project.year}
                    </Badge>
                  </div>

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white text-primary hover:bg-white/90 font-medium shadow-lg"
                      onClick={() => handleOpenCaseStudy(project)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Visualizza Case Study
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="group-hover:text-primary transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Client */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">{project.client}</span>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-muted/50 rounded-lg">
                    <div className="text-center">
                      <Calendar className="h-4 w-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Durata</p>
                      <p className="text-xs font-medium">{stats.duration}</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-4 w-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Team</p>
                      <p className="text-xs font-medium">{stats.team}</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-4 w-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Impatto</p>
                      <p className="text-xs font-medium text-green-600">{stats.impact}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Stack Tecnologico:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      onClick={() => handleOpenCaseStudy(project)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Scopri il Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-muted/30 rounded-lg p-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Hai un progetto in mente?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ogni progetto inizia con un&apos;idea. Raccontaci la tua e vedremo insieme
            come trasformarla in una soluzione digitale di successo.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">
              Inizia il tuo progetto
            </Link>
          </Button>
        </div>

        {/* Case Study Modal */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
