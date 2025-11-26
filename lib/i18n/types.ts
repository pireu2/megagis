// Dictionary type definitions for type-safe i18n

export interface NavigationDict {
  home: string;
  services: string;
  about: string;
  contact: string;
  governmentSolutions: string;
  projects: string;
  faq: string;
}

export interface HeroDict {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface ServicesOverviewDict {
  title: string;
  subtitle: string;
  cadastral: {
    title: string;
    description: string;
  };
  topography: {
    title: string;
    description: string;
  };
  gis: {
    title: string;
    description: string;
  };
  urbanPlanning: {
    title: string;
    description: string;
  };
  viewAll: string;
}

export interface ValuePropsDict {
  title: string;
  subtitle: string;
  items: {
    precision: {
      title: string;
      description: string;
    };
    compliance: {
      title: string;
      description: string;
    };
    efficiency: {
      title: string;
      description: string;
    };
    expertise: {
      title: string;
      description: string;
    };
  };
}

export interface TestimonialsDict {
  title: string;
  subtitle: string;
  items: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;
}

export interface CtaSectionDict {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface FooterDict {
  description: string;
  services: string;
  company: string;
  contact: string;
  navigation: {
    services: string;
    about: string;
    projects: string;
    contact: string;
    faq: string;
    privacy: string;
    terms: string;
  };
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  copyright: string;
}

export interface CommonDict {
  learnMore: string;
  getStarted: string;
  contactUs: string;
  readMore: string;
  seeAll: string;
  languageSwitch: string;
  openMenu: string;
  closeMenu: string;
}

export interface MetadataDict {
  home: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
  };
}

export interface Dictionary {
  navigation: NavigationDict;
  hero: HeroDict;
  servicesOverview: ServicesOverviewDict;
  valueProps: ValuePropsDict;
  testimonials: TestimonialsDict;
  ctaSection: CtaSectionDict;
  footer: FooterDict;
  common: CommonDict;
  metadata: MetadataDict;
}
