import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  serviceType?: string;
  serviceName?: string;
}

const SEO = ({
  title = 'RYT TechCorp — AI, Cybersecurity & Enterprise Software Solutions',
  description = 'RYT TechCorp delivers enterprise AI systems, cybersecurity solutions, cloud infrastructure, DevOps workflows, and full-stack software for modern businesses.',
  keywords = 'AI solutions, cybersecurity, DevOps, enterprise software, cloud migration, full-stack development, RYT TechCorp',
  ogImage = 'https://ryttechcorp.online/assets/logo/logo.png',
  canonical = 'https://ryttechcorp.online',
  noindex = false,
  breadcrumbs,
  serviceType,
  serviceName,
}: SEOProps) => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof document === 'undefined') return;
    
    // Ensure description is under 155 characters
    const optimizedDescription = description.length > 155 ? description.substring(0, 152) + '...' : description;

    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update description (optimized)
    updateMetaTag('description', optimizedDescription);

    // Update keywords
    updateMetaTag('keywords', keywords);

    // Update robots
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', optimizedDescription, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonical, 'property');
    updateMetaTag('og:type', 'website', 'property');

    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', optimizedDescription);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // Remove existing JSON-LD scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // WebSite Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'RYT TechCorp',
      url: 'https://ryttechcorp.online',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ryttechcorp.online/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    };

    // BreadcrumbList Schema
    let breadcrumbSchema = null;
    if (breadcrumbs && breadcrumbs.length > 0) {
      breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      };
    }

    // Service Schema (for solution pages)
    let serviceSchema = null;
    if (serviceType && serviceName) {
      serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: serviceType,
        name: serviceName,
        provider: {
          '@type': 'Organization',
          name: 'RYT TechCorp',
          url: 'https://ryttechcorp.online',
        },
        areaServed: 'Worldwide',
        description: optimizedDescription,
      };
    }

    // Add JSON-LD scripts
    const addSchema = (schema: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(websiteSchema);
    if (breadcrumbSchema) addSchema(breadcrumbSchema);
    if (serviceSchema) addSchema(serviceSchema);
  }, [title, description, keywords, ogImage, canonical, noindex, breadcrumbs, serviceType, serviceName]);

  return null;
};

export default SEO;

