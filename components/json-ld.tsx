import type { Locale } from "@/lib/i18n";

interface JsonLdProps {
  lang: Locale;
}

export function JsonLd({ lang }: JsonLdProps) {
  const isRo = lang === "ro";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": "https://megagis.ro/#organization",
    name: "MEGAGIS S.R.L.",
    alternateName: isRo
      ? "Megagis Topografie Digitală & Cadastru"
      : "Megagis Digital Topography & GIS",
    url: "https://megagis.ro",
    sameAs: [
      "https://www.facebook.com/megagis/?locale=ro_RO"
    ],
    logo: {
      "@type": "ImageObject",
      url: "https://megagis.ro/icon.png",
      width: 512,
      height: 512,
    },
    image: "https://megagis.ro/icon.png",
    description: isRo
      ? "Servicii profesionale de cadastru, intabulare, ridicări topografice și sisteme GIS pentru sectorul privat și instituții publice din România."
      : "Professional cadastral, land registration, topographical surveying, and GIS services for the private sector and public institutions in Romania.",
    telephone: "+40727323869",
    email: "office@megagis.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Răsăritului nr. 6",
      addressLocality: "Târgoviște",
      addressRegion: "Dâmbovița",
      postalCode: "130050",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.92543,
      longitude: 25.45666,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Romania",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isRo ? "Servicii Megagis" : "Megagis Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRo
              ? "Cadastru Sistematic (PNCCF)"
              : "Systematic Cadastre (PNCCF)",
            description: isRo
              ? "Înregistrare sistematică a imobilelor în Sistemul Integrat de Cadastru și Carte Funciară."
              : "Systematic property registration in the Integrated Cadastre and Land Registry System.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRo
              ? "Topografie Inginerească și Geodezie"
              : "Engineering Topography & Geodesy",
            description: isRo
              ? "Măsurători topografice de înaltă precizie, trasări și modelare 3D a terenului."
              : "High-precision topographical surveys, stakeouts, and 3D terrain modeling.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRo
              ? "GIS și Cartografie Digitală"
              : "GIS & Digital Cartography",
            description: isRo
              ? "Dezvoltare sisteme informatice geografice, baze de date spațiale și hărți digitale."
              : "Development of geographic information systems, spatial databases, and digital maps.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRo
              ? "Registrul Spațiilor Verzi (RSV)"
              : "Green Space Register (RSV)",
            description: isRo
              ? "Inventarierea și cartografierea spațiilor verzi pentru autorități publice locale."
              : "Inventory and mapping of green spaces for local public authorities.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRo
              ? "Consultanță Tehnică și Urbanism"
              : "Technical Consulting & Urban Planning",
            description: isRo
              ? "Consultanță de specialitate pentru documentații PUG, PUZ, PUD și avizări cadastrale."
              : "Specialized consulting for PUG, PUZ, PUD documentation and cadastral approvals.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://megagis.ro/#website",
    url: "https://megagis.ro",
    name: "Megagis",
    publisher: {
      "@id": "https://megagis.ro/#organization",
    },
    inLanguage: ["ro-RO", "en-US"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
