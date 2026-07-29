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
  ancpiBadge?: string;
  trustCards?: {
    ancpi: { value: string; label: string };
    projects: { value: string; label: string };
    anre: { value: string; label: string };
    pnccf?: { value: string; label: string };
    precision?: { value: string; label: string };
  };
}

export interface ServicesOverviewDict {
  badge?: string;
  title: string;
  subtitle: string;
  cadastral: {
    title: string;
    description: string;
    features: string[];
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
  consulting: {
    title: string;
    description: string;
  };
  viewAll: string;
  viewDetails?: string;
  viewFullDetails?: string;
}

export interface ValuePropsDict {
  badge?: string;
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
  phoneCard?: {
    title: string;
    hours: string;
  };
  emailCard?: {
    title: string;
    response: string;
  };
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
  serviceLinks: {
    cadastral: string;
    topography: string;
    gis: string;
    rsv: string;
    consulting: string;
    governmentSolutions: string;
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
  mobileNavSubtitle?: string;
}

export interface ServiceMetadataItem {
  title: string;
  description: string;
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
  serviceDetails?: {
    "cadastru-sistematic": ServiceMetadataItem;
    "topografie-geodezie": ServiceMetadataItem;
    "gis-cartografie": ServiceMetadataItem;
    "registrul-spatiilor-verzi": ServiceMetadataItem;
    "consultanta-tehnica": ServiceMetadataItem;
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
  };
  faq: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    description: string;
  };
  privacy?: {
    title: string;
    description: string;
  };
  terms?: {
    title: string;
    description: string;
  };
}

export interface SoftwareShowcaseDict {
  badge?: string;
  title: string;
  subtitle: string;
  tabs: {
    cadastru: {
      label: string;
      badge: string;
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
    rsv: {
      label: string;
      badge: string;
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
    gas: {
      label: string;
      badge: string;
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
  };
}

export interface HardwareEquipmentDict {
  badge?: string;
  title: string;
  subtitle: string;
  items: Array<{
    title: string;
    category: string;
    specs: string;
    description: string;
    imagePath: string;
  }>;
}

export interface ProjectsPartnersDict {
  badge?: string;
  title: string;
  subtitle: string;
  viewAll?: string;
  categories: {
    all: string;
    cadastru: string;
    rsv: string;
    utilities: string;
    infrastructure: string;
  };
  placeholderNotice: string;
  items: Array<{
    id: string;
    title: string;
    client: string;
    category: string;
    year: string;
    location: string;
    isTop?: boolean;
  }>;
}

export interface LegalPagesDict {
  terms: {
    title: string;
    lastUpdated: string;
    content: Array<{
      heading: string;
      body: string;
    }>;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    content: Array<{
      heading: string;
      body: string;
    }>;
  };
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceUseCases {
  b2gTitle: string;
  b2gItems: string[];
  b2bTitle: string;
  b2bItems: string[];
}

export interface ServiceBentoFeature {
  title: string;
  description: string;
  badge?: string;
  colSpan?: string;
}

export interface ServiceDetailItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  secondaryImage?: string;
  features: string[];
  deliverablesHeading: string;
  deliverables: string[];
  specsHeading: string;
  specs: Array<{ label: string; value: string }>;
  ctaText: string;
  heroStats?: Array<{ label: string; value: string }>;
  bentoFeatures?: ServiceBentoFeature[];
  workflowHeading?: string;
  workflow?: ServiceWorkflowStep[];
  useCasesHeading?: string;
  useCases?: ServiceUseCases;
}

export interface ServicesPageDict {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: Array<{ label: string; value: string }>;
  };
  navigation: {
    cadastral: string;
    topography: string;
    gis: string;
    rsv: string;
    consulting: string;
  };
  categories: {
    cadastral: ServiceDetailItem;
    topography: ServiceDetailItem;
    gis: ServiceDetailItem;
    rsv: ServiceDetailItem;
    consulting: ServiceDetailItem;
  };
  compatibility: {
    title: string;
    subtitle: string;
    badges: string[];
  };
  cta: {
    title: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
}

export interface ContactPageDict {
  badge: string;
  title: string;
  subtitle: string;
  stats?: {
    experience: { title: string; subtitle: string };
    projects: { title: string; subtitle: string };
    ancpi: { title: string; subtitle: string };
    response: { title: string; subtitle: string };
  };
  trustBadge: {
    title: string;
    certNumber: string;
    description: string;
  };
  details: {
    title: string;
    infoTitle?: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    hoursLabel: string;
    hoursValue: string;
    certLabel: string;
    certValue: string;
  };
  form: {
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    orgLabel: string;
    orgPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    serviceOptions: {
      cadastru: string;
      topografie: string;
      gis: string;
      rsv: string;
      consultanta: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
    newQuoteBtn: string;
    errorRequired: string;
    errorEmail: string;
  };
  map: {
    title: string;
    locationTitle: string;
    address: string;
    openInMaps: string;
  };
  teamSection: {
    badge: string;
    title: string;
    description: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  audience: string;
  takeaway?: string;
  tags?: string[];
}

export interface FaqCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  items: FaqItem[];
}

export interface FaqPageDict {
  badge: string;
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  categoriesLabel: string;
  allCategoriesTab: string;
  noResultsTitle: string;
  noResultsSubtitle: string;
  clearSearch: string;
  audienceFilter: {
    all: string;
    b2g: string;
    b2b: string;
  };
  contactCta: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
  };
  categories: FaqCategory[];
}

export interface AboutPageDict {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  profile: {
    badge: string;
    title: string;
    subtitle: string;
    description: string[];
    highlightTitle: string;
    highlightDescription: string;
    legalStatus: string;
    legalDetailsTitle: string;
    legalDetails: {
      companyNameLabel: string;
      companyName: string;
      cuiLabel: string;
      cui: string;
      regComLabel: string;
      regCom: string;
      caenLabel: string;
      caen: string;
      ancpiLabel: string;
      ancpi: string;
      addressLabel: string;
      address: string;
      phoneLabel: string;
      phone: string;
      emailLabel: string;
      email: string;
    };
  };
  certifications: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      code: string;
      name: string;
      issuer: string;
      description: string;
      highlight?: boolean;
    }>;
  };
  equipment: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      totalStations: {
        title: string;
        items: string[];
      };
      gnssGps: {
        title: string;
        items: string[];
      };
      digitalLevel: {
        title: string;
        items: string[];
      };
      software: {
        title: string;
        items: string[];
      };
      fleet: {
        title: string;
        items: string[];
      };
    };
  };
  teamGallery: {
    badge: string;
    title: string;
    subtitle: string;
    images: Array<{
      src: string;
      title: string;
      category: string;
      description: string;
    }>;
  };
}

