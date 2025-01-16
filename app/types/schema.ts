export interface SearchAction {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  }
  
  export interface ContactPoint {
    "@type": "ContactPoint";
    email: string;
    contactType: string;
  }
  
  export interface WebsiteSchema {
    "@context": "http://schema.org";
    "@type": "WebSite";
    url: string;
    name: string;
    description: string;
    sameAs: string[];
    potentialAction: SearchAction;
  }
  
  export interface OrganizationSchema {
    "@context": "https://schema.org";
    "@type": "Organization";
    name: string;
    alternateName: string;
    url: string;
    logo: string;
    contactPoint: ContactPoint;
  }