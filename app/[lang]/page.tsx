import type { Metadata } from "next";
import { getDictionary, i18n, type Locale } from "@/lib/i18n";
import {
  HeroSection,
  SoftwareShowcaseSection,
  ServicesOverviewSection,
  HardwareEquipmentSection,
  ProjectsPartnersSection,
  ValuePropsSection,
  CtaSection,
  SectionSeparator,
} from "@/components/sections";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  const keywords =
    locale === "ro"
      ? [
          "cadastru",
          "topografie",
          "GIS",
          "intabulare",
          "cadastru sistematic",
          "PNCCF",
          "registrul spatiilor verzi",
          "masuratori topografice",
          "geodezie",
          "Megagis",
        ]
      : [
          "cadastre",
          "topography",
          "GIS",
          "land registration",
          "systematic cadastre",
          "green space register",
          "topographical survey",
          "geodesy",
          "Megagis",
        ];

  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "ro-RO": "/ro",
        "en-US": "/en",
        "x-default": "/ro",
      },
    },
    openGraph: {
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
      url: `https://megagis.ro/${locale}`,
      siteName: "Megagis",
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      images: [
        {
          url: "https://megagis.ro/icon.png",
          width: 512,
          height: 512,
          alt: "Megagis Digital Topography & GIS Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
      images: ["https://megagis.ro/icon.png"],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSection lang={locale} dict={dict.hero} />
      <SectionSeparator />
      <SoftwareShowcaseSection lang={locale} dict={dict.softwareShowcase} />
      <SectionSeparator />
      <ServicesOverviewSection lang={locale} dict={dict.servicesOverview} />
      <SectionSeparator />
      <HardwareEquipmentSection dict={dict.hardwareEquipment} />
      <SectionSeparator />
      <ProjectsPartnersSection dict={dict.projectsPartners} />
      <SectionSeparator />
      <ValuePropsSection dict={dict.valueProps} />
      <SectionSeparator />
      <CtaSection
        lang={locale}
        dict={dict.ctaSection}
        contactInfo={dict.footer.contactInfo}
      />
    </>
  );
}