export interface NotFoundDict {
  badge: string;
  code: string;
  title: string;
  description: string;
  coordinates?: string;
  status?: string;
  backHome: string;
  contactSupport: string;
  quickLinksTitle: string;
  servicesLink: string;
  projectsLink: string;
  aboutLink: string;
}

export interface ErrorPageDict {
  badge: string;
  code: string;
  title: string;
  description: string;
  retryButton: string;
  backHome: string;
  supportNotice: string;
  technicalDetailsTitle?: string;
}

export interface Dictionary {
  navigation: NavigationDict;
  hero: HeroDict;
  servicesOverview: ServicesOverviewDict;
  softwareShowcase: SoftwareShowcaseDict;
  hardwareEquipment: HardwareEquipmentDict;
  projectsPartners: ProjectsPartnersDict;
  valueProps: ValuePropsDict;
  testimonials: TestimonialsDict;
  ctaSection: CtaSectionDict;
  footer: FooterDict;
  common: CommonDict;
  metadata: MetadataDict;
  legal: LegalPagesDict;
  contactPage: ContactPageDict;
  servicesPage: ServicesPageDict;
  aboutPage: AboutPageDict;
  faqPage: FaqPageDict;
  projectsPage: ProjectsPageDict;
  notFound: NotFoundDict;
  errorPage: ErrorPageDict;
}


export interface ProjectsPageItem {
  id: string;
  title: string;
  client: string;
  category: string;
  categoryLabel: string;
  year: string;
  location: string;
  county: string;
  isTop?: boolean;
  scopeDetails: string;
  deliverables?: string[];
  specs?: Array<{ label: string; value: string }>;
  ancpiStatus?: string;
  beneficiaryLogoText?: string;
  logoPath?: string | null;
  logoAlt?: string | null;
}

export interface ProjectsPageDict {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    featuredPartnersTitle?: string;
  };
  filter: {
    all: string;
    cadastru: string;
    rsv: string;
    utilities: string;
    infrastructure: string;
    searchPlaceholder: string;
    noResultsTitle: string;
    noResultsSubtitle: string;
    resetSearch?: string;
  };
  modal: {
    closeBtn: string;
    clientLabel: string;
    locationLabel: string;
    yearLabel: string;
    categoryLabel: string;
    scopeTitle: string;
    deliverablesTitle: string;
  };
  items: ProjectsPageItem[];
}
