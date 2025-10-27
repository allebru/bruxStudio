import { useEffect } from 'react';

// Define proper types for analytics
type GtagCommand = 'config' | 'event' | 'js' | 'set';
type GtagParams = Record<string, unknown>;

type FbqCommand = 'init' | 'track' | 'trackSingle' | 'trackCustom';
type FbqParams = Record<string, unknown>;

type DatalayerItem = Record<string, unknown>;

type LintrkCommand = 'track';
type LintrkParams = string | Record<string, unknown>;

interface BruxAnalytics {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackContact: () => void;
  trackPortfolio: () => void;
  trackMethodology: () => void;
  trackCTA: (ctaName: string) => void;
}

// Declare global analytics functions
declare global {
  interface Window {
    gtag?: (command: GtagCommand, ...args: (string | GtagParams)[]) => void;
    fbq?: (command: FbqCommand, ...args: (string | FbqParams)[]) => void;
    dataLayer?: DatalayerItem[];
    lintrk?: (command: LintrkCommand, params: LintrkParams) => void;
    bruxAnalytics?: BruxAnalytics;
  }
}

interface SEOAnalyticsProps {
  currentPage: string;
}

export function SEOAnalytics({ currentPage }: SEOAnalyticsProps) {
  useEffect(() => {
    // Google Analytics 4
    const initGA = () => {
      // Replace 'G-XXXXXXXXXX' with your actual GA4 measurement ID
      const GA_MEASUREMENT_ID: string = 'G-XXXXXXXXXX';
      
      // Only initialize if we have a valid GA4 ID
      if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX' || GA_MEASUREMENT_ID.includes('X')) {
        console.log('Google Analytics: Placeholder ID detected, skipping initialization');
        return;
      }
      
      // Load gtag script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);
      
      // Initialize gtag
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
          anonymize_ip: true,
          allow_google_signals: false,
          cookie_flags: 'SameSite=None;Secure',
          custom_map: {
            'custom_parameter_1': 'page_section',
            'custom_parameter_2': 'user_type'
          }
        });
      `;
      document.head.appendChild(script2);
    };

    // Google Tag Manager
    const initGTM = () => {
      // Replace 'GTM-XXXXXXX' with your actual GTM container ID
      const GTM_ID: string = 'GTM-XXXXXXX';
      
      // Only initialize if we have a valid GTM ID
      if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX' || GTM_ID.includes('X')) {
        console.log('Google Tag Manager: Placeholder ID detected, skipping initialization');
        return;
      }
      
      // GTM script
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(script);
      
      // GTM noscript fallback
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.insertBefore(noscript, document.body.firstChild);
    };

    // Facebook Pixel
    const initFacebookPixel = () => {
      // Replace 'XXXXXXXXXXXXXXXXX' with your Facebook Pixel ID
      const FB_PIXEL_ID: string = 'XXXXXXXXXXXXXXXXX';
      
      // Only initialize if we have a valid Pixel ID
      if (!FB_PIXEL_ID || FB_PIXEL_ID === 'XXXXXXXXXXXXXXXXX' || FB_PIXEL_ID.includes('X')) {
        console.log('Facebook Pixel: Placeholder ID detected, skipping initialization');
        return;
      }
      
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
        fbq('track', 'ViewContent', {
          content_category: 'Web Development',
          content_name: 'Brux Studio - ${currentPage}',
          content_type: 'website'
        });
      `;
      document.head.appendChild(script);
    };

    // Microsoft Clarity
    const initClarity = () => {
      // Replace 'XXXXXXXXXX' with your Clarity project ID
      const CLARITY_ID: string = 'XXXXXXXXXX';
      
      // Only initialize if we have a valid Clarity ID
      if (!CLARITY_ID || CLARITY_ID === 'XXXXXXXXXX' || CLARITY_ID.includes('X')) {
        console.log('Microsoft Clarity: Placeholder ID detected, skipping initialization');
        return;
      }
      
      const script = document.createElement('script');
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `;
      document.head.appendChild(script);
    };

    // Hotjar
    const initHotjar = () => {
      // Replace 'XXXXXXX' with your Hotjar site ID
      const HOTJAR_ID: string = 'XXXXXXX';
      
      // Only initialize if we have a valid Hotjar ID
      if (!HOTJAR_ID || HOTJAR_ID === 'XXXXXXX' || HOTJAR_ID.includes('X')) {
        console.log('Hotjar: Placeholder ID detected, skipping initialization');
        return;
      }
      
      const script = document.createElement('script');
      script.innerHTML = `
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
      document.head.appendChild(script);
    };

    // LinkedIn Insight Tag
    const initLinkedInInsight = () => {
      const LINKEDIN_PARTNER_ID: string = "XXXXXXX";
      
      // Only initialize if we have a valid LinkedIn Partner ID
      if (!LINKEDIN_PARTNER_ID || LINKEDIN_PARTNER_ID === 'XXXXXXX' || LINKEDIN_PARTNER_ID.includes('X')) {
        console.log('LinkedIn Insight: Placeholder ID detected, skipping initialization');
        return;
      }
      
      const script = document.createElement('script');
      script.innerHTML = `
        _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        
        (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
      `;
      document.head.appendChild(script);
    };

    // Google Search Console verification
    const addGoogleVerification = () => {
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      meta.content = 'your-google-verification-code'; // Replace with actual code
      document.head.appendChild(meta);
    };

    // Bing Webmaster Tools verification
    const addBingVerification = () => {
      const meta = document.createElement('meta');
      meta.name = 'msvalidate.01';
      meta.content = 'your-bing-verification-code'; // Replace with actual code
      document.head.appendChild(meta);
    };

    // Yandex verification
    const addYandexVerification = () => {
      const meta = document.createElement('meta');
      meta.name = 'yandex-verification';
      meta.content = 'your-yandex-verification-code'; // Replace with actual code
      document.head.appendChild(meta);
    };

    // Initialize all tracking (only in production)
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      initGA();
      initGTM();
      initFacebookPixel();
      initClarity();
      initHotjar();
      initLinkedInInsight();
      addGoogleVerification();
      addBingVerification();
      addYandexVerification();
    }

    // Track page views for SPA navigation
    const trackPageView = () => {
      // Google Analytics page view
      if (typeof window.gtag !== 'undefined') {
        try {
          window.gtag!('config', 'G-XXXXXXXXXX', {
            page_title: document.title,
            page_location: window.location.href
          });
        } catch (error) {
          console.log('Google Analytics tracking error:', error);
        }
      }

      // Facebook Pixel page view
      if (typeof window.fbq !== 'undefined') {
        try {
          window.fbq!('track', 'PageView');
          window.fbq!('track', 'ViewContent', {
            content_category: 'Web Development',
            content_name: `Brux Studio - ${currentPage}`,
            content_type: 'website'
          });
        } catch (error) {
          console.log('Facebook Pixel tracking error:', error);
        }
      }

      // LinkedIn Insight
      if (typeof window.lintrk !== 'undefined') {
        try {
          window.lintrk!('track', 'PageView');
        } catch (error) {
          console.log('LinkedIn Insight tracking error:', error);
        }
      }
    };

    trackPageView();

  }, [currentPage]);

  // Track custom events
  const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
    // Google Analytics event
    if (typeof window.gtag !== 'undefined') {
      try {
        window.gtag!('event', eventName, {
          custom_parameter_1: currentPage,
          ...parameters
        });
      } catch (error) {
        console.log('Google Analytics event tracking error:', error);
      }
    }

    // Facebook Pixel event
    if (typeof window.fbq !== 'undefined') {
      try {
        window.fbq!('track', eventName, parameters);
      } catch (error) {
        console.log('Facebook Pixel event tracking error:', error);
      }
    }

    // GTM dataLayer push
    if (typeof window.dataLayer !== 'undefined') {
      try {
        window.dataLayer!.push({
          event: eventName,
          page: currentPage,
          ...parameters
        });
      } catch (error) {
        console.log('GTM dataLayer tracking error:', error);
      }
    }
  };

  // Expose tracking functions globally
  useEffect(() => {
    window.bruxAnalytics = {
      trackEvent,
      trackContact: () => trackEvent('Contact', { event_category: 'engagement' }),
      trackPortfolio: () => trackEvent('PortfolioView', { event_category: 'engagement' }),
      trackMethodology: () => trackEvent('MethodologyView', { event_category: 'engagement' }),
      trackCTA: (ctaName: string) => trackEvent('CTAClick', {
        event_category: 'conversion',
        cta_name: ctaName
      })
    };
  }, [currentPage, trackEvent]);

  return null;
}

// Export tracking functions for use in components
export const trackContact = () => {
  try {
    if (typeof window !== 'undefined' && window.bruxAnalytics) {
      window.bruxAnalytics.trackContact();
    }
  } catch (error) {
    console.log('Track contact error:', error);
  }
};

export const trackPortfolio = () => {
  try {
    if (typeof window !== 'undefined' && window.bruxAnalytics) {
      window.bruxAnalytics.trackPortfolio();
    }
  } catch (error) {
    console.log('Track portfolio error:', error);
  }
};

export const trackCTA = (ctaName: string) => {
  try {
    if (typeof window !== 'undefined' && window.bruxAnalytics) {
      window.bruxAnalytics.trackCTA(ctaName);
    }
  } catch (error) {
    console.log('Track CTA error:', error);
  }
};