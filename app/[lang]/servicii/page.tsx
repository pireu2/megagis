import type { Metadata } from "next";
import { getDictionary, i18n, type Locale } from "@/lib/i18n";
import { ServicesView } from "./services-view";

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
          "servicii cadastru",
          "cadastru sistematic",
          "topografie geodezie",
          "sisteme GIS",
          "registrul spatiilor verzi",
          "consultanta tehnica urbanism",
          "masuratori topografice",
          "Megagis",
        ]
      : [
          "cadastral services",
          "systematic cadastre",
          "engineering topography",
          "GIS systems",
          "green space register",
          "urban planning consulting",
          "topographical surveys",
          "Megagis",
        ];

  return {
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
    keywords,
    alternates: {
      canonical: `/${locale}/servicii`,
      languages: {
        "ro-RO": "/ro/servicii",
        "en-US": "/en/servicii",
        "x-default": "/ro/servicii",
      },
    },
    openGraph: {
      title: dict.metadata.services.title,
      description: dict.metadata.services.description,
      url: `https://megagis.ro/${locale}/servicii`,
      siteName: "Megagis",
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      images: [
        {
          url: "https://megagis.ro/icon.png",
          width: 512,
          height: 512,
          alt: "Megagis Servicii Topografie & Cadastru",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.services.title,
      description: dict.metadata.services.description,
      images: ["https://megagis.ro/icon.png"],
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  return <ServicesView lang={locale} dict={dict.servicesPage} />;
}
