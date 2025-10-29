import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  page: string;
}

export function SEOHead({ title, page }: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Get comprehensive page data
    const getPageData = () => {
      const baseData = {
        url: `https://bruxstudio.it/#${page}`,
        siteName: 'Brux Studio',
        author: 'Alessandro Bruini',
        locale: 'it_IT',
        type: 'website'
      };

      switch (page) {
        case 'portfolio':
          return {
            ...baseData,
            description: 'Portfolio Brux Studio: progetti web innovativi realizzati a Carpi. Sviluppo siti web professionali, e-commerce, applicazioni web e soluzioni digitali personalizzate.',
            keywords: 'portfolio web developer, progetti siti web carpi, brux studio portfolio, sviluppo web modena, e-commerce carpi, applicazioni web, casi studio web agency',
            type: 'website',
            structuredData: {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Portfolio - Brux Studio",
              "description": "Portfolio dei progetti web realizzati da Brux Studio a Carpi",
              "url": baseData.url,
              "isPartOf": {
                "@type": "WebSite",
                "name": "Brux Studio",
                "url": "https://bruxstudio.it"
              }
            }
          };
        
        case 'contact':
          return {
            ...baseData,
            description: 'Contatta Brux Studio per il tuo progetto web. Web agency a Carpi (MO) specializzata in sviluppo siti web, e-commerce e consulenza digitale. Preventivo gratuito.',
            keywords: 'contatti brux studio, web agency carpi contatti, alessandro bruini contatti, preventivo sito web carpi, consulenza web modena, sviluppo web carpi',
            type: 'website',
            structuredData: {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contatti - Brux Studio",
              "description": "Contatta Brux Studio per il tuo progetto web",
              "url": baseData.url,
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "Brux Studio",
                "description": "Web Agency specializzata in sviluppo siti web professionali",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Carpi",
                  "addressRegion": "Modena",
                  "addressCountry": "IT",
                  "postalCode": "41012"
                },
                "email": "alessandro@bruxstudio.it",
                "founder": {
                  "@type": "Person",
                  "name": "Alessandro Bruini",
                  "jobTitle": "Web Developer & Founder",
                  "email": "alessandro@bruxstudio.it"
                },
                "sameAs": [
                  "https://instagram.com/brux_studio",
                  "https://www.facebook.com/profile.php?id=61579972690233"
                ],
                "serviceArea": {
                  "@type": "Place",
                  "name": "Italia"
                },
                "areaServed": ["Carpi", "Modena", "Emilia-Romagna", "Italia"],
                "priceRange": "€€"
              }
            }
          };
        
        case 'about':
          return {
            ...baseData,
            description: 'Alessandro Bruini, founder di Brux Studio: web developer 25enne di Carpi con 4+ anni di esperienza in sviluppo web, e-commerce e applicazioni innovative.',
            keywords: 'alessandro bruini, brux studio founder, web developer carpi, programmatore modena, sviluppatore web emilia romagna, chi siamo brux studio',
            type: 'profile',
            structuredData: {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Chi Siamo - Brux Studio",
              "description": "Conosci Alessandro Bruini e il team di Brux Studio",
              "url": baseData.url,
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
                "birthPlace": "Carpi, Italia",
                "knowsAbout": ["Web Development", "JavaScript", "React", "Node.js", "E-commerce", "SEO"],
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "Formazione in Sviluppo Web"
                }
              }
            }
          };
        
        case 'methodology':
          return {
            ...baseData,
            description: 'Metodologia BRUX: framework strategico innovativo per sviluppo web. BRIEF, RESEARCH, UNCOVER, eXECUTION - approccio partnership-based per progetti di successo.',
            keywords: 'metodologia brux, framework sviluppo web, strategia web development, brief research uncover execution, metodologia web agency, processo sviluppo siti web',
            type: 'article',
            structuredData: {
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
              "url": baseData.url,
              "articleSection": "Web Development Methodology",
              "keywords": ["metodologia", "web development", "framework", "strategia"]
            }
          };
        
        default:
          return {
            ...baseData,
            description: 'Brux Studio - Web Agency a Carpi (MO) di Alessandro Bruini. Sviluppo siti web professionali, e-commerce, applicazioni web innovative. 4+ anni esperienza, 50+ progetti.',
            keywords: 'brux studio, web agency carpi, sviluppo siti web modena, alessandro bruini, web developer carpi, e-commerce, applicazioni web, siti professionali, web agency emilia romagna',
            type: 'website',
            structuredData: {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Brux Studio",
              "description": "Web Agency a Carpi specializzata in sviluppo siti web professionali",
              "url": "https://bruxstudio.it",
              "publisher": {
                "@type": "Organization",
                "name": "Brux Studio",
                "founder": {
                  "@type": "Person",
                  "name": "Alessandro Bruini",
                  "jobTitle": "Web Developer & Founder"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bruxstudio.it/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://instagram.com/brux_studio",
                "https://www.facebook.com/profile.php?id=61579972690233"
              ]
            }
          };
      }
    };

    const pageData = getPageData();

    // Enhanced Meta Tags
    const metaTags = [
      { name: 'description', content: pageData.description },
      { name: 'keywords', content: pageData.keywords },
      { name: 'author', content: pageData.author },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#030213' },
      { name: 'msapplication-TileColor', content: '#030213' },
      { name: 'application-name', content: 'Brux Studio' },
      { name: 'apple-mobile-web-app-title', content: 'Brux Studio' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { 'http-equiv': 'content-language', content: 'it' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
    ];

    // Create/Update Meta Tags
    metaTags.forEach(tag => {
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[http-equiv="${tag['http-equiv']}"]`;
      let metaElement = document.querySelector(selector);
      
      if (!metaElement) {
        metaElement = document.createElement('meta');
        if (tag.name) metaElement.setAttribute('name', tag.name);
        if (tag['http-equiv']) metaElement.setAttribute('http-equiv', tag['http-equiv']);
        document.head.appendChild(metaElement);
      }
      metaElement.setAttribute('content', tag.content);
    });

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: pageData.description },
      { property: 'og:type', content: pageData.type },
      { property: 'og:url', content: pageData.url },
      { property: 'og:site_name', content: pageData.siteName },
      { property: 'og:locale', content: pageData.locale },
      { property: 'og:image', content: 'https://bruxstudio.it/og-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Brux Studio - Web Agency Carpi' }
    ];

    ogTags.forEach(tag => {
      let ogElement = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogElement) {
        ogElement = document.createElement('meta');
        ogElement.setAttribute('property', tag.property);
        document.head.appendChild(ogElement);
      }
      ogElement.setAttribute('content', tag.content);
    });

    // Twitter Card Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: pageData.description },
      { name: 'twitter:image', content: 'https://bruxstudio.it/og-image.jpg' },
      { name: 'twitter:image:alt', content: 'Brux Studio - Web Agency Carpi' },
      { name: 'twitter:site', content: '@brux_studio' },
      { name: 'twitter:creator', content: '@brux_studio' }
    ];

    twitterTags.forEach(tag => {
      let twitterElement = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterElement) {
        twitterElement = document.createElement('meta');
        twitterElement.setAttribute('name', tag.name);
        document.head.appendChild(twitterElement);
      }
      twitterElement.setAttribute('content', tag.content);
    });

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageData.url);

    // Structured Data (JSON-LD)
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.remove();
    }
    
    structuredDataScript = document.createElement('script');
    structuredDataScript.setAttribute('type', 'application/ld+json');
    structuredDataScript.textContent = JSON.stringify(pageData.structuredData);
    document.head.appendChild(structuredDataScript);

    // Additional Local Business Schema for Contact Page
    if (page === 'contact') {
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Brux Studio",
        "image": "https://bruxstudio.it/og-image.jpg",
        "description": "Web Agency specializzata in sviluppo siti web professionali a Carpi, Modena",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via principale",
          "addressLocality": "Carpi",
          "addressRegion": "MO",
          "postalCode": "41012",
          "addressCountry": "IT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.7828,
          "longitude": 10.8834
        },
        "url": "https://bruxstudio.it",
        "telephone": "+39-XXX-XXXXXXX",
        "email": "alessandro@bruxstudio.it",
        "priceRange": "€€",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 44.7828,
            "longitude": 10.8834
          },
          "geoRadius": "50000"
        },
        "areaServed": [
          "Carpi", "Modena", "Emilia-Romagna", "Italia"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servizi Web",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sviluppo Siti Web",
                "description": "Sviluppo siti web professionali e responsive"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce",
                "description": "Sviluppo negozi online e piattaforme e-commerce"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Applicazioni Web",
                "description": "Sviluppo applicazioni web personalizzate"
              }
            }
          ]
        },
        "founder": {
          "@type": "Person",
          "name": "Alessandro Bruini",
          "jobTitle": "Web Developer & Founder",
          "email": "alessandro@bruxstudio.it"
        },
        "sameAs": [
          "https://instagram.com/brux_studio",
          "https://www.facebook.com/profile.php?id=61579972690233"
        ]
      };

      const localBusinessScript = document.createElement('script');
      localBusinessScript.setAttribute('type', 'application/ld+json');
      localBusinessScript.textContent = JSON.stringify(localBusinessSchema);
      document.head.appendChild(localBusinessScript);
    }

    // Set HTML attributes
    document.documentElement.setAttribute('lang', 'it');
    document.documentElement.setAttribute('dir', 'ltr');

    // Preload critical resources
    const preloadLinks = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }
    ];

    preloadLinks.forEach(link => {
      let linkElement = document.querySelector(`link[rel="${link.rel}"][href="${link.href}"]`);
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', link.rel);
        linkElement.setAttribute('href', link.href);
        if (link.crossOrigin) linkElement.setAttribute('crossorigin', link.crossOrigin);
        document.head.appendChild(linkElement);
      }
    });

  }, [title, page]);

  return null;
}