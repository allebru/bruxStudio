import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: 'home' | 'portfolio' | 'contact' | 'about' | 'methodology') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'Chi Siamo', href: '#about' },
    { id: 'methodology', label: 'Metodologia', href: '#methodology' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'contact', label: 'Contatti', href: '#contact' }
  ] as const;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: typeof navItems[number]['id']) => {
    onPageChange(page);
    window.location.hash = page;
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-border/50' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-border/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${
            isScrolled ? 'h-16 sm:h-18 md:h-20' : 'h-20 sm:h-22 md:h-24'
          }`}>
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer group" 
              onClick={() => handleNavClick('home')}
            >
              <img 
                src="/images/logo.png" 
                alt="Brux Studio Logo" 
                className={`w-auto transition-all duration-300 ease-in-out group-hover:scale-105 ${
                  isScrolled 
                    ? 'h-12 sm:h-14 md:h-16' 
                    : 'h-16 sm:h-18 md:h-20'
                }`}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 ease-in-out group ${
                      currentPage === item.id
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground hover:text-primary hover:bg-muted/50'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {currentPage === item.id && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full transition-all duration-300"></div>
                    )}
                    <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button 
                onClick={() => handleNavClick('contact')} 
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
              >
                Inizia il tuo progetto
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2 hover:bg-muted/50 transition-all duration-300"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-border/50 bg-white/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                    currentPage === item.id
                      ? 'text-primary bg-primary/10 shadow-sm'
                      : 'text-foreground hover:text-primary hover:bg-muted/50 hover:shadow-sm'
                  }`}
                  style={{
                    animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <span className="block transition-transform duration-300 hover:translate-x-1">
                    {item.label}
                  </span>
                </button>
              ))}
              <div className="pt-4 border-t border-border/30">
                <Button 
                  onClick={() => handleNavClick('contact')} 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Inizia il tuo progetto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}