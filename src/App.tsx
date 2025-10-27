import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { PortfolioPage } from './components/PortfolioPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { MethodologyPage } from './components/MethodologyPage';
import { SEOHead } from './components/SEOHead';
import { SEOAnalytics } from './components/SEOAnalytics';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'portfolio' | 'contact' | 'about' | 'methodology';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Simple client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as Page;
      if (['home', 'portfolio', 'contact', 'about', 'methodology'].includes(hash)) {
        setCurrentPage(hash);
        // Scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      case 'methodology':
        return <MethodologyPage />;
      default:
        return <HomePage />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'portfolio':
        return 'Portfolio - Brux Studio | Progetti Web Innovativi';
      case 'contact':
        return 'Contatti - Brux Studio | Web Agency Carpi';
      case 'about':
        return 'Chi Siamo - Brux Studio | Alessandro Bruini Web Developer';
      case 'methodology':
        return 'Metodologia - Brux Studio | Framework Strategico BRUX';
      default:
        return 'Brux Studio | Web Agency Carpi - Sviluppo Siti Web Professionali';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={getPageTitle()} page={currentPage} />
      <SEOAnalytics currentPage={currentPage} />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="pt-20 sm:pt-22 md:pt-24">
        {renderPage()}
      </main>
      <Toaster />
    </div>
  );
}