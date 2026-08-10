import type { Metadata } from "next";
import { getDictionary, i18n, type Locale } from "@/lib/i18n";
import { AboutPageClient } from "@/components/sections";

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
          "echipa Megagis",
          "despre Megagis",
          "experienta topografie",
          "expertiza cadastru",
          "topografie digitala",
          "echipamente topografice",
          "Targoviste",
        ]
      : [
          "Megagis team",
          "about Megagis",
          "surveying experience",
          "cadastral expertise",
          "digital topography",
          "surveying equipment",
        ];

  return {
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
    keywords,
    alternates: {
      canonical: `/${locale}/despre-noi`,
      languages: {
        "ro-RO": "/ro/despre-noi",
        "en-US": "/en/despre-noi",
        "de-DE": "/de/despre-noi",
        "x-default": "/ro/despre-noi",
      },
    },
    openGraph: {
      title: dict.metadata.about.title,
      description: dict.metadata.about.description,
      url: `https://megagis.ro/${locale}/despre-noi`,
      siteName: "Megagis",
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      images: [
        {
          url: "https://megagis.ro/icon.png",
          width: 512,
          height: 512,
          alt: "Despre Megagis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.about.title,
      description: dict.metadata.about.description,
      images: ["https://megagis.ro/icon.png"],
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  return <AboutPageClient dict={dict.aboutPage} />;
}
